const APP_VERSION=globalThis.WC26_CONFIG?.version||"704.11.3";
const DATA_SCHEMA_VERSION=2;
const DATA_REVISION="2026-07-17-collections-v70111";
const MASTER_SEED_KEY="world-cup-2026-master-seed-revision";
const PROJECTS_KEY="world-cup-2026-projects-v600";
const ACTIVE_PROJECT_KEY="world-cup-2026-active-project-v600";


const COLLECTION_DEFINITIONS={
  "world-cup-2026":{label:"WORLD CUP 2026",subtitle:"Mi colección",icon:"26",theme:"worldcup"},
  "liga-este-2026-27":{label:"LIGA ESTE 2026/27",subtitle:"Panini · LaLiga EA Sports",icon:"LE",theme:"ligaeste"},
  "megacracks-2026-27":{label:"MEGACRACKS 2026/27",subtitle:"25.º aniversario",icon:"MC",theme:"megacracks"}
};

const LIGA_ESTE_TEAMS={
 "Deportivo Alavés":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18A","18B","19","20"],
 "Athletic Club de Bilbao":["01","02","03","04","05","06A","06B","07","08","09A","09B","10","11","12","13","14","15","16","17A","17B","18","19","20"],
 "Atlético de Madrid":["01","02","03","04","05","06","07","08A","08B","09","10","11","12","13","14A","14B","15","16","17","18","19","20"],
 "FC Barcelona":["01","02","03","04","05","06A","06B","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Real Betis":["01","02","03","04","05A","05B","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "RC Celta de Vigo":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18A","18B","19","20"],
 "Deportivo":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18","19","20"],
 "Elche CF":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "RCD Espanyol":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Getafe CF":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Levante UD":["01","02","03","04","05","06","07","08","09","10","11","12","13","14A","14B","15","16","17","18","19","20"],
 "Real Madrid CF":["01","02","03","04","05","06","07","08","09","10A","10B","11","12","13","14","15A","15B","16A","16B","17","18","19","20"],
 "Malaga CF":["01","02","03","04","05","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Osasuna":["01","02","03","04","05A","05B","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Racing de Santander":["01","02","03","04","05","06","07","08","09A","09B","10","11A","11B","12","13","14","15","16","17","18","19","20"],
 "Rayo Vallecano":["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"],
 "Real Sociedad":["01","02","03","04","05","06","07","08","09","10","11","12","13A","13B","14","15","16","17","18","19","20"],
 "Sevilla":["01","02","03","04","05","06","07","08","09A","09B","10","11","12","13","14","15","16","17","18","19","20"],
 "Valencia":["01","02","03","04","05","06","07","08A","08B","09","10","11","12","13","14","15","16","17","18","19","20A","20B"],
 "Villarreal":["01","02","03","04","05","06A","06B","07A","07B","08A","08B","09","10","11","12","13","14","15","16","17","18","19","20"]
};
const LIGA_ESTE_TEAM_INFO={
 "Deportivo Alavés":{"01":["Escudo","Escudo"],"02":["Quique Sánchez Flores","Entrenador"],"03":["Sivera","Portero"],"04":["Pendiente","Pendiente"],"05":["Jonny","Defensa"],"06":["Koski","Defensa"],"07":["Tenaglia","Defensa"],"08":["Parada","Defensa"],"09":["Yusi","Defensa"],"10":["Pendiente","Pendiente"],"11":["Benavidez","Medio"],"12":["Blanco","Medio"],"13":["Guevara","Medio"],"14":["Aleñá","Medio"],"15":["Pablo Ibáñez","Medio"],"16":["Denis Suárez","Medio"],"17":["Ángel Pérez","Delantero"],"18A":["Abde","Delantero"],"18B":["Mañas","Delantero"],"19":["Toni Martínez","Delantero"],"20":["Boyé","Delantero"]},
 "Athletic Club de Bilbao":{"01":["Escudo","Escudo"],"02":["Edin Terzic","Entrenador"],"03":["Unai Simón","Portero"],"04":["Padilla","Portero"],"05":["Areso","Defensa"],"06A":["Paredes","Defensa"],"06B":["Yeray","Defensa"],"07":["Vivian","Defensa"],"08":["Laporte","Defensa"],"09A":["Yuri","Defensa"],"09B":["Adama Boiro","Defensa"],"10":["Jauregizar","Medio"],"11":["Ruiz de Galarreta","Medio"],"12":["Rego","Medio"],"13":["Unai Gómez","Medio"],"14":["Sancet","Medio"],"15":["Nico Serrano","Medio"],"16":["Berenguer","Delantero"],"17A":["Robert Navarro","Delantero"],"17B":["Maroan","Delantero"],"18":["Nico Williams","Delantero"],"19":["Williams","Delantero"],"20":["Guruzeta","Delantero"]},
 "Atlético de Madrid":{"01":["Escudo","Escudo"],"02":["Cholo Simeone","Entrenador"],"03":["Oblak","Portero"],"04":["Musso","Portero"],"05":["Marcos Llorente","Defensa"],"06":["Nahuel Molina","Defensa"],"07":["Pubill","Defensa"],"08A":["Le Normand","Defensa"],"08B":["Giménez","Defensa"],"09":["Hancko","Defensa"],"10":["Ruggeri","Defensa"],"11":["Koke","Medio"],"12":["Barrios","Medio"],"13":["Johnny Cardoso","Medio"],"14A":["Rodri Mendoza","Medio"],"14B":["Obed Vargas","Medio"],"15":["Álex Baena","Medio"],"16":["Almada","Medio"],"17":["Giuliano","Delantero"],"18":["Lookman","Delantero"],"19":["Sorloth","Delantero"],"20":["Julián Alvarez","Delantero"]},
 "FC Barcelona":{"01":["Escudo","Escudo"],"02":["Hansi Flick","Entrenador"],"03":["Joan García","Portero"],"04":["Szczesny","Portero"],"05":["Koundé","Defensa"],"06A":["Araujo","Defensa"],"06B":["Christensen","Defensa"],"07":["Cubarsí","Defensa"],"08":["Gerard Martín","Defensa"],"09":["Joao Cancelo","Defensa"],"10":["Balde","Defensa"],"11":["Eric García","Defensa"],"12":["De Jong","Medio"],"13":["Gavi","Medio"],"14":["Bernal","Medio"],"15":["Pedri","Medio"],"16":["Fermín","Medio"],"17":["Dani Olmo","Delantero"],"18":["Ferran Torres","Delantero"],"19":["Raphinha","Delantero"],"20":["Lamine Yamal","Delantero"]},
 "Real Betis":{"01":["Escudo","Escudo"],"02":["Manuel Pellegrini","Entrenador"],"03":["Valles","Portero"],"04":["Pau López","Portero"],"05A":["Aitor Ruibal","Defensa"],"05B":["Bellerín","Defensa"],"06":["Diego Llorente","Defensa"],"07":["Bartra","Defensa"],"08":["Natan","Defensa"],"09":["Valentín Gómez","Defensa"],"10":["Marc Roca","Medio"],"11":["Amrabat","Medio"],"12":["Fidalgo","Medio"],"13":["Pendiente","Pendiente"],"14":["Lo Celso","Medio"],"15":["Pablo Fornals","Medio"],"16":["Isco","Medio"],"17":["Riquelme","Delantero"],"18":["Antony","Delantero"],"19":["Cucho Hernández","Delantero"],"20":["Abde","Delantero"]},
 "RC Celta de Vigo":{"01":["Escudo","Escudo"],"02":["Claudio Giráldez","Entrenador"],"03":["Radu","Portero"],"04":["Iván Villar","Portero"],"05":["Álvaro Núñez","Defensa"],"06":["Javi Rueda","Defensa"],"07":["Javi Rodríguez","Defensa"],"08":["Starfelt","Defensa"],"09A":["Marcos Alonso","Defensa"],"09B":["Yoel Lago","Defensa"],"10":["Carreira","Defensa"],"11":["Ilaix Moriba","Medio"],"12":["Miguel Román","Medio"],"13":["Hugo Álvarez","Medio"],"14":["Sotelo","Medio"],"15":["Fer López","Medio"],"16":["Swedberg","Medio"],"17":["Iago Aspas","Delantero"],"18A":["Pablo Durán","Delantero"],"18B":["El-Abdellaoui","Delantero"],"19":["Jutglà","Delantero"],"20":["Borja Iglesias","Delantero"]},
 "Deportivo":{"01":["Escudo","Escudo"],"02":["Antonio Hidalgo","Entrenador"],"03":["Álvaro Fernández","Portero"],"04":["Germán Parreño","Portero"],"05":["Adrià Altimira","Defensa"],"06":["Loureiro","Defensa"],"07":["Noubi","Defensa"],"08":["Dani Barcia","Defensa"],"09A":["Ximo Navarro","Defensa"],"09B":["Arnau Comas","Defensa"],"10":["Quagliata","Defensa"],"11":["Villares","Medio"],"12":["Riki","Medio"],"13":["Mario Soriano","Medio"],"14":["José Ángel","Medio"],"15":["Luismi Cruz","Medio"],"16":["Mella","Medio"],"17":["Pendiente","Pendiente"],"18":["Yeremay","Delantero"],"19":["Eddahchouri","Delantero"],"20":["Nsongo","Delantero"]},
 "Elche CF":{"01":["Escudo","Escudo"],"02":["Eder Saravia","Entrenador"],"03":["Dituro","Portero"],"04":["Pendiente","Pendiente"],"05":["Pétrot","Defensa"],"06":["Chust","Defensa"],"07":["Bigas","Defensa"],"08":["Affengruber","Defensa"],"09A":["Pedrosa","Defensa"],"09B":["Sangaré","Defensa"],"10":["Germán Valera","Medio"],"11":["Martim Neto","Medio"],"12":["Gonzalo Villar","Medio"],"13A":["Fede Redondo","Medio"],"13B":["Jon Chetauya","Medio"],"14":["Marc Aguado","Medio"],"15":["Josan","Medio"],"16":["Morente","Medio"],"17":["Pendiente","Pendiente"],"18":["Cepeda","Delantero"],"19":["Diangana","Delantero"],"20":["Yago Santiago","Delantero"]},
 "RCD Espanyol":{"01":["Escudo","Escudo"],"02":["Manolo González","Entrenador"],"03":["Dmitrovic","Portero"],"04":["Fortuño","Portero"],"05":["El Hilali","Defensa"],"06":["Rubén Sánchez","Defensa"],"07":["Riedel","Defensa"],"08":["Cabrera","Defensa"],"09":["Miguel Rubio","Defensa"],"10":["Pendiente","Pendiente"],"11":["Pol Lozano","Medio"],"12":["Urko","Medio"],"13":["Edu Expósito","Medio"],"14":["Jofre","Medio"],"15":["Pendiente","Pendiente"],"16":["Dolan","Delantero"],"17":["Pere Milla","Delantero"],"18":["Puado","Delantero"],"19":["Kike García","Delantero"],"20":["Roberto Fernández","Delantero"]},
 "Getafe CF":{"01":["Escudo","Escudo"],"02":["Jose Bordalás","Entrenador"],"03":["David Soria","Portero"],"04":["Letacek","Portero"],"05":["Kiko Femenía","Defensa"],"06":["Djené","Defensa"],"07":["Boselli","Defensa"],"08":["Abqar","Defensa"],"09":["Zaid Romero","Defensa"],"10":["Davinchi","Defensa"],"11":["Mario Martín","Medio"],"12":["Javi Muñoz","Medio"],"13":["Pendiente","Pendiente"],"14":["Pendiente","Pendiente"],"15":["Pendiente","Pendiente"],"16":["Pendiente","Pendiente"],"17":["Álex Sancris","Delantero"],"18":["Borja Mayoral","Delantero"],"19":["Luis Vázquez","Delantero"],"20":["Satriano","Delantero"]},
 "Levante UD":{"01":["Escudo","Escudo"],"02":["Luís Castro","Entrenador"],"03":["Ryan","Portero"],"04":["Pablo Campos","Portero"],"05":["Toljan","Defensa"],"06":["Elgezabal","Defensa"],"07":["Dela","Defensa"],"08":["Pendiente","Pendiente"],"09":["Manu Sánchez","Defensa"],"10":["Arriaga","Medio"],"11":["Oriol Rey","Medio"],"12":["Olasagasti","Medio"],"13":["Pendiente","Pendiente"],"14A":["Victor García","Medio"],"14B":["Paco Cortés","Medio"],"15":["Carlos Álvarez","Medio"],"16":["Tunde","Delantero"],"17":["Brugué","Delantero"],"18":["Iván Romero","Delantero"],"19":["Etta Eyong","Delantero"],"20":["Carlos Espí","Delantero"]},
 "Real Madrid CF":{"01":["Escudo","Escudo"],"02":["José Mourinho","Entrenador"],"03":["Courtois","Portero"],"04":["Lunin","Portero"],"05":["Trent","Defensa"],"06":["Militao","Defensa"],"07":["Asencio","Defensa"],"08":["Rüdiger","Defensa"],"09":["Huijsen","Defensa"],"10A":["Carreras","Defensa"],"10B":["Mendy","Defensa"],"11":["Tchouaméni","Medio"],"12":["Fede Valverde","Medio"],"13":["Camavinga","Medio"],"14":["Bellingham","Medio"],"15A":["Güler","Medio"],"15B":["Thiago Pitarch","Medio"],"16A":["Mastantuono","Medio"],"16B":["Brahim Díaz","Delantero"],"17":["Gonzalo","Delantero"],"18":["Rodrygo","Delantero"],"19":["Vinícius","Delantero"],"20":["Mbappé","Delantero"]},
 "Malaga CF":{"01":["Escudo","Escudo"],"02":["Juan Franisco Funes","Entrenador"],"03":["Alfonso Herrero","Portero"],"04":["Carlos López","Portero"],"05":["Puga","Defensa"],"06":["Murillo","Defensa"],"07":["Pendiente","Pendiente"],"08":["Einar Galilea","Defensa"],"09":["Rafita","Defensa"],"10":["Pendiente","Pendiente"],"11":["Izan Mérino","Medio"],"12":["Dani Lorenzo","Medio"],"13A":["Rafa Rodríguez","Medio"],"13B":["Juanpe","Medio"],"14":["Dotor","Medio"],"15":["Aarón Ochoa","Medio"],"16":["Larrubia","Delantero"],"17":["Lobete","Delantero"],"18":["Adrián Niño","Delantero"],"19":["Joaquín","Delantero"],"20":["Chupe","Delantero"]},
 "Osasuna":{"01":["Escudo","Escudo"],"02":["Luis Miguel Ramis","Entrenador"],"03":["Sergio Herrera","Portero"],"04":["Aitor Fernández","Portero"],"05A":["Rosier","Defensa"],"05B":["Arguibide","Defensa"],"06":["Boyomo","Defensa"],"07":["Herrando","Defensa"],"08":["Catena","Defensa"],"09":["Abel Bretones","Defensa"],"10":["Osambela","Medio"],"11":["Torró","Medio"],"12":["Moncayola","Medio"],"13A":["Moi Gómez","Medio"],"13B":["Iker Muñoz","Medio"],"14":["Rubén García","Medio"],"15":["Aimar Oroz","Medio"],"16":["Iker Benito","Medio"],"17":["Raúl Moro","Delantero"],"18":["Raúl García","Delantero"],"19":["Kike Barja","Delantero"],"20":["Budimir","Delantero"]},
 "Racing de Santander":{"01":["Escudo","Escudo"],"02":["José Alberto López","Entrenador"],"03":["Pendiente","Pendiente"],"04":["Eriksson","Portero"],"05":["Mantilla","Defensa"],"06":["Sangalli","Defensa"],"07":["Facu González","Defensa"],"08":["Javi Castro","Defensa"],"09A":["Manu Hernando","Defensa"],"09B":["Mario García","Defensa"],"10":["Jorge Salinas","Defensa"],"11A":["Maguette","Medio"],"11B":["Nteka","Medio"],"12":["Gustavo Puerta","Medio"],"13":["Íñigo","Medio"],"14":["Aldasoro","Medio"],"15":["Suleiman","Delantero"],"16":["Andrés Martín","Delantero"],"17":["Guliashvili","Delantero"],"18":["Íñigo Vicente","Delantero"],"19":["Arana","Delantero"],"20":["Villalibre","Delantero"]},
 "Rayo Vallecano":{"01":["Escudo","Escudo"],"02":["Beñat San José","Entrenador"],"03":["Batalla","Portero"],"04":["Cárdenas","Portero"],"05":["Ratiu","Defensa"],"06":["Balliu","Defensa"],"07":["Nobel Mendy","Defensa"],"08":["Lejeune","Defensa"],"09":["Luiz Felipe","Defensa"],"10":["Pep Chavarría","Defensa"],"11":["Pedro Díaz","Medio"],"12":["Pathé Ciss","Medio"],"13":["Óscar Valentín","Medio"],"14":["Unai López","Medio"],"15":["Isi","Medio"],"16":["De Frutos","Delantero"],"17":["Fran Pérez","Delantero"],"18":["Álvaro García","Delantero"],"19":["Camello","Delantero"],"20":["Alemao","Delantero"]},
 "Real Sociedad":{"01":["Escudo","Escudo"],"02":["Pellegrino Matarazzo","Entrenador"],"03":["Remiro","Portero"],"04":["Marrero","Portero"],"05":["Aramburu","Defensa"],"06":["Zubeldia","Defensa"],"07":["Jon Martín","Defensa"],"08":["Sergio Gómez","Defensa"],"09":["Aihen Muñoz","Defensa"],"10":["Gorrotxategi","Medio"],"11":["Pablo Marín","Medio"],"12":["Turrientes","Medio"],"13A":["Yangel Herrera","Medio"],"13B":["Pendiente","Pendiente"],"14":["Carlos Soler","Medio"],"15":["Sucic","Medio"],"16":["Barrenetxea","Delantero"],"17":["Kubo","Delantero"],"18":["Guedes","Delantero"],"19":["Oskarsson","Delantero"],"20":["Oyarzabal","Delantero"]},
 "Sevilla":{"01":["Escudo","Escudo"],"02":["Luis García","Entrenador"],"03":["Vlachodimos","Portero"],"04":["Pendiente","Pendiente"],"05":["Carmona","Defensa"],"06":["Juanlu","Defensa"],"07":["Kike Salas","Defensa"],"08":["Nianzou","Defensa"],"09A":["Castrín","Defensa"],"09B":["Marcao","Defensa"],"10":["Suazo","Defensa"],"11":["Oso","Medio"],"12":["Agoumé","Medio"],"13":["Pendiente","Pendiente"],"14":["Sow","Medio"],"15":["Vargas","Medio"],"16":["Manu Bueno","Medio"],"17":["Peque","Delantero"],"18":["Ejuke","Delantero"],"19":["Akor Adams","Delantero"],"20":["Isaac Romero","Delantero"]},
 "Valencia":{"01":["Escudo","Escudo"],"02":["Carlos Corberán","Entrenador"],"03":["Dimitrievski","Portero"],"04":["Rivero","Portero"],"05":["Foulquier","Defensa"],"06":["Copete","Defensa"],"07":["Tárrega","Defensa"],"08A":["Cömert","Defensa"],"08B":["Diakhaby","Defensa"],"09":["Gayà","Defensa"],"10":["Jesús Vázquez","Defensa"],"11":["Pepelu","Medio"],"12":["Guido Rodríguez","Medio"],"13":["Javi Guerra","Medio"],"14":["Luis Rioja","Medio"],"15":["Ugrinic","Medio"],"16":["André Almeida","Medio"],"17":["Hugo Duro","Delantero"],"18":["Diego López","Delantero"],"19":["Ramazani","Delantero"],"20A":["Sadiq","Delantero"],"20B":["Lucas Beltrán","Delantero"]},
 "Villarreal":{"01":["Escudo","Escudo"],"02":["Íñigo Pérez","Entrenador"],"03":["Luiz Júnior","Portero"],"04":["Arnau Tenas","Portero"],"05":["Mouriño","Defensa"],"06A":["Pau Navarro","Defensa"],"06B":["Logan Costa","Defensa"],"07A":["Foyth","Defensa"],"07B":["Freeman","Defensa"],"08A":["Kambwala","Defensa"],"08B":["Rafa Marín","Defensa"],"09":["Renato Veiga","Defensa"],"10":["Sergi Cardona","Defensa"],"11":["Pape Gueye","Medio"],"12":["Santi Comesaña","Medio"],"13":["Maciá","Medio"],"14":["Moleiro","Medio"],"15":["Buchanan","Delantero"],"16":["Oluwaseyi","Delantero"],"17":["Ayoze","Delantero"],"18":["Pépé","Delantero"],"19":["Mikautadze","Delantero"],"20":["Gerard Moreno","Delantero"]}
};
const LIGA_ESTE_TEAM_DOMAINS={
 "Deportivo Alavés":"deportivoalaves.com","Athletic Club de Bilbao":"athletic-club.eus","Atlético de Madrid":"atleticodemadrid.com","FC Barcelona":"fcbarcelona.com","Real Betis":"realbetisbalompie.es","RC Celta de Vigo":"rccelta.es","Deportivo":"rcdeportivo.es","Elche CF":"elchecf.es","RCD Espanyol":"rcdespanyol.com","Getafe CF":"getafecf.com","Levante UD":"levanteud.com","Real Madrid CF":"realmadrid.com","Malaga CF":"malagacf.com","Osasuna":"osasuna.es","Racing de Santander":"realracingclub.es","Rayo Vallecano":"rayovallecano.es","Real Sociedad":"realsociedad.eus","Sevilla":"sevillafc.es","Valencia":"valenciacf.com","Villarreal":"villarrealcf.es"
};
function ligaEsteStickerInfo(team,code){return LIGA_ESTE_TEAM_INFO?.[team]?.[code]||null}
function ligaEsteCrestUrl(team){const d=LIGA_ESTE_TEAM_DOMAINS[team];return d?`https://www.google.com/s2/favicons?domain=${encodeURIComponent(d)}&sz=128`:""}
function ligaEsteTeamSearchText(team){const rows=Object.entries(LIGA_ESTE_TEAM_INFO?.[team]||{}).flatMap(([code,[name,pos]])=>[code,name,pos]);return normalizeTradeName([team,...rows].join(" "))}

const LIGA_ESTE_INSERTS={
 "ADN / LALIGA PRIME":Array.from({length:15},(_,i)=>String(i+1).padStart(2,"0")),
 "LALIGA FANTASY":Array.from({length:9},(_,i)=>String(i+1).padStart(2,"0")),
 "DRAFT 23":Array.from({length:23},(_,i)=>String(i+1).padStart(2,"0")),
 "DRAFT 23 KROMIX":Array.from({length:23},(_,i)=>`K${i+1}`),
 "EXTRA STICKER BRONCE":["01","02","03","04","05"],
 "EXTRA STICKER PLATA":["01","02","03","04","05"],
 "EXTRA STICKER ORO":["01","02","03","04","05"]
};
const LIGA_ESTE_EXTRA_NAMES=["Lamine Yamal","Mbappé","Nico Williams","Pedri","Oblak"];
function inventoryFromCodeMap(map){return Object.fromEntries(Object.entries(map).map(([team,codes])=>[team,Object.fromEntries(codes.map(code=>[code,0]))]));}
function collectionInventoryTemplate(type){
 if(type==="liga-este-2026-27")return inventoryFromCodeMap({...LIGA_ESTE_TEAMS,...LIGA_ESTE_INSERTS});
 if(type==="world-cup-2026")return createEmptyInventoryFrom(masterInventories["world-cup-2026-main"]||originalInventory);
 return {};
}
function seedTypeForCollection(type){
 if(type==="liga-este-2026-27")return "liga-este-2026-27-first-edition";
 if(type==="megacracks-2026-27")return "megacracks-2026-27-first-edition";
 return "world-cup-2026-main";
}
function isLigaEsteInsertTeam(team){return Object.prototype.hasOwnProperty.call(LIGA_ESTE_INSERTS,team)}
function collectionTypeLabel(type){return COLLECTION_DEFINITIONS[type]?.label||COLLECTION_DEFINITIONS["world-cup-2026"].label}
function inferCollectionType(projectOrSeed={}){
 const explicit=projectOrSeed.collectionType;
 if(explicit&&COLLECTION_DEFINITIONS[explicit])return explicit;
 const seed=String(projectOrSeed.seedType||"").toLowerCase();
 const name=String(projectOrSeed.name||"").toLowerCase();
 if(seed.includes("liga-este-2026-27")||name.includes("liga este 2026")||name.includes("liga este 26/27"))return "liga-este-2026-27";
 if(seed.includes("megacracks-2026-27")||name.includes("megacracks 2026")||name.includes("megacracks 26/27"))return "megacracks-2026-27";
 return "world-cup-2026";
}
function collectionDefinition(project=projects?.[activeProjectId]){return COLLECTION_DEFINITIONS[inferCollectionType(project)]||COLLECTION_DEFINITIONS["world-cup-2026"]}
function applyCollectionIdentity(project=projects?.[activeProjectId]){
 if(!project)return;
 project.collectionType=inferCollectionType(project);
 const def=collectionDefinition(project);
 document.body.dataset.collectionType=project.collectionType;
 document.body.classList.remove("collection-theme-worldcup","collection-theme-ligaeste","collection-theme-megacracks");
 document.body.classList.add(`collection-theme-${def.theme}`);
 const kicker=document.querySelector(".collection-header-kicker");if(kicker)kicker.textContent=def.label;
 const subtitle=document.querySelector(".collection-header-subtitle");if(subtitle)subtitle.textContent=def.subtitle;
 if(teamSearch)teamSearch.placeholder=project.collectionType==="liga-este-2026-27"?"Buscar jugador, equipo o nº…":"Buscar selección…";
 const dialogSearch=document.querySelector("#dialogSearch");if(dialogSearch)dialogSearch.placeholder=project.collectionType==="liga-este-2026-27"?"Buscar jugador o club…":"Buscar selección…";
 const teamLabel=document.querySelector("#teamSelectorLabel");if(teamLabel)teamLabel.textContent=project.collectionType==="liga-este-2026-27"?"Club":"Selección";
 const dialogTitle=document.querySelector("#teamDialogTitle");if(dialogTitle)dialogTitle.textContent=project.collectionType==="liga-este-2026-27"?"Elegir club":"Elegir selección";
 const logo=document.querySelector("#ligaEsteHeaderLogo");if(logo)logo.hidden=project.collectionType!=="liga-este-2026-27";
}

const EXTRA_PLAYERS=[
 "Messi","CR7","L. Yamal","Mbappé","Haaland",
 "Vini Jr.","Bellingham","Valverde","Modric","Hakimi",
 "Luis Díaz","Salah","Son","Doku","Wirtz",
 "Caicedo","Davies","Gakpo","Pulisic","Raúl Jiménez"
];
const EXTRA_VARIANTS=[
 {key:"epic",team:"Extra · Epic",label:"Epic",icon:"🟣",code:"EPI"},
 {key:"bronze",team:"Extra · Bronce",label:"Bronce",icon:"🟤",code:"BRO"},
 {key:"silver",team:"Extra · Plata",label:"Plata",icon:"⚪",code:"PLA"},
 {key:"gold",team:"Extra · Oro",label:"Oro",icon:"🟡",code:"ORO"}
];
const EXTRA_TEAMS=EXTRA_VARIANTS.map(item=>item.team);
function isExtraTeam(team){return EXTRA_TEAMS.includes(team)}
function extraVariantForTeam(team){return EXTRA_VARIANTS.find(item=>item.team===team)||null}
function extraPlayerName(code){return EXTRA_PLAYERS[Math.max(0,Number(code)-1)]||String(code)}
function stickerDisplayLabel(team,code){
 if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"){
   if(team.startsWith("EXTRA STICKER"))return LIGA_ESTE_EXTRA_NAMES[Math.max(0,Number(code)-1)]||code;
   const info=ligaEsteStickerInfo(team,code);if(info)return info[0];
 }
 return isExtraTeam(team)?extraPlayerName(code):code;
}
function stickerFeedbackLabel(team,code){return isExtraTeam(team)?`${extraVariantForTeam(team)?.label||"Extra"} · ${extraPlayerName(code)}`:`${team} ${code}`}

const LEGACY_KEYS={
 inventory:"panini-mercat-inventory-v423",
 team:"panini-mercat-team-v3",
 target:"panini-mercat-target-v3",
 session:"panini-mercat-session-v3",
 history:"panini-mercat-history-v3",
 sessions:"panini-mercat-finished-sessions-v3",
 exchange:"panini-mercat-exchange-v423"
};

let originalInventory={},masterInventories={},inventory={},flags={},teamGroups={},history=[],finishedSessions=[];
let sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};
let currentFilter="all",currentView="inventory",exchangeType="give",exchangeListType="give";
let exchange={give:{},receive:{}};
let projects={},activeProjectId="",pendingSync={},lastSyncedAt=null;
let mainTab="collection",collectionFilter="all",collectionTeamFilter="all",collectionSort="album";
let pendingExcelImport=null;

const CLOUD_STATE_TABLE="wc_user_state";
const CLOUD_LOCAL_META_KEY="world-cup-2026-cloud-meta-v7007";
let cloudSession=null,cloudSubscription=null,cloudSaveTimer=null,cloudApplying=false,cloudReady=false,cloudRevision=0,cloudLastUpdatedAt=null,cloudConflictOpen=false;
let pendingBackupRestore=null;
let appDataReady=false,appDataReadyResolve;
const appDataReadyPromise=new Promise(resolve=>{appDataReadyResolve=resolve});

const $=s=>document.querySelector(s);
const teamSelect=$("#teamSelect"),teamSearch=$("#teamSearch"),suggestions=$("#searchSuggestions");
const targetInput=$("#targetInput"),targetValue=$("#targetValue"),grid=$("#stickerGrid");
const toast=$("#toast"),undoButton=$("#undoButton"),emptyState=$("#emptyState");

function makeId(){return crypto.randomUUID?.()||`p-${Date.now()}-${Math.random().toString(16).slice(2)}`}
function emptyInventory(){return Object.fromEntries(Object.entries(originalInventory).map(([team,stickers])=>[team,Object.fromEntries(Object.keys(stickers).map(code=>[code,0]))]))}
function defaultProject(name,target,projectInventory,seedType="custom"){
 return {
   id:makeId(),name,target:Number(target)||1,seedType,collectionType:inferCollectionType({name,seedType}),collectionOrder:Object.keys(projects||{}).length,inventory:structuredClone(projectInventory),
   history:[],finishedSessions:[],sessionStats:{plus:0,minus:0,startedAt:new Date().toISOString()},
   exchange:{give:{},receive:{}},teamOrder:Object.keys(projectInventory),selectedTeam:Object.keys(projectInventory)[0]||"",
   pendingSync:{},lastSyncedAt:null,ui:{teamFilter:"all",collectionFilter:"all",currentFilter:"all",sort:"album",mainTab:"collection",scrollY:0},createdAt:new Date().toISOString()
 };
}
function projectTeamOrder(project=projects?.[activeProjectId],sourceInventory=project?.inventory||inventory){
 const available=Object.keys(sourceInventory||{});
 // El orden de las selecciones debe seguir siempre el orden oficial del álbum.
 // Un teamOrder antiguo recibido desde la nube no puede reordenar el desplegable
 // ni la vista «Todas las selecciones». Solo se usa para referencias adicionales
 // que no formen parte de la edición maestra.
 const masterOrder=Object.keys(masterInventories[project?.seedType]||{});
 const storedOrder=Array.isArray(project?.teamOrder)?project.teamOrder:[];
 const seen=new Set();
 return [...masterOrder,...storedOrder,...available]
   .filter(team=>available.includes(team)&&!seen.has(team)&&seen.add(team));
}
function currentCollectionOptions(project=projects?.[activeProjectId]){
 if(!project)return {collaborationEnabled:true,extra:{epic:false,bronze:false,silver:false,gold:false}};
 project.collectionOptions=project.collectionOptions||{collaborationEnabled:true};
 if(typeof project.collectionOptions.collaborationEnabled!=="boolean")project.collectionOptions.collaborationEnabled=true;
 project.collectionOptions.extra={epic:false,bronze:false,silver:false,gold:false,...(project.collectionOptions.extra||{})};
 return project.collectionOptions;
}
function collaborationEnabled(project=projects?.[activeProjectId]){return currentCollectionOptions(project).collaborationEnabled!==false}
function extraVariantEnabled(key,project=projects?.[activeProjectId]){return currentCollectionOptions(project).extra?.[key]===true}
function teamVisibleForProject(team,project=projects?.[activeProjectId]){
 if(team==="Coca-Cola")return collaborationEnabled(project);
 const variant=extraVariantForTeam(team);
 return variant?extraVariantEnabled(variant.key,project):true;
}
function currentTeamOrder(){return projectTeamOrder(projects?.[activeProjectId],inventory).filter(team=>teamVisibleForProject(team))}
function ensureProjectInventorySchema(project){
 if(!project||!project.inventory)return;
 project.collectionType=inferCollectionType(project);
 if(project.collectionType!=="world-cup-2026")return;
 // FWC se mostraba antiguamente como 01–20. La app usa ahora los códigos reales 00–19.
 const currentFwc=project.inventory.FWC||{};
 if(Object.prototype.hasOwnProperty.call(currentFwc,"20")&&!Object.prototype.hasOwnProperty.call(currentFwc,"00")){
   const migrated={};
   for(let n=1;n<=20;n++)migrated[String(n-1).padStart(2,"0")]=Number(currentFwc[String(n).padStart(2,"0")])||0;
   project.inventory.FWC=migrated;
 }
 // Coca-Cola es una colección independiente de colaboración, CC01–CC12.
 if(!project.inventory["Coca-Cola"])project.inventory["Coca-Cola"]=Object.fromEntries(Array.from({length:12},(_,i)=>[String(i+1).padStart(2,"0"),0]));
 else for(let n=1;n<=12;n++){const code=String(n).padStart(2,"0");if(!Object.prototype.hasOwnProperty.call(project.inventory["Coca-Cola"],code))project.inventory["Coca-Cola"][code]=0;}
 EXTRA_VARIANTS.forEach(({team})=>{
   if(!project.inventory[team])project.inventory[team]=Object.fromEntries(EXTRA_PLAYERS.map((_,i)=>[String(i+1).padStart(2,"0"),0]));
   else EXTRA_PLAYERS.forEach((_,i)=>{const code=String(i+1).padStart(2,"0");if(!Object.prototype.hasOwnProperty.call(project.inventory[team],code))project.inventory[team][code]=0;});
 });
}
function ensureProjectTeamOrder(project){
 if(!project)return;
 project.collectionType=inferCollectionType(project);
 ensureProjectInventorySchema(project);
 project.teamOrder=projectTeamOrder(project,project.inventory);
 if(!project.selectedTeam||!project.inventory?.[project.selectedTeam])project.selectedTeam=project.teamOrder[0]||"";
 project.ui={teamFilter:"all",collectionFilter:"all",currentFilter:"all",sort:"album",mainTab:"collection",scrollY:0,...(project.ui||{})};
 if(project.ui.teamFilter!=="all"&&!project.inventory?.[project.ui.teamFilter])project.ui.teamFilter="all";
}
function migrateLegacy(seedProjects=[]){
 const created=seedProjects.map(seed=>defaultProject(seed.name,seed.target,seed.inventory,seed.seedType));
 if(!created.length){
   created.push(defaultProject("Mundial 2026 · 5 álbumes",5,structuredClone(originalInventory),"world-cup-2026-main"));
 }
 created[0].selectedTeam=localStorage.getItem(LEGACY_KEYS.team)||Object.keys(created[0].inventory)[0];
 projects=Object.fromEntries(created.map(project=>[project.id,project]));
 activeProjectId=created[0].id;
 persistProjects();
}
function findSeedProject(seed){
 return Object.values(projects).find(project=>
   project.seedType===seed.seedType||
   (seed.seedType==="panini-swiss-edition"&&normalize(project.name).includes("swiss"))||
   (seed.seedType==="world-cup-2026-main"&&(normalize(project.name).includes("mundial 2026")||normalize(project.name).includes("world cup")))
 );
}
function bootstrapProjectsFromSeed(seedData){
 const seedProjects=Array.isArray(seedData?.projects)?seedData.projects:[];
 seedProjects.forEach(seed=>{seed.collectionType=inferCollectionType(seed)});
 masterInventories=Object.fromEntries(seedProjects.map(seed=>[seed.seedType,structuredClone(seed.inventory)]));
 masterInventories["liga-este-2026-27-first-edition"]=collectionInventoryTemplate("liga-este-2026-27");
 originalInventory=structuredClone(masterInventories["world-cup-2026-main"]||originalInventory);

 // Build 700.7: los datos existentes pertenecen al usuario y nunca se sobrescriben
 // por una actualización de código o por una nueva revisión del archivo seed.
 if(projects&&Object.keys(projects).length){
   Object.values(projects).forEach(ensureProjectTeamOrder);
   if(!projects[activeProjectId])activeProjectId=Object.keys(projects)[0];
   return;
 }

 migrateLegacy(seedProjects);
 localStorage.setItem(MASTER_SEED_KEY,seedData.revision||DATA_REVISION);
}
function getMasterInventoryForProject(project){
 const stored=masterInventories[project?.seedType];
 if(stored)return structuredClone(stored);
 const template=collectionInventoryTemplate(inferCollectionType(project));
 return Object.keys(template).length?structuredClone(template):structuredClone(originalInventory);
}
function ensureCollectionOrder(){
 const items=Object.values(projects||{});
 const ordered=items.slice().sort((a,b)=>{
   const av=Number.isFinite(Number(a.collectionOrder))?Number(a.collectionOrder):Number.MAX_SAFE_INTEGER;
   const bv=Number.isFinite(Number(b.collectionOrder))?Number(b.collectionOrder):Number.MAX_SAFE_INTEGER;
   return av-bv||String(a.createdAt||"").localeCompare(String(b.createdAt||""));
 });
 ordered.forEach((project,index)=>project.collectionOrder=index);
}
function orderedProjects(){
 ensureCollectionOrder();
 return Object.values(projects||{}).sort((a,b)=>Number(a.collectionOrder)-Number(b.collectionOrder));
}
function persistProjects(){
 ensureCollectionOrder();
 localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
 if(!cloudApplying)scheduleCloudSave();
}

function cloudClient(){return window.WCAuth?.client||window.wcSupabase||null}
function canonicalize(value){
 if(Array.isArray(value))return value.map(canonicalize);
 if(value&&typeof value==="object")return Object.fromEntries(Object.keys(value).sort().map(key=>[key,canonicalize(value[key])]));
 return value;
}
function comparableProjects(source=projects){
 return Object.fromEntries(Object.entries(source||{}).map(([id,p])=>[id,{
   id:p.id,name:p.name,target:Number(p.target)||1,seedType:p.seedType||"custom",collectionType:inferCollectionType(p),collectionOrder:Number(p.collectionOrder)||0,
   inventory:p.inventory||{},collectionOptions:p.collectionOptions||{},teamOrder:p.teamOrder||[],selectedTeam:p.selectedTeam||"",
   exchange:p.exchange||{give:{},receive:{}},createdAt:p.createdAt||null
 }]));
}
function hashText(text){let h=2166136261;for(let i=0;i<text.length;i++){h^=text.charCodeAt(i);h=Math.imul(h,16777619)}return (h>>>0).toString(16).padStart(8,"0")}
function stateFingerprint(sourceProjects=projects,sourceActive=activeProjectId){return hashText(JSON.stringify(canonicalize({activeProjectId:sourceActive||"",projects:comparableProjects(sourceProjects)})))}
function projectTotals(sourceProjects,sourceActive){
 const p=sourceProjects?.[sourceActive]||Object.values(sourceProjects||{})[0];if(!p)return {missing:0,duplicates:0,stickers:0};
 const target=Math.max(1,Number(p.target)||1);let missing=0,duplicates=0,stickers=0;
 Object.values(p.inventory||{}).forEach(team=>Object.values(team||{}).forEach(raw=>{const n=Math.max(0,Number(raw)||0);stickers+=n;missing+=Math.max(0,target-n);duplicates+=Math.max(0,n-target)}));
 return {missing,duplicates,stickers};
}
function saveExternalCloudBackup(row,reason="cloud-conflict"){
 if(!row?.payload?.projects)return;
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 snapshots.push({format:"panini-mercat-backup",schemaVersion:DATA_SCHEMA_VERSION,createdAt:new Date().toISOString(),reason,activeProjectId:row.payload.activeProjectId,projects:structuredClone(row.payload.projects)});
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots.slice(-10)));
}
function createAutoBackup(reason="antes-de-sincronizar"){
 // Copia estrictamente local: no llama a commitProjectState(), porque esa función
 // programa una subida a Supabase y podría competir con la descarga elegida.
 commitProjectStateLocalOnly();
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 const snapshot={
   format:"panini-mercat-backup",
   version:APP_VERSION,
   schemaVersion:DATA_SCHEMA_VERSION,
   createdAt:new Date().toISOString(),
   reason,
   activeProjectId,
   projects:structuredClone(projects)
 };
 snapshots.push(snapshot);
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots.slice(-10)));
 return snapshot;
}
function ensureCloudConflictDialog(){
 let dialog=$("#cloudConflictDialog");if(dialog)return dialog;
 dialog=document.createElement("dialog");dialog.id="cloudConflictDialog";dialog.className="app-dialog cloud-conflict-dialog";
 dialog.innerHTML=`<form method="dialog" class="dialog-card"><header><div><small>Sincronización protegida</small><h2>Hay dos inventarios diferentes</h2></div></header><div class="dialog-body"><p>La app no reemplazará ninguno automáticamente. Revisa los totales y elige qué copia conservar.</p><div id="cloudConflictComparison" class="cloud-conflict-comparison"></div><p class="settings-note">Antes de reemplazar nada se guardará una copia local de seguridad.</p></div><footer class="cloud-conflict-actions"><button id="cloudConflictUseCloud" class="primary" type="button">Usar datos de la nube</button><button id="cloudConflictUseLocal" class="secondary" type="button">Usar este dispositivo</button><button id="cloudConflictCancel" class="ghost" type="button">Cancelar sin cambiar nada</button></footer></form>`;
 document.body.appendChild(dialog);return dialog;
}
function askCloudConflict(row,{reason="sync"}={}){
 if(cloudConflictOpen)return Promise.resolve("cancel");
 const dialog=ensureCloudConflictDialog(),localTotals=projectTotals(projects,activeProjectId),remoteTotals=projectTotals(row.payload.projects,row.payload.activeProjectId);
 $("#cloudConflictComparison").innerHTML=`<article><strong>Este dispositivo</strong><span>${localTotals.missing} me faltan</span><span>${localTotals.duplicates} repetidas</span><small>${localTotals.stickers} unidades registradas</small></article><article><strong>Nube</strong><span>${remoteTotals.missing} me faltan</span><span>${remoteTotals.duplicates} repetidas</span><small>${remoteTotals.stickers} unidades registradas</small></article>`;
 cloudConflictOpen=true;setCloudStatus("⚠ Conflicto pendiente","error");
 return new Promise(resolve=>{
   const finish=choice=>{cloudConflictOpen=false;dialog.close();resolve(choice)};
   $("#cloudConflictUseCloud").onclick=()=>finish("cloud");
   $("#cloudConflictUseLocal").onclick=()=>finish("local");
   $("#cloudConflictCancel").onclick=()=>finish("cancel");
   dialog.oncancel=e=>{e.preventDefault();finish("cancel")};
   dialog.showModal();
 });
}
function cloudMeta(){return readJSON(CLOUD_LOCAL_META_KEY,{revision:0,updatedAt:null,userId:null})}
function writeCloudMeta(meta){localStorage.setItem(CLOUD_LOCAL_META_KEY,JSON.stringify(meta))}
function cloudPayload(){
 commitProjectStateLocalOnly();
 return {format:"world-cup-2026-cloud-state",schemaVersion:DATA_SCHEMA_VERSION,dataOwner:"supabase-user",version:APP_VERSION,activeProjectId,projects:structuredClone(projects)};
}
function commitProjectStateLocalOnly(){
 const p=projects[activeProjectId];
 if(!p)return;
 p.inventory=structuredClone(inventory);p.history=structuredClone(history.slice(-300));
 p.finishedSessions=structuredClone(finishedSessions.slice(-100));p.sessionStats=structuredClone(sessionStats);
 p.exchange=structuredClone(exchange);p.pendingSync=structuredClone(pendingSync);p.lastSyncedAt=lastSyncedAt;
 p.target=getTarget();if(inventory[teamSelect.value])p.selectedTeam=teamSelect.value;
 p.ui={...(p.ui||{}),teamFilter:collectionTeamFilter,collectionFilter,currentFilter,sort:collectionSort,mainTab,scrollY:Math.max(0,Math.round(window.scrollY||0))};
 localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
}
function setCloudStatus(text,state="idle"){
 const node=$("#saveStatus");if(node)node.textContent=text;
 document.body.dataset.cloudState=state;
}
function scheduleCloudSave(delay=450){
 if(!cloudReady||!cloudSession||cloudApplying)return;
 clearTimeout(cloudSaveTimer);cloudSaveTimer=setTimeout(()=>saveCloudState().catch(console.error),delay);
}
async function saveCloudState({force=false}={}){
 const client=cloudClient();if(!client||!cloudSession||!navigator.onLine||cloudApplying||cloudConflictOpen)return false;
 clearTimeout(cloudSaveTimer);cloudSaveTimer=null;setCloudStatus("Comprobando la nube…","syncing");
 if(!force){
   const {data:remote,error:readError}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",cloudSession.user.id).maybeSingle();
   if(readError){setCloudStatus("No se pudo comprobar la nube","error");throw readError}
   if(remote?.payload?.projects&&Number(remote.revision)>cloudRevision){
     const choice=await askCloudConflict(remote,{reason:"before-save"});
     if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");await applyCloudPayload(remote);return false}
     if(choice==="local"){saveExternalCloudBackup(remote,"antes-de-reemplazar-nube");cloudRevision=Number(remote.revision)||0;cloudLastUpdatedAt=remote.updated_at||null;return saveCloudState({force:true})}
     setCloudStatus("Sin sincronizar: elige una copia","error");return false;
   }
 }
 setCloudStatus("Sincronizando…","syncing");
 const nextRevision=Math.max(cloudRevision,Number(cloudMeta().revision)||0)+1;
 const payload=cloudPayload();
 const {data,error}=await client.from(CLOUD_STATE_TABLE).upsert({user_id:cloudSession.user.id,payload,revision:nextRevision,updated_at:new Date().toISOString()},{onConflict:"user_id"}).select("revision,updated_at").single();
 if(error){setCloudStatus("Error al guardar en la nube","error");throw error}
 cloudRevision=Number(data.revision)||nextRevision;cloudLastUpdatedAt=data.updated_at;lastSyncedAt=data.updated_at;
 Object.values(projects).forEach(p=>{p.pendingSync={};p.lastSyncedAt=data.updated_at});pendingSync={};
 commitProjectStateLocalOnly();writeCloudMeta({revision:cloudRevision,updatedAt:data.updated_at,userId:cloudSession.user.id,fingerprint:stateFingerprint()});
 updateSyncUI();setCloudStatus("✓ Guardado en la nube","synced");return true;
}
async function applyCloudPayload(row,{silent=false}={}){
 if(!row?.payload?.projects)return false;
 cloudApplying=true;
 try{
   projects=structuredClone(row.payload.projects);
   // Supabase es la fuente de verdad. El código de la build nunca reinicia inventarios ni objetivos.
   Object.values(projects).forEach(ensureProjectTeamOrder);
   activeProjectId=row.payload.activeProjectId&&projects[row.payload.activeProjectId]?row.payload.activeProjectId:Object.keys(projects)[0];
   cloudRevision=Number(row.revision)||0;cloudLastUpdatedAt=row.updated_at||null;
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
   writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:cloudSession?.user?.id||null,fingerprint:stateFingerprint()});
   loadProjectState();renderProjectsList();
   if(!silent)showToast("Datos actualizados desde la nube");
   setCloudStatus("✓ Sincronizado","synced");return true;
 }finally{cloudApplying=false}
}
function displayUserName(user){
 const raw=user?.user_metadata?.full_name||user?.user_metadata?.name||user?.email?.split("@")[0]||"";
 return String(raw).trim().split(/\s+/)[0]||"coleccionista";
}
function hideAppSplash(){window.WCAuth?.hideSplash?.();const splash=$("#appSplash");if(splash)splash.hidden=true}
function showReturningWelcome(session){
 hideAppSplash();
 const name=displayUserName(session?.user);
 showToast(`👋 Bienvenido de nuevo, ${name}`);
}
function openFirstCollectionOnboarding(session){
 hideAppSplash();
 const gate=$("#onboardingGate");if(!gate)return;
 $("#onboardingUserName").textContent=displayUserName(session?.user);
 $("#onboardingCreateStep").hidden=false;$("#onboardingReadyStep").hidden=true;
 $("#onboardingMessage").textContent="";
 gate.hidden=false;document.body.classList.add("onboarding-locked");
}
function closeFirstCollectionOnboarding(){
 const gate=$("#onboardingGate");if(gate)gate.hidden=true;
 document.body.classList.remove("onboarding-locked");
}
async function createFirstCloudCollection(event){
 event?.preventDefault();
 const name=$("#onboardingCollectionName")?.value.trim();
 const target=Math.max(1,Number(document.querySelector('input[name="onboardingTarget"]:checked')?.value)||5);
 const message=$("#onboardingMessage"),button=$("#onboardingCreateButton");
 if(!name){if(message)message.textContent="Escribe un nombre para la colección.";return}
 if(button){button.disabled=true;button.textContent="Creando colección…"}
 if(message)message.textContent="Sincronizando con la nube…";
 try{
   const seedType=Object.keys(masterInventories)[0]||"world-cup-2026-main";
   const base=structuredClone(masterInventories[seedType]||originalInventory);
   const blank=Object.fromEntries(Object.entries(base).map(([team,stickers])=>[team,Object.fromEntries(Object.keys(stickers).map(code=>[code,0]))]));
   const first=defaultProject(name,target,blank,seedType);
   projects={[first.id]:first};activeProjectId=first.id;
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));localStorage.setItem(ACTIVE_PROJECT_KEY,activeProjectId);
   loadProjectState();renderProjectsList();
   cloudReady=true;await saveCloudState();startRealtime();
   $("#onboardingCreateStep").hidden=true;$("#onboardingReadyStep").hidden=false;
 }catch(error){
   console.error(error);if(message)message.textContent="No se pudo crear la colección. Comprueba la conexión e inténtalo de nuevo.";
 }finally{if(button){button.disabled=false;button.textContent="Crear colección"}}
}
async function initialCloudSync(session){
 const client=cloudClient();if(!client||!session)return;
 await appDataReadyPromise;
 cloudSession=session;setCloudStatus("Conectando con la nube…","syncing");
 const {data,error}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",session.user.id).maybeSingle();
 if(error){setCloudStatus("Falta preparar la base de datos","error");console.error(error);hideAppSplash();return}
 cloudReady=true;
 if(data?.payload?.projects&&Object.keys(data.payload.projects).length){
   const meta=cloudMeta(),localFp=stateFingerprint(),remoteFp=stateFingerprint(data.payload.projects,data.payload.activeProjectId),baseline=meta.fingerprint||null;
   if(localFp===remoteFp){cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:session.user.id,fingerprint:localFp});setCloudStatus("✓ Sincronizado","synced")}
   else if(baseline&&localFp===baseline){createAutoBackup("antes-de-actualizar-desde-nube");await applyCloudPayload(data,{silent:true})}
   else if(baseline&&remoteFp===baseline){cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;saveExternalCloudBackup(data,"nube-anterior");await saveCloudState({force:true})}
   else{
     const choice=await askCloudConflict(data,{reason:"initial"});
     if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");await applyCloudPayload(data,{silent:true})}
     else if(choice==="local"){saveExternalCloudBackup(data,"antes-de-reemplazar-nube");cloudRevision=Number(data.revision)||0;cloudLastUpdatedAt=data.updated_at||null;await saveCloudState({force:true})}
     else setCloudStatus("Sin sincronizar: elige una copia","error");
   }
   startRealtime();showReturningWelcome(session);
 }else{cloudReady=false;openFirstCollectionOnboarding(session)}
}
function startRealtime(){
 const client=cloudClient();if(!client||!cloudSession)return;
 if(cloudSubscription)client.removeChannel(cloudSubscription);
 cloudSubscription=client.channel(`wc-state-${cloudSession.user.id}`).on("postgres_changes",{event:"UPDATE",schema:"public",table:CLOUD_STATE_TABLE,filter:`user_id=eq.${cloudSession.user.id}`},payload=>{
   const row=payload.new;if(!row||Number(row.revision)<=cloudRevision)return;reconcileCloudRow(row,{reason:"realtime"}).catch(console.error);
 }).subscribe();
}
window.addEventListener("wc-auth-ready",event=>{if(event.detail?.session)initialCloudSync(event.detail.session).catch(console.error)});
window.addEventListener("wc-auth-changed",event=>{
 const session=event.detail?.session;if(session&&!cloudReady)initialCloudSync(session).catch(console.error);
 if(!session){cloudSession=null;cloudReady=false;if(cloudSubscription)cloudClient()?.removeChannel(cloudSubscription);cloudSubscription=null}
});
function hasLocalPendingChanges(){
 return stateFingerprint()!==(cloudMeta().fingerprint||stateFingerprint())||Object.values(projects||{}).some(project=>Object.keys(project?.pendingSync||{}).length>0)||Object.keys(pendingSync||{}).length>0;
}
async function reconcileCloudRow(row,{reason="manual"}={}){
 if(!row?.payload?.projects||cloudConflictOpen)return false;
 const localFp=stateFingerprint(),remoteFp=stateFingerprint(row.payload.projects,row.payload.activeProjectId),baseline=cloudMeta().fingerprint||null;
 if(localFp===remoteFp){cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;writeCloudMeta({revision:cloudRevision,updatedAt:cloudLastUpdatedAt,userId:cloudSession?.user?.id||null,fingerprint:localFp});setCloudStatus("✓ Sincronizado","synced");return true}
 if(baseline&&localFp===baseline){createAutoBackup("antes-de-actualizar-desde-nube");return applyCloudPayload(row,{silent:reason!=="manual"})}
 if(baseline&&remoteFp===baseline){cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;saveExternalCloudBackup(row,"nube-anterior");return saveCloudState({force:true})}
 const choice=await askCloudConflict(row,{reason});
 if(choice==="cloud"){createAutoBackup("antes-de-usar-nube");return applyCloudPayload(row)}
 if(choice==="local"){saveExternalCloudBackup(row,"antes-de-reemplazar-nube");cloudRevision=Number(row.revision)||cloudRevision;cloudLastUpdatedAt=row.updated_at||cloudLastUpdatedAt;return saveCloudState({force:true})}
 setCloudStatus("Sin sincronizar: elige una copia","error");return false;
}
async function refreshCloudState({reason="manual"}={}){
 const client=cloudClient();if(!client||!cloudSession||!navigator.onLine||cloudApplying||cloudConflictOpen)return false;
 const {data,error}=await client.from(CLOUD_STATE_TABLE).select("payload,revision,updated_at").eq("user_id",cloudSession.user.id).maybeSingle();
 if(error){console.error("No se pudo refrescar la nube",reason,error);setCloudStatus("Sin conexión con la nube","error");return false}
 if(!data?.payload?.projects)return false;
 const remoteRevision=Number(data.revision)||0;
 if(remoteRevision<cloudRevision)return false;
 return reconcileCloudRow(data,{reason});
}
window.addEventListener("online",()=>{if(cloudSession){cloudReady=true;refreshCloudState({reason:"online"}).catch(console.error)}});
window.addEventListener("focus",()=>{if(cloudSession)refreshCloudState({reason:"focus"}).catch(console.error)});
document.addEventListener("visibilitychange",()=>{
 if(document.visibilityState==="visible"&&cloudSession)refreshCloudState({reason:"foreground"}).catch(console.error);
});

