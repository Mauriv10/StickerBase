(function(){
  "use strict";
  const cache=new Map();
  const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
  function canvasOf(source,w=48,h=67,crop=null){
    const c=document.createElement("canvas"),x=c.getContext("2d",{willReadFrequently:true});
    c.width=w;c.height=h;x.fillStyle="#fff";x.fillRect(0,0,w,h);
    const sw=source.videoWidth||source.naturalWidth||source.width,sh=source.videoHeight||source.naturalHeight||source.height;
    if(!sw||!sh)return c;
    if(crop){const sx=sw*crop.x,sy=sh*crop.y,cw=sw*crop.w,ch=sh*crop.h;x.drawImage(source,sx,sy,cw,ch,0,0,w,h)}
    else x.drawImage(source,0,0,sw,sh,0,0,w,h);
    return c;
  }
  function signature(source){
    const c=canvasOf(source,48,67),x=c.getContext("2d",{willReadFrequently:true}),d=x.getImageData(0,0,c.width,c.height).data;
    const lum=new Float32Array(48*67),rgb=new Float32Array(12*17*3),hist=new Float32Array(24);
    for(let y=0;y<67;y++)for(let xx=0;xx<48;xx++){
      const i=(y*48+xx)*4,r=d[i],g=d[i+1],b=d[i+2],l=.299*r+.587*g+.114*b;lum[y*48+xx]=l/255;
      const hx=Math.min(11,Math.floor(xx/4)),hy=Math.min(16,Math.floor(y/4)),ri=(hy*12+hx)*3;rgb[ri]+=r/255/16;rgb[ri+1]+=g/255/16;rgb[ri+2]+=b/255/16;
      hist[Math.min(7,Math.floor(r/32))]++;hist[8+Math.min(7,Math.floor(g/32))]++;hist[16+Math.min(7,Math.floor(b/32))]++;
    }
    const edge=new Uint8Array(47*67);for(let y=0;y<67;y++)for(let xx=0;xx<47;xx++)edge[y*47+xx]=lum[y*48+xx+1]>lum[y*48+xx]?1:0;
    let hs=0;for(const v of hist)hs+=v;for(let i=0;i<hist.length;i++)hist[i]/=hs||1;
    // Artwork dominates visual identity; exclude top text strip and lower rules box.
    const art=canvasOf(source,40,30,{x:.06,y:.16,w:.88,h:.45}),ax=art.getContext("2d",{willReadFrequently:true}),ad=ax.getImageData(0,0,40,30).data,artLum=new Float32Array(1200);
    for(let i=0,j=0;i<ad.length;i+=4,j++)artLum[j]=(.299*ad[i]+.587*ad[i+1]+.114*ad[i+2])/255;
    const artEdge=new Uint8Array(39*30);for(let y=0;y<30;y++)for(let xx=0;xx<39;xx++)artEdge[y*39+xx]=artLum[y*40+xx+1]>artLum[y*40+xx]?1:0;
    return {rgb,hist,edge,artEdge};
  }
  function bitSim(a,b){if(!a||!b||a.length!==b.length)return 0;let same=0;for(let i=0;i<a.length;i++)if(a[i]===b[i])same++;return same/a.length}
  function vecSim(a,b){if(!a||!b||a.length!==b.length)return 0;let dot=0,aa=0,bb=0;for(let i=0;i<a.length;i++){dot+=a[i]*b[i];aa+=a[i]*a[i];bb+=b[i]*b[i]}return aa&&bb?dot/Math.sqrt(aa*bb):0}
  function histSim(a,b){if(!a||!b||a.length!==b.length)return 0;let d=0;for(let i=0;i<a.length;i++)d+=Math.abs(a[i]-b[i]);return clamp(1-d/2)}
  function compare(a,b){return clamp(bitSim(a.artEdge,b.artEdge)*.48+bitSim(a.edge,b.edge)*.18+vecSim(a.rgb,b.rgb)*.24+histSim(a.hist,b.hist)*.10)}
  async function imageBitmap(url){const r=await fetch(url,{mode:"cors",cache:"force-cache"});if(!r.ok)throw new Error("image "+r.status);const blob=await r.blob();return createImageBitmap(blob)}
  async function referenceSignature(key,url){if(cache.has(key))return cache.get(key);const p=(async()=>{const bmp=await imageBitmap(url);try{return signature(bmp)}finally{bmp.close?.()}})().catch(()=>null);cache.set(key,p);return p}
  async function rank(frame,cards,imageUrl,{limit=10}={}){
    const live=signature(frame),subset=(cards||[]).slice(0,limit),rows=await Promise.all(subset.map(async card=>{
      const url=imageUrl(card);if(!url)return {card,visual:0};const ref=await referenceSignature(card.id||url,url);return {card,visual:ref?compare(live,ref):0};
    }));
    return rows.sort((a,b)=>b.visual-a.visual);
  }
  window.StickerBasePokemonVisual={version:"2.0",signature,compare,rank,clearCache(){cache.clear()}};
})();