// Build 703.1: foreground recovery for iOS PWAs and desktop browser tabs.
// A token refresh or a restored page must not leave the loading overlay above
// an application whose cloud state is already available.
let foregroundRecoveryTimer=null;
function recoverFromForeground(){
 if(document.visibilityState&&document.visibilityState!=="visible")return;
 clearTimeout(foregroundRecoveryTimer);
 foregroundRecoveryTimer=setTimeout(()=>{
   const authGate=$("#authGate");
   const onboardingGate=$("#onboardingGate");
   const authIsOpen=authGate&&!authGate.hidden;
   const onboardingIsOpen=onboardingGate&&!onboardingGate.hidden;
   if(cloudReady&&!authIsOpen&&!onboardingIsOpen){
     hideAppSplash();
   }
 },120);
}
document.addEventListener("visibilitychange",recoverFromForeground);
window.addEventListener("pageshow",recoverFromForeground);
window.addEventListener("focus",recoverFromForeground);

function loadProjectState(){
 const p=projects[activeProjectId];
 ensureProjectTeamOrder(p);
 inventory=structuredClone(p.inventory);
 history=structuredClone(p.history||[]);
 finishedSessions=structuredClone(p.finishedSessions||[]);
 sessionStats=structuredClone(p.sessionStats||{plus:0,minus:0,startedAt:new Date().toISOString()});
 exchange=structuredClone(p.exchange||{give:{},receive:{}});
 pendingSync=structuredClone(p.pendingSync||{});
 lastSyncedAt=p.lastSyncedAt||null;
 targetInput.value=String(p.target||1);
 targetValue.textContent=String(p.target||1);
 const ui=p.ui||{};
 collectionTeamFilter=ui.teamFilter||"all";
 collectionFilter=ui.collectionFilter||"all";
 currentFilter=ui.currentFilter||"all";
 collectionSort=ui.sort||"album";
 mainTab=ui.mainTab||"collection";
 populateTeams();
 teamSelect.value=collectionTeamFilter==="all"?"all":(inventory[collectionTeamFilter]?collectionTeamFilter:"all");
 updateCurrentTeamUI();
 const sortNode=$("#collectionSort");if(sortNode)sortNode.value=collectionSort;
 document.querySelectorAll(".collection-filter-button").forEach(button=>button.classList.toggle("active",button.dataset.collectionFilter===collectionFilter));
 document.querySelectorAll(".tab").forEach(button=>button.classList.toggle("active",button.dataset.filter===currentFilter));
 $("#activeProjectName").textContent=p.name;
 renderAll();updateNavigationBadges();updateSyncUI();
 requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:Number(ui.scrollY)||0,left:0,behavior:"auto"})));
}
function commitProjectState(){
 commitProjectStateLocalOnly();
 scheduleCloudSave();
}

function updateConnectionStatus(){
 const online=navigator.onLine;
 document.body.classList.toggle("is-online",online);
 document.body.classList.toggle("is-offline",!online);
}
function showLoading(message="Cargando…"){
 let overlay=$("#loadingOverlay");
 if(!overlay){
   overlay=document.createElement("div");
   overlay.id="loadingOverlay";
   overlay.className="loading-overlay";
   overlay.innerHTML=`<div class="loading-card"><div class="loading-spinner"></div><strong id="loadingMessage"></strong></div>`;
   document.body.appendChild(overlay);
 }
 $("#loadingMessage").textContent=message;
 overlay.hidden=false;
 overlay.style.display="grid";
}
function hideLoading(){
 const overlay=$("#loadingOverlay");
 if(!overlay)return;
 overlay.hidden=true;
 overlay.style.display="none";
}
window.addEventListener("online",updateConnectionStatus);
window.addEventListener("offline",updateConnectionStatus);

async function loadData(){
 showLoading("Preparando tus colecciones…");
 const [i,f,g,s]=await Promise.all([
   fetch("./data/inventory.json"),
   fetch("./data/flags-v4.json"),
   fetch("./data/team-groups.json"),
   fetch("./data/projects-seed.json")
 ]);
 originalInventory=await i.json();flags=await f.json();teamGroups=await g.json();
 const seedData=await s.json();
 projects=readJSON(PROJECTS_KEY,null);
 activeProjectId=localStorage.getItem(ACTIVE_PROJECT_KEY)||"";
 bootstrapProjectsFromSeed(seedData);
 if(!projects||!Object.keys(projects).length||!projects[activeProjectId])migrateLegacy(seedData.projects);
 loadProjectState();
 renderProjectsList();
 setupSettingsCenter();
 document.body.classList.add("main-tab-collection");
 updateConnectionStatus();
 appDataReady=true;appDataReadyResolve?.();window.dispatchEvent(new CustomEvent("wc-app-data-ready"));
 hideLoading();
}
function readJSON(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
function normalize(s){return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}
function flagHTML(team){
 if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"){
   if(isLigaEsteInsertTeam(team))return `<span class="ligaeste-insert-mark" aria-hidden="true">✦</span>`;
   const crest=ligaEsteCrestUrl(team);
   if(crest)return `<span class="ligaeste-crest-wrap"><span class="ligaeste-crest-fallback">${collectionSafeText(team).slice(0,2).toUpperCase()}</span><img class="ligaeste-team-crest" src="${crest}" alt="Escudo de ${collectionSafeText(team)}" onerror="this.style.display='none'"></span>`;
 }
 const flag=flags[team]||TEAM_FLAG_EMOJI?.[team]||"";
 if(flag)return /^(?:\.|\/|https?:|data:)/.test(flag)?`<img src="${flag}" alt="">`:`<span class="inline-flag-emoji" aria-hidden="true">${flag}</span>`;
 return '<span class="inline-flag-emoji" aria-hidden="true"></span>';
}
function formatTime(iso){return new Date(iso).toLocaleTimeString("es-ES",{hour:"2-digit",minute:"2-digit"})}
function getTarget(){return Math.max(1,Number(targetInput.value)||5)}
function keyFor(team,code){return `${team}|||${code}`}
function splitKey(key){const [team,code]=key.split("|||");return{team,code}}
function showToast(msg){toast.textContent=msg;toast.classList.add("show");clearTimeout(window.__tt);window.__tt=setTimeout(()=>toast.classList.remove("show"),900)}
function vibrate(){if("vibrate"in navigator)navigator.vibrate(12)}


function syncKey(team,code){return `${team}|||${code}`}
function markPendingSync(team,code,previous,next,source="manual"){
 const key=syncKey(team,code);
 const existing=pendingSync[key];
 pendingSync[key]={
   team,code,
   firstPrevious:existing?existing.firstPrevious:previous,
   latestValue:next,
   updatedAt:new Date().toISOString(),
   source
 };
}
function pendingSyncCount(){return Object.keys(pendingSync).length}
function isPendingSync(team,code){return Boolean(pendingSync[syncKey(team,code)])}
function updateSyncUI(){
 const count=pendingSyncCount();
 const countText=`${count} ${count===1?"cambio pendiente":"cambios pendientes"}`;
 const countNode=$("#pendingSyncCount");
 const badge=$("#projectPendingBadge");
 const button=$("#markSyncedButton");
 if(countNode)countNode.textContent=countText;
 if(badge)badge.textContent=`${count} pendientes`;
 if(button)button.disabled=count===0;
 if($("#lastSyncText")){
   $("#lastSyncText").textContent=lastSyncedAt
     ? `Última sincronización: ${new Date(lastSyncedAt).toLocaleString("es-ES",{dateStyle:"short",timeStyle:"short"})}`
     : "Todavía no sincronizado";
 }
}

function saveAll(message="Todo guardado"){
 commitProjectState();
 $("#saveStatus").textContent=message;
 $("#saveDot").textContent="✓";
}
function collectionAllTeamsLabel(){const type=inferCollectionType(projects?.[activeProjectId]);return type==="world-cup-2026"?"Todas las selecciones":type==="liga-este-2026-27"?"Todos los clubes e inserts":"Todos los equipos e inserts";}
function populateTeams(){
 teamSelect.innerHTML="";
 const allOption=document.createElement("option");
 allOption.value="all";allOption.textContent=collectionAllTeamsLabel();
 teamSelect.appendChild(allOption);
 currentTeamOrder().forEach(team=>{
   const option=document.createElement("option");
   option.value=team;option.textContent=team;
   teamSelect.appendChild(option);
 });
 renderTeamList(currentTeamOrder());
}

function updateCurrentTeamUI(){
 const team=teamSelect.value||"all",flag=$("#currentTeamFlag"),emoji=$("#currentTeamEmoji");
 if(team==="all"){
   $("#currentTeamName").textContent=collectionAllTeamsLabel();
   flag.removeAttribute("src");
   flag.alt="Todas";
   flag.style.display="none";
   if(emoji){emoji.hidden=true;emoji.textContent="";}
   return;
 }
 $("#currentTeamName").textContent=team;
 if(team==="Coca-Cola"||isExtraTeam(team)){
   flag.removeAttribute("src");
   flag.style.display="none";
   if(emoji){emoji.textContent=team==="Coca-Cola"?"🥤":(extraVariantForTeam(team)?.icon||"✨");emoji.hidden=false;}
   return;
 }
 const flagSource=flags[team]||"";
 if(!flagSource){
   if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"&&!isLigaEsteInsertTeam(team)){const crest=ligaEsteCrestUrl(team);if(crest){if(emoji){emoji.hidden=true;emoji.textContent="";}flag.style.display="";flag.src=crest;flag.alt=team;return;}}
   flag.removeAttribute("src");flag.style.display="none";
   if(emoji){emoji.textContent=isLigaEsteInsertTeam(team)?"✦":"";emoji.hidden=false;}
   return;
 }
 if(emoji){emoji.hidden=true;emoji.textContent="";}
 flag.style.display="";
 flag.src=flagSource;
 flag.alt=team;
}
function selectTeam(team){
 collectionTeamFilter=team&&inventory[team]?team:"all";
 teamSelect.value=collectionTeamFilter;
 teamSearch.value="";
 $("#dialogSearch").value="";
 suggestions.hidden=true;
 updateCurrentTeamUI();
 saveAll();
 renderAll();
}
function renderTeamList(teams){
 const isLiga=inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27";
 const worldButton=`<button class="team-option world-option" data-team="all">
   <span class="team-option-world-icon">${isLiga?"🏟️":"🌍"}</span><strong>${isLiga?"Todos los clubes":"Todas las selecciones"}</strong>
 </button>`;
 const pinned=["FWC","Coca-Cola",...EXTRA_TEAMS].filter(team=>teams.includes(team));
 const regular=teams.filter(team=>!pinned.includes(team));
 const categoryButtons=pinned.map(team=>{
   const variant=extraVariantForTeam(team);
   const label=team==="Coca-Cola"?"Coca-Cola · CC":team==="FWC"?"FWC · Especiales":`Extra Stickers · ${variant.label}`;
   return `<button class="team-option featured-team-option ${variant?`extra-option extra-${variant.key}`:""}" data-team="${team}"><span class="team-option-world-icon">${TEAM_FLAG_EMOJI[team]||variant?.icon||""}</span><strong>${label}</strong></button>`;
 }).join("");
 $("#teamList").innerHTML=worldButton+categoryButtons+regular.map(team=>`<button class="team-option" data-team="${team}">${flagHTML(team)}<strong>${team}</strong></button>`).join("");
 $("#teamList").querySelectorAll("button").forEach(button=>button.onclick=()=>{
   selectTeam(button.dataset.team);
   $("#teamDialog").close();
 });
}

function stateFor(qty){
 const need=Math.max(0,getTarget()-qty),offer=Math.max(0,qty-getTarget());
 if(need>0)return{kind:"need",text:`🔴 −${need}`,need,offer};
 if(offer>0)return{kind:"offer",text:`🟢 +${offer}`,need,offer};
 return{kind:"just",text:"🟡 JUSTO",need,offer};
}

function createCard(team,code,qty){
 const st=stateFor(qty),card=document.createElement("article");
 const stagedGive=getExchangeQty("give",team,code);
 const stagedReceive=getExchangeQty("receive",team,code);
 card.className=`sticker-card sticker-card-premium ${st.kind}`;
 card.dataset.code=code;
 card.innerHTML=`
   <div class="sticker-main">
     <div class="sticker-number ${isExtraTeam(team)?"extra-player-name":""}">${stickerDisplayLabel(team,code)}</div>
     <div class="sticker-meta">
       <span class="sticker-stock-label">Stock</span>
       <strong class="sticker-stock-value">x${qty}</strong>
       <span class="status ${st.kind}">${st.text}</span>
     </div>
   </div>
   <div class="sticker-actions">
     ${currentView!=="exchange"||currentFilter!=="need"
       ? `<button class="step-button minus ${currentView==="exchange"?"exchange-action give-action":""}" aria-label="${currentView==="exchange"?"Marcar para dar":"Restar stock"}">
            <span class="button-symbol">${currentView==="exchange"?"DAR":"−"}</span>
            ${currentView==="exchange"&&stagedGive?`<small>✓ x${stagedGive}</small>`:""}
          </button>`
       : `<span class="exchange-action-placeholder"></span>`}
     ${currentView!=="exchange"||currentFilter!=="offer"
       ? `<button class="step-button plus ${currentView==="exchange"?"exchange-action receive-action":""}" aria-label="${currentView==="exchange"?"Marcar para recibir":"Sumar stock"}">
            <span class="button-symbol">${currentView==="exchange"?"RECIBIR":"+"}</span>
            ${currentView==="exchange"&&stagedReceive?`<small>✓ x${stagedReceive}</small>`:""}
          </button>`
       : `<span class="exchange-action-placeholder"></span>`}
   </div>`;
 const minusButton=card.querySelector(".minus");
 const plusButton=card.querySelector(".plus");
 if(minusButton)minusButton.onclick=e=>{
   const isExchange=currentView==="exchange";
   showActionFeedback(e.currentTarget,isExchange?"give":"minus",isExchange?"DAR ✓":"−1");
   const next=isExchange?getExchangeQty("give",team,code)+1:Math.max(0,(Number(inventory[team][code])||0)-1);
   showTopFeedback({
     type:isExchange?"exchange":"negative",
     title:`${stickerFeedbackLabel(team,code)} ${isExchange?"preparado para dar":"eliminado"}`,
     detail:isExchange?`Marcados: x${next}`:`Inventario: x${next}`,
     key:`${isExchange?"give":"minus"}:${team}:${code}`
   });
   if(isExchange)stageFromMainList("give",team,code,e.currentTarget);
   else changeQuantity(team,code,-1,e.currentTarget);
 };
 if(plusButton)plusButton.onclick=e=>{
   const isExchange=currentView==="exchange";
   showActionFeedback(e.currentTarget,isExchange?"receive":"plus",isExchange?"RECIBIR ✓":"+1");
   const next=isExchange?getExchangeQty("receive",team,code)+1:(Number(inventory[team][code])||0)+1;
   showTopFeedback({
     type:isExchange?"exchange":"positive",
     title:`${stickerFeedbackLabel(team,code)} ${isExchange?"preparado para recibir":"añadido"}`,
     detail:isExchange?`Marcados: x${next}`:`Inventario: x${next}`,
     key:`${isExchange?"receive":"plus"}:${team}:${code}`
   });
   if(isExchange)stageFromMainList("receive",team,code,e.currentTarget);
   else changeQuantity(team,code,1,e.currentTarget);
 };
 return card;
}

function isCurrentAlbumComplete(){const target=getTarget();return currentTeamOrder().every(team=>Object.values(inventory?.[team]||{}).every(qty=>Number(qty)>=target));}
function checkAlbumCompletion(previouslyComplete=false){
 const project=projects?.[activeProjectId];if(!project)return;project.ui=project.ui||{};
 const nowComplete=isCurrentAlbumComplete(),key=`${getTarget()}`;
 if(!nowComplete){if(project.ui.albumCompletedTarget===key)delete project.ui.albumCompletedTarget;return;}
 if(previouslyComplete||project.ui.albumCompletedTarget===key)return;
 project.ui.albumCompletedTarget=key;persistProjects();
 const overlay=$("#albumCompleteOverlay");if(overlay){$("#albumCompleteName").textContent=project.name||"Álbum";overlay.hidden=false;overlay.classList.add("show");navigator.vibrate?.([80,50,120]);}
}
function changeQuantity(team,code,delta,button){
 const wasComplete=isCurrentAlbumComplete();
 const previous=Number(inventory[team][code])||0,next=Math.max(0,previous+delta);
 if(next===previous)return;
 history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta,at:new Date().toISOString()});
 inventory[team][code]=next;
 markPendingSync(team,code,previous,next,"inventario");
 delta>0?sessionStats.plus++:sessionStats.minus++;
 saveAll("✓ Guardado ahora");vibrate();
 const card=button.closest(".sticker-card");
 card?.classList.add(delta>0?"flash-card-plus":"flash-card-minus");
 setTimeout(()=>card?.classList.remove("flash-card-plus","flash-card-minus"),430);
 renderAll();checkAlbumCompletion(wasComplete);
 showToast(`✓ ${stickerFeedbackLabel(team,code)} actualizado · x${next}`);
}
function matchesFilter(qty){
 const kind=stateFor(qty).kind;
 return currentFilter==="all"||(currentFilter==="need"&&kind==="need")||(currentFilter==="offer"&&kind==="offer");
}
function renderCards(){
 const team=inventory[teamSelect.value]?teamSelect.value:currentTeamOrder()[0];
 if(!team||!inventory[team])return;
 grid.innerHTML="";
 Object.entries(inventory[team]).sort(([a],[b])=>Number(a)-Number(b)).forEach(([code,q])=>{
   q=Number(q)||0;if(matchesFilter(q))grid.appendChild(createCard(team,code,q));
 });
 emptyState.hidden=grid.children.length>0;
}


function updateSettingsTargetUI(){
 const node=$("#settingsTargetValue");
 if(node)node.textContent=String(getTarget());
}

function updateGlobalDashboard(){
 const target=getTarget();
 let total=0,missing=0,repeats=0;
 currentTeamOrder().forEach(team=>{const stickers=inventory[team]||{};
   Object.values(stickers).forEach(raw=>{
     const qty=Number(raw)||0;
     total+=qty;
     missing+=Math.max(0,target-qty);
     repeats+=Math.max(0,qty-target);
   });
 });
 const totalNode=$("#globalInventoryTotal");
 const missingNode=$("#globalMissingTotal");
 const repeatsNode=$("#globalRepeatsTotal");
 if(totalNode)totalNode.textContent=total.toLocaleString("es-ES");
 if(missingNode)missingNode.textContent=missing.toLocaleString("es-ES");
 if(repeatsNode)repeatsNode.textContent=repeats.toLocaleString("es-ES");
}

function updateSummary(){
 const team=inventory[teamSelect.value]?teamSelect.value:currentTeamOrder()[0];
 if(!team||!inventory[team])return;
 const values=Object.values(inventory[team]).map(Number);
 let need=0,offer=0,total=0,needCards=0,offerCards=0;
 values.forEach(q=>{const s=stateFor(q);need+=s.need;offer+=s.offer;total+=q;if(s.kind==="need")needCards++;if(s.kind==="offer")offerCards++;});
 $("#needTotal").textContent=need;$("#offerTotal").textContent=offer;$("#selectionTotal").textContent=total;
 $("#tabAllCount").textContent=values.length;$("#tabNeedCount").textContent=needCards;$("#tabOfferCount").textContent=offerCards;
 $("#sessionChanges").textContent=`+${sessionStats.plus} / −${sessionStats.minus}`;
 const balance=sessionStats.plus-sessionStats.minus;$("#sessionBalance").textContent=(balance>0?"+":"")+balance;
}
function updateLastChange(){
 const last=history.at(-1);
 $("#lastChange").textContent=last?`Último cambio: ${last.team} ${last.code} · ${last.delta>0?"+1":"−1"} · ${formatTime(last.at)}`:"Sin cambios todavía";
}

function isShinySticker(team,code){
 return team==="FWC"||(team!=="Coca-Cola"&&code==="01");
}
function collectionStickerMatches(team,code,qty){
 const target=getTarget();
 const effectiveFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":collectionFilter;
 if(effectiveFilter==="all")return true;
 if(effectiveFilter==="missing")return qty<target;
 if(effectiveFilter==="repeats")return qty>target;
 if(effectiveFilter==="shiny")return isShinySticker(team,code);
 if(effectiveFilter==="collaboration")return team==="Coca-Cola";
 return true;
}


let topFeedbackTimer=null;
let topFeedbackState={key:"",count:0,lastAt:0};

function showTopFeedback({type,title,detail,key}){
 const capsule=$("#topFeedbackCapsule");
 if(!capsule)return;

 const now=Date.now();
 if(key&&topFeedbackState.key===key&&now-topFeedbackState.lastAt<850){
   topFeedbackState.count+=1;
 }else{
   topFeedbackState={key:key||"",count:1,lastAt:now};
 }
 topFeedbackState.lastAt=now;

 capsule.classList.remove("positive","negative","exchange","show");
 capsule.classList.add(type);
 $("#topFeedbackIcon").textContent=type==="positive"?"✓":type==="negative"?"−":"⇄";
 $("#topFeedbackTitle").textContent=title;
 $("#topFeedbackDetail").textContent=topFeedbackState.count>1
   ? `${detail} · ${topFeedbackState.count} acciones`
   : detail;

 capsule.hidden=false;
 void capsule.offsetWidth;
 capsule.classList.add("show");

 clearTimeout(topFeedbackTimer);
 topFeedbackTimer=setTimeout(()=>{
   capsule.classList.remove("show");
   setTimeout(()=>{capsule.hidden=true},220);
 },1250);
}

function animateCounter(card,positive){
 if(!card)return;
 const counter=card.querySelector(".collection-sticker-qty,.sticker-stock-value");
 if(!counter)return;
 counter.classList.remove("counter-pop","positive","negative");
 void counter.offsetWidth;
 counter.classList.add("counter-pop",positive?"positive":"negative");
 setTimeout(()=>counter.classList.remove("counter-pop","positive","negative"),460);
}

function showActionFeedback(button,type,label){
 if(!button)return;
 button.classList.remove("press-feedback");
 void button.offsetWidth;
 button.classList.add("press-feedback");

 const card=button.closest(".collection-sticker,.sticker-card");
 if(!card)return;
 animateCounter(card,type==="plus"||type==="receive");

 const positive=type==="plus"||type==="receive";
 card.classList.remove("feedback-plus","feedback-minus");
 void card.offsetWidth;
 card.classList.add(positive?"feedback-plus":"feedback-minus");

 card.querySelectorAll(".action-feedback").forEach(node=>node.remove());
 const bubble=document.createElement("span");
 bubble.className=`action-feedback ${type}`;
 bubble.textContent=label;
 card.appendChild(bubble);

 setTimeout(()=>{
   bubble.remove();
   card.classList.remove("feedback-plus","feedback-minus");
   button.classList.remove("press-feedback");
 },760);

 if(navigator.vibrate){
   navigator.vibrate(positive?[18]:[12,22,12]);
 }
}

function createGlobalSticker(team,code,qty){
 const state=stateFor(qty);
 const item=document.createElement("article");
 const giveQty=getExchangeQty("give",team,code);
 const receiveQty=getExchangeQty("receive",team,code);
 const staged=giveQty||receiveQty;
 item.className=`collection-sticker ${state.kind} ${isShinySticker(team,code)?"shiny":""} ${staged?"exchange-staged":""}`;
 const exchangeMode=currentView==="exchange";
 item.innerHTML=`<div><span class="collection-sticker-code ${isExtraTeam(team)?"extra-player-name":""}">${stickerDisplayLabel(team,code)}</span><div class="collection-sticker-qty">x${qty}</div></div>
 <div class="collection-sticker-actions ${exchangeMode?"exchange-actions":""}">
   ${exchangeMode
     ? `${currentFilter!=="need"?`<button class="give-global" data-type="give">DAR${giveQty?` <small>✓x${giveQty}</small>`:""}</button>`:"<span></span>"}
        ${currentFilter!=="offer"?`<button class="receive-global" data-type="receive">RECIBIR${receiveQty?` <small>✓x${receiveQty}</small>`:""}</button>`:"<span></span>"}`
     : `<button data-delta="-1" aria-label="Restar">−</button><button data-delta="1" aria-label="Sumar">+</button>`}
 </div>`;
 if(exchangeMode){
   item.querySelectorAll("button[data-type]").forEach(button=>button.onclick=()=>{
     const type=button.dataset.type;
     const current=getExchangeQty(type,team,code);
     if(type==="give"&&current>=qty){
       showToast(`No puedes marcar más de x${qty} para dar`);
       return;
     }
     setExchangeQty(type,team,code,current+1);
     showActionFeedback(button,type,type==="give"?"DAR ✓":"RECIBIR ✓");
     showTopFeedback({
       type:"exchange",
       title:stickerFeedbackLabel(team,code),
       detail:type==="give"?`Preparado para dar · x${current+1}`:`Preparado para recibir · x${current+1}`,
       key:`${type}:${team}:${code}`
     });
     saveAll("Intercambio preparado");
     setTimeout(()=>renderAll(),130);
   });
 }else{
   item.querySelectorAll("button[data-delta]").forEach(button=>button.onclick=()=>{
     const delta=Number(button.dataset.delta);
     const previous=Number(inventory[team][code])||0;
     const next=Math.max(0,previous+delta);
     if(next===previous)return;
     inventory[team][code]=next;
     markPendingSync(team,code,previous,next,"coleccion-global");
     history.push({id:makeId(),team,code,previous,next,delta,at:new Date().toISOString()});
     delta>0?sessionStats.plus++:sessionStats.minus++;
     saveAll("✓ Guardado ahora");
     showActionFeedback(button,delta>0?"plus":"minus",delta>0?"+1":"−1");
     showTopFeedback({
       type:delta>0?"positive":"negative",
       title:`${stickerFeedbackLabel(team,code)} ${delta>0?"añadido":"eliminado"}`,
       detail:`Inventario: x${next}`,
       key:`${delta>0?"plus":"minus"}:${team}:${code}`
     });
     setTimeout(()=>renderAll(),130);
   });
 }
 return item;
}

function activeShareListType(){
 const effectiveFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":collectionFilter;
 return effectiveFilter==="missing"||effectiveFilter==="repeats"?effectiveFilter:null;
}

function updateShareCollectionButton(){
 const button=$("#shareCollectionListButton");
 if(!button)return;
 const type=activeShareListType();
 button.hidden=!type;
 button.setAttribute("aria-label",type==="missing"?"Compartir cromos que me faltan":"Compartir cromos repetidos");
}

const TEAM_FLAG_EMOJI={
 "México":"🇲🇽","Sudáfrica":"🇿🇦","Corea del Sur":"🇰🇷","Chequia":"🇨🇿",
 "Canadá":"🇨🇦","Bosnia y Herzegovina":"🇧🇦","Catar":"🇶🇦","Suiza":"🇨🇭",
 "Brasil":"🇧🇷","Marruecos":"🇲🇦","Haití":"🇭🇹","Escocia":"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
 "Estados Unidos":"🇺🇸","Paraguay":"🇵🇾","Australia":"🇦🇺","Turquía":"🇹🇷",
 "Alemania":"🇩🇪","Curazao":"🇨🇼","Costa de Marfil":"🇨🇮","Ecuador":"🇪🇨",
 "Países Bajos":"🇳🇱","Japón":"🇯🇵","Suecia":"🇸🇪","Túnez":"🇹🇳",
 "Bélgica":"🇧🇪","Egipto":"🇪🇬","Irán":"🇮🇷","Nueva Zelanda":"🇳🇿",
 "España":"🇪🇸","Cabo Verde":"🇨🇻","Arabia Saudita":"🇸🇦","Uruguay":"🇺🇾",
 "Francia":"🇫🇷","Senegal":"🇸🇳","Irak":"🇮🇶","Noruega":"🇳🇴",
 "Argentina":"🇦🇷","Argelia":"🇩🇿","Austria":"🇦🇹","Jordania":"🇯🇴",
 "Portugal":"🇵🇹","RD Congo":"🇨🇩","Uzbekistán":"🇺🇿","Colombia":"🇨🇴",
 "Inglaterra":"🏴󠁧󠁢󠁥󠁮󠁧󠁿","Croacia":"🇭🇷","Ghana":"🇬🇭","Panamá":"🇵🇦",
 "FWC":"⭐","Coca-Cola":"🥤","Extra · Epic":"🟣","Extra · Bronce":"🟤","Extra · Plata":"⚪","Extra · Oro":"🟡"
};

const PANINI_TEAM_CODES={
 "FWC":"FWC","CC":"Coca-Cola","EPI":"Extra · Epic","BRO":"Extra · Bronce","PLA":"Extra · Plata","ORO":"Extra · Oro","MEX":"México","RSA":"Sudáfrica","KOR":"Corea del Sur","CZE":"Chequia",
 "CAN":"Canadá","BIH":"Bosnia y Herzegovina","QAT":"Catar","SUI":"Suiza",
 "BRA":"Brasil","MAR":"Marruecos","HAI":"Haití","SCO":"Escocia",
 "USA":"Estados Unidos","PAR":"Paraguay","AUS":"Australia","TUR":"Turquía",
 "GER":"Alemania","CUW":"Curazao","CIV":"Costa de Marfil","ECU":"Ecuador",
 "NED":"Países Bajos","JPN":"Japón","SWE":"Suecia","TUN":"Túnez",
 "BEL":"Bélgica","EGY":"Egipto","IRN":"Irán","NZL":"Nueva Zelanda",
 "ESP":"España","CPV":"Cabo Verde","KSA":"Arabia Saudita","URU":"Uruguay",
 "FRA":"Francia","SEN":"Senegal","IRQ":"Irak","NOR":"Noruega",
 "ARG":"Argentina","ALG":"Argelia","AUT":"Austria","JOR":"Jordania",
 "POR":"Portugal","COD":"RD Congo","UZB":"Uzbekistán","COL":"Colombia",
 "ENG":"Inglaterra","CRO":"Croacia","GHA":"Ghana","PAN":"Panamá"
};
const TEAM_TO_PANINI_CODE=Object.fromEntries(Object.entries(PANINI_TEAM_CODES).map(([code,team])=>[team,code]));
const PANINI_CODE_ALIASES={JAP:"JPN",SAU:"KSA",NLD:"NED",HOL:"NED",KOR:"KOR",RDC:"COD",DRC:"COD",BOS:"BIH",CZR:"CZE",CRC:"CUW"};

// Nombres admitidos para listas copiadas desde WhatsApp, en castellano e inglés.
const PANINI_TEAM_NAME_ALIASES={
 FWC:["fwc","fifa world cup","mundial"],CC:["cc","coca cola","coca-cola","cocacola","colaboracion coca cola","colaboración coca cola"],
 MEX:["mexico","méxico"],RSA:["south africa","sudafrica","sudáfrica"],KOR:["south korea","korea republic","corea del sur","corea"],CZE:["czechia","czech republic","chequia","republica checa","república checa"],
 CAN:["canada","canadá"],BIH:["bosnia and herzegovina","bosnia-herzegovina","bosnia y herzegovina","bosnia"],QAT:["qatar","catar"],SUI:["switzerland","suiza"],
 BRA:["brazil","brasil"],MAR:["morocco","marruecos","morroco","marocco"],HAI:["haiti","haití"],SCO:["scotland","escocia"],
 USA:["united states","usa","estados unidos","eeuu","estados unidos de america"],PAR:["paraguay"],AUS:["australia"],TUR:["turkey","turkiye","türkiye","turquia","turquía"],
 GER:["germany","alemania"],CUW:["curacao","curaçao","curazao","curazao"],CIV:["ivory coast","cote d ivoire","côte d'ivoire","costa de marfil"],ECU:["ecuador"],
 NED:["netherlands","holland","paises bajos","países bajos","holanda"],JPN:["japan","japon","japón"],SWE:["sweden","suecia"],TUN:["tunisia","tunez","túnez"],
 BEL:["belgium","belgica","bélgica"],EGY:["egypt","egipto"],IRN:["iran","irán"],NZL:["new zealand","nueva zelanda"],
 ESP:["spain","espana","españa"],CPV:["cape verde","cabo verde"],KSA:["saudi arabia","arabia saudita","arabia saudi"],URU:["uruguay"],
 FRA:["france","francia"],SEN:["senegal"],IRQ:["iraq","irak"],NOR:["norway","noruega"],
 ARG:["argentina"],ALG:["algeria","argelia"],AUT:["austria"],JOR:["jordan","jordania"],
 POR:["portugal"],COD:["dr congo","d r congo","democratic republic of congo","rd congo","republica democratica del congo","república democrática del congo","congo"],UZB:["uzbekistan","uzbekistán"],COL:["colombia"],
 ENG:["england","inglaterra"],CRO:["croatia","croacia"],GHA:["ghana"],PAN:["panama","panamá"]
};
function normalizeTradeName(value){return String(value||"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g," ").trim();}
const PANINI_NORMALIZED_NAME_TO_CODE=(()=>{const map={};Object.keys(PANINI_TEAM_CODES).forEach(code=>{map[normalizeTradeName(code)]=code;});Object.entries(PANINI_TEAM_NAME_ALIASES).forEach(([code,names])=>names.forEach(name=>map[normalizeTradeName(name)]=code));return map;})();
const PANINI_SORTED_NAME_ALIASES=Object.keys(PANINI_NORMALIZED_NAME_TO_CODE).sort((a,b)=>b.length-a.length);
function teamSearchText(team){
 if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"&&!isLigaEsteInsertTeam(team))return ligaEsteTeamSearchText(team);
 const code=TEAM_TO_PANINI_CODE[team]||team;
 const aliases=PANINI_TEAM_NAME_ALIASES[code]||[];
 return normalizeTradeName([team,code,...aliases].join(" "));
}
function filterTeamsByQuery(query){
 const q=normalizeTradeName(query);
 if(!q)return currentTeamOrder();
 return currentTeamOrder().filter(team=>teamSearchText(team).includes(q));
}

function paniniDisplayCode(team,internalCode){
 const raw=String(internalCode);
 if(inferCollectionType(projects?.[activeProjectId])!=="world-cup-2026")return raw;
 const n=Number(raw);
 return String(n).padStart(2,"0");
}

function paniniInternalCode(team,displayNumber){
 const n=Number(displayNumber);
 if(!Number.isInteger(n))return null;
 if(team==="FWC")return n>=0&&n<=19?String(n).padStart(2,"0"):null;
 if(team==="Coca-Cola")return n>=1&&n<=12?String(n).padStart(2,"0"):null;
 return n>=1&&n<=20?String(n).padStart(2,"0"):null;
}


function collectShareGroups(type,projectId=activeProjectId){
 if(projectId===activeProjectId)commitProjectStateLocalOnly();
 const project=projects?.[projectId]||projects?.[activeProjectId];
 const sourceInventory=project?.inventory||inventory;
 const target=Math.max(1,Number(project?.target)||1);
 const groups=[];
 let totalUnits=0,totalReferences=0;
 projectTeamOrder(project,sourceInventory).filter(team=>teamVisibleForProject(team,project)).forEach(team=>{
   const stickers=sourceInventory[team]||{};
   const items=Object.entries(stickers)
     .map(([code,raw])=>{
       const qty=Math.max(0,Number(raw)||0);
       const units=type==="album"?qty:type==="missing"?Math.max(0,target-qty):Math.max(0,qty-target);
       return {code,units,qty};
     })
     .filter(item=>type==="album"?item.qty>0:item.units>0)
     .sort((a,b)=>Number(a.code)-Number(b.code));
   if(!items.length)return;
   totalReferences+=items.length;
   totalUnits+=items.reduce((sum,item)=>sum+(type==="album"?item.qty:item.units),0);
   groups.push({team,items});
 });
 return {groups,totalUnits,totalReferences,project};
}

function buildShareCollectionText(type,{flags=false,compact=false,projectId=activeProjectId}={}){
 const {groups,totalUnits,totalReferences,project}=collectShareGroups(type,projectId);
 if(!groups.length)return {text:"",totalUnits:0,totalReferences:0};
 const projectName=project?.name||"Mundial 2026";
 const missing=type==="missing",album=type==="album";
 const summary=album
   ?`Inventario del álbum · ${totalReferences} referencias · ${totalUnits} cromos`
   :missing?`Me faltan ${totalUnits} cromos`:`Tengo ${totalUnits} cromos repetidos para cambiar`;
 const lines=["🏆 "+projectName,"",summary,""];
 groups.forEach((group,index)=>{
   const officialCode=TEAM_TO_PANINI_CODE[group.team]||group.team;
   const heading=(flags?`${TEAM_FLAG_EMOJI[group.team]||""} `:"")+officialCode;
   const stickers=group.items.map(item=>{
     const shown=paniniDisplayCode(group.team,item.code);
     if(album)return `${shown} x${item.qty}`;
     return item.units>1?`${shown} x${item.units}`:shown;
   }).join(", ");
   if(compact)lines.push(`${heading.trim()}: ${stickers}`);
   else{
     lines.push(heading.trim());lines.push(stickers);
     if(index<groups.length-1)lines.push("");
   }
 });
 return {text:lines.join("\n"),totalUnits,totalReferences};
}

function openShareOptions(type=activeShareListType(),projectId=activeProjectId){
 if(!type)return;
 const {totalUnits,totalReferences}=collectShareGroups(type,projectId);
 if(type!=="album"&&!totalUnits){
   showToast(type==="missing"?"No te falta ningún cromo":"No tienes cromos repetidos");
   return;
 }
 if(type==="album"&&!totalReferences){showToast("Esta colección no contiene referencias");return;}
 const sheet=$("#shareOptionsSheet");
 if(!sheet)return;
 sheet.dataset.type=type;sheet.dataset.projectId=projectId;
 $("#shareOptionsTitle").textContent=type==="album"?"Exportar álbum":type==="missing"?"Compartir cromos que me faltan":"Compartir cromos repetidos";
 sheet.hidden=false;
 requestAnimationFrame(()=>sheet.classList.add("open"));
 document.body.classList.add("share-sheet-open");
}

function exportEditedCollectionAlbum(){
 const projectId=$("#editCollectionId")?.value;
 if(!projectId||!projects?.[projectId])return;
 closeEditCollection();
 setTimeout(()=>openShareOptions("album",projectId),80);
}

function closeShareOptions(){
 const sheet=$("#shareOptionsSheet");
 if(!sheet)return;
 sheet.classList.remove("open");
 document.body.classList.remove("share-sheet-open");
 setTimeout(()=>{if(!sheet.classList.contains("open"))sheet.hidden=true;},180);
}

async function copyShareText(text){
 if(navigator.clipboard?.writeText){
   await navigator.clipboard.writeText(text);
   return;
 }
 const area=document.createElement("textarea");
 area.value=text;
 area.setAttribute("readonly","");
 area.style.position="fixed";
 area.style.opacity="0";
 document.body.appendChild(area);
 area.select();
 const copied=document.execCommand("copy");
 area.remove();
 if(!copied)throw new Error("No se pudo copiar la lista");
}


function actionFeedback(button,{busy="Procesando…",done="Hecho ✓",error="Error"}={}){
 if(!button)return {success(){},fail(){},restore(){}};
 const original=button.dataset.originalLabel||button.textContent;
 button.dataset.originalLabel=original;
 button.disabled=true;button.classList.add("is-working");button.textContent=busy;
 vibrate();
 let timer;
 const finish=(label,cls)=>{clearTimeout(timer);button.classList.remove("is-working","is-success","is-error");button.classList.add(cls);button.textContent=label;timer=setTimeout(()=>{button.disabled=false;button.classList.remove(cls);button.textContent=original;},1100)};
 return {success(label=done){finish(label,"is-success")},fail(label=error){finish(label,"is-error")},restore(){clearTimeout(timer);button.disabled=false;button.classList.remove("is-working","is-success","is-error");button.textContent=original}};
}

async function runShareOption(mode){
 const sheet=$("#shareOptionsSheet");
 const type=sheet?.dataset.type||activeShareListType();
 const projectId=sheet?.dataset.projectId||activeProjectId;
 if(!type)return;
 const options=mode==="share"?{flags:true,compact:true,projectId}:mode==="compact"?{flags:false,compact:true,projectId}:{flags:false,compact:false,projectId};
 const {text,totalUnits,totalReferences}=buildShareCollectionText(type,options);
 if(!text||(type==="album"?!totalReferences:!totalUnits)){
   closeShareOptions();
   showToast(type==="album"?"Esta colección no contiene referencias":type==="missing"?"No te falta ningún cromo":"No tienes cromos repetidos");
   return;
 }
 const title=type==="album"?"Inventario completo":type==="missing"?"Cromos que me faltan":"Cromos repetidos";
 closeShareOptions();
 try{
   if(mode==="share"){
     // En iOS el Web Share API altera el viewport visual al volver de WhatsApp.
     // Abrimos WhatsApp directamente y mantenemos el scroll dentro del shell de la app.
     await copyShareText(text);
     showToast("Lista copiada · abriendo WhatsApp…");
     const whatsappUrl=`whatsapp://send?text=${encodeURIComponent(text)}`;
     setTimeout(()=>{window.location.href=whatsappUrl;},80);
     return;
   }
   await copyShareText(text);
   showToast(mode==="compact"?"Lista compacta copiada ✓":"Lista copiada al portapapeles ✓");
 }catch(error){
   if(error?.name==="AbortError"){
     document.documentElement.style.scrollBehavior="auto";
     document.body.style.scrollBehavior="auto";
     requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:window.scrollY,left:0,behavior:"auto"})));
     return;
   }
   try{
     await copyShareText(text);
     showToast("Lista copiada al portapapeles ✓");
   }catch(copyError){
     console.error("No se pudo compartir la lista",error,copyError);
     showToast("No se pudo compartir la lista");
   }
 }
}

const DEFAULT_TOP_STARS={
 "ESP|15":"Lamine Yamal","ENG|11":"Jude Bellingham","ENG|18":"Harry Kane",
 "FRA|20":"Kylian Mbappé","FRA|15":"Ousmane Dembélé","FRA|14":"Michael Olise",
 "POR|15":"Cristiano Ronaldo","ARG|17":"Lionel Messi","NZL|06":"Tim Payne","CPV|02":"Vozinha"
};

function tradeStickerKey(item){return `${item.officialCode}|${item.displayCode}`}
function currentTradePreferences(){
 const project=projects?.[activeProjectId];
 if(!project)return {stars:{},protected:{}};
 project.tradePreferences=project.tradePreferences||{stars:{},protected:{},disabledDefaultStars:{},disabledDefaultProtected:{}};
 project.tradePreferences.stars=project.tradePreferences.stars||{};
 project.tradePreferences.protected=project.tradePreferences.protected||{};
 project.tradePreferences.disabledDefaultStars=project.tradePreferences.disabledDefaultStars||{};
 project.tradePreferences.disabledDefaultProtected=project.tradePreferences.disabledDefaultProtected||{};
 return project.tradePreferences;
}
function isTradeStar(item){const key=tradeStickerKey(item),prefs=currentTradePreferences();return Boolean((DEFAULT_TOP_STARS[key]&&!prefs.disabledDefaultStars[key])||prefs.stars[key])}
function isTradeProtected(item){const key=tradeStickerKey(item),prefs=currentTradePreferences();return Boolean((DEFAULT_TOP_STARS[key]&&!prefs.disabledDefaultProtected[key])||prefs.protected[key])}
function tradeStarName(item){return DEFAULT_TOP_STARS[tradeStickerKey(item)]||""}
function tradeStickerCategory(item){return item.team==="Coca-Cola"?"collaboration":item.team==="FWC"||(item.team!=="Coca-Cola"&&Number(item.displayCode)===1)?"special":"normal"}
function toggleTradeMark(item,type){
 const prefs=currentTradePreferences();const key=tradeStickerKey(item);
 if(DEFAULT_TOP_STARS[key]&&type==="protected"){showToast("Esta estrella TOP está protegida por defecto");return;}
 prefs[type][key]=!prefs[type][key];if(!prefs[type][key])delete prefs[type][key];
 persistProjects();renderTradeAnalyzerResult();
}

function levenshteinDistance(a,b){
 const rows=Array.from({length:a.length+1},()=>Array(b.length+1).fill(0));
 for(let i=0;i<=a.length;i++)rows[i][0]=i;
 for(let j=0;j<=b.length;j++)rows[0][j]=j;
 for(let i=1;i<=a.length;i++)for(let j=1;j<=b.length;j++)rows[i][j]=Math.min(rows[i-1][j]+1,rows[i][j-1]+1,rows[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
 return rows[a.length][b.length];
}
function suggestPaniniCode(rawCode){
 const code=String(rawCode||"").toUpperCase();const alias=PANINI_CODE_ALIASES[code];if(alias)return alias;
 const best=Object.keys(PANINI_TEAM_CODES).map(candidate=>({candidate,d:levenshteinDistance(code,candidate)})).sort((a,b)=>a.d-b.d)[0];
 return best&&best.d<=1?best.candidate:null;
}
function suggestPaniniTeamName(rawName){
 const normalized=normalizeTradeName(rawName);if(!normalized)return null;
 const best=PANINI_SORTED_NAME_ALIASES.map(alias=>({alias,d:levenshteinDistance(normalized,alias)})).sort((a,b)=>a.d-b.d||a.alias.length-b.alias.length)[0];
 const limit=normalized.length<=5?1:Math.max(2,Math.floor(normalized.length*.22));
 return best&&best.d<=limit?PANINI_NORMALIZED_NAME_TO_CODE[best.alias]:null;
}
function parseTradeList(rawText){
 const found=[],invalid=[],foundByKey=new Map(),invalidSeen=new Set();
 const addInvalid=(raw,reason,suggestion="")=>{const key=`${raw}|${reason}`;if(!raw||invalidSeen.has(key))return;invalidSeen.add(key);invalid.push({raw,reason,suggestion});};
 const addSticker=(rawCode,number,rawToken,requestedUnits=1)=>{
   let code=String(rawCode||"").toUpperCase();code=PANINI_CODE_ALIASES[code]||code;const team=PANINI_TEAM_CODES[code];
   if(!team){addInvalid(rawToken||`${rawCode}${number}`,"Selección no reconocida",suggestPaniniCode(rawCode)||suggestPaniniTeamName(rawCode)||"");return;}
   if(team==="Coca-Cola"&&!collaborationEnabled()){addInvalid(rawToken||`${code}${number}`,"Coca-Cola está desactivada en Ajustes");return;}const internalCode=paniniInternalCode(team,number);if(!internalCode){addInvalid(rawToken||`${code}${number}`,team==="FWC"?"FWC admite números del 00 al 19":team==="Coca-Cola"?"CC admite números del 01 al 12":"El número debe estar entre 01 y 20");return;}
   const key=`${team}|${internalCode}`;const units=Math.max(1,Number(requestedUnits)||1);const existing=foundByKey.get(key);
   if(existing){existing.requestedUnits+=units;return;}
   const item={team,officialCode:code,internalCode,displayCode:paniniDisplayCode(team,internalCode),requestedUnits:units};foundByKey.set(key,item);found.push(item);
 };
 String(rawText||"").replace(/\r/g,"").split("\n").forEach(originalLine=>{
   const quantityMatch=originalLine.match(/[×xX]\s*(\d+)/);const requestedUnits=quantityMatch?Math.max(1,Number(quantityMatch[1])||1):1;
   const clean=originalLine.replace(/[×xX]\s*\d+/g,"").replace(/[：]/g,":").trim();if(!clean)return;
   const heading=normalizeTradeName(clean).replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim();
   const ignoredHeadings=["he needs from you","he gives you","what i need","what i give","missing","duplicates","needed","offered","faltantes","repetidas","lo que necesito","lo que doy","figuritas app liste","figuritas app list","figuritas app lista"];
   if(ignoredHeadings.some(value=>heading===value||heading.startsWith(value+" ")))return;

   // Formato compacto con uno o varios códigos: ESP15, ESP 15, KSA01...
   const compactMatches=[...clean.toUpperCase().matchAll(/(?:^|[^A-Z])([A-Z]{3})\s*[:]?\s*(\d{1,2})(?=$|[^0-9])/g)];
   if(compactMatches.length){
     compactMatches.forEach(m=>addSticker(m[1],m[2],m[0].trim(),requestedUnits));
     const residue=clean.toUpperCase().replace(/(?:^|[^A-Z])([A-Z]{3})\s*[:]?\s*(\d{1,2})(?=$|[^0-9])/g," ").replace(/[\s,;:\-–—]+/g,"").trim();
     if(!residue)return;
   }

   // Nombre completo o abreviatura al principio; el guion se trata como separador, no como rango.
   const normalizedLine=normalizeTradeName(clean);
   let matchedAlias="";
   for(const alias of PANINI_SORTED_NAME_ALIASES){if(normalizedLine===alias||normalizedLine.startsWith(alias+" ")){matchedAlias=alias;break;}}
   if(matchedAlias){
     const code=PANINI_NORMALIZED_NAME_TO_CODE[matchedAlias];
     const words=matchedAlias.split(" ").length;
     const normalizedParts=normalizedLine.split(" ");
     const numericText=normalizedParts.slice(words).join(" ");
     const nums=[...numericText.matchAll(/\b(\d{1,2})\b/g)].map(m=>m[1]);
     if(nums.length){nums.forEach(n=>addSticker(code,n,`${code}${n}`,requestedUnits));return;}
     addInvalid(clean,"No se ha encontrado ningún número de cromo");return;
   }

   // Si hay números pero el país no se reconoce, sugerir la selección más próxima.
   const nums=[...clean.matchAll(/\b(\d{1,2})\b/g)].map(m=>m[1]);
   if(nums.length){
     const rawName=clean.replace(/[\d,;:\-–—]+/g," ").trim();
     addInvalid(clean,"Selección no reconocida",suggestPaniniTeamName(rawName)||suggestPaniniCode(rawName)||"");
   }else addInvalid(clean,"No se ha encontrado ningún código o selección");
 });
 return {found,invalid};
}
function groupTradeAnalysis(items){const order=currentTeamOrder(),groups={};items.forEach(item=>(groups[item.team]||=[]).push(item));return Object.entries(groups).sort((a,b)=>order.indexOf(a[0])-order.indexOf(b[0]));}
function escapeTradeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"})[char]);}
function applyTradeAnalyzerSuggestion(raw,replacement){const input=$("#tradeAnalyzerInput");if(!input||!raw||!replacement)return;const escaped=String(raw).replace(/[.*+?^${}()|[\]\\]/g,"\\$&");input.value=input.value.replace(new RegExp(escaped,"i"),replacement);renderTradeAnalyzerResult();}
function editTradeAnalyzerList(){const dialog=$("#tradeAnalyzerDialog");dialog?.classList.remove("analyzed","exchange-step");$("#tradeAnalyzerEntry").hidden=false;$("#tradeAnalyzerResult").hidden=true;$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});setTimeout(()=>$("#tradeAnalyzerInput")?.focus(),60);}
function tradeCopyLines(items,includeQuantities=true){return groupTradeAnalysis(items).map(([team,rows])=>`${TEAM_FLAG_EMOJI[team]||""} ${TEAM_TO_PANINI_CODE[team]||team}: ${rows.map(row=>{const units=Object.prototype.hasOwnProperty.call(row,"selectedUnits")?row.selectedUnits:row.available;return includeQuantities&&units>1?`${row.displayCode} x${units}`:row.displayCode;}).join(" ")}`);}
function chooseBalancedTrade(available,normalNeeded,specialNeeded,collaborationNeeded=0,allowDuplicates=false){const pool=available.filter(x=>!isTradeProtected(x)&&!isTradeStar(x)).sort((a,b)=>b.available-a.available||currentTeamOrder().indexOf(a.team)-currentTeamOrder().indexOf(b.team)||Number(a.displayCode)-Number(b.displayCode));const take=(category,needed)=>{const candidates=pool.filter(x=>tradeStickerCategory(x)===category),selected=[];let left=Math.max(0,Number(needed)||0);for(const item of candidates){if(left<=0)break;selected.push({...item,selectedUnits:1});left--;}if(allowDuplicates&&left>0){let pass=2;while(left>0){let added=false;for(const item of candidates){if(left<=0)break;if(item.available>=pass){selected.find(x=>tradeStickerKey(x)===tradeStickerKey(item)).selectedUnits++;left--;added=true;}}if(!added)break;pass++;}}return {selected,left};};const normals=take("normal",normalNeeded),specials=take("special",specialNeeded),collaborations=take("collaboration",collaborationNeeded);return {items:[...normals.selected,...specials.selected,...collaborations.selected],missingNormal:normals.left,missingSpecial:specials.left,missingCollaboration:collaborations.left};}
function renderInvalidLines(items){if(!items.length)return "";return `<div class="trade-review-list">${items.map(item=>{const numberMatch=String(item.raw).match(/(\d{1,2})/),replacement=item.suggestion&&numberMatch?`${item.suggestion}${String(numberMatch[1]).padStart(2,"0")}`:"";return `<div class="trade-review-item"><div><strong>${escapeTradeHtml(item.raw)}</strong><small>${escapeTradeHtml(item.reason)}</small></div>${replacement?`<button type="button" data-raw="${escapeTradeHtml(item.raw)}" data-replacement="${escapeTradeHtml(replacement)}">Corregir</button>`:""}</div>`;}).join("")}</div>`;}
function wireInvalidCorrections(root){root.querySelectorAll("[data-replacement]").forEach(b=>b.addEventListener("click",()=>applyTradeAnalyzerSuggestion(b.dataset.raw,b.dataset.replacement)));}
function renderBalancedStickerList(items){
 const normal=items.filter(item=>tradeStickerCategory(item)==="normal"),special=items.filter(item=>tradeStickerCategory(item)==="special"),collaboration=items.filter(item=>tradeStickerCategory(item)==="collaboration");
 const section=(label,rows,detail="")=>{if(!rows.length)return "";const units=rows.reduce((sum,item)=>sum+(item.selectedUnits||1),0);return `<section class="balanced-sticker-section"><header><strong>${label}</strong><span>${units}${detail}</span></header><div class="balanced-sticker-groups">${groupTradeAnalysis(rows).map(([team,teamRows])=>`<div class="balanced-sticker-row"><b>${TEAM_FLAG_EMOJI[team]||""} ${TEAM_TO_PANINI_CODE[team]||team}</b><span>${teamRows.map(row=>{const units=row.selectedUnits||1;return `${row.displayCode}${units>1?` ×${units}`:""}`;}).join(" · ")}</span></div>`).join("")}</div></section>`;};
 return `${section("Normales",normal," cromos")}${section("Especiales",special," cromos")}${section("Colaboración",collaboration," cromos")}`;
}
function applyAssistantTrade(receivedItems,givenItems,button){
 if(!receivedItems?.length){showToast("Pega la lista recibida para actualizar el inventario");return;}
 if(button.disabled)return;button.disabled=true;
 const wasComplete=isCurrentAlbumComplete(),now=new Date().toISOString(),changes=[];
 for(const item of givenItems||[]){const qty=Number(item.selectedUnits)||1,previous=Number(inventory[item.team]?.[item.internalCode])||0;if(previous<qty){button.disabled=false;showToast(`Stock insuficiente: ${item.team} ${item.displayCode}`);return;}changes.push({item,delta:-qty,previous,next:previous-qty});}
 for(const item of receivedItems){const previous=Number(inventory[item.team]?.[item.internalCode])||0;changes.push({item,delta:1,previous,next:previous+1});}
 changes.forEach(({item,delta,previous,next})=>{inventory[item.team][item.internalCode]=next;markPendingSync(item.team,item.internalCode,previous,next,"asistente-intercambio");history.push({id:makeId(),team:item.team,code:item.internalCode,previous,next,delta,at:now,source:"asistente-intercambio"});if(delta>0)sessionStats.plus+=delta;else sessionStats.minus+=Math.abs(delta);});
 saveAll("Intercambio completado");renderAll();checkAlbumCompletion(wasComplete);button.textContent="Intercambio completado ✓";showToast("✓ Inventario actualizado");
}
function renderBalancedTrade(box,available,normalNeeded,specialNeeded,collaborationNeeded=0,allowDuplicates=null,receivedItems=null){
 const balanced=chooseBalancedTrade(available,normalNeeded,specialNeeded,collaborationNeeded,allowDuplicates===true),delivered=balanced.items.reduce((s,x)=>s+(x.selectedUnits||1),0),short=balanced.missingNormal+balanced.missingSpecial+balanced.missingCollaboration;
 const canApply=Array.isArray(receivedItems)&&receivedItems.length>0;
 box.innerHTML=`<div class="trade-clean-status"><strong>${delivered} cromos para entregar</strong></div>${short&&allowDuplicates===null?`<div class="trade-clean-choice"><span>Solo tienes ${delivered} cromos diferentes disponibles.</span><button type="button" data-balance-choice="different">Usar solo diferentes</button><button type="button" class="primary" data-balance-choice="duplicates">Completar con iguales</button></div>`:short?`<p class="trade-clean-note">La propuesta queda ${short} unidades por debajo.</p>`:""}${balanced.items.length?`<div class="balanced-sticker-list">${renderBalancedStickerList(balanced.items)}</div><button id="copyBalancedTrade" class="primary trade-main-action" type="button">Copiar intercambio</button><button id="completeAssistantTrade" class="trade-main-action complete-trade-action" type="button" ${canApply?"":"disabled"}>Completar intercambio</button>${canApply?"":`<p class="trade-clean-note">Para actualizar el inventario automáticamente, pega la lista exacta que vas a recibir.</p>`}`:""}`;
 box.querySelector('[data-balance-choice="different"]')?.addEventListener("click",()=>renderBalancedTrade(box,available,normalNeeded,specialNeeded,collaborationNeeded,false,receivedItems));
 box.querySelector('[data-balance-choice="duplicates"]')?.addEventListener("click",()=>renderBalancedTrade(box,available,normalNeeded,specialNeeded,collaborationNeeded,true,receivedItems));
 $("#copyBalancedTrade")?.addEventListener("click",async event=>{const fb=actionFeedback(event.currentTarget,{busy:"Copiando…",done:"Copiado ✓"});try{await copyShareText(tradeCopyLines(balanced.items,true).join("\n"));fb.success();}catch{fb.fail("Error");}});
 $("#completeAssistantTrade")?.addEventListener("click",event=>applyAssistantTrade(receivedItems,balanced.items,event.currentTarget));
}
function renderExchangeStep(available){
 const result=$("#tradeAnalyzerResult"),dialog=$("#tradeAnalyzerDialog");dialog?.classList.add("exchange-step");
 result.innerHTML=`<button id="backToTradeSummary" class="trade-back-button" type="button">← Volver</button><div class="trade-clean-card"><h3>¿Qué te dará la otra persona?</h3><div class="trade-receive-tabs"><button type="button" class="active" data-receive-mode="list">Pegar lista</button><button type="button" data-receive-mode="counts">Cantidades</button></div><div id="tradeReceiveListPanel"><p class="trade-context-label compact">Pega la lista de cromos que vas a recibir</p><textarea id="tradeReceiveList" rows="6" placeholder="Ejemplo: Francia 15 · FWC 18"></textarea></div><div id="tradeReceiveCountsPanel" hidden><div class="trade-count-stepper" data-count-kind="normal"><span>Normales</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo normal">−</button><output id="tradeReceiveNormalCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo normal">+</button></div></div><div class="trade-count-stepper" data-count-kind="special"><span>Especiales</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo especial">−</button><output id="tradeReceiveSpecialCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo especial">+</button></div></div><div class="trade-count-stepper" data-count-kind="collaboration" ${collaborationEnabled()?"":"hidden"}><span>Colaboración</span><div class="trade-count-controls"><button type="button" class="trade-count-btn" data-count-action="decrease" aria-label="Restar cromo de colaboración">−</button><output id="tradeReceiveCollaborationCount" aria-live="polite">0</output><button type="button" class="trade-count-btn primary" data-count-action="increase" aria-label="Sumar cromo de colaboración">+</button></div></div></div><button id="generateBalancedTrade" class="primary trade-main-action" type="button">Generar intercambio</button><div id="receivedListErrors"></div><div id="balancedTradeResult"></div></div>`;
 $("#backToTradeSummary")?.addEventListener("click",renderTradeAnalyzerResult);
 result.querySelectorAll("[data-receive-mode]").forEach(btn=>btn.addEventListener("click",()=>{result.querySelectorAll("[data-receive-mode]").forEach(x=>x.classList.toggle("active",x===btn));$("#tradeReceiveListPanel").hidden=btn.dataset.receiveMode!=="list";$("#tradeReceiveCountsPanel").hidden=btn.dataset.receiveMode!=="counts";$("#receivedListErrors").innerHTML="";$("#balancedTradeResult").innerHTML="";}));
 const countState={normal:0,special:0,collaboration:0};
 const renderCount=(kind)=>{const out=$(kind==="normal"?"#tradeReceiveNormalCount":kind==="special"?"#tradeReceiveSpecialCount":"#tradeReceiveCollaborationCount");if(out)out.textContent=String(countState[kind]);};
 result.querySelectorAll(".trade-count-stepper").forEach(stepper=>{stepper.querySelectorAll("[data-count-action]").forEach(button=>button.addEventListener("click",()=>{const kind=stepper.dataset.countKind;const delta=button.dataset.countAction==="increase"?1:-1;countState[kind]=Math.max(0,countState[kind]+delta);renderCount(kind);if(navigator.vibrate)navigator.vibrate(8);}));});
 $("#generateBalancedTrade")?.addEventListener("click",event=>{const fb=actionFeedback(event.currentTarget,{busy:"Generando…",done:"Generado ✓"});let normalNeeded=0,specialNeeded=0,collaborationNeeded=0,receivedItems=null;const errors=$("#receivedListErrors");if(!$("#tradeReceiveListPanel").hidden){const received=parseTradeList($("#tradeReceiveList").value);receivedItems=received.found;normalNeeded=received.found.filter(x=>tradeStickerCategory(x)==="normal").length;specialNeeded=received.found.filter(x=>tradeStickerCategory(x)==="special").length;collaborationNeeded=received.found.filter(x=>tradeStickerCategory(x)==="collaboration").length;if(received.invalid.length){errors.innerHTML=`<details class="trade-ignored-lines"><summary>${received.invalid.length} ${received.invalid.length===1?"línea ignorada":"líneas ignoradas"}</summary>${renderInvalidLines(received.invalid)}</details>`;wireInvalidCorrections(errors);}else errors.innerHTML="";}else{normalNeeded=countState.normal;specialNeeded=countState.special;collaborationNeeded=countState.collaboration;errors.innerHTML="";}if(!normalNeeded&&!specialNeeded&&!collaborationNeeded){fb.fail("No hay cromos válidos");return;}renderBalancedTrade($("#balancedTradeResult"),available,normalNeeded,specialNeeded,collaborationNeeded,null,receivedItems);requestAnimationFrame(()=>{const body=$("#tradeAnalyzerBody"),target=$("#balancedTradeResult");if(body&&target)body.scrollTo({top:Math.max(0,target.offsetTop-16),behavior:"auto"});});fb.success();});
}
function renderTradeAnalyzerResult(){const input=$("#tradeAnalyzerInput"),result=$("#tradeAnalyzerResult"),dialog=$("#tradeAnalyzerDialog");if(!input||!result)return;const parsed=parseTradeList(input.value);if(!parsed.found.length&&!parsed.invalid.length){result.hidden=false;result.innerHTML='<div class="trade-inline-alert">No se ha reconocido ningún cromo de la lista que pide la otra persona.</div>';return;}const target=getTarget(),analysed=parsed.found.map(item=>{const owned=Number(inventory?.[item.team]?.[item.internalCode])||0;const stockAvailable=Math.max(0,owned-target);const requestedUnits=Math.max(1,Number(item.requestedUnits)||1);return {...item,owned,stockAvailable,requestedUnits,available:Math.min(stockAvailable,requestedUnits)};}),available=analysed.filter(x=>x.available>0),safeAvailable=available.filter(x=>!isTradeStar(x)&&!isTradeProtected(x)),previewItems=safeAvailable.map(item=>({...item,selectedUnits:item.available})),previewUnits=previewItems.reduce((sum,item)=>sum+(item.selectedUnits||0),0);result.innerHTML=`<button id="editTradeAnalyzerList" class="trade-back-button" type="button">← Editar lista</button><div class="trade-clean-card"><div class="trade-clean-status"><strong>${analysed.length} cromos detectados</strong>${parsed.invalid.length?`<span>${parsed.invalid.length} ${parsed.invalid.length===1?"línea no entendida":"líneas no entendidas"}</span>`:""}</div>${parsed.invalid.length?`<div class="trade-inline-alert">${renderInvalidLines(parsed.invalid)}</div>`:""}${safeAvailable.length?`<details class="trade-offer-preview" open><summary>Ver lo que puedes ofrecer · ${previewUnits}</summary><div class="balanced-sticker-list">${renderBalancedStickerList(previewItems)}</div></details>`:""}<button id="copyTradeAnalyzerAll" class="primary trade-main-action" type="button" ${safeAvailable.length?"":"disabled"}>Copiar lo que puedes ofrecer</button><button id="prepareBalancedTrade" class="secondary trade-main-action" type="button" ${safeAvailable.length?"":"disabled"}>Preparar intercambio</button></div>`;result.hidden=false;dialog?.classList.add("analyzed");dialog?.classList.remove("exchange-step");$("#tradeAnalyzerEntry").hidden=true;$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});$("#editTradeAnalyzerList")?.addEventListener("click",editTradeAnalyzerList);wireInvalidCorrections(result);$("#copyTradeAnalyzerAll")?.addEventListener("click",async event=>{const fb=actionFeedback(event.currentTarget,{busy:"Copiando…",done:"Copiado ✓"});try{await copyShareText(tradeCopyLines(safeAvailable).join("\n"));fb.success();}catch{fb.fail("Error");}});$("#prepareBalancedTrade")?.addEventListener("click",()=>renderExchangeStep(safeAvailable));}
function openTradeAnalyzer(){const dialog=$("#tradeAnalyzerDialog");if(!dialog)return;dialog.classList.remove("analyzed","exchange-step");$("#tradeAnalyzerEntry").hidden=false;$("#tradeAnalyzerResult").hidden=true;if(!dialog.open)dialog.showModal();$("#tradeAnalyzerBody")?.scrollTo({top:0,behavior:"auto"});setTimeout(()=>$("#tradeAnalyzerInput")?.focus(),80);}
function closeTradeAnalyzer(){const dialog=$("#tradeAnalyzerDialog");if(dialog?.open)dialog.close();}


async function shareActiveCollectionList(){
 openShareOptions(activeShareListType(),activeProjectId);
}

function ligaEsteIsOpen(team){
 const p=projects?.[activeProjectId];p.ui=p.ui||{};p.ui.ligaEsteOpenTeams=p.ui.ligaEsteOpenTeams||{};
 if(collectionTeamFilter!=="all")return team===collectionTeamFilter;
 return !!p.ui.ligaEsteOpenTeams[team];
}
function toggleLigaEsteTeam(team){
 const p=projects?.[activeProjectId];if(!p)return;p.ui=p.ui||{};p.ui.ligaEsteOpenTeams=p.ui.ligaEsteOpenTeams||{};
 p.ui.ligaEsteOpenTeams[team]=!p.ui.ligaEsteOpenTeams[team];persistProjects();renderGlobalCollection();
}
function ligaEsteRow(team,code,qty){
 const info=ligaEsteStickerInfo(team,code)||[stickerDisplayLabel(team,code),""];
 const [name,position]=info,st=stateFor(qty),pending=name==="Pendiente";
 const row=document.createElement("div");row.className=`ligaeste-player-row ${st.kind}${pending?" ligaeste-pending-row":""}`;row.dataset.code=code;
 row.innerHTML=`<div class="ligaeste-player-number">${collectionSafeText(code.replace(/^0(?=\\d)/,""))}</div><div class="ligaeste-player-copy"><strong>${collectionSafeText(name)}</strong><span>${collectionSafeText(position||"")}</span></div><div class="ligaeste-row-stock"><button type="button" class="ligaeste-row-step minus" aria-label="Restar ${collectionSafeText(name)}">−</button><strong>${qty}</strong><button type="button" class="ligaeste-row-step plus" aria-label="Sumar ${collectionSafeText(name)}">+</button></div>`;
 row.querySelector(".minus").onclick=e=>changeQuantity(team,code,-1,e.currentTarget);
 row.querySelector(".plus").onclick=e=>changeQuantity(team,code,1,e.currentTarget);
 return row;
}
function renderLigaEsteCollection(){
 const list=$("#globalCollectionList");if(!list)return;list.innerHTML="";
 let teams=currentTeamOrder().filter(team=>!isLigaEsteInsertTeam(team));
 const insertTeams=currentTeamOrder().filter(team=>isLigaEsteInsertTeam(team));
 if(collectionSort==="az")teams.sort((a,b)=>a.localeCompare(b,"es"));
 teams.forEach(team=>{
   if(collectionTeamFilter!=="all"&&team!==collectionTeamFilter)return;
   const stickers=inventory[team]||{};
   const entries=Object.entries(stickers).filter(([code,qty])=>collectionStickerMatches(team,code,Number(qty)||0));
   if(!entries.length)return;
   const target=getTarget(),total=Object.values(stickers).reduce((sum,q)=>sum+Number(q||0),0),missing=Object.values(stickers).reduce((sum,q)=>sum+Math.max(0,target-Number(q||0)),0),open=ligaEsteIsOpen(team);
   const section=document.createElement("section");section.className=`ligaeste-team-accordion${open?" open":""}`;
   section.innerHTML=`<button type="button" class="ligaeste-team-toggle" aria-expanded="${open}"><div class="ligaeste-team-heading">${flagHTML(team)}<div><strong>${collectionSafeText(team)}</strong><span>${total} cromos · ${missing?`${missing} pendientes`:"Completo"}</span></div></div><span class="ligaeste-team-chevron">⌄</span></button><div class="ligaeste-team-body" ${open?"":"hidden"}><div class="ligaeste-list-head"><span>Nº</span><span>Jugador / cromo</span><span>Stock</span></div><div class="ligaeste-player-list"></div></div>`;
   section.querySelector(".ligaeste-team-toggle").onclick=()=>toggleLigaEsteTeam(team);
   const rows=section.querySelector(".ligaeste-player-list");entries.sort(([a],[b])=>String(a).localeCompare(String(b),"es",{numeric:true})).forEach(([code,qty])=>rows.appendChild(ligaEsteRow(team,code,Number(qty)||0)));
   list.appendChild(section);
 });
 if(collectionTeamFilter==="all"&&collectionFilter==="all"&&insertTeams.length){
   const special=document.createElement("section");special.className="ligaeste-specials-group";special.innerHTML=`<div class="ligaeste-specials-title"><span>✦</span><div><strong>Especiales e inserts</strong><small>ADN · Fantasy · Draft 23 · Kromix · Extra Stickers</small></div></div>`;
   insertTeams.forEach(team=>{const stickers=inventory[team]||{},total=Object.values(stickers).reduce((a,b)=>a+Number(b||0),0);const btn=document.createElement("button");btn.type="button";btn.className="ligaeste-special-shortcut";btn.innerHTML=`<span>${collectionSafeText(team)}</span><strong>${total}</strong>`;btn.onclick=()=>selectTeam(team);special.appendChild(btn)});list.appendChild(special);
 }
 if(!list.children.length)list.innerHTML='<div class="collection-empty">No hay cromos para este filtro.</div>';
}

function renderGlobalCollection(){
 updateShareCollectionButton();
 if(inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"){renderLigaEsteCollection();return;}
 const list=$("#globalCollectionList");
 if(!list)return;
 list.innerHTML="";
 let teams=currentTeamOrder().map(team=>[team,inventory[team]]);
 if(collectionSort==="az")teams.sort(([a],[b])=>a.localeCompare(b,"es"));
 if(collectionSort==="most-repeats"){
   teams.sort(([,a],[,b])=>{
     const target=getTarget();
     const ra=Object.values(a).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     const rb=Object.values(b).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     return rb-ra;
   });
 }
 if(collectionSort==="least-repeats"){
   teams.sort(([,a],[,b])=>{
     const target=getTarget();
     const ra=Object.values(a).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     const rb=Object.values(b).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0);
     return ra-rb;
   });
 }
 teams.forEach(([team,stickers])=>{
   if(collectionTeamFilter!=="all"&&team!==collectionTeamFilter)return;
   let entries=Object.entries(stickers)
     .filter(([code,qty])=>collectionStickerMatches(team,code,Number(qty)||0));
   entries.sort(([a],[b])=>Number(a)-Number(b));
   if(collectionSort==="number")entries.sort(([a],[b])=>Number(a)-Number(b));
   if(!entries.length)return;
   const target=getTarget();
   const total=Object.values(stickers).reduce((sum,q)=>sum+Number(q||0),0);
   const missing=Object.values(stickers).reduce((sum,q)=>sum+Math.max(0,target-Number(q||0)),0);
   const section=document.createElement("section");
   section.className=`collection-team${isExtraTeam(team)?" collection-team-extra":""}${isLigaEsteInsertTeam(team)?" collection-team-insert":""}`;
   section.innerHTML=`<header class="collection-team-header">
     <div class="collection-team-title">${flagHTML(team)}<strong>${isExtraTeam(team)?`Extra Stickers · ${extraVariantForTeam(team).label}`:team}</strong></div>
     <div class="collection-team-summary"><strong>${total} cromos</strong>${missing?`${missing} pendientes`:"Completa"}</div>
   </header><div class="collection-stickers-grid"></div>`;
   const grid=section.querySelector(".collection-stickers-grid");
   entries.forEach(([code,qty])=>grid.appendChild(createGlobalSticker(team,code,Number(qty)||0)));
   list.appendChild(section);
 });
 if(!list.children.length)list.innerHTML='<div class="collection-empty">No hay cromos para este filtro.</div>';
}
function calculateProjectStatistics(){
 const target=getTarget();
 let total=0,missing=0,repeats=0,shiny=0,fwc=0,badges=0,collaboration=0,complete=0;
 currentTeamOrder().map(team=>[team,inventory[team]]).forEach(([team,stickers])=>{
   let teamComplete=true;
   Object.entries(stickers).forEach(([code,raw])=>{
     const qty=Number(raw)||0;
     total+=qty;
     missing+=Math.max(0,target-qty);
     repeats+=Math.max(0,qty-target);
     if(qty<target)teamComplete=false;
     if(team==="FWC"){shiny+=qty;fwc+=qty}
     else if(team==="Coca-Cola"){collaboration+=qty}
     else if(code==="01"){shiny+=qty;badges+=qty}
   });
   if(teamComplete)complete++;
 });
 const required=currentTeamOrder().reduce((sum,team)=>sum+Object.keys(inventory[team]||{}).length,0)*target;
 const useful=Math.max(0,total-mathExcessForProgress());
 const roundedProgress=required?Math.round(useful/required*100):0;
 const progress=missing>0?Math.min(99,roundedProgress):Math.min(100,roundedProgress);
 return {total,missing,repeats,shiny,fwc,badges,collaboration,complete,progress};
}
function mathExcessForProgress(){
 const target=getTarget();
 return currentTeamOrder().reduce((sum,team)=>sum+Object.values(inventory[team]||{}).reduce((s,q)=>s+Math.max(0,Number(q||0)-target),0),0);
}
function renderStatistics(){
 const s=calculateProjectStatistics();
 const values={
   statsTotalStickers:`${s.total.toLocaleString("es-ES")} cromos`,
   statsMissingUnits:s.missing.toLocaleString("es-ES"),
   statsRepeatUnits:s.repeats.toLocaleString("es-ES"),
   statsShinyTotal:s.shiny.toLocaleString("es-ES"),
   statsCompleteTeams:String(s.complete),
   statsProgress:`${s.progress}%`,
   statsFwcTotal:s.fwc.toLocaleString("es-ES"),
   statsBadgesTotal:s.badges.toLocaleString("es-ES"),
   statsCollaborationTotal:s.collaboration.toLocaleString("es-ES"),
   statsCompleteTeamsText:`${s.complete} ${inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27"?"clubes completos":"selecciones completas"}`
 };
 Object.entries(values).forEach(([id,value])=>{const node=$("#"+id);if(node)node.textContent=value});
 const ring=$("#statsProgressRing");
 if(ring)ring.style.setProperty("--progress",String(s.progress));
}
function setMainTab(tab){
 if(tab==="settings"){
   const dialog=$("#settingsDialog");
   if(dialog&&!dialog.open){
     document.body.classList.add("settings-overlay-open");
     dialog.showModal();
   }
   return;
 }
 mainTab=tab;
 document.body.classList.remove("main-tab-collection","main-tab-statistics","main-tab-trade","main-tab-collections");
 document.body.classList.add(`main-tab-${tab}`);

 document.querySelectorAll(".bottom-nav-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.mainView===tab);
 });

 const inventoryView=$("#inventoryView");
 const statisticsView=$("#statisticsView");
 const tradeView=$("#tradeView");
 const collectionsView=$("#collectionsView");
 const missingView=$("#missingView");

 if(inventoryView)inventoryView.hidden=tab!=="collection";
 if(statisticsView)statisticsView.hidden=tab!=="statistics";
 if(tradeView)tradeView.hidden=tab!=="trade";
 if(collectionsView)collectionsView.hidden=tab!=="collections";
 if(missingView)missingView.hidden=true;

 if(tab==="collection")renderGlobalCollection();
 if(tab==="statistics")renderStatistics();
 if(tab==="collections")renderCollections();

 window.scrollTo({top:0,behavior:"auto"});
}

function renderAll(){
 applyCollectionIdentity();
 updateOptionalCollectionVisibility();
 const homeName=$("#homeCollectionName");if(homeName&&projects[activeProjectId])homeName.textContent=projects[activeProjectId].name;
 if(currentView!=="missing")renderCards();
 updateSummary();
 updateGlobalDashboard();
 updateSettingsTargetUI();
 updateLastChange();
 undoButton.disabled=history.length===0;
 if(currentView==="missing")renderMissing();
 updateNavigationBadges();
 renderGlobalCollection();
 renderStatistics();
 renderCollections();
 const banner=$("#globalExchangeBanner");
 if(banner){
   const active=currentView==="exchange";
   banner.hidden=!active;
   banner.style.display=active?"flex":"none";
   document.body.classList.toggle("exchange-active",active);
   const totals=exchangeTotals();
   $("#globalExchangeSummary").textContent=`${totals.give} para dar · ${totals.receive} para recibir`;
 }
}

function undoChange(change){
 const current=Number(inventory[change.team][change.code])||0;
 inventory[change.team][change.code]=change.previous;
 markPendingSync(change.team,change.code,current,change.previous,"deshacer");
 change.delta>0?sessionStats.plus=Math.max(0,sessionStats.plus-1):sessionStats.minus=Math.max(0,sessionStats.minus-1);
 history=history.filter(item=>item.id!==change.id);
 saveAll("Cambio deshecho");renderAll();renderHistory();showToast("Cambio deshecho");
}

function setView(view){
 currentView=view==="missing"?"inventory":view;
 document.querySelectorAll(".mode-button").forEach(button=>button.classList.toggle("active",button.dataset.view===currentView));
 $("#inventoryView").hidden=false;
 $("#missingView").hidden=true;
 $("#exchangeModePanel").hidden=currentView!=="exchange";
 document.body.classList.toggle("exchange-active",currentView==="exchange");
 renderAll();
}
document.querySelectorAll(".mode-button").forEach(button=>button.onclick=()=>setView(button.dataset.view));
document.querySelectorAll(".tab").forEach(button=>button.onclick=()=>{
 document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
 button.classList.add("active");
 currentFilter=button.dataset.filter;
 collectionFilter=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":"all";
 document.querySelectorAll(".collection-filter-button").forEach(x=>{
   const wanted=currentFilter==="need"?"missing":currentFilter==="offer"?"repeats":"all";
   x.classList.toggle("active",x.dataset.collectionFilter===wanted);
 });
 renderCards();
 renderGlobalCollection();
});

teamSelect.onchange=()=>{collectionTeamFilter=teamSelect.value||"all";updateCurrentTeamUI();saveAll();renderAll()};
teamSearch.oninput=()=>{
 const q=normalizeTradeName(teamSearch.value);
 if(!q){suggestions.hidden=true;return}
 const matches=filterTeamsByQuery(q).slice(0,8);
 const isLiga=inferCollectionType(projects?.[activeProjectId])==="liga-este-2026-27";
 const worldMatch=!isLiga&&["todo","todos","mundo","global","selecciones"].some(word=>word.includes(q)||q.includes(word));
 suggestions.innerHTML=(worldMatch?`<button class="suggestion" data-team="all"><span>🌍</span><strong>Todas las selecciones</strong></button>`:"")
   +matches.map(team=>{const hit=isLiga?Object.entries(LIGA_ESTE_TEAM_INFO?.[team]||{}).find(([code,[name,pos]])=>normalizeTradeName(`${code} ${name} ${pos}`).includes(q)):null;return `<button class="suggestion" data-team="${team}">${flagHTML(team)}<strong>${team}</strong><small>${hit?`${hit[0]} · ${hit[1][0]}`:(TEAM_TO_PANINI_CODE[team]||"")}</small></button>`}).join("");
 suggestions.hidden=!(matches.length||worldMatch);
 suggestions.querySelectorAll("button").forEach(button=>button.onclick=()=>selectTeam(button.dataset.team));
};
document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))suggestions.hidden=true});
function syncTeamDialogViewport(){
 const vv=window.visualViewport;
 const root=document.documentElement;
 const height=vv?vv.height:window.innerHeight;
 const top=vv?vv.offsetTop:0;
 root.style.setProperty("--team-vv-height",`${Math.round(height)}px`);
 root.style.setProperty("--team-vv-top",`${Math.round(top)}px`);
 const dialog=$("#teamDialog");
 if(dialog?.open){
   const keyboardOpen=height<window.innerHeight-120;
   dialog.classList.toggle("keyboard-open",keyboardOpen);
   requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
 }
}
window.visualViewport?.addEventListener("resize",syncTeamDialogViewport);
window.visualViewport?.addEventListener("scroll",syncTeamDialogViewport);
window.addEventListener("orientationchange",()=>setTimeout(syncTeamDialogViewport,120));
$("#teamSelectorButton").onclick=()=>{
 $("#dialogSearch").value="";
 renderTeamList(currentTeamOrder());
 syncTeamDialogViewport();
 $("#teamDialog").showModal();
 requestAnimationFrame(syncTeamDialogViewport);
};
$("#closeTeamDialog").onclick=()=>$("#teamDialog").close();
$("#teamDialog").addEventListener("close",()=>$("#teamDialog").classList.remove("keyboard-open"));
$("#dialogSearch").addEventListener("focus",()=>{
 syncTeamDialogViewport();
 requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
});
$("#dialogSearch").oninput=e=>{
 renderTeamList(filterTeamsByQuery(e.target.value));
 syncTeamDialogViewport();
 requestAnimationFrame(()=>$("#teamList")?.scrollTo({top:0,behavior:"auto"}));
};
$("#targetLockButton").onclick=()=>{
 const value=prompt("Nuevo objetivo de álbumes:",targetInput.value);
 if(value!==null&&Number(value)>=1&&Number(value)<=20){
   targetInput.value=Number(value);targetValue.textContent=Number(value);saveAll("Objetivo actualizado");renderAll();renderProjectsList();
 }
};
undoButton.onclick=()=>{const last=history.at(-1);if(last)undoChange(last)};

// --------------------
// MODO INTERCAMBIO
// --------------------
function getExchangeQty(type,team,code){return Number(exchange[type][keyFor(team,code)]||0)}
function setExchangeQty(type,team,code,qty){
 const key=keyFor(team,code);
 if(qty<=0)delete exchange[type][key];else exchange[type][key]=qty;
 saveAll("Intercambio guardado");updateNavigationBadges();renderExchangeSummary();
 if(currentView==="exchange")renderCards();
}
function stageFromMainList(type,team,code,button){
 const current=getExchangeQty(type,team,code);
 if(type==="give"){
   const stock=Number(inventory[team][code])||0;
   if(current>=stock){showToast(`No puedes marcar más de x${stock} para dar`);return}
 }
 setExchangeQty(type,team,code,current+1);
 vibrate();
 const card=button.closest(".sticker-card");
 card?.classList.add(type==="give"?"flash-card-minus":"flash-card-plus");
 setTimeout(()=>card?.classList.remove("flash-card-minus","flash-card-plus"),430);
 renderCards();
 showToast(`${team} ${code} · ${type==="give"?"dar":"recibir"} x${current+1}`);
}


function exitManualExchange({clear=true,message="Intercambio cancelado"}={}){
 if(clear)exchange={give:{},receive:{}};
 currentView="inventory";
 currentFilter="all";
 collectionFilter="all";
 document.body.classList.remove("exchange-active");

 document.querySelectorAll(".tab").forEach(button=>{
   button.classList.toggle("active",button.dataset.filter==="all");
 });
 document.querySelectorAll(".collection-filter-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.collectionFilter==="all");
 });

 saveAll(message);
 renderAll();
 showToast(message);
}


function enterManualExchange(){
 mainTab="collection";
 currentView="exchange";

 document.body.classList.remove("main-tab-statistics","main-tab-trade");
 document.body.classList.add("main-tab-collection","exchange-active");

 document.querySelectorAll(".bottom-nav-button").forEach(button=>{
   button.classList.toggle("active",button.dataset.mainView==="collection");
 });

 const inventoryView=$("#inventoryView");
 const statisticsView=$("#statisticsView");
 const tradeView=$("#tradeView");
 const collectionsView=$("#collectionsView");
 const missingView=$("#missingView");

 if(inventoryView)inventoryView.hidden=false;
 if(statisticsView)statisticsView.hidden=true;
 if(tradeView)tradeView.hidden=true;
 if(missingView)missingView.hidden=true;

 renderAll();

 const banner=$("#globalExchangeBanner");
 if(banner){
   banner.hidden=false;
   banner.style.display="flex";
 }

 requestAnimationFrame(()=>{
   document.querySelector(".collection-sticky-controls")?.scrollIntoView({
     behavior:"auto",
     block:"start"
   });
 });
}

function exchangeTotals(){
 return {
   give:Object.values(exchange.give).reduce((a,b)=>a+Number(b),0),
   receive:Object.values(exchange.receive).reduce((a,b)=>a+Number(b),0)
 };
}
function renderExchangeSummary(){
 const totals=exchangeTotals();
 $("#exchangeSummary").textContent=`${totals.give} para dar · ${totals.receive} para recibir`;
 $("#giveListCount").textContent=totals.give;$("#receiveListCount").textContent=totals.receive;
}
function groupedExchange(type){
 const groups={};
 Object.entries(exchange[type]).forEach(([key,qty])=>{
   const {team,code}=splitKey(key);
   (groups[team]??=[]).push({team,code,qty:Number(qty)});
 });
 Object.values(groups).forEach(items=>items.sort((a,b)=>Number(a.code)-Number(b.code)));
 return groups;
}
function renderExchangeList(){
 const groups=groupedExchange(exchangeListType);
 const teams=currentTeamOrder().filter(team=>groups[team]);
 if(!teams.length){$("#exchangeList").innerHTML="<p>No has marcado ningún cromo en esta lista.</p>";return}
 $("#exchangeList").innerHTML=teams.map(team=>`<section class="exchange-team-group">
   <div class="exchange-team-title">${flagHTML(team)}<span>${team}</span></div>
   ${groups[team].map(item=>`<div class="exchange-item">
     <strong>${item.code}</strong>
     <div class="exchange-item-controls"><button data-action="minus" data-team="${team}" data-code="${item.code}">−</button><b>x${item.qty}</b><button data-action="plus" data-team="${team}" data-code="${item.code}">+</button></div>
     <button class="exchange-remove" data-action="remove" data-team="${team}" data-code="${item.code}">Quitar</button>
   </div>`).join("")}
 </section>`).join("");
 $("#exchangeList").querySelectorAll("button").forEach(button=>button.onclick=()=>{
   const {team,code,action}=button.dataset,current=getExchangeQty(exchangeListType,team,code);
   if(action==="remove")setExchangeQty(exchangeListType,team,code,0);
   if(action==="minus")setExchangeQty(exchangeListType,team,code,current-1);
   if(action==="plus"){
     const max=exchangeListType==="give"?Number(inventory[team][code])||0:99;
     setExchangeQty(exchangeListType,team,code,Math.min(max,current+1));
   }
   renderExchangeList();
 });
}
$("#openExchangeListButton").onclick=()=>{exchangeListType="give";renderExchangeDialogTabs();renderExchangeList();$("#exchangeDialog").showModal()};
$("#closeExchangeDialog").onclick=()=>$("#exchangeDialog").close();
document.querySelectorAll(".exchange-list-tab").forEach(button=>button.onclick=()=>{
 exchangeListType=button.dataset.listType;renderExchangeDialogTabs();renderExchangeList();
});
function renderExchangeDialogTabs(){
 document.querySelectorAll(".exchange-list-tab").forEach(button=>button.classList.toggle("active",button.dataset.listType===exchangeListType));
 renderExchangeSummary();
}
$("#cancelExchangeButton").onclick=()=>{
 if(!confirm("¿Cancelar este intercambio? El inventario no cambiará."))return;
 $("#exchangeDialog").close();
 exitManualExchange();
};
$("#confirmExchangeButton").onclick=()=>{
 const totals=exchangeTotals();
 if(!totals.give&&!totals.receive){showToast("La lista está vacía");return}
 for(const [key,qty] of Object.entries(exchange.give)){
   const {team,code}=splitKey(key),stock=Number(inventory[team][code])||0;
   if(stock<Number(qty)){alert(`No hay suficiente stock de ${team} ${code}.`);return}
 }
 if(!confirm(`Confirmar intercambio: dar ${totals.give} y recibir ${totals.receive}.`))return;
 const now=new Date().toISOString();
 Object.entries(exchange.give).forEach(([key,qty])=>{
   const {team,code}=splitKey(key),previous=Number(inventory[team][code])||0,next=previous-Number(qty);
   inventory[team][code]=next;markPendingSync(team,code,previous,next,"intercambio");history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:-Number(qty),at:now});
   sessionStats.minus+=Number(qty);
 });
 Object.entries(exchange.receive).forEach(([key,qty])=>{
   const {team,code}=splitKey(key),previous=Number(inventory[team][code])||0,next=previous+Number(qty);
   inventory[team][code]=next;markPendingSync(team,code,previous,next,"intercambio");history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:Number(qty),at:now});
   sessionStats.plus+=Number(qty);
 });
 exchange={give:{},receive:{}};
 currentView="inventory";
 currentFilter="all";
 collectionFilter="all";
 document.body.classList.remove("exchange-active");
 document.querySelectorAll(".tab").forEach(button=>button.classList.toggle("active",button.dataset.filter==="all"));
 document.querySelectorAll(".collection-filter-button").forEach(button=>button.classList.toggle("active",button.dataset.collectionFilter==="all"));
 saveAll("Intercambio confirmado");
 $("#exchangeDialog").close();
 renderAll();
 showToast("✓ Intercambio aplicado al inventario");
};

// --------------------
// TODOS LOS QUE FALTAN
// --------------------
function missingCountries(){
 return currentTeamOrder().map(team=>[team,inventory[team]]).map(([team,stickers])=>{
   const missing=Object.entries(stickers)
   .filter(([,qty])=>Number(qty)<getTarget())
   .map(([code,qty])=>({code,qty:Number(qty),need:getTarget()-Number(qty)}))
   .sort((a,b)=>Number(a.code)-Number(b.code));
   return {team,missing,distinct:missing.length,units:missing.reduce((sum,item)=>sum+item.need,0)};
 }).filter(country=>country.distinct>0);
}
function renderMissing(){
 const sort=$("#missingSort").value;
 const countries=missingCountries();
 if(sort==="album"){
   const order=new Map(currentTeamOrder().map((team,index)=>[team,index]));
   countries.sort((a,b)=>(order.get(a.team)??999)-(order.get(b.team)??999));
 }
 if(sort==="most")countries.sort((a,b)=>b.distinct-a.distinct||b.units-a.units||a.team.localeCompare(b.team,"es"));
 if(sort==="least")countries.sort((a,b)=>a.distinct-b.distinct||a.units-b.units||a.team.localeCompare(b.team,"es"));
 if(sort==="az")countries.sort((a,b)=>a.team.localeCompare(b.team,"es"));
 if(sort==="za")countries.sort((a,b)=>b.team.localeCompare(a.team,"es"));
 const distinct=countries.reduce((sum,c)=>sum+c.distinct,0),units=countries.reduce((sum,c)=>sum+c.units,0);
 $("#missingTotals").textContent=`${distinct} cromos · ${units} unidades`;
 $("#missingList").innerHTML=countries.map(country=>`<section class="missing-country">
   <div class="missing-country-header">
     <div class="missing-country-name">${flagHTML(country.team)}<span>${country.team}</span></div>
     <div class="missing-country-stats"><strong>${country.distinct}/20 cromos pendientes</strong><br>${country.units} unidades</div>
   </div>
   <div class="missing-stickers">${country.missing.map(item=>`
     <div class="missing-chip">
       <strong>${item.code}</strong>
       <span>faltan ${item.need}</span>
       <div class="missing-direct-controls">
         <button class="missing-direct-minus" data-team="${country.team}" data-code="${item.code}" ${item.qty<=0?"disabled":""}>−</button>
         <b>x${item.qty}</b>
         <button class="missing-direct-plus" data-team="${country.team}" data-code="${item.code}">RECIBIR +1</button>
       </div>
     </div>`).join("")}</div>
 </section>`).join("");

 $("#missingList").querySelectorAll(".missing-direct-plus").forEach(button=>button.onclick=()=>{
   const team=button.dataset.team,code=button.dataset.code;
   const current=Number(inventory[team][code])||0;
   const target=getTarget();
   if(current>=target){
     showToast(`${team} ${code} ya está completo`);
     renderMissing();
     return;
   }
   const next=current+1;
   inventory[team][code]=next;
   markPendingSync(team,code,current,next,"me-faltan");
   history.push({
     id:crypto.randomUUID?.()||String(Date.now()+Math.random()),
     team,code,previous:current,next,delta:1,at:new Date().toISOString()
   });
   sessionStats.plus+=1;
   saveAll("✓ Guardado ahora");
   renderAll();
   setView("missing");
   showToast(`✓ ${team} ${code} recibido · x${next}`);
 });

 $("#missingList").querySelectorAll(".missing-direct-minus").forEach(button=>button.onclick=()=>{
   const team=button.dataset.team,code=button.dataset.code;
   const current=Number(inventory[team][code])||0;
   if(current<=0)return;
   const next=current-1;
   inventory[team][code]=next;
   markPendingSync(team,code,current,next,"me-faltan");
   history.push({
     id:crypto.randomUUID?.()||String(Date.now()+Math.random()),
     team,code,previous:current,next,delta:-1,at:new Date().toISOString()
   });
   sessionStats.minus+=1;
   saveAll("✓ Guardado ahora");
   renderAll();
   setView("missing");
   showToast(`✓ ${team} ${code} corregido · x${next}`);
 });
}
$("#missingSort").onchange=renderMissing;

function updateNavigationBadges(){
 const totals=exchangeTotals();
 $("#exchangeBadge").textContent=totals.give+totals.receive;
 $("#missingBadge").textContent=missingCountries().reduce((sum,c)=>sum+c.distinct,0);
 renderExchangeSummary();
}

// Historial y finalización.
function renderHistory(){
 const list=$("#historyList");
 if(!history.length){list.innerHTML="<p>No hay movimientos en la jornada actual.</p>";return}
 list.innerHTML=[...history].reverse().map(c=>`<article class="history-row"><div><strong>${c.delta>0?"+":"−"}${Math.abs(c.delta)} · ${c.team} ${c.code}</strong>${isPendingSync(c.team,c.code)?'<span class="history-sync-badge">Pendiente</span>':""}<br><small>${formatTime(c.at)} · ${c.previous} → ${c.next}</small></div><button data-id="${c.id}">Deshacer</button></article>`).join("");
 list.querySelectorAll("button").forEach(button=>button.onclick=()=>{const change=history.find(x=>x.id===button.dataset.id);if(change)undoChange(change)});
}
$("#historyButton").onclick=()=>{renderHistory();$("#historyDialog").showModal()};
$("#closeHistoryButton").onclick=()=>$("#historyDialog").close();
function sessionSnapshot(){return{startedAt:sessionStats.startedAt,finishedAt:new Date().toISOString(),plus:sessionStats.plus,minus:sessionStats.minus,balance:sessionStats.plus-sessionStats.minus,movements:[...history]}}
function renderFinish(s){$("#finishSummary").innerHTML=`<article><strong>Conseguidos: +${s.plus}</strong></article><article><strong>Entregados: −${s.minus}</strong></article><article><strong>Balance: ${s.balance>0?"+":""}${s.balance}</strong></article><article><strong>Movimientos: ${s.movements.length}</strong></article>`}
$("#finishButton").onclick=()=>{const s=sessionSnapshot();renderFinish(s);$("#finishDialog").dataset.snapshot=JSON.stringify(s);$("#finishDialog").showModal()};
$("#closeFinishButton").onclick=()=>$("#finishDialog").close();
function downloadJSON(data,name){const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)}
$("#downloadFinishButton").onclick=()=>downloadJSON(JSON.parse($("#finishDialog").dataset.snapshot),"resumen-mercat.json");
$("#confirmFinishButton").onclick=()=>{finishedSessions.push(JSON.parse($("#finishDialog").dataset.snapshot));history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};saveAll("Nueva jornada preparada");$("#finishDialog").close();renderAll()};
$("#resetSessionButton").onclick=()=>{if(confirm("¿Reiniciar estadísticas e historial?")){history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};saveAll("Estadísticas reiniciadas");renderAll()}};
$("#exportButton").onclick=()=>downloadJSON({exportedAt:new Date().toISOString(),target:getTarget(),sessionStats,history,finishedSessions,exchange,inventory},"panini-mercat-backup.json");

function csvEscape(value){const text=String(value??"");return /[;"\n]/.test(text)?`"${text.replaceAll('"','""')}"`:text}

function xmlEscape(value){
 return String(value??"")
  .replaceAll("&","&amp;")
  .replaceAll("<","&lt;")
  .replaceAll(">","&gt;")
  .replaceAll('"',"&quot;")
  .replaceAll("'","&apos;");
}
function excelColumnName(number){
 let result="";
 while(number>0){
   const remainder=(number-1)%26;
   result=String.fromCharCode(65+remainder)+result;
   number=Math.floor((number-1)/26);
 }
 return result;
}
function xlsxCell(ref,value,styleId=0){
 if(typeof value==="number"&&Number.isFinite(value)){
   return `<c r="${ref}" s="${styleId}" t="n"><v>${value}</v></c>`;
 }
 return `<c r="${ref}" s="${styleId}" t="inlineStr"><is><t>${xmlEscape(value)}</t></is></c>`;
}
function buildInventorySheetXml(){
 const teams=currentTeamOrder();
 const headers=["Grupo","Selección",...Array.from({length:20},(_,i)=>String(i+1).padStart(2,"0"))];
 const rows=[];

 rows.push(`<row r="1" ht="24" customHeight="1">${headers.map((value,index)=>
   xlsxCell(`${excelColumnName(index+1)}1`,value,1)
 ).join("")}</row>`);

 teams.forEach((team,teamIndex)=>{
   const rowNumber=teamIndex+2;
   const stickers=Object.entries(inventory[team]).sort(([a],[b])=>Number(a)-Number(b));
   const cells=[
     xlsxCell(`A${rowNumber}`,teamGroups[team]||"",2),
     xlsxCell(`B${rowNumber}`,team,2)
   ];
   stickers.forEach(([code,quantity],stickerIndex)=>{
     const column=excelColumnName(stickerIndex+3);
     const style=isPendingSync(team,code)?3:4;
     cells.push(xlsxCell(`${column}${rowNumber}`,Number(quantity)||0,style));
   });
   rows.push(`<row r="${rowNumber}" ht="20" customHeight="1">${cells.join("")}</row>`);
 });

 const lastRow=teams.length+1;
 return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <sheetViews>
  <sheetView workbookViewId="0">
   <pane xSplit="2" ySplit="1" topLeftCell="C2" activePane="bottomRight" state="frozen"/>
  </sheetView>
 </sheetViews>
 <cols>
  <col min="1" max="1" width="10" customWidth="1"/>
  <col min="2" max="2" width="25" customWidth="1"/>
  <col min="3" max="22" width="7" customWidth="1"/>
 </cols>
 <sheetData>${rows.join("")}</sheetData>
 <autoFilter ref="A1:V${lastRow}"/>
 <pageMargins left="0.3" right="0.3" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
</worksheet>`;
}
function buildStylesXml(){
 return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
 <fonts count="3">
  <font><sz val="11"/><name val="Calibri"/><family val="2"/></font>
  <font><b/><color rgb="FFFFFFFF"/><sz val="11"/><name val="Calibri"/><family val="2"/></font>
  <font><b/><color rgb="FF17202A"/><sz val="11"/><name val="Calibri"/><family val="2"/></font>
 </fonts>
 <fills count="4">
  <fill><patternFill patternType="none"/></fill>
  <fill><patternFill patternType="gray125"/></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FF173A59"/><bgColor indexed="64"/></patternFill></fill>
  <fill><patternFill patternType="solid"><fgColor rgb="FFFFEB3B"/><bgColor indexed="64"/></patternFill></fill>
 </fills>
 <borders count="2">
  <border><left/><right/><top/><bottom/><diagonal/></border>
  <border>
   <left style="thin"><color rgb="FFD9E0E7"/></left>
   <right style="thin"><color rgb="FFD9E0E7"/></right>
   <top style="thin"><color rgb="FFD9E0E7"/></top>
   <bottom style="thin"><color rgb="FFD9E0E7"/></bottom>
   <diagonal/>
  </border>
 </borders>
 <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
 <cellXfs count="5">
  <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
  <xf numFmtId="0" fontId="1" fillId="2" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1">
   <alignment vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="2" fillId="3" borderId="1" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
  <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1">
   <alignment horizontal="center" vertical="center"/>
  </xf>
 </cellXfs>
 <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
}
async function exportProjectXlsx(){
 showLoading("Creando Excel…");
 if(typeof JSZip==="undefined"){
   alert("No se ha podido cargar el generador de Excel.");
   hideLoading();
   return;
 }
 const project=projects[activeProjectId];
 const zip=new JSZip();

 zip.file("[Content_Types].xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
 <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
 <Default Extension="xml" ContentType="application/xml"/>
 <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
 <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
 <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
 <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
 <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
</Types>`);

 zip.folder("_rels").file(".rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
 <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`);

 zip.folder("docProps").file("core.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties"
 xmlns:dc="http://purl.org/dc/elements/1.1/"
 xmlns:dcterms="http://purl.org/dc/terms/"
 xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
 <dc:title>Inventario Panini — ${xmlEscape(project.name)}</dc:title>
 <dc:creator>Panini Mercat</dc:creator>
 <cp:lastModifiedBy>Panini Mercat</cp:lastModifiedBy>
 <dcterms:created xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:created>
 <dcterms:modified xsi:type="dcterms:W3CDTF">${new Date().toISOString()}</dcterms:modified>
</cp:coreProperties>`);
 zip.folder("docProps").file("app.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties"
 xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
 <Application>Panini Mercat</Application>
</Properties>`);

 const xl=zip.folder("xl");
 xl.file("workbook.xml",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"
 xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
 <bookViews><workbookView xWindow="0" yWindow="0" windowWidth="24000" windowHeight="12000"/></bookViews>
 <sheets><sheet name="Inventario" sheetId="1" r:id="rId1"/></sheets>
</workbook>`);
 xl.folder("_rels").file("workbook.xml.rels",`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
 <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
 <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`);
 xl.file("styles.xml",buildStylesXml());
 xl.folder("worksheets").file("sheet1.xml",buildInventorySheetXml());

 const blob=await zip.generateAsync({
   type:"blob",
   mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
   compression:"DEFLATE",
   compressionOptions:{level:6}
 });
 const safeName=project.name.replace(/[\\/:*?"<>|]+/g,"-").trim()||"colección";
 const url=URL.createObjectURL(blob);
 const anchor=document.createElement("a");
 anchor.href=url;
 anchor.download=`Inventario-${safeName}.xlsx`;
 anchor.click();
 setTimeout(()=>URL.revokeObjectURL(url),1500);
 showToast(`Excel creado · ${pendingSyncCount()} celdas amarillas`);
 hideLoading();
}
$("#excelButton").onclick=exportProjectXlsx;

$("#resetButton").onclick=()=>{if(confirm("¿Restaurar esta colección con el inventario cargado desde el último Excel maestro?")){inventory=getMasterInventoryForProject(projects[activeProjectId]);history=[];sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};exchange={give:{},receive:{}};pendingSync={};saveAll("Inventario restaurado");renderAll()}};


function projectStats(p){
 const total=Object.values(p.inventory).reduce((sum,stickers)=>sum+Object.values(stickers).reduce((a,b)=>a+Number(b),0),0);
 return {total,changes:(p.history||[]).length,pending:Object.keys(p.pendingSync||{}).length};
}
function albumWord(value){return Number(value)===1?"álbum":"álbumes"}
function collectionProgress(p){
 const target=Math.max(1,Number(p.target)||1);
 const teams=projectTeamOrder(p,p?.inventory||{}).filter(team=>teamVisibleForProject(team,p));
 let useful=0,total=0,different=0,pending=0,required=0;
 teams.forEach(team=>{
   const stickers=p?.inventory?.[team]||{};
   Object.values(stickers).forEach(q=>{
     const qty=Math.max(0,Number(q)||0);
     total+=qty;
     required+=target;
     if(qty>0)different++;
     useful+=Math.min(qty,target);
     pending+=Math.max(0,target-qty);
   });
 });
 const roundedProgress=required?Math.round(useful/required*100):0;
 const progress=pending>0?Math.min(99,roundedProgress):Math.min(100,roundedProgress);
 return {total,different,pending,progress};
}
function collectionSafeText(value){
 return String(value??"").replace(/[&<>'"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}
function renderCollections(){
 const list=$("#collectionsList");if(!list)return;
 const items=orderedProjects();
 list.innerHTML=items.map((p,index)=>{
   const s=collectionProgress(p),active=p.id===activeProjectId,def=collectionDefinition(p);
   return `<article class="collection-library-card clean-library-card collection-card-${def.theme} ${active?"active":""}" data-collection-id="${p.id}">
    <button type="button" class="collection-card-main" data-open-collection="${p.id}" aria-label="Abrir ${collectionSafeText(p.name)}">
      <div class="collection-album-icon" aria-hidden="true"><span>${def.icon}</span></div>
      <div class="collection-library-copy">
        <div class="collection-title-line"><h3>${collectionSafeText(p.name)}</h3>${active?'<span class="collection-active-badge">Activa</span>':''}</div>
        <span class="collection-type-chip">${collectionSafeText(def.label)}</span>
        <span class="collection-brief">${s.progress}% completado · Objetivo ${p.target} ${albumWord(p.target)}</span>
        <div class="collection-progress-track"><div class="collection-progress-fill" style="width:${s.progress}%"></div></div>
      </div>
      <span class="collection-card-chevron">›</span>
    </button>
    <div class="collection-card-order" aria-label="Ordenar ${collectionSafeText(p.name)}">
      <button type="button" data-move-collection="${p.id}" data-direction="-1" aria-label="Subir ${collectionSafeText(p.name)}" ${index===0?"disabled":""}>↑</button>
      <button type="button" data-move-collection="${p.id}" data-direction="1" aria-label="Bajar ${collectionSafeText(p.name)}" ${index===items.length-1?"disabled":""}>↓</button>
    </div>
    <button type="button" class="collection-card-menu" data-edit-collection="${p.id}" aria-label="Editar ${collectionSafeText(p.name)}">•••</button>
   </article>`;
 }).join("");
 list.querySelectorAll("[data-open-collection]").forEach(button=>button.onclick=()=>{
   const id=button.dataset.openCollection;
   if(id!==activeProjectId)switchProject(id);
   setMainTab("collection");
 });
 list.querySelectorAll("[data-edit-collection]").forEach(button=>button.onclick=event=>{
   event.stopPropagation();openEditCollection(button.dataset.editCollection);
 });
 list.querySelectorAll("[data-move-collection]").forEach(button=>button.onclick=event=>{
   event.stopPropagation();
   moveCollectionInLibrary(button.dataset.moveCollection,Number(button.dataset.direction));
 });
}
function moveCollectionInLibrary(id,direction){
 if(!id||![1,-1].includes(direction))return;
 const ordered=orderedProjects();
 const index=ordered.findIndex(project=>project.id===id);
 const target=index+direction;
 if(index<0||target<0||target>=ordered.length)return;
 const current=ordered[index],other=ordered[target];
 const currentOrder=current.collectionOrder;
 current.collectionOrder=other.collectionOrder;
 other.collectionOrder=currentOrder;
 persistProjects();
 renderCollections();
 renderProjectsList();
 navigator.vibrate?.(15);
 showToast(direction<0?"Colección movida hacia arriba":"Colección movida hacia abajo");
}
function openEditCollection(id){
 const p=projects[id],dialog=$("#editCollectionDialog");if(!p||!dialog)return;
 $("#editCollectionId").value=id;
 $("#editCollectionName").value=p.name||"Colección";
 $("#editCollectionTarget").value=Math.max(1,Number(p.target)||1);
 $("#deleteCollectionButton").hidden=Object.keys(projects).length<=1;
 dialog.showModal();
 setTimeout(()=>$("#editCollectionName")?.focus(),80);
}
function closeEditCollection(){const dialog=$("#editCollectionDialog");if(dialog?.open)dialog.close()}
function changeEditTarget(delta){
 const input=$("#editCollectionTarget");if(!input)return;
 input.value=String(Math.min(20,Math.max(1,(Number(input.value)||1)+delta)));
}
function saveEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 const name=$("#editCollectionName").value.trim();
 const target=Math.min(20,Math.max(1,Number($("#editCollectionTarget").value)||1));
 if(!name){$("#editCollectionName").focus();return}
 if(id===activeProjectId)commitProjectState();
 p.name=name;p.target=target;
 persistProjects();
 if(id===activeProjectId)loadProjectState();
 renderAll();renderProjectsList();closeEditCollection();showToast("Colección actualizada");
}
function duplicateEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 if(id===activeProjectId)commitProjectState();
 const copy=structuredClone(p);copy.id=makeId();copy.name=`${p.name} · copia`;
 copy.createdAt=new Date().toISOString();copy.updatedAt=copy.createdAt;
 projects[copy.id]=copy;persistProjects();renderCollections();renderProjectsList();closeEditCollection();showToast("Colección duplicada");
}
function deleteEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p||Object.keys(projects).length<=1)return;
 if(!confirm(`¿Eliminar la colección "${p.name}"? Esta acción no se puede deshacer.`))return;
 createAutomaticBackup("antes-de-eliminar-colección");
 if(id===activeProjectId){
   const replacement=Object.keys(projects).find(projectId=>projectId!==id);
   delete projects[id];activeProjectId=replacement;persistProjects();loadProjectState();
 }else{delete projects[id];persistProjects()}
 renderAll();renderProjectsList();closeEditCollection();showToast("Colección eliminada");
}

function emptyEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 if(!confirm(`¿Vaciar todo el stock de “${p.name}”? Se pondrán a 0 todas las referencias, incluidas las colecciones opcionales ocultas.`))return;
 createAutomaticBackup("antes-de-vaciar-colección");
 if(id===activeProjectId)commitProjectState();
 Object.values(p.inventory||{}).forEach(stickers=>Object.keys(stickers||{}).forEach(code=>stickers[code]=0));
 p.history=[];p.pendingSync={};p.exchange={give:{},receive:{}};p.sessionStats={plus:0,minus:0,startedAt:new Date().toISOString()};
 persistProjects();if(id===activeProjectId)loadProjectState();renderAll();renderProjectsList();closeEditCollection();showToast("Colección vaciada");
}
function completeOneAlbumEditedCollection(){
 const id=$("#editCollectionId").value,p=projects[id];if(!p)return;
 const visibleTeams=projectTeamOrder(p,p.inventory||{}).filter(team=>teamVisibleForProject(team,p));
 const missing=visibleTeams.reduce((sum,team)=>sum+Object.values(p.inventory[team]||{}).filter(q=>Number(q)<1).length,0);
 if(!missing){showToast("Este álbum ya tiene al menos una unidad de cada referencia activa");return;}
 if(!confirm(`¿Completar 1 álbum de “${p.name}”? Se añadirá una unidad a las ${missing} referencias activas que estén a 0. Las repetidas actuales se conservarán.`))return;
 createAutomaticBackup("antes-de-completar-un-álbum");
 if(id===activeProjectId)commitProjectState();
 visibleTeams.forEach(team=>Object.keys(p.inventory[team]||{}).forEach(code=>{if(Number(p.inventory[team][code])<1)p.inventory[team][code]=1;}));
 persistProjects();if(id===activeProjectId)loadProjectState();renderAll();renderProjectsList();closeEditCollection();showToast("Álbum completado con 1 unidad por referencia");
}

function adjustAllEditedCollection(delta){
 const id=$("#editCollectionId").value,p=projects[id];if(!p||![1,-1].includes(delta))return;
 if(id===activeProjectId)commitProjectState();
 const references=Object.values(p.inventory||{}).reduce((sum,stickers)=>sum+Object.keys(stickers||{}).length,0);
 const positive=Object.values(p.inventory||{}).reduce((sum,stickers)=>sum+Object.values(stickers||{}).filter(q=>Number(q)>0).length,0);
 const affected=delta>0?references:positive;
 if(!affected){showToast("No hay unidades que restar");return;}
 const action=delta>0?"sumar una unidad a":"restar una unidad de";
 const detail=delta>0?`${affected} referencias`:`${affected} referencias con stock`;
 if(!confirm(`¿${delta>0?"Añadir +1 a todo":"Aplicar −1 a todo"} en “${p.name}”? Se va a ${action} ${detail}.`))return;
 createAutomaticBackup(delta>0?"antes-de-sumar-uno-a-todo":"antes-de-restar-uno-a-todo");
 const at=new Date().toISOString();
 p.history=Array.isArray(p.history)?p.history:[];
 p.pendingSync=p.pendingSync&&typeof p.pendingSync==="object"?p.pendingSync:{};
 p.sessionStats=p.sessionStats||{plus:0,minus:0,startedAt:at};
 let changed=0;
 Object.entries(p.inventory||{}).forEach(([team,stickers])=>{
   Object.keys(stickers||{}).forEach(code=>{
     const previous=Math.max(0,Number(stickers[code])||0);
     const next=Math.max(0,previous+delta);
     if(next===previous)return;
     stickers[code]=next;changed++;
     const key=syncKey(team,code),existing=p.pendingSync[key];
     p.pendingSync[key]={team,code,firstPrevious:existing?existing.firstPrevious:previous,latestValue:next,updatedAt:at,source:"ajuste-global"};
     p.history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta,at});
   });
 });
 p.history=p.history.slice(-300);
 if(delta>0)p.sessionStats.plus=(Number(p.sessionStats.plus)||0)+changed;
 else p.sessionStats.minus=(Number(p.sessionStats.minus)||0)+changed;
 p.updatedAt=at;
 persistProjects();
 if(id===activeProjectId)loadProjectState();
 renderAll();renderProjectsList();closeEditCollection();
 navigator.vibrate?.(25);
 showToast(`${delta>0?"+1":"−1"} aplicado a ${changed} referencias`);
}

function inventorySummary(project){
 let references=0,units=0,positive=0;
 Object.values(project?.inventory||{}).forEach(stickers=>Object.values(stickers||{}).forEach(raw=>{
   references++;const qty=Math.max(0,Number(raw)||0);units+=qty;if(qty>0)positive++;
 }));
 return {references,units,positive};
}
function closeTransferInventory(){const dialog=$("#transferInventoryDialog");if(dialog?.open)dialog.close()}
function openTransferInventory(){
 const sourceId=$("#editCollectionId")?.value,source=projects[sourceId],dialog=$("#transferInventoryDialog");
 if(!source||!dialog)return;
 if(sourceId===activeProjectId)commitProjectState();
 const destinations=orderedProjects().filter(project=>project.id!==sourceId);
 if(!destinations.length){showToast("Necesitas otra colección para hacer un traspaso");return;}
 $("#transferSourceCollectionId").value=sourceId;
 const summary=inventorySummary(source);
 $("#transferSourceSummary").innerHTML=`<strong>Origen · ${collectionSafeText(source.name)}</strong>${summary.units} unidades registradas · ${summary.positive} referencias con stock`;
 const select=$("#transferDestinationCollection");
 select.innerHTML=destinations.map(project=>`<option value="${project.id}">${collectionSafeText(project.name)}</option>`).join("");
 const copy=dialog.querySelector('input[name="transferAction"][value="copy"]');if(copy)copy.checked=true;
 const sum=dialog.querySelector('input[name="transferMode"][value="sum"]');if(sum)sum.checked=true;
 closeEditCollection();
 updateTransferInventoryPreview();
 dialog.showModal();
}
function transferInventorySelection(){
 const dialog=$("#transferInventoryDialog");
 return {
   sourceId:$("#transferSourceCollectionId")?.value||"",
   destinationId:$("#transferDestinationCollection")?.value||"",
   action:dialog?.querySelector('input[name="transferAction"]:checked')?.value||"copy",
   mode:dialog?.querySelector('input[name="transferMode"]:checked')?.value||"sum"
 };
}
function updateTransferInventoryPreview(){
 const box=$("#transferInventoryPreview");if(!box)return;
 const {sourceId,destinationId,action,mode}=transferInventorySelection();
 const source=projects[sourceId],destination=projects[destinationId];
 if(!source||!destination){box.innerHTML="<strong>Selecciona una colección destino.</strong>";return;}
 const src=inventorySummary(source),dst=inventorySummary(destination);
 let resultUnits=src.units;
 if(mode==="sum")resultUnits=dst.units+src.units;
 const actionLabel=action==="move"?"Mover":"Copiar";
 const modeLabel=mode==="replace"?"Reemplazar":"Sumar";
 box.innerHTML=`<strong>Resumen antes de confirmar</strong><div class="transfer-preview-grid"><span>Operación<b>${actionLabel}</b></span><span>Aplicación<b>${modeLabel}</b></span><span>Origen<b>${src.units} unidades</b></span><span>Destino tras operación<b>${resultUnits} unidades</b></span></div>${action==="move"?'<p class="transfer-preview-warning">Al mover, el inventario del origen quedará a cero después de completar el traspaso.</p>':""}${mode==="replace"?'<p class="transfer-preview-warning">Reemplazar eliminará el inventario que tenga actualmente la colección destino y usará la misma estructura y cantidades del origen.</p>':""}`;
}
function zeroProjectInventory(project){
 Object.values(project?.inventory||{}).forEach(stickers=>Object.keys(stickers||{}).forEach(code=>stickers[code]=0));
}
function addInventories(destinationInventory,sourceInventory){
 const result=structuredClone(destinationInventory||{});
 Object.entries(sourceInventory||{}).forEach(([team,stickers])=>{
   if(!result[team])result[team]={};
   Object.entries(stickers||{}).forEach(([code,raw])=>{
     result[team][code]=Math.max(0,Number(result[team][code])||0)+Math.max(0,Number(raw)||0);
   });
 });
 return result;
}
function registerTransferHistory(project,beforeInventory,source="traspaso-inventario"){
 const at=new Date().toISOString();
 project.history=Array.isArray(project.history)?project.history:[];
 project.pendingSync=project.pendingSync&&typeof project.pendingSync==="object"?project.pendingSync:{};
 const teams=new Set([...Object.keys(beforeInventory||{}),...Object.keys(project.inventory||{})]);
 teams.forEach(team=>{
   const codes=new Set([...Object.keys(beforeInventory?.[team]||{}),...Object.keys(project.inventory?.[team]||{})]);
   codes.forEach(code=>{
     const previous=Math.max(0,Number(beforeInventory?.[team]?.[code])||0),next=Math.max(0,Number(project.inventory?.[team]?.[code])||0);
     if(previous===next)return;
     project.history.push({id:crypto.randomUUID?.()||String(Date.now()+Math.random()),team,code,previous,next,delta:next-previous,at,source});
     const key=syncKey(team,code),existing=project.pendingSync[key];
     project.pendingSync[key]={team,code,firstPrevious:existing?existing.firstPrevious:previous,latestValue:next,updatedAt:at,source};
   });
 });
 project.history=project.history.slice(-300);project.updatedAt=at;
}
function executeTransferInventory(){
 const {sourceId,destinationId,action,mode}=transferInventorySelection();
 const source=projects[sourceId],destination=projects[destinationId];
 if(!source||!destination||sourceId===destinationId){showToast("Selecciona una colección destino válida");return;}
 if(sourceId===activeProjectId)commitProjectState();
 const src=inventorySummary(source),dst=inventorySummary(destination);
 const actionLabel=action==="move"?"MOVER":"COPIAR",modeLabel=mode==="replace"?"REEMPLAZAR":"SUMAR";
 const message=`${actionLabel} inventario\n\nOrigen: ${source.name}\nDestino: ${destination.name}\nUnidades origen: ${src.units}\nUnidades actuales destino: ${dst.units}\nModo: ${modeLabel}\n\n${action==="move"?"El origen quedará a cero.\n":""}${mode==="replace"?"El inventario actual del destino será reemplazado.\n":""}\n¿Confirmar la operación?`;
 if(!confirm(message))return;
 createAutomaticBackup("antes-de-traspasar-inventario");
 const beforeSource=structuredClone(source.inventory||{}),beforeDestination=structuredClone(destination.inventory||{});
 destination.inventory=mode==="replace"?structuredClone(source.inventory||{}):addInventories(destination.inventory,source.inventory);
 ensureProjectInventorySchema(destination);ensureProjectTeamOrder(destination);
 if(action==="move")zeroProjectInventory(source);
 registerTransferHistory(destination,beforeDestination,"traspaso-inventario-destino");
 if(action==="move")registerTransferHistory(source,beforeSource,"traspaso-inventario-origen");
 persistProjects();
 if(activeProjectId===sourceId||activeProjectId===destinationId)loadProjectState();
 renderAll();renderProjectsList();renderCollections();closeTransferInventory();
 navigator.vibrate?.([25,30,25]);
 showToast(`${action==="move"?"Inventario movido":"Inventario copiado"} a ${destination.name}`);
}

function renderProjectsList(){
 const list=$("#projectsList");
 if(!list)return;
 list.innerHTML=orderedProjects().map(p=>{
   const stats=projectStats(p);
   return `<article class="project-item ${p.id===activeProjectId?"active":""}">
    <div class="project-item-copy"><strong>${p.name}</strong><small>Objetivo ${p.target} · ${stats.total} cromos · ${stats.pending} pendientes</small></div>
    <div class="project-item-actions">
      <button class="project-open" data-id="${p.id}">${p.id===activeProjectId?"Activo":"Abrir"}</button>
      ${Object.keys(projects).length>1?`<button class="project-delete" data-delete="${p.id}">Eliminar</button>`:""}
    </div>
   </article>`;
 }).join("");
 list.querySelectorAll("[data-id]").forEach(b=>b.onclick=()=>switchProject(b.dataset.id));
 list.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>deleteProject(b.dataset.delete));
}
function switchProject(id){
 if(!projects[id])return;
 commitProjectState();activeProjectId=id;persistProjects();loadProjectState();renderProjectsList();
 if($("#projectsDialog")?.open)$("#projectsDialog").close();showToast(`Colección: ${projects[id].name}`);
}
function deleteProject(id){
 if(id===activeProjectId){alert("Cambia primero a otra colección.");return}
 if(!confirm(`¿Eliminar la colección "${projects[id].name}"?`))return;
 createAutomaticBackup("antes-de-eliminar-colección");
 delete projects[id];persistProjects();renderProjectsList();
}
function createEmptyInventoryFrom(sourceInventory){
 return Object.fromEntries(Object.entries(sourceInventory||{}).map(([team,stickers])=>[
   team,Object.fromEntries(Object.keys(stickers||{}).map(code=>[code,0]))
 ]));
}
function selectedNewCollectionType(){return document.querySelector('#createProjectDialog input[name="newCollectionType"]:checked')?.value||"world-cup-2026";}
function refreshCreateProjectSources(){
 const type=selectedNewCollectionType();
 const select=$("#sourceProjectSelect");
 const repeatRadio=document.querySelector('#createProjectDialog input[name="projectSource"][value="repeats"]');
 const eligible=Object.values(projects).filter(p=>inferCollectionType(p)===type);
 if(select)select.innerHTML=eligible.map(p=>`<option value="${p.id}">${collectionSafeText(p.name)}</option>`).join("");
 if(repeatRadio){repeatRadio.disabled=!eligible.length;repeatRadio.closest("label")?.classList.toggle("disabled-option",!eligible.length);}
 const repeatOptions=$("#repeatOptions");
 if(!eligible.length&&repeatRadio?.checked){document.querySelector('#createProjectDialog input[name="projectSource"][value="empty"]').checked=true;if(repeatOptions)repeatOptions.hidden=true;}
 updateTransferPreview();
}
function openCreateProject(){
 const dialog=$("#createProjectDialog");
 if(!dialog)return;
 $("#newProjectName").value="";
 $("#newProjectTarget").value="2";
 const defaultType=inferCollectionType(projects?.[activeProjectId]);
 const typeRadio=dialog.querySelector(`input[name="newCollectionType"][value="${defaultType}"]`)||dialog.querySelector('input[name="newCollectionType"]');
 if(typeRadio)typeRadio.checked=true;
 const emptyOption=dialog.querySelector('input[name="projectSource"][value="empty"]');
 if(emptyOption)emptyOption.checked=true;
 const targetMode=dialog.querySelector('input[name="repeatMode"][value="target"]');
 if(targetMode)targetMode.checked=true;
 $("#repeatOptions").hidden=true;
 refreshCreateProjectSources();
 dialog.showModal();
}
function calculateTransfer(source,target,mode){
 if(!source?.inventory)return {inventory:{},units:0,refs:0};
 const transferred=createEmptyInventoryFrom(source.inventory);
 let units=0,refs=0;
 Object.entries(source.inventory).forEach(([team,stickers])=>{
   Object.entries(stickers||{}).forEach(([code,qty])=>{
     const available=Math.max(0,(Number(qty)||0)-(Number(source.target)||1));
     const move=mode==="all"?available:Math.min(available,target);
     transferred[team][code]=move;
     if(move>0){units+=move;refs++}
   });
 });
 return {inventory:transferred,units,refs};
}
function updateTransferPreview(){
 const repeatOptions=$("#repeatOptions"),preview=$("#transferPreview");
 if(!repeatOptions||!preview||repeatOptions.hidden)return;
 const source=projects[$("#sourceProjectSelect")?.value];
 const target=Math.max(1,Number($("#newProjectTarget")?.value)||1);
 const mode=document.querySelector('#createProjectDialog input[name="repeatMode"]:checked')?.value||"target";
 if(!source){preview.textContent="Selecciona una colección de origen.";return}
 const result=calculateTransfer(source,target,mode);
 preview.innerHTML=result.units
   ? `Se transferirán <strong>${result.units}</strong> cromos de <strong>${result.refs}</strong> referencias.`
   : "Esta colección no tiene repetidas disponibles.";
}
function createProject(){
 const dialog=$("#createProjectDialog");
 if(!dialog)return;
 const name=$("#newProjectName").value.trim();
 const target=Math.max(1,Number($("#newProjectTarget").value)||1);
 if(!name){alert("Escribe un nombre para la colección.");return}
 const sourceType=dialog.querySelector('input[name="projectSource"]:checked')?.value||"empty";
 const collectionType=selectedNewCollectionType();
 if(collectionType==="megacracks-2026-27"){alert("Megacracks 2026/27 estará disponible en la siguiente build, cuando carguemos su checklist completa.");return;}

 // Captura el estado más reciente antes de calcular o transferir unidades.
 commitProjectStateLocalOnly();
 const currentProject=projects[activeProjectId];
 let source=null,transfer=null;
 let newInventory=collectionInventoryTemplate(collectionType);

 if(sourceType==="repeats"){
   source=projects[$("#sourceProjectSelect").value];
   if(!source||inferCollectionType(source)!==collectionType){alert("Selecciona una colección de origen del mismo tipo.");return}
   const mode=dialog.querySelector('input[name="repeatMode"]:checked')?.value||"target";
   transfer=calculateTransfer(source,target,mode);
   if(!transfer.units){alert("La colección elegida no tiene repetidas disponibles para transferir.");return}
   if(!confirm(`Crear "${name}" transfiriendo ${transfer.units} cromos de la colección "${source.name}"? Las unidades se descontarán del proyecto de origen.`))return;
   newInventory=transfer.inventory;
 }

 // La operación se prepara completa antes de modificar projects, evitando estados parciales.
 const newProject=defaultProject(name,target,newInventory,source?.seedType||seedTypeForCollection(collectionType));
 newProject.collectionType=collectionType;
 newProject.collectionOptions=collectionType==="world-cup-2026"
   ? structuredClone(source?.collectionOptions||currentProject?.collectionOptions||{collaborationEnabled:true,extra:{epic:false,bronze:false,silver:false,gold:false}})
   : {};
 ensureProjectTeamOrder(newProject);

 createAutomaticBackup(sourceType==="repeats"?"antes-de-transferir-repetidas":"antes-de-crear-coleccion");
 if(sourceType==="repeats"&&source){
   const updatedSource=structuredClone(source);
   Object.entries(newInventory).forEach(([team,stickers])=>{
     Object.entries(stickers||{}).forEach(([code,qty])=>{
       const moved=Math.max(0,Number(qty)||0);
       if(!moved)return;
       updatedSource.inventory[team][code]=Math.max(0,(Number(updatedSource.inventory[team]?.[code])||0)-moved);
     });
   });
   updatedSource.updatedAt=new Date().toISOString();
   projects[source.id]=updatedSource;
 }
 projects[newProject.id]=newProject;
 activeProjectId=newProject.id;
 persistProjects();
 dialog.close();
 loadProjectState();
 renderProjectsList();
 renderCollections();
 renderAll();
 showToast(sourceType==="repeats"?`Colección creada · ${transfer.units} cromos transferidos`:`Colección creada: ${name}`);
}
$("#projectSelectorButton").onclick=()=>{renderProjectsList();$("#projectsDialog").showModal()};
$("#newProjectQuickButton").onclick=openCreateProject;
$("#createCollectionFromLibraryButton").onclick=openCreateProject;
$("#closeProjectsDialog").onclick=()=>$("#projectsDialog").close();
$("#createProjectButton").onclick=()=>{$("#projectsDialog").close();openCreateProject()};
$("#closeCreateProjectDialog").onclick=()=>$("#createProjectDialog").close();
$("#confirmCreateProjectButton").onclick=createProject;
document.querySelectorAll('#createProjectDialog input[name="newCollectionType"]').forEach(radio=>radio.onchange=refreshCreateProjectSources);
document.querySelectorAll('#createProjectDialog input[name="projectSource"]').forEach(radio=>radio.onchange=()=>{
 $("#repeatOptions").hidden=radio.value!=="repeats"||!radio.checked;
 updateTransferPreview();
});
document.querySelectorAll('#createProjectDialog input[name="repeatMode"]').forEach(radio=>radio.onchange=updateTransferPreview);
$("#sourceProjectSelect").onchange=updateTransferPreview;
$("#newProjectTarget").oninput=updateTransferPreview;

function buildFullBackup(reason="manual"){
 commitProjectState();
 return {
   format:"panini-mercat-backup",
   version:APP_VERSION,
   createdAt:new Date().toISOString(),
   reason,
   activeProjectId,
   projects:structuredClone(projects),
   metadata:{
     projectCount:Object.keys(projects).length,
     totalStickers:Object.values(projects).reduce((sum,project)=>
       sum+Object.values(project.inventory||{}).reduce((teamSum,stickers)=>
         teamSum+Object.values(stickers).reduce((a,b)=>a+Number(b||0),0)
       ,0)
     ,0)
   }
 };
}
function downloadBackup(data,fileName){
 const blob=new Blob([JSON.stringify(data,null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);
 const anchor=document.createElement("a");
 anchor.href=url;
 anchor.download=fileName;
 anchor.click();
 setTimeout(()=>URL.revokeObjectURL(url),1200);
}
function createAutomaticBackup(reason){
 const backup=buildFullBackup(reason);
 const snapshots=readJSON("panini-mercat-auto-backups-v5",[]);
 snapshots.push(backup);
 while(snapshots.length>5)snapshots.shift();
 localStorage.setItem("panini-mercat-auto-backups-v5",JSON.stringify(snapshots));
 return backup;
}
function validateBackup(data){
 if(!data||data.format!=="panini-mercat-backup"||!data.projects||typeof data.projects!=="object"){
   throw new Error("El archivo no es una copia válida de Panini Mercat.");
 }
 const projectValues=Object.values(data.projects);
 if(!projectValues.length)throw new Error("La copia no contiene colecciones.");
 for(const project of projectValues){
   if(!project.id||!project.name||!project.inventory)throw new Error("La copia contiene un colección incompleto.");
 }
 return data;
}
function backupSummaryHtml(data){
 const projectsCount=Object.keys(data.projects).length;
 const total=data.metadata?.totalStickers??Object.values(data.projects).reduce((sum,project)=>
   sum+Object.values(project.inventory||{}).reduce((teamSum,stickers)=>
     teamSum+Object.values(stickers).reduce((a,b)=>a+Number(b||0),0)
   ,0)
 ,0);
 return `<strong>${projectsCount} colecciones</strong><br>
 <span>${total} cromos · copia del ${new Date(data.createdAt).toLocaleString("es-ES")}</span>`;
}
async function readBackupFile(file){
 const text=await file.text();
 return validateBackup(JSON.parse(text));
}
function restoreBackup(data,mode){
 showLoading("Restaurando copia…");
 createAutomaticBackup("antes-de-restaurar");
 if(mode==="replace"){
   projects=structuredClone(data.projects);
   activeProjectId=data.activeProjectId&&projects[data.activeProjectId]
     ?data.activeProjectId:Object.keys(projects)[0];
 }else{
   const idMap={};
   Object.values(data.projects).forEach(project=>{
     const copy=structuredClone(project);
     const oldId=copy.id;
     copy.id=makeId();
     copy.name=`${copy.name} · restaurado`;
     copy.createdAt=new Date().toISOString();
     idMap[oldId]=copy.id;
     projects[copy.id]=copy;
   });
 }
 persistProjects();
 loadProjectState();
 renderProjectsList();
 hideLoading();
}
$("#exportBackupButton").onclick=()=>{
 const backup=buildFullBackup("manual");
 const stamp=new Date().toISOString().slice(0,10);
 downloadBackup(backup,`Panini-Mercat-Backup-${stamp}.json`);
 showToast("Copia completa exportada");
};
$("#restoreBackupButton").onclick=()=>$("#backupFileInput").click();
$("#backupFileInput").onchange=async event=>{
 const file=event.target.files?.[0];
 if(!file)return;
 try{
   pendingBackupRestore=await readBackupFile(file);
   $("#restoreBackupSummary").innerHTML=backupSummaryHtml(pendingBackupRestore);
   $("#restoreBackupDialog").showModal();
 }catch(error){
   console.error(error);
   alert(error.message||"No se ha podido leer la copia.");
 }finally{
   event.target.value="";
 }
};
$("#closeRestoreBackupDialog").onclick=()=>$("#restoreBackupDialog").close();
$("#cancelRestoreBackupButton").onclick=()=>$("#restoreBackupDialog").close();
$("#confirmRestoreBackupButton").onclick=()=>{
 if(!pendingBackupRestore)return;
 const mode=document.querySelector('input[name="restoreMode"]:checked')?.value||"replace";
 const message=mode==="replace"
   ?"Se reemplazarán todos los colecciones actuales. ¿Continuar?"
   :"Los colecciones de la copia se añadirán como colecciones nuevos. ¿Continuar?";
 if(!confirm(message))return;
 restoreBackup(pendingBackupRestore,mode);
 $("#restoreBackupDialog").close();
 pendingBackupRestore=null;
 showToast("✓ Copia restaurada");
};


function parseCellReference(ref){
 const match=String(ref||"").match(/^([A-Z]+)(\d+)$/i);
 if(!match)return null;
 let column=0;
 for(const char of match[1].toUpperCase()){
   column=column*26+(char.charCodeAt(0)-64);
 }
 return {column,row:Number(match[2])};
}
function decodeXmlEntities(text){
 const node=document.createElement("textarea");
 node.innerHTML=text||"";
 return node.value;
}
function normaliseImportedTeam(name){
 const wanted=normalize(String(name||""));
 return Object.keys(originalInventory).find(team=>normalize(team)===wanted)||null;
}
async function readInventoryWorkbook(file){
 const bytes=await file.arrayBuffer();
 const zip=await JSZip.loadAsync(bytes);

 const workbookFile=zip.file("xl/workbook.xml");
 const relsFile=zip.file("xl/_rels/workbook.xml.rels");
 if(!workbookFile||!relsFile)throw new Error("El archivo no parece un Excel válido.");

 const workbookXml=await workbookFile.async("string");
 const relsXml=await relsFile.async("string");
 const parser=new DOMParser();
 const workbookDoc=parser.parseFromString(workbookXml,"application/xml");
 const relsDoc=parser.parseFromString(relsXml,"application/xml");

 const relTargets={};
 relsDoc.querySelectorAll("Relationship").forEach(rel=>{
   relTargets[rel.getAttribute("Id")]=rel.getAttribute("Target");
 });

 let inventoryTarget=null;
 workbookDoc.querySelectorAll("sheet").forEach(sheet=>{
   if(normalize(sheet.getAttribute("name"))==="inventario"){
     const relId=sheet.getAttribute("r:id")||sheet.getAttributeNS(
       "http://schemas.openxmlformats.org/officeDocument/2006/relationships","id"
     );
     inventoryTarget=relTargets[relId];
   }
 });
 if(!inventoryTarget)throw new Error('No se encontró una hoja llamada "Inventario".');

 const cleanTarget=inventoryTarget.replace(/^\/?/,"").replace(/^xl\//,"");
 const sheetFile=zip.file(`xl/${cleanTarget}`);
 if(!sheetFile)throw new Error("No se pudo leer la hoja Inventario.");

 let sharedStrings=[];
 const sharedFile=zip.file("xl/sharedStrings.xml");
 if(sharedFile){
   const sharedXml=await sharedFile.async("string");
   const sharedDoc=parser.parseFromString(sharedXml,"application/xml");
   sharedStrings=[...sharedDoc.querySelectorAll("si")].map(si=>
     [...si.querySelectorAll("t")].map(t=>t.textContent||"").join("")
   );
 }

 const sheetXml=await sheetFile.async("string");
 const sheetDoc=parser.parseFromString(sheetXml,"application/xml");
 const cells=new Map();

 sheetDoc.querySelectorAll("c").forEach(cell=>{
   const ref=cell.getAttribute("r");
   const type=cell.getAttribute("t");
   let value="";
   if(type==="s"){
     const index=Number(cell.querySelector("v")?.textContent||0);
     value=sharedStrings[index]??"";
   }else if(type==="inlineStr"){
     value=[...cell.querySelectorAll("is t")].map(t=>t.textContent||"").join("");
   }else{
     value=cell.querySelector("v")?.textContent??"";
   }
   cells.set(ref,value);
 });

 const imported=emptyInventory();
 const groups={};
 const foundTeams=new Set();

 for(let row=2;row<=300;row++){
   const rawTeam=cells.get(`B${row}`);
   if(rawTeam===undefined||String(rawTeam).trim()==="")continue;
   const team=normaliseImportedTeam(rawTeam);
   if(!team)continue;
   foundTeams.add(team);
   groups[team]=String(cells.get(`A${row}`)||"").trim();

   for(let index=1;index<=20;index++){
     const code=team==="FWC"?String(index-1).padStart(2,"0"):String(index).padStart(2,"0");
     const column=excelColumnName(index+2);
     const raw=cells.get(`${column}${row}`);
     const quantity=Math.max(0,Math.round(Number(raw)||0));
     imported[team][code]=quantity;
   }
 }
 if(foundTeams.size!==49){
   throw new Error(`Se encontraron ${foundTeams.size} de las 49 categorías esperadas.`);
 }
 return {inventory:imported,groups,teams:foundTeams.size,fileName:file.name};
}
function buildImportComparison(importedResult){
 const differences=[];
 Object.entries(importedResult.inventory).forEach(([team,stickers])=>{
   Object.entries(stickers).forEach(([code,excelValue])=>{
     const appValue=Number(inventory[team][code])||0;
     if(appValue===Number(excelValue))return;
     differences.push({
       team,code,appValue,excelValue:Number(excelValue),
       conflict:isPendingSync(team,code)
     });
   });
 });
 return {
   ...importedResult,
   differences,
   conflicts:differences.filter(item=>item.conflict)
 };
}
function renderImportReview(){
 if(!pendingExcelImport)return;
 $("#importFileTeams").textContent=pendingExcelImport.teams;
 $("#importChangedCells").textContent=pendingExcelImport.differences.length;
 $("#importConflictCells").textContent=pendingExcelImport.conflicts.length;
 $("#importConflictHelp").innerHTML=pendingExcelImport.conflicts.length
   ? `<strong>${pendingExcelImport.conflicts.length} conflictos:</strong> esas celdas tienen cambios pendientes en la app y un valor diferente en el Excel.`
   : "No hay conflictos con cambios pendientes de la app.";

 $("#importDifferencesList").innerHTML=pendingExcelImport.differences.length
   ? pendingExcelImport.differences.slice(0,300).map(item=>`<article class="import-difference-row ${item.conflict?"conflict":""}">
      <div><strong>${item.team} ${item.code}</strong>${item.conflict?'<span class="import-conflict-badge">Conflicto</span>':""}<small>App → Excel</small></div>
      <div class="import-difference-values">x${item.appValue} → x${item.excelValue}</div>
     </article>`).join("")
   : "<p>El colección y el Excel ya tienen las mismas cantidades.</p>";
}
function openImportExcel(){
 pendingExcelImport=null;
 $("#excelFileInput").value="";
 $("#importExcelStart").hidden=false;
 $("#importExcelReview").hidden=true;
 $("#importExcelDialog").showModal();
}
async function handleExcelFile(file){
 if(!file)return;
 showLoading("Leyendo Excel…");
 try{
   $("#chooseExcelFileButton").disabled=true;
   $("#chooseExcelFileButton").textContent="Leyendo Excel…";
   const imported=await readInventoryWorkbook(file);
   pendingExcelImport=buildImportComparison(imported);
   renderImportReview();
   $("#importExcelStart").hidden=true;
   $("#importExcelReview").hidden=false;
   hideLoading();
 }catch(error){
   console.error(error);
   hideLoading();
   alert(error.message||"No se ha podido importar el Excel.");
 }finally{
   $("#chooseExcelFileButton").disabled=false;
   $("#chooseExcelFileButton").textContent="Seleccionar Excel";
 }
}
function applyExcelImport(){
 if(!pendingExcelImport)return;
 createAutomaticBackup("antes-de-importar-excel");
 const resolution=$("#importConflictResolution").value;
 const now=new Date().toISOString();
 let applied=0,kept=0;

 pendingExcelImport.differences.forEach(item=>{
   if(item.conflict&&resolution==="app"){
     kept++;
     return;
   }
   const previous=Number(inventory[item.team][item.code])||0;
   const next=Number(item.excelValue)||0;
   if(previous===next)return;
   inventory[item.team][item.code]=next;
   history.push({
     id:makeId(),team:item.team,code:item.code,
     previous,next,delta:next-previous,at:now,source:"import-excel"
   });
   if(item.conflict&&resolution==="excel"){
     delete pendingSync[syncKey(item.team,item.code)];
   }
   applied++;
 });

 Object.entries(pendingExcelImport.groups||{}).forEach(([team,group])=>{
   if(group)teamGroups[team]=group;
 });

 saveAll("Excel importado");
 renderAll();renderProjectsList();
 $("#importExcelDialog").close();
 showToast(`Excel aplicado · ${applied} cambios${kept?` · ${kept} mantenidos`:""}`);
 pendingExcelImport=null;
}
$("#importExcelButton").onclick=openImportExcel;
$("#closeImportExcelDialog").onclick=()=>$("#importExcelDialog").close();
$("#chooseExcelFileButton").onclick=()=>$("#excelFileInput").click();
$("#excelFileInput").onchange=e=>handleExcelFile(e.target.files?.[0]);
$("#cancelExcelImportButton").onclick=()=>$("#importExcelDialog").close();
$("#applyExcelImportButton").onclick=applyExcelImport;


$("#markSyncedButton").onclick=()=>{
 const count=pendingSyncCount();
 if(!count){showToast("No hay cambios pendientes");return}
 if(!confirm(`Marcar ${count} cambios como sincronizados en la colección activa?`))return;
 pendingSync={};
 lastSyncedAt=new Date().toISOString();
 saveAll("Colección sincronizada");
 renderAll();
 renderProjectsList();
 showToast("✓ Colección marcada como sincronizado");
};


function tradeItemFromKey(key){
 const [officialCode,displayCode]=String(key||"").split("|");
 const team=PANINI_TEAM_CODES[officialCode];
 if(!team||!inventory?.[team])return null;
 const internalCode=paniniInternalCode(team,Number(displayCode));
 if(!internalCode)return null;
 return {team,officialCode,displayCode:String(displayCode).padStart(2,"0"),internalCode};
}
function setTradeMark(key,type,enabled){
 const prefs=currentTradePreferences(),isDefault=Boolean(DEFAULT_TOP_STARS[key]);
 if(type==="stars"){
   if(isDefault){prefs.disabledDefaultStars[key]=!enabled;if(enabled)delete prefs.disabledDefaultStars[key]}
   else {if(enabled)prefs.stars[key]=true;else delete prefs.stars[key]}
 }else{
   if(isDefault){prefs.disabledDefaultProtected[key]=!enabled;if(enabled)delete prefs.disabledDefaultProtected[key]}
   else {if(enabled)prefs.protected[key]=true;else delete prefs.protected[key]}
 }
 persistProjects();
}
function allManagedTradeKeys(){
 const prefs=currentTradePreferences();
 return [...new Set([...Object.keys(DEFAULT_TOP_STARS),...Object.keys(prefs.stars||{}),...Object.keys(prefs.protected||{})])];
}
function renderTradeProtectionSettings(){
 const root=$("#tradeProtectionSettings");if(!root)return;
 const total=allManagedTradeKeys().filter(key=>{const item=tradeItemFromKey(key);return item&&(isTradeStar(item)||isTradeProtected(item))}).length;
 root.innerHTML=`<button id="manageTradeProtection" class="trade-settings-row" type="button"><span><strong>Protegidos para intercambios</strong><small>${total} cromos configurados</small></span><b>Gestionar ›</b></button>`;
 $("#manageTradeProtection")?.addEventListener("click",openTradeProtectionManager);
}
function renderCollectionModuleSettings(){
 const root=$("#collectionModuleSettings");if(!root)return;
 const options=currentCollectionOptions();
 root.innerHTML=`<label class="settings-toggle-row"><span><strong>Coca-Cola · CC</strong><small>Mostrar la colaboración CC01–CC12 en toda la app</small></span><input id="toggleCollaborationCollection" type="checkbox" ${collaborationEnabled()?"checked":""}></label>
 <div class="optional-collection-group"><div class="optional-collection-heading"><strong>✨ Extra Stickers</strong><small>Activa únicamente los acabados que quieras coleccionar</small></div>
 ${EXTRA_VARIANTS.map(v=>`<label class="settings-toggle-row extra-toggle-row"><span><strong>${v.icon} ${v.label}</strong><small>20 futbolistas</small></span><input type="checkbox" data-extra-variant="${v.key}" ${options.extra[v.key]?"checked":""}></label>`).join("")}</div>`;
 $("#toggleCollaborationCollection")?.addEventListener("change",event=>{
   currentCollectionOptions().collaborationEnabled=event.currentTarget.checked;
   if(!event.currentTarget.checked&&collectionTeamFilter==="Coca-Cola")collectionTeamFilter="all";
   persistProjects();populateTeams();renderAll();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   showToast(event.currentTarget.checked?"Coca-Cola activada":"Coca-Cola ocultada");
 });
 root.querySelectorAll("[data-extra-variant]").forEach(input=>input.addEventListener("change",event=>{
   const key=event.currentTarget.dataset.extraVariant;currentCollectionOptions().extra[key]=event.currentTarget.checked;
   const team=EXTRA_VARIANTS.find(v=>v.key===key)?.team;if(!event.currentTarget.checked&&collectionTeamFilter===team)collectionTeamFilter="all";
   persistProjects();populateTeams();renderAll();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   showToast(`${EXTRA_VARIANTS.find(v=>v.key===key)?.label} ${event.currentTarget.checked?"activado":"ocultado"}`);
 }));
}
function updateOptionalCollectionVisibility(){document.body.classList.toggle("collaboration-disabled",!collaborationEnabled())}
function tradeManagerTeamOptions(){return currentTeamOrder().map(team=>`<option value="${escapeTradeHtml(team)}">${escapeTradeHtml(team)}</option>`).join("")}
function tradeManagerNumberOptions(team){return Object.keys(inventory?.[team]||{}).sort((a,b)=>Number(a)-Number(b)).map(code=>`<option value="${code}">${paniniDisplayCode(team,code)}</option>`).join("")}
function renderTradeProtectionManager(){
 const dialog=$("#tradeProtectionManagerDialog"),list=$("#tradeProtectionManagerList");if(!dialog||!list)return;
 const query=normalizeTradeName($("#tradeProtectionSearch")?.value||"");
 const rows=allManagedTradeKeys().map(key=>({key,item:tradeItemFromKey(key)})).filter(x=>x.item).filter(({key,item})=>{
   const label=DEFAULT_TOP_STARS[key]||`${item.officialCode}${item.displayCode}`;
   return !query||normalizeTradeName(`${label} ${item.team} ${item.officialCode}${item.displayCode}`).includes(query);
 }).sort((a,b)=>currentTeamOrder().indexOf(a.item.team)-currentTeamOrder().indexOf(b.item.team)||Number(a.item.displayCode)-Number(b.item.displayCode));
 list.innerHTML=rows.length?rows.map(({key,item})=>{
   const star=isTradeStar(item),locked=isTradeProtected(item),name=DEFAULT_TOP_STARS[key]||`${item.team} ${item.displayCode}`;
   return `<article class="trade-protection-row" data-key="${key}"><div>${flagHTML(item.team)}<span><strong>${escapeTradeHtml(name)}</strong><small>${item.officialCode}${item.displayCode}</small></span></div><div class="trade-protection-actions"><button type="button" data-mark="stars" class="${star?"active":""}" aria-label="Favorito">★</button><button type="button" data-mark="protected" class="${locked?"active":""}" aria-label="Nunca intercambiar">🔒</button><button type="button" data-remove aria-label="Quitar marcas">✕</button></div></article>`;
 }).join(""):'<div class="trade-manager-empty">No hay cromos configurados con esta búsqueda.</div>';
 list.querySelectorAll("[data-mark]").forEach(button=>button.onclick=()=>{const row=button.closest("[data-key]"),key=row.dataset.key,item=tradeItemFromKey(key),type=button.dataset.mark;setTradeMark(key,type,!button.classList.contains("active"));renderTradeProtectionManager();renderTradeProtectionSettings();});
 list.querySelectorAll("[data-remove]").forEach(button=>button.onclick=()=>{const key=button.closest("[data-key]").dataset.key;setTradeMark(key,"stars",false);setTradeMark(key,"protected",false);renderTradeProtectionManager();renderTradeProtectionSettings();});
}
function openTradeProtectionManager(){
 const dialog=$("#tradeProtectionManagerDialog");if(!dialog)return;
 const teamSelect=$("#tradeProtectionTeam");teamSelect.innerHTML=tradeManagerTeamOptions();
 const refreshNumbers=()=>{$("#tradeProtectionNumber").innerHTML=tradeManagerNumberOptions(teamSelect.value)};
 teamSelect.onchange=refreshNumbers;refreshNumbers();
 $("#tradeProtectionSearch").value="";renderTradeProtectionManager();
 if($("#settingsDialog")?.open)$("#settingsDialog").close();
 dialog.showModal();
}
function addTradeProtectionFromManager(type,button){
 const team=$("#tradeProtectionTeam")?.value,internalCode=$("#tradeProtectionNumber")?.value;if(!team||!internalCode)return;
 const item={team,officialCode:TEAM_TO_PANINI_CODE[team]||team,displayCode:paniniDisplayCode(team,internalCode),internalCode};
 setTradeMark(tradeStickerKey(item),type,true);renderTradeProtectionManager();renderTradeProtectionSettings();
 if(button){button.classList.remove("is-confirmed");void button.offsetWidth;button.classList.add("is-confirmed");setTimeout(()=>button.classList.remove("is-confirmed"),500);}
 if(navigator.vibrate)navigator.vibrate(18);
 showToast(type==="stars"?"Añadido a favoritos":"Protegido para intercambios");
}

$("#closeTradeProtectionManager")?.addEventListener("click",()=>$("#tradeProtectionManagerDialog")?.close());
$("#tradeProtectionSearch")?.addEventListener("input",renderTradeProtectionManager);
$("#addTradeFavorite")?.addEventListener("click",event=>addTradeProtectionFromManager("stars",event.currentTarget));
$("#addTradeProtected")?.addEventListener("click",event=>addTradeProtectionFromManager("protected",event.currentTarget));
$("#openTradeProtectionManagerButton")?.addEventListener("click",openTradeProtectionManager);

function setupSettingsCenter(){
 const dialog=$("#settingsDialog");
 if(!dialog)return;

 const projectBar=document.querySelector(".project-bar");
 const syncCard=document.querySelector(".sync-card");
 const backupCard=document.querySelector(".backup-card");
 const actions=document.querySelector(".actions");

 const syncSlot=$("#settingsSyncSlot");
 const backupSlot=$("#settingsBackupSlot");
 const actionsSlot=$("#settingsActionsSlot");
 if(syncCard&&syncSlot&&!syncSlot.contains(syncCard))syncSlot.appendChild(syncCard);
 if(backupCard&&backupSlot&&!backupSlot.contains(backupCard))backupSlot.appendChild(backupCard);
 if(actions&&actionsSlot&&!actionsSlot.contains(actions))actionsSlot.appendChild(actions);

 const openSettings=()=>{
   if(dialog.open)return;
   renderTradeProtectionSettings();renderCollectionModuleSettings();updateOptionalCollectionVisibility();
   document.body.classList.add("settings-overlay-open");
   dialog.showModal();
   const scrollArea=dialog.querySelector(".settings-groups");
   if(scrollArea)scrollArea.scrollTop=0;
 };

 const closeSettings=()=>{
   if(!dialog.open)return;
   dialog.close();
 };

 const headerButton=$("#settingsButton");
 if(headerButton)headerButton.onclick=openSettings;

 document.querySelectorAll('.bottom-nav-button[data-main-view="settings"]').forEach(button=>{
   button.onclick=openSettings;
 });

 const closeButton=$("#closeSettingsDialog");
 if(closeButton)closeButton.onclick=closeSettings;

 dialog.addEventListener("close",()=>{
   document.body.classList.remove("settings-overlay-open");
 });

 dialog.addEventListener("cancel",event=>{
   event.preventDefault();
   closeSettings();
 });

 dialog.addEventListener("click",event=>{
   if(event.target===dialog)closeSettings();
 });
}


const settingsTargetButton=$("#settingsTargetButton");
if(settingsTargetButton)settingsTargetButton.onclick=()=>{
 const current=getTarget();
 const value=prompt("Objetivo de álbumes para esta colección:",String(current));
 if(value===null)return;
 const next=Math.max(1,Math.min(20,Number(value)||current));
 targetInput.value=String(next);
 targetValue.textContent=String(next);
 saveAll("Objetivo actualizado");
 renderAll();
 renderProjectsList();
 showToast(`Objetivo actualizado a ${next}`);
};


document.querySelectorAll(".bottom-nav-button").forEach(button=>button.onclick=()=>setMainTab(button.dataset.mainView));
$("#shareCollectionListButton")?.addEventListener("click",shareActiveCollectionList);
$("#shareOptionsClose")?.addEventListener("click",closeShareOptions);
$("#shareOptionsBackdrop")?.addEventListener("click",closeShareOptions);
document.querySelectorAll("[data-share-option]").forEach(button=>button.addEventListener("click",()=>runShareOption(button.dataset.shareOption)));
$("#openTradeAnalyzerButton")?.addEventListener("click",openTradeAnalyzer);
$("#closeTradeAnalyzerDialog")?.addEventListener("click",closeTradeAnalyzer);
$("#runTradeAnalyzerButton")?.addEventListener("click",event=>{const fb=actionFeedback(event.currentTarget,{busy:"Analizando…",done:"Lista analizada ✓"});try{renderTradeAnalyzerResult();fb.success();}catch(error){console.error(error);fb.fail("No se pudo analizar");}});
$("#clearTradeAnalyzerButton")?.addEventListener("click",()=>{const input=$("#tradeAnalyzerInput");if(input)input.value="";const dialog=$("#tradeAnalyzerDialog");dialog?.classList.remove("analyzed");const result=$("#tradeAnalyzerResult");if(result){result.hidden=true;result.innerHTML="";}input?.focus();});
$("#tradeAnalyzerDialog")?.addEventListener("click",event=>{if(event.target===$("#tradeAnalyzerDialog"))closeTradeAnalyzer();});

document.querySelectorAll(".collection-filter-button").forEach(button=>button.onclick=()=>{
 document.querySelectorAll(".collection-filter-button").forEach(x=>x.classList.remove("active"));
 button.classList.add("active");
 collectionFilter=button.dataset.collectionFilter;
 currentFilter=collectionFilter==="missing"?"need":collectionFilter==="repeats"?"offer":"all";
 document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x.dataset.filter===currentFilter));
 renderGlobalCollection();
});
$("#openClassicExchangeButton").onclick=()=>{
 $("#settingsDialog").close();
 enterManualExchange();
 showToast("Modo intercambio manual activado");
};



$("#openGlobalExchangeListButton").onclick=()=>{
 exchangeListType="give";
 renderExchangeDialogTabs();
 renderExchangeList();
 $("#exchangeDialog").showModal();
};


$("#cancelGlobalExchangeButton").onclick=()=>{
 const totals=exchangeTotals();
 if((totals.give||totals.receive)&&!confirm("¿Cancelar este intercambio? Las selecciones marcadas se descartarán."))return;
 exitManualExchange();
};


$("#collectionSort").onchange=event=>{
 collectionSort=event.target.value;
 renderGlobalCollection();
};

let scrollSaveTimer=null;
window.addEventListener("scroll",()=>{
 clearTimeout(scrollSaveTimer);
 scrollSaveTimer=setTimeout(()=>{
   const p=projects?.[activeProjectId];if(!p)return;
   p.ui={...(p.ui||{}),scrollY:Math.max(0,Math.round(window.scrollY||0))};
   localStorage.setItem(PROJECTS_KEY,JSON.stringify(projects));
 },180);
},{passive:true});

const PUBLIC_BUILD_VERSION=globalThis.WC26_CONFIG?.version||APP_VERSION;
let serviceWorkerRegistration=null;
let updateReloadStarted=false;

function showAppUpdate(version=PUBLIC_BUILD_VERSION){
 const banner=document.getElementById("appUpdateBanner");
 const message=document.getElementById("appUpdateMessage");
 if(!banner)return;
 if(message)message.textContent=`La versión ${version} está lista para instalar.`;
 banner.hidden=false;
}

function hideAppUpdate(){
 const banner=document.getElementById("appUpdateBanner");
 if(banner)banner.hidden=true;
}

function versionParts(value){
 return String(value||"").match(/\d+/g)?.map(Number)||[];
}

function isNewerVersion(remote,current){
 const a=versionParts(remote),b=versionParts(current);
 const length=Math.max(a.length,b.length);
 for(let i=0;i<length;i++){
   const delta=(a[i]||0)-(b[i]||0);
   if(delta!==0)return delta>0;
 }
 return false;
}

async function checkPublishedVersion(){
 try{
   const response=await fetch(`./version.json?check=${Date.now()}`,{cache:"no-store"});
   if(!response.ok)return;
   const info=await response.json();
   if(isNewerVersion(info.version,PUBLIC_BUILD_VERSION)){
     showAppUpdate(info.version);
     serviceWorkerRegistration?.update().catch(()=>{});
   }
 }catch(error){
   console.debug("No se pudo comprobar la versión publicada",error);
 }
}

function watchInstallingWorker(worker){
 if(!worker)return;
 worker.addEventListener("statechange",()=>{
   // An installed worker is not enough to announce an update: old/stale
   // registrations can remain waiting. Confirm against version.json first.
   if(worker.state==="installed"&&navigator.serviceWorker.controller){
     checkPublishedVersion();
   }
 });
}

async function installAvailableUpdate(){
 const button=document.getElementById("appUpdateButton");
 if(button){button.disabled=true;button.textContent="Actualizando…";}
 try{
   const registration=serviceWorkerRegistration||await navigator.serviceWorker.getRegistration();
   if(registration){
     serviceWorkerRegistration=registration;
     await registration.update().catch(()=>{});
     const worker=registration.waiting||registration.installing;
     if(worker){
       worker.postMessage({type:"SKIP_WAITING"});
       setTimeout(()=>{
         const url=new URL(location.href);
         url.searchParams.set("updated",Date.now());
         location.replace(url.toString());
       },1800);
       return;
     }
   }
   if("caches" in window){
     const keys=await caches.keys();
     await Promise.all(keys.filter(key=>key.startsWith("wc26-build-")).map(key=>caches.delete(key)));
   }
   const url=new URL(location.href);
   url.searchParams.set("updated",Date.now());
   location.replace(url.toString());
 }catch(error){
   console.error("No se pudo aplicar la actualización",error);
   if(button){button.disabled=false;button.textContent="Reintentar";}
 }
}

function initialiseAppUpdates(){
 const button=document.getElementById("appUpdateButton");
 if(button)button.addEventListener("click",installAvailableUpdate);
 if(!("serviceWorker" in navigator))return;

 navigator.serviceWorker.addEventListener("controllerchange",()=>{
   if(updateReloadStarted)return;
   updateReloadStarted=true;
   hideAppUpdate();
   location.reload();
 });

 window.addEventListener("load",async()=>{
   try{
     const registration=await navigator.serviceWorker.register("./service-worker.js",{updateViaCache:"none"});
     serviceWorkerRegistration=registration;
     // Do not show the banner merely because a worker is waiting. The
     // published version check below is the source of truth.
     watchInstallingWorker(registration.installing);
     registration.addEventListener("updatefound",()=>watchInstallingWorker(registration.installing));
     await registration.update().catch(()=>{});
     await checkPublishedVersion();
   }catch(error){
     console.error("No se pudo registrar el sistema de actualización",error);
   }
 });

 document.addEventListener("visibilitychange",()=>{
   if(document.visibilityState==="visible"){
     serviceWorkerRegistration?.update().catch(()=>{});
     checkPublishedVersion();
   }
 });
 setInterval(checkPublishedVersion,5*60*1000);
}

initialiseAppUpdates();
loadData().catch(error=>{console.error(error);hideLoading();document.body.innerHTML="<main class='app-main'><h1>Error al cargar</h1><p>Comprueba que todos los archivos estén subidos.</p></main>"});


/* Build 703.2 · formatos de compartir y copiar + recuperación al volver a primer plano */
document.addEventListener("DOMContentLoaded",()=>{
 $("#onboardingForm")?.addEventListener("submit",createFirstCloudCollection);
 $("#onboardingStartButton")?.addEventListener("click",()=>{closeFirstCollectionOnboarding();switchMainView?.("collection");window.scrollTo({top:0,behavior:"auto"});showToast("Colección creada y sincronizada ✓")});
 const form=$("#editCollectionForm");
 if(form)form.addEventListener("submit",event=>{event.preventDefault();saveEditedCollection()});
 $("#closeEditCollectionDialog")?.addEventListener("click",closeEditCollection);
 $("#editTargetMinus")?.addEventListener("click",()=>changeEditTarget(-1));
 $("#editTargetPlus")?.addEventListener("click",()=>changeEditTarget(1));
 $("#duplicateCollectionButton")?.addEventListener("click",duplicateEditedCollection);
 $("#emptyCollectionButton")?.addEventListener("click",emptyEditedCollection);
 $("#completeOneAlbumButton")?.addEventListener("click",completeOneAlbumEditedCollection);
 $("#addOneToAllButton")?.addEventListener("click",()=>adjustAllEditedCollection(1));
 $("#removeOneFromAllButton")?.addEventListener("click",()=>adjustAllEditedCollection(-1));
 $("#transferInventoryButton")?.addEventListener("click",openTransferInventory);
 $("#closeTransferInventoryDialog")?.addEventListener("click",closeTransferInventory);
 $("#transferInventoryForm")?.addEventListener("submit",event=>{event.preventDefault();executeTransferInventory()});
 $("#transferDestinationCollection")?.addEventListener("change",updateTransferInventoryPreview);
 $("#transferInventoryDialog")?.addEventListener("change",event=>{if(event.target.matches('input[name="transferAction"],input[name="transferMode"]'))updateTransferInventoryPreview()});
 $("#transferInventoryDialog")?.addEventListener("click",event=>{if(event.target===$("#transferInventoryDialog"))closeTransferInventory()});
 $("#exportCollectionAlbumButton")?.addEventListener("click",exportEditedCollectionAlbum);
 $("#deleteCollectionButton")?.addEventListener("click",deleteEditedCollection);
 $("#editCollectionDialog")?.addEventListener("click",event=>{if(event.target===$("#editCollectionDialog"))closeEditCollection()});
});

// BUILD 704.3.6 — Ajustes en acordeón: una sección abierta cada vez.
document.addEventListener("toggle",event=>{
 const item=event.target;
 if(!(item instanceof HTMLDetailsElement)||!item.matches(".settings-accordion")||!item.open)return;
 document.querySelectorAll(".settings-accordion[open]").forEach(other=>{if(other!==item)other.open=false;});
},true);

$("#closeAlbumComplete")?.addEventListener("click",()=>{const overlay=$("#albumCompleteOverlay");if(overlay){overlay.classList.remove("show");overlay.hidden=true;}});
