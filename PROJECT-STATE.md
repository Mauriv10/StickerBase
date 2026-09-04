# Update 704.14.74 — Búsqueda Pokémon tolerante a fallos globales

- El buscador no puede depender de un único host externo. TCGdex producción sigue siendo preferente, pero existe failover automático a `beta.api.tcgdex.net`.
- Si TCGdex no responde o devuelve cero resultados, el buscador utiliza Pokémon TCG API como catálogo externo de respaldo.
- Los álbumes Pokémon cargados en StickerBase constituyen además un catálogo local consultable, por lo que sus cartas siguen apareciendo incluso durante una caída completa de APIs externas.
- Una caída de catálogo no debe borrar resultados provenientes de otras fuentes ni provocar el mensaje genérico de conexión mientras exista alguna fuente utilizable.
- Los precios Cardmarket se resuelven de forma independiente del catálogo mediante la guía pública ya existente; si el resultado de Pokémon TCG API ya aporta Cardmarket, se conserva como fallback.
- Se mantiene Búsqueda accesible desde todos los álbumes Pokémon, sin duplicar el buscador ni cambiar de colección activa.

# Update 704.14.73 — Búsqueda restaurada; navegación desacoplada

- La función `Búsqueda` debe mantener el motor estable anterior a 704.14.69. Añadir accesos de navegación NO autoriza a modificar el pipeline de catálogo/precios.
- Desde cualquier álbum Pokémon, la pestaña inferior `Búsqueda` muestra el mismo `pokemonSinglesSearchView` global que Mis Singles. No duplicar ni adaptar el motor según `activeProjectId`.
- Se revierten expresamente los experimentos 704.14.70–704.14.72: no usar Pokémon TCG API como catálogo alternativo del buscador, no introducir puente bilingüe automático y no sustituir el flujo Cardmarket estable por pricing alternativo de TCGdex.
- La mejora 704.14.69 queda limitada a navegación: en Pokémon la tercera pestaña abre Búsqueda; la gestión consolidada de pendientes sigue en `Mis Singles > En camino`.
- No tocar inventario, `pokemonIncoming`, `pokemonSingles`, mirrors, imágenes ni sincronización Supabase para implementar este acceso.

# Update 704.14.72 — Precio Cardmarket exacto en Búsqueda bilingüe

## Decisión funcional
- El idioma de presentación/búsqueda y la fuente de precio se desacoplan.
- Para cada resultado TCGdex se consulta el detalle localizado y también el detalle EN con el mismo ID canónico.
- El precio Cardmarket se toma primero de `pricing.cardmarket` del detalle localizado; si no existe, del detalle EN del mismo ID.
- Solo si TCGdex no aporta precio se usa el matcher genérico contra los JSON públicos de Cardmarket.
- No inferir el precio de una versión solo por nombre, porque Cardmarket puede tener varias impresiones con el mismo nombre dentro de una expansión.

# Update 704.14.71 — Búsqueda bilingüe sin perder Cardmarket

- La búsqueda global Pokémon consulta primero el idioma seleccionado.
- Con Castellano, si TCGdex ES no encuentra el texto introducido, se consulta TCGdex EN como puente y se resuelve la misma carta por ID en ES cuando existe.
- Los resultados mantienen identidad canónica TCGdex para que el matcher de Cardmarket siga funcionando.
- Pokémon TCG API es solo fallback final; no debe sustituir silenciosamente la identidad TCGdex si esta está disponible.

# Update 704.14.70 — Búsqueda Pokémon con fallback de catálogo

- La vista Búsqueda sigue siendo global y accesible desde cualquier colección Pokémon.
- Fuente principal: TCGdex. Si la consulta primaria falla por red/API, se usa automáticamente Pokémon TCG API.
- Un fallo temporal de TCGdex no debe dejar el buscador inutilizable.
- El catálogo alternativo normaliza guiones del término buscado y conserva los datos necesarios para mostrar/registrar un single.
- No se modifica inventario ni la arquitectura de En camino.

# Update 704.14.69 — Búsqueda global accesible desde cualquier álbum Pokémon
- Regla de navegación: en cualquier colección Pokémon, la tercera pestaña inferior debe mostrarse como `Búsqueda` (icono `⌕`), no como `En camino`.
- Esa pestaña reutiliza exactamente `pokemonSinglesSearchView`; no crear buscadores duplicados ni específicos por expansión.
- Abrir Búsqueda desde un álbum NO cambia `activeProjectId`: al volver a `Cromos`, el usuario regresa al álbum desde el que entró.
- El routing del buscador sigue siendo global: si una carta corresponde a un álbum existente, `La tengo` / `En camino` actúan sobre ese álbum y mantienen el espejo en Mis Singles; si no hay álbum compatible, se guarda en Mis Singles.
- La lista consolidada de pendientes se consulta y gestiona en `Mis Singles > En camino`; no reintroducir `En camino` como pestaña inferior por álbum.
- Las colecciones no Pokémon mantienen su navegación anterior (`Cambiar`).
- No modificar inventario, cantidades, checklists, precios, imágenes, fingerprint ni Supabase por este cambio.

# Update 704.14.68 — rechazo del reverso genérico en MEP

- En MEP, una respuesta de Scrydex puede ser el reverso genérico de Pokémon aunque la URL cargue correctamente. Por tanto, un probe técnico (onload/dimensiones) no basta para validar ese proveedor en MEP.
- Para MEP, StickerBase prioriza ahora Limitless (`MEP`) y TCGdex; Scrydex queda excluido de la ruta MEP para impedir persistir card-backs como frontales.
- `POKEMON_SINGLES_IMAGE_SCHEMA = 4` fuerza una única reevaluación de los MEP previamente guardados con `imageSource=scrydex`; las imágenes correctas del resto se preservan.
- Casos de regresión usados como control: Mega-Lucario ex MEP033, Tyrunt MEP070 y Fennekin MEP080.

# Update 704.14.67 — resolver de collector numbers especiales y cierre de imágenes residuales

## Problema corregido
Tras 704.14.66 la mayoría de imágenes de Singles se recuperaron, pero quedaban fallos concentrados en subsets/promos con numeración no puramente numérica o identidad especial: MEP032/033/070/080, TG03 y GG05.

## Regla estructural nueva
- El collector number es una identidad: `TG03`, `GG05`, `032`, etc. No se deben comparar todos como un entero desnudo.
- TCGdex se resuelve primero por ID conocido y después por `localId`, puntuando coincidencia de set y nombre.
- Pokémon TCG API usa la misma normalización semántica del collector number.
- Ningún canonicalizador puede guardar una URL de imagen directamente: solo `pokemonSinglesEnsureCardImage()` puede persistirla tras `Image.onload`/probe válido.
- Scrydex queda como fallback adicional validado; una URL construida nunca equivale a una imagen existente.
- `imageSchema = 3` fuerza una única revisión de fichas antiguas y conserva cualquier miniatura/HD que siga cargando correctamente.

## Casos de regresión a comprobar
- Mega-Gardevoir ex MEP #032
- Mega-Lucario ex MEP #033
- Tyrunt MEP #070
- Fennekin MEP #080
- Charizard TG03
- Lapras GG05

# Update 704.14.66 — contrato de imágenes verificadas y reparación de regresión

- Fuente de verdad: 704.14.65 COMPLETO.
- Regla absoluta de imágenes en Mis Singles: **construir una URL no significa que exista una imagen**. Cualquier fallback generado (TCGdex CDN, MEP, Limitless) debe superar una carga real mediante `Image()` antes de persistirse en `card.image` / `card.imageLarge`.
- Nunca reemplazar una miniatura existente y cargable únicamente porque falte `imageLarge`. En ese caso conservar `card.image`; intentar HD por separado y usar la miniatura como `imageLarge` solo si no existe una versión grande fiable.
- `pokemonSinglesOwnedImageError()` y `pokemonSinglesIncomingImageError()` convierten el error visual en señal de reparación: guardan la URL fallida y llaman a `pokemonSinglesEnsureCardImage(..., force=true)` para recorrer fuentes alternativas. No volver al patrón antiguo de ocultar el `<img>` y dejar el dato roto persistido.
- Para mirrors vinculados, la primera fuente de recuperación es el propio álbum/checklist (`pokemonMeta.images` / `pokemonDirectImageUrl`). En First Partner esto recupera los fallbacks conocidos 046-063 de `FIRST_PARTNER_IMAGE_FALLBACKS` antes de intentar una URL MEP construida.
- Orden general de recuperación tras fallo: imagen conocida del álbum -> TCGdex exacto idioma/EN -> Pokémon TCG API por identidad -> MEP construido verificado -> Limitless construido verificado -> PK.
- Las URLs fallidas se conservan en una lista corta `imageFailedUrls` para evitar reintentar inmediatamente el mismo recurso roto. El probe se cachea solo durante la sesión.
- Casos de regresión obligatorios: First Partner 046 Chikorita / 047 Cyndaquil / 048 Totodile / 049 Snivy no deben perder una imagen que ya funcionaba; Singles libres como MEP032/033/070 y Trainer Gallery TG03 deben intentar reparación automática si el frontal guardado falla.
- No cambiar inventario, cantidades, routing, Cardmarket, estadísticas ni Supabase por este fix.

# Update 704.14.65 — MEP universal + contrato de idioma Cardmarket

- Fuente de verdad: 704.14.64 COMPLETO.
- `MEP Black Star Promos` es un set de Singles completo, no solo el subconjunto First Partner 037-063. Toda ficha con `setId=mep` debe poder resolver imagen aunque no pertenezca a ningún checklist.
- Para MEP conservar/probar numeración promocional de tres cifras: `032` -> `mep-032`. No normalizar destructivamente a `mep-32` como única opción. La resolución canónica prueba ambas formas y `localId` tanto padded como no padded.
- Fallback visual MEP: `https://assets.tcgdex.net/en/me/mep/{NNN}/low.webp` y `high.webp`, persistidos como `image`/`imageLarge`. Casos de regresión obligatorios: MEP032 Mega-Gardevoir ex, MEP033 Mega-Lucario ex, MEP070 Tyrunt.
- Contrato Cardmarket: la fuente primaria sigue siendo el snapshot público oficial `products_singles_6.json` + `price_guide_6.json`. Ese price guide agrega idiomas. `pokemonSinglesEnglishIdentity()` sirve para emparejar el producto correcto por nombre inglés, pero no debe interpretarse como filtro de precio por idioma. No mostrar ni guardar un precio como “English-only” hasta disponer de una fuente fiable que filtre ofertas/ventas por idioma.
- No tocar inventarios, routing álbum + Mis Singles, En camino, estadísticas ni Supabase por esta corrección.

# Update 704.14.64 — Mis Singles: fallback visual universal + valor económico

- Fuente de verdad para esta build: 704.14.63 COMPLETO.
- Una Single no puede depender del rango/checklist de un álbum para conseguir imagen. Cadena permanente: TCGdex exacto (idioma -> EN) -> Pokémon TCG API consultada por nombre+número -> Limitless únicamente para mappings seguros -> PK si ninguna fuente fiable responde.
- Pokémon TCG API debe persistir `image` y `imageLarge`; la comparación de número admite promos cuyo proveedor devuelve códigos como `MEP032` mientras StickerBase guarda `032`. Caso de regresión: Mega-Gardevoir ex, MEP Black Star Promos #032.
- `POKEMON_SINGLES_CANONICAL_SCHEMA=3`: permite volver a revisar mirrors previos tras el cambio de hidratación.
- En Estadísticas de `pokemon-singles`, el círculo no representa completado. Debe mostrar la suma de `pokemonSinglesCardmarketView(card).primary` de colección + en camino con etiqueta `valor total`.
- El desglose debe mostrar por separado `Valor en colección` y `Valor en camino`, además del número de cartas sin precio. Nunca sumar una carta sin precio como si estuviera valorada; se excluye de la suma y se informa como `sin valorar`.
- Al cambiar a un álbum Pokémon normal o Panini, el aro debe restaurar `%` y la etiqueta `completado`.
- No tocar inventarios, cantidades, variantes, routing, En camino ni Supabase por estos cambios.

# Update 704.14.60 — Mis Singles como índice paralelo + navegación propia

- Regla permanente: **álbum y Mis Singles no son excluyentes**. Si una carta buscada pertenece a un álbum/checklist existente, se registra en el álbum correspondiente y además conserva una ficha en Mis Singles para imagen, estado y Cardmarket. No duplicar cantidades por el hecho de existir en ambos sitios.
- `pokemonSinglesUpsertMirror()` crea/actualiza el espejo de una carta del álbum en Mis Singles mediante `linkedAlbumProjectId`, `linkedSection`, `linkedCode`, `routeVariant` y `mirror:true`.
- Auto-inclusión en Mis Singles al abrir la colección: (a) toda carta Pokémon poseída cuya sección no sea `BASE`; (b) toda carta BASE poseída cuyo precio guía Cardmarket principal sea **> 2 €**. Los espejos automáticos se marcan `autoManaged`; los añadidos expresamente desde Búsqueda se preservan con `manualKeep:true`.
- El escaneo de valor BASE tiene sello `autoValueScanAt` y máximo una vez cada 24 h. `POKEMON_CARDMARKET_REFRESH_MS` sigue siendo 24 h y el refresco solo puede ejecutarse cuando la PWA está abierta.
- Navegación específica al abrir `pokemon-singles`: `Cromos` = colección Mis Singles con tabs internos `★ Colección` / `📦 En camino`; tercera pestaña inferior = `⌕ Búsqueda`. `Búsqueda` contiene el Discover predictivo, selector de idioma, recientes añadidas/vistas, Mejor resultado y Cartas y versiones.
- Para otros álbumes Pokémon la tercera pestaña sigue siendo `📦 En camino`; para Panini sigue siendo `⇄ Cambiar`.
- `pokemonSinglesSearchView` es una vista de primer nivel independiente. No volver a meter búsqueda dentro de la lista de colección.
- `En camino` del tab interno usa `pokemonIncomingEntries()` como fuente global. Los mirrors vinculados no se duplican como single + álbum en esa lista.
- Al recibir una carta vinculada, el álbum aumenta y el mirror queda `owned`. Al cancelar una pendiente vinculada, si ya existe una copia en el álbum el mirror vuelve a `owned`; si no, se retira la ficha incoming.
- Migración/reconciliación: singles existentes con álbum compatible deben asegurar presencia en el álbum pero permanecer en Mis Singles. Nunca volver a aplicar el comportamiento 704.14.59 de mover y borrar la ficha de Mis Singles.

# Update 704.14.59 — Mis Singles routing + Cardmarket diario

- Mis Singles debe resolver el destino por **set + número** usando IDs canonizados. TCGdex usa formatos como `me03`, `me02.5`, `sv03.5` mientras StickerBase puede usar `me3`, `me2pt5`, `sv3pt5`; `pokemonSinglesCanonicalSetId()` es ahora parte del contrato y no debe eliminarse.
- Si una carta buscada pertenece a una colección Pokémon ya creada y su número existe en cualquiera de las secciones del checklist de ese álbum (BASE, IR, UR, SIR, Hyper, etc.), debe registrarse allí. Mis Singles solo conserva cartas que no tienen un álbum/checklist destino en StickerBase.
- `pokemonSinglesMoveExistingToAlbums()` reconcilia entradas antiguas creadas durante el fallo de IDs. No debe incrementar una carta que el álbum ya posea; `incoming` se traslada a `pokemonIncoming` sin duplicar.
- Precios Mis Singles: refresco máximo cada 24 h mediante los ficheros públicos oficiales de Cardmarket (`products_singles_6.json` + `price_guide_6.json`). `pokemonSinglesLoadCardmarketData()` caduca su snapshot en memoria tras 24 h y `pokemonSinglesRefreshStoredPrices()` actualiza los singles guardados al entrar en la vista si sus precios están caducados.
- Un PWA en GitHub Pages no puede garantizar una tarea en segundo plano con la app cerrada: el contrato es “al abrir/volver a Mis Singles, si han pasado >=24 h, refrescar”.
- No cambiar inventarios/checklists fuera de la reconciliación de singles mal encaminados.

# Update 704.14.58 — First Partner stock controls

- Build source: 704.14.57 COMPLETE.
- Fixed a legacy CSS collision in fixed-variant Pokémon rows: `.pokemon-card-main>.pokemon-fixed-badge+.pokemon-stock{margin-top:-35px}` was still active and lifted the quantity/−/+ block upward, especially visible in First Partner.
- 704.14.58 overrides that legacy offset with `margin-top:0!important` and centers the stock block.
- Regression contract: fixed-badge Pokémon rows (including First Partner) must keep xN / − / + vertically contained and centered in each card row. Do not restore the negative stock margin.
- No inventory/checklist/cloud behavior changed.

## Build 704.14.57 — 30/08/2026 — Mis Singles: Cardmarket oficial directo
- Precios: fuente primaria = JSON público oficial de Cardmarket Pokémon (`products_singles_6.json` + `price_guide_6.json`), enlazados por `idProduct`.
- Cardmarket actualiza la guía de precios diariamente; la app no debe presentar valores 0 como precios válidos.
- TCGdex queda como catálogo/búsqueda visual y fallback de precio solo si la descarga directa de Cardmarket no está disponible.
- Pokémon TCG API se usa como fallback de IMAGEN, no como fuente económica primaria.
- Regla visual absoluta: nunca construir URLs ambiguas que puedan devolver un reverso; si no hay frontal fiable, placeholder PK.
- No tocar Supabase, inventarios, checklists, routing ni En camino.

## Build 704.14.56 — 30/08/2026 — Mis Singles: imágenes y Cardmarket robustos
- En Mis Singles nunca debe mostrarse el reverso genérico de una carta como si fuese su imagen frontal.
- Se elimina el fallback por URL construida de PokémonTCG.io, porque IDs de set incompatibles entre proveedores podían devolver un reverso genérico.
- Orden de imagen: TCGdex exacto → TCGdex EN exacto → Pokémon TCG API consultada por carta → Limitless solo cuando el set está mapeado con seguridad → placeholder PK.
- Un valor `0,00 €` de Cardmarket se considera dato ausente, no precio real.
- Precio: TCGdex Cardmarket si hay dato positivo; si no, fallback Pokémon TCG API/Cardmarket.
- No tocar Supabase ni inventario para estas correcciones.

## Build 704.14.55 — 30/08/2026 — Mis Singles: buscador único + Cardmarket
- `Mis Singles` NO debe mostrar el buscador global `#teamSearch`; el único buscador visible es `#pokemonSingleQuery` dentro de Discover. La ocultación es específica de `body[data-collection-type="pokemon-singles"]` y no afecta al buscador de álbumes Pokémon normales ni a Panini.
- Los detalles de carta de TCGdex ya incluyen `pricing.cardmarket`; aprovechar esa misma respuesta para mostrar Cardmarket sin API key adicional ni backend.
- Mostrar como cifra principal la tendencia disponible y añadir medias 7d/30d cuando existan. Si la carta solo dispone de acabado holo/reverse, priorizar las métricas `*-holo`.
- Estos precios son guía de mercado de Cardmarket distribuida por TCGdex, no una consulta en tiempo real a ofertas por idioma/condición. No presentar el dato como precio específico de castellano.
- No tocar Supabase, inventarios, checklists, routing `Mis Singles -> álbum`, `En camino` ni las fuentes/fallbacks de imágenes.

## Build 704.14.52 — 30/08/2026
- Fix de regresión `En camino` en iPhone/PWA: al entrar en la tercera pestaña Pokémon se fuerza visible `#tradeView` y `#pokemonIncomingView`, se oculta Panini y se repite el render en el siguiente frame/50 ms para evitar estados DOM/CSS heredados.
- `pokemonIncomingEntries()` sigue siendo la fuente única de pendientes globales (álbumes + Mis Singles). Un single con `status: "incoming"` debe aparecer siempre en la pestaña.
- El buscador de Mis Singles debe detectar si el resultado ya está poseído o En camino antes de permitir duplicarlo. La detección respeta el routing: álbum compatible si existe/checklist coincide; si no, Mis Singles.
- En BASE con variantes, la detección se evalúa para la variante seleccionada y se refresca al cambiar el selector.
- Regresión permanente: buscar una carta que ya existe debe mostrar `Ya la tienes` o `Ya está en camino` y desactivar solo la acción redundante correspondiente.

## Build 704.14.51 — 30/08/2026
- `Mis Singles` no debe depender de una única fuente de imágenes. Orden: TCGdex localizado -> TCGdex EN -> Limitless CDN cuando el set está mapeado -> `images.pokemontcg.io` genérico por set/número.
- Los singles antiguos sin imagen deben rehidratarse y persistir el fallback para que miniatura + visor grande funcionen sin volver a buscar manualmente.
- Mantener especialmente soporte para subsets Trainer Gallery / Shiny Vault; Oranguru Astros Brillantes TG12 es caso de regresión real confirmado por el usuario.
- En Pokémon, `.app-header` debe ser full-bleed con `margin:0`: no reintroducir el margen superior global que genera una franja negra entre el safe area y el header en iPhone/PWA.
- No modificar inventarios, checklists, variantes ni sincronización por estos fixes visuales.

## Build 704.14.50 — 30/08/2026
- Fix confirmado tras prueba real en iPhone: un single antiguo podía conservar `image: ""`, por lo que seguía mostrando `PK` aunque 704.14.49 ya supiera guardar imágenes en nuevas búsquedas. Ahora Mis Singles rehidrata en segundo plano cualquier carta guardada sin imagen consultando TCGdex (idioma original -> EN fallback), persiste la URL y vuelve a renderizar.
- El visor ampliado se mantiene para resultados y cartas registradas; además las miniaturas de `En camino` son pulsables y abren el mismo visor.
- Fix de `En camino` vacío en iPhone/PWA: `renderPokemonIncomingView()` controla `hidden` Y `style.display` de `#pokemonIncomingView` / `#paniniTradeView`, evitando estados visuales heredados al cambiar de pestaña.
- `En camino` sigue siendo agregado global de todas las colecciones Pokémon y Mis Singles; no modificar inventarios/checklists salvo al pulsar explícitamente `Recibida`.
- Regresión: una carta de Mis Singles marcada En camino debe aparecer en esa pestaña incluso si la colección activa es `pokemon-singles`.

## Build 704.14.49 — 30/08/2026
- Mis Singles: las imágenes de resultados y cartas registradas son pulsables y abren la misma vista ampliada usada por los álbumes Pokémon.
- Mis Singles: fallback de imagen al catálogo inglés de TCGdex cuando la ficha localizada no aporta imagen, manteniendo nombre/idioma de la búsqueda.
- No se modifica inventario, checklists ni sincronización.

# StickerBase — PROJECT STATE MAESTRO

Última actualización: 23/08/2026
Build de referencia: 704.14.13
Proyecto: StickerBase
URL conocida: https://mauriv10.github.io/StickerBase/

> ESTE ARCHIVO ES LA MEMORIA MAESTRA DEL PROYECTO.
> En una conversación nueva, leer este archivo antes de modificar el código.
> El ZIP COMPLETO de la build indicada es siempre la fuente de verdad del código.

---

# 1. REGLAS DE TRABAJO Y ENTREGA

## Fuente de verdad
- Trabajar SIEMPRE sobre el ZIP COMPLETO de la última build entregada.
- No reconstruir desde builds antiguas ni desde fragmentos del historial del chat.
- No asumir que una solución histórica sigue vigente.
- Si hay conflicto entre este documento y el código actual, inspeccionar primero el código de la build vigente.
- No modificar inventario, datos, Supabase, checklists o lógica de negocio salvo petición expresa.

## Entrega obligatoria
Cada build debe devolver:
1. ZIP COMPLETO.
2. ZIP SOLO CAMBIOS.
3. Lista de archivos modificados.
4. Lista de archivos añadidos.
5. Lista de archivos eliminados.
6. Actualizar `PROJECT-STATE.md` si cambia una decisión funcional, visual, de datos o de arquitectura relevante.

## Versionado
- Formato actual: `704.xx.xx`.
- La build vigente al actualizar este documento es `704.14.13`.
- `version.json`, `app-config.js`, `app.js`, `service-worker.js` y cualquier referencia de build visible deben mantenerse coherentes.

---

# 2. DESCRIPCIÓN DEL PRODUCTO

StickerBase es una PWA/web app para gestionar colecciones de cromos y cartas.

Funciones principales:
- Inventario por referencia.
- Faltantes.
- Repetidos.
- Múltiples álbumes/proyectos.
- Objetivo de 1 o más álbumes.
- Estadísticas.
- Intercambio manual.
- Analizar listas de otra persona.
- Favoritos/protegidos.
- QR y comparación entre colecciones.
- Exportaciones.
- Importación/restauración.
- Traspaso de inventario.
- Sincronización en nube mediante Supabase.
- Uso multidispositivo (PC, iPhone, etc.).

---

# 3. SINCRONIZACIÓN Y DATOS

## Supabase
Tabla principal conocida:
- `wc_user_state`

Campos conocidos:
- `user_id`
- `payload`
- `revision`
- `updated_at`

Formato del payload:
- `"format": "world-cup-2026-cloud-state"`

El sistema usa revisiones crecientes para sincronizar estado.

## Riesgo histórico importante
Hubo una pérdida de datos por:
- tener StickerBase abierta en múltiples pestañas;
- una pestaña antigua sobrescribió un estado más nuevo;
- el cierre/última sincronización provocó que desaparecieran álbumes recientes.

Consecuencia:
- NO reintroducir lógica que permita sobrescritura silenciosa de estados más nuevos por una pestaña vieja.
- Preservar las protecciones actuales de sincronización.
- No tocar Supabase salvo petición explícita.

## Copias/restauración
Ajustes > Seguridad:
- Exportar copia.
- Restaurar copia.
- Restauración puede:
  - reemplazar todos los proyectos;
  - añadir como proyectos nuevos.

El usuario ya recuperó una pérdida de datos mediante copia exportada y restauración.

---

# 4. NAVEGACIÓN PRINCIPAL

Pestañas:
- Cromos
- Estadísticas
- Cambiar
- Colecciones
- Ajustes

La barra inferior debe:
- permanecer fija;
- respetar safe-area de iPhone;
- no tapar contenido importante;
- conservar la pestaña activa;
- no romperse al abrir teclado, buscadores, acordeones o modales.

---

# 5. PANTALLA COLECCIONES

Objetivo:
- Organizar muchos álbumes por familia/colección.
- Las carpetas deben estar cerradas por defecto.
- Deben recordar si el usuario dejó cada carpeta abierta o cerrada.

Familias actuales:
- World Cup 2026.
- Liga Este 2026/27.
- Megacracks 2026/27.
- Pokémon TCG.

Dentro de cada familia:
- mostrar álbumes/proyectos.
- botones de subir/bajar orden.
- menú `•••`.
- indicar `Activa`.
- porcentaje/progreso.
- objetivo del álbum.

## Pokémon en Colecciones
Diseño premium propio por expansión.
Cada expansión usa una carta representativa como portada:

1. Pitch Black → Mega Darkrai ex #116/084
2. Chaos Rising → Mega Greninja ex #116/086
3. Perfect Order → Meowth ex #121/088
4. Surging Sparks → Pikachu ex #219/191
5. 151 → Mew ex #205/165
6. Phantasmal Flames → Mega Charizard X ex #125/094
7. Ascended Heroes → Mega Dragonite ex #295/217

No sustituir estas portadas salvo petición expresa.

Cada tarjeta Pokémon debe mostrar:
- imagen representativa;
- nombre completo;
- serie/set;
- progreso;
- cartas conseguidas;
- controles de orden;
- `•••`;
- `Activa` si corresponde.

Problema histórico:
- `Activa` llegó a quedar detrás de las flechas.
- No reintroducir ese solapamiento.

## Liga Este / Megacracks en Colecciones
- No usar solo iconos `LE` / `MC` como representación de álbum.
- Usar portada real de la colección/proyecto cuando corresponda.
- Liga Este: identidad morada.
- Megacracks: identidad grafito/plata.
- Mantener coherencia premium, pero sin copiar literalmente Pokémon.

---

# 6. MENÚ DE LOS TRES PUNTOS

En Pokémon:
- se convirtió a pantalla completa;
- debe mantener estética oscura premium;
- debe heredar el tema de color de la expansión;
- no volver a la estética blanca antigua.

Para Liga Este/Megacracks:
- mantener coherencia con su identidad visual si el menú se tematiza.
- No sacrificar legibilidad.

---

# 7. POKÉMON TCG — ESTADO COMPLETO

StickerBase incluye un apartado/familia POKÉMON TCG.

Colecciones actuales:
1. Pitch Black
2. Chaos Rising
3. Perfect Order
4. Surging Sparks
5. 151
6. Phantasmal Flames
7. Ascended Heroes

## 7.1 Pitch Black
- Serie: Mega Evolution
- Código: ME05
- Tema visual: negro + dorado.
- Esta fue la interfaz de referencia premium original.

## 7.2 Chaos Rising
- Serie: Mega Evolution
- Código: ME04
- Tema visual: negro + azul eléctrico + rosa/magenta.

## 7.3 Perfect Order
- Serie: Mega Evolution
- Código: ME03
- Tema visual: negro + verde eléctrico.

## 7.4 Surging Sparks
- Serie: Scarlet & Violet
- Código: SV08
- Tema visual: negro + amarillo/naranja eléctrico.

## 7.5 151
- Serie: Scarlet & Violet.
- Set ID: `sv3pt5`.
- Tema visual: blanco/perla + turquesa, inspirado en la ETB.
- Base numerada: 001–165. Total numerado: 207.

## 7.6 Phantasmal Flames
- Serie: Mega Evolution.
- Código visual: ME02. Set ID: `me2`.
- Tema visual: negro/azul noche + cian eléctrico + violeta.
- Base: 001–094. Total: 130.

## 7.7 Ascended Heroes
- Serie: Mega Evolution.
- Código visual: ME2.5. Set ID: `me2pt5`.
- Tema visual: petróleo/turquesa + amarillo + magenta.
- Base jugable previa a rarezas especiales: 001–216. Total numerado: 295.
- Incluye apartado propio `MEGA ATTACK RARE` 264–270.

## 7.8 Estructura de cartas Pokémon

La colección debe organizarse en acordeones/categorías, no en una cuadrícula simple.

### Base Set
Para cartas normales del Base Set:
- permitir variantes:
  - Básica
  - Holo
  - Inverse Holo

Al sumar unidad:
- el usuario elige la variante.

### EX dentro del Base Set
Las cartas EX que pertenecen a la colección base:
- NO deben permitir elegir Básica/Holo/Inverse Holo.
- Se registran directamente como el tipo que son.

### Secretas / rarezas
Separar en acordeones por rareza/categoría, al estilo Megacracks:
- Illustration Rare
- Special Illustration Rare
- Ultra Rare
- Double Rare (EX)
- Mega Hyper Rare
- otras categorías que defina el checklist de cada expansión.

No mezclar todas las cartas en una única lista.

## 7.6 Imágenes de cartas Pokémon
Cada carta muestra miniatura real.

Comportamiento:
- tocar/clicar la miniatura abre la carta en grande;
- fondo de StickerBase visible detrás, oscurecido/desenfocado;
- usar la mejor resolución disponible;
- cerrar con X;
- cerrar tocando fuera;
- cerrar con Esc en PC.

Esta interacción es una característica aprobada y debe preservarse.

## 7.7 Buscador Pokémon
Buscar por:
- carta;
- número;
- Pokémon;
- rareza cuando corresponda.

Bug histórico:
- en iPhone, al enfocar el buscador, Safari hacía zoom;
- al cerrar teclado, la app podía quedarse ampliada/cortada.
La solución actual no debe reintroducir ese problema.

## 7.8 Navegación Pokémon
La navegación Pokémon actual es:
- Cromos
- Estadísticas
- En camino
- Colecciones
- Ajustes

`En camino` ocupa la tercera posición que en fútbol sigue siendo `Cambiar`. En Pokémon NO se muestran herramientas de intercambio Panini ni scanner de precios. La barra `Todos / Pedir / Entregar` continúa retirada.

## 7.9 Estadísticas Pokémon
Debe tener estética idéntica al tema premium de la expansión.

Información esperada:
- progreso general;
- cartas distintas;
- Base Set;
- copias totales;
- repetidas;
- variantes del Base Set:
  - Básica
  - Holo
  - Inverse Holo
- progresos por rareza/categoría;
- objetivo de álbum(es), si aplica.

No mostrar datos del Mundial en una colección Pokémon.

## 7.10 Diseño Pokémon
La interfaz premium aprobada incluye:
- cabecera oscura;
- nombre de expansión;
- código de set;
- búsqueda;
- resumen:
  - Total
  - Completadas
  - Pendientes
  - % completado
- acordeones;
- fotos de cartas;
- botones +/-;
- barra inferior oscura;
- acento de color según expansión.

---

# 8. LIGA ESTE 2026/27 — ESTADO COMPLETO

Colección Panini Liga Este 2026/27.

## Identidad visual
- Tema premium morado/violeta.
- Cabecera con portada real 2026/27.
- Fondo oscuro.
- Detalles morados.
- Textos de alto contraste.
- No usar estilo blanco antiguo.

## Cabecera
Debe aparecer:
- SOLO en `Cromos`.

NO debe aparecer en:
- Estadísticas
- Cambiar
- Colecciones

Cabecera incluye:
- portada real Liga Este 2026/27;
- título;
- subtítulo Panini / LaLiga EA Sports;
- estadísticas rápidas;
- botón volver.

## Cromos
Orden visual aprobado:
1. cabecera premium;
2. buscador;
3. filtros:
   - Todos
   - Me faltan
   - Repetidos
4. selector `Orden del álbum`;
5. acordeones por club / especial;
6. filas de cromos.

No mostrar:
- barra antigua `Todos / Pedir / Entregar`.

## Clubes
Cada acordeón:
- escudo centrado;
- nombre;
- número de cromos;
- estado completo/pendientes;
- chevron.

Fila:
- número;
- jugador/cromo;
- tipo/posición;
- stock;
- botón -;
- valor;
- botón +.

## Especiales
Ejemplos:
- ADN / LALIGA PRIME
- LALIGA FANTASY
- DRAFT 23
- DRAFT 23 KROMIX
- EXTRA STICKER ORO
- EXTRA STICKER PLATA
- EXTRA STICKER BRONCE
- otros apartados oficiales existentes.

Los iconos de especiales deben:
- estar centrados;
- comportarse visualmente como los escudos.

## Extra Stickers
Deben ser opcionales.
- Usuario puede activarlos/desactivarlos.
- Si están activos:
  - cuentan para estadísticas.
- Si están desactivados:
  - NO cuentan para estadísticas.

## Imágenes individuales
DECISIÓN IMPORTANTE:
- NO añadir imágenes individuales de cromos de Liga Este.
- Solo se usan portada real e iconos/escudos.

## Estadísticas Liga Este
Debe ser legible y premium.

Información:
- progreso general;
- cromos que tienes;
- cromos base;
- me faltan;
- repetidas;
- progreso por especiales;
- clubes completos;
- progreso por álbum si objetivo >1.

## Objetivo múltiple de álbumes
Para cualquier colección con objetivo >=2:
- mostrar avance por álbum individual.
Ejemplo:
- Álbum 1: 99%
- Álbum 2: 96%
- Álbum 3: etc.

---

# 9. MEGACRACKS 2026/27 — ESTADO COMPLETO

Colección Panini Megacracks 2026/27.
Subtítulo visual:
- 25.º aniversario.

## Identidad visual
- Tema premium negro/grafito/plata.
- Cabecera con imagen real del producto/colección 2026/27.
- Fondo oscuro.
- Detalles plata.
- Alto contraste.

## Cabecera
Debe aparecer:
- SOLO en `Cromos`.

NO debe aparecer:
- Estadísticas
- Cambiar
- Colecciones

## Cromos
Mismo patrón estructural que Liga Este:
1. cabecera;
2. buscador;
3. filtros;
4. orden;
5. acordeones;
6. filas.

## Especiales Megacracks
Orden deseado:
1. ENJOY
2. ENJOY POWER
3. ZONA VIP
4. ZONA VIP POWER
5. MASTER ROOKIE
6. STARS ON 25
7. ÉLITE
8. ÉLITE POWER
9. SPECIAL ONE BLACK
10. SPECIAL ONE GOLD
11. LIMITED EDITION

No eliminar:
- Special One
- Limited Edition

aunque se revisen checklists oficiales.

## Imágenes individuales
DECISIÓN IMPORTANTE:
- NO añadir imágenes individuales de cards de Megacracks.
- Portada real sí.
- Escudos/iconos sí.

## Estadísticas
Debe tener:
- buen contraste;
- progreso general;
- repetidas;
- faltantes;
- especiales;
- progreso por álbum si objetivo >1.

---

# 10. BUSCADOR LIGA ESTE / MEGACRACKS

Buscar por:
- jugador;
- club;
- número;
- especiales cuando corresponda.

Ejemplo:
- `Lamine Yamal` debe devolver coincidencias relevantes.

## Bugs históricos
1. Las sugerencias quedaban detrás de:
   - filtros;
   - `Orden del álbum`;
   - acordeones.
2. En 704.14.8:
   - se intentó usar z-index flotante.
3. En 704.14.9:
   - se cambia a enfoque de flujo:
   - cuando hay sugerencias, el buscador crece;
   - el panel empuja filtros hacia abajo;
   - evitar dependencia de stacking/z-index frágil en iOS.

No reintroducir:
- sugerencias invisibles;
- panel detrás de filtros;
- desplazamiento extraño por teclado.

---


## 10.1 Retorno desde resultados aislados (704.14.11)
- Cuando una búsqueda o selección deja visible un único club o apartado, el acordeón queda forzado abierto.
- La flecha de ese acordeón debe actuar como “volver a Todos los clubes”, tanto para clubes normales como para especiales.
- Este comportamiento aplica por igual a Liga Este y Megacracks.
- No volver a limitar el retorno únicamente a apartados especiales.

# 11. WORLD CUP 2026 — ESTADO COMPLETO

Colección Panini Mundial 2026.

Estructura:
- 48 selecciones + especiales/FWC.
- Numeración interna por selección.
- No numeración global 1-980.

Funciones:
- múltiples álbumes;
- objetivo de álbumes;
- repetidos;
- faltantes;
- Extra Stickers;
- exportación;
- comparación;
- traspaso inventario;
- QR.

## Extra Stickers Mundial
- opción específica ya implementada.
- referencia visual/funcional para la opción de Extra Stickers de Liga Este.

## Organización histórica
El proyecto nació como `World Cup 2026`.
Posteriormente se renombró a `StickerBase`.

---

# 12. INTERCAMBIOS

Pestaña `Cambiar`.

Funciones:
- Intercambio manual.
- Analizar lista.
- Favoritos.
- Protegidos.
- QR.
- Comparar inventarios/listas.
- Descargar QR.
- Leer QR desde galería.

## Analizar lista
Ha tenido incidencias históricas:
- Megacracks: `lamine` detectaba resultados sin detalle.
- `lamine gold` no detectaba.
No romper mejoras existentes.

## Favoritos / Protegidos
- permiten excluir cartas/cromos del asistente de intercambio.
- iconos tuvieron problemas de recorte históricos.

---

# 13. TRASPASAR INVENTARIO

Función existente:
- copiar;
- mover;
- sumar;
- reemplazar.

Debe:
- conservar inventario origen/destino según modo.
- registrar correctamente historial.
- no perder datos.

---

# 14. EXPORTACIONES

Funciones existentes:
- exportar faltantes;
- exportar repetidos;
- exportar álbum completo;
- formatos:
  - banderas;
  - texto;
  - compacto;
- exportar solo stock cuando corresponda.

No eliminar formatos existentes.

---

# 15. QR / COMPARTIR

- Compartir StickerBase mediante QR.
- Comparar colecciones.
- Descargar QR.
- Leer desde galería.
- No usar entrada manual de código si fue eliminada.

---

# 16. AJUSTES

Secciones conocidas:
- Cuenta
- Sincronización
- Seguridad
- Actividad
- Colecciones visibles
- Compartir StickerBase
- Información

Seguridad:
- Exportar copia.
- Restaurar copia.

Información:
- mostrar build actual.

Histórico:
- hubo incidencias donde la versión visual no se actualizaba aunque la build sí cambiara.

---

# 17. COLECCIONES VISIBLES

Ajustes permite definir qué familias se muestran.

Separación esperada:
- Mundial
- Liga Este
- Megacracks
- Pokémon

No mezclar visibilidad de colecciones con eliminación de datos.

---

# 18. UI / UX GENERAL

## Elementos fijos
- cabecera cuando corresponda;
- navegación inferior.

## Reglas
- esquinas coherentes;
- safe-area iPhone;
- evitar solapamientos;
- buscadores sin zoom permanente;
- acordeones fluidos;
- estados abiertos/cerrados persistentes cuando aplique.

## Diseño
StickerBase debe sentirse como una app premium, no una web genérica.

---

# 19. BUGS / REGRESIONES QUE NO DEBEN VOLVER

- Sobrescritura de inventario desde una pestaña antigua.
- Cabecera Panini en Estadísticas/Cambiar/Colecciones.
- Cabecera Liga Este tapando buscador.
- Buscador invisible bajo header.
- Línea blanca encima o debajo del buscador.
- `Orden del álbum` deformado.
- Escudos descentrados.
- Iconos de especiales descentrados.
- Barra inferior no fija.
- Barra inferior tapando contenido sin margen final.
- Sugerencias del buscador detrás de filtros.
- Zoom de iPhone persistente tras usar buscador Pokémon.
- Estadísticas mostrando datos de otra colección.
- Títulos blancos sobre fondo blanco.
- `Activa` detrás de controles.
- Pérdida de Special One o Limited Edition.
- Reordenación incorrecta de especiales.
- Inventario local reemplazando Supabase.
- Versiones que no actualizan el número visible.

---

# 20. DECISIONES DE DISEÑO POKÉMON APROBADAS

Pitch Black:
- negro/dorado.

Chaos Rising:
- azul eléctrico + rosa/magenta.

Perfect Order:
- verde.

Surging Sparks:
- amarillo/naranja.

Todos:
- fondo oscuro;
- tarjetas premium;
- fotos reales;
- acordeones;
- estadísticas temáticas;
- navegación temática;
- vista ampliada de carta.

---

# 21. PORTADAS REPRESENTATIVAS POKÉMON

Estas son las imágenes acordadas para `Colecciones`:

- Pitch Black:
  - Mega Darkrai ex #116/084
- Chaos Rising:
  - Mega Greninja ex #116/086
- Perfect Order:
  - Meowth ex #121/088
- Surging Sparks:
  - Pikachu ex #219/191

No volver a:
- Zygarde dorado como portada Perfect Order;
- cartas oro genéricas en todas las expansiones.

---

# 22. CHECKLISTS

Liga Este y Megacracks:
- se revisaron contra checklists oficiales Panini.
- Las correcciones deben respetar la estructura vigente.
- No eliminar cartas pertenecientes realmente a la colección por intentar "limpiar" pendientes.

Pokémon:
- cada expansión tiene su checklist completa en la app.
- mantener rarezas y categorías correctamente separadas.

---

# 23. NOMENCLATURA Y BRANDING

Nombre del producto:
- StickerBase

No usar como nombre principal:
- World Cup 2026

`World Cup 2026` es una colección dentro de StickerBase.

---

# 24. BUILD 704.14.9 → 704.14.10

704.14.9:
- reparó la visibilidad de sugerencias del buscador Liga Este/Megacracks;
- añadió el primer PROJECT-STATE.md.

Problema del primer PROJECT-STATE:
- era incompleto;
- apenas documentaba Pokémon y otros módulos.

704.14.10:
- NO cambia funcionalidad de la app.
- Reescribe `PROJECT-STATE.md` como documento maestro completo.
- Incluye Pokémon, Mundial, Liga Este, Megacracks, sincronización, intercambios,
  estadísticas, UI, checklists, bugs históricos y reglas de desarrollo.

---

# 25. REGLA PARA CONTINUAR EN UN CHAT NUEVO

En una conversación nueva:

1. Adjuntar el último ZIP COMPLETO.
2. Decir:
   `Continuamos StickerBase. Lee PROJECT-STATE.md y trabaja sobre este ZIP completo.`
3. El asistente debe:
   - leer `PROJECT-STATE.md`;
   - inspeccionar el código actual;
   - no depender de chats antiguos;
   - no usar builds históricas;
   - mantener todas las decisiones descritas aquí.
4. Tras cada cambio importante:
   - actualizar `PROJECT-STATE.md`.

---

# 26. PRIORIDAD DE PRESERVACIÓN

Orden de prioridad cuando se modifica StickerBase:

1. NO perder datos/inventario.
2. NO romper Supabase/sincronización.
3. NO romper funciones existentes.
4. Respetar checklists.
5. Respetar navegación.
6. Respetar diseño aprobado.
7. Mejorar estética/UX sin regresiones.

---

# 27. ARQUITECTURA REAL DE LA BUILD 704.14.12

Esta sección documenta la estructura observada directamente en el ZIP COMPLETO 704.14.12, derivado quirúrgicamente de 704.14.11. Sirve para evitar modificaciones a ciegas en chats futuros.

## Archivos raíz críticos
- `index.html`: estructura principal de vistas, diálogos y navegación de la PWA.
- `styles.css`: estilos globales, responsive, temas de colección, cabeceras premium, acordeones, estadísticas, buscadores y navegación inferior.
- `app.js`: núcleo funcional. Contiene modelo de proyectos, inventario, renderizado de colecciones, estadísticas, buscadores, intercambio, exportaciones, importación, QR, traspasos y sincronización.
- `megacracks-data.js`: datos/checklist específicos de Megacracks y estructuras relacionadas. No modificar sin validar el checklist.
- `auth.js`: autenticación y enlace con la sesión/Supabase.
- `supabase-config.js`: configuración de Supabase. No modificar salvo necesidad explícita.
- `app-config.js`: versión pública, nombre de caché y frecuencia de comprobación de actualizaciones.
- `version.json`: número de build publicado.
- `service-worker.js`: caché PWA y política network-first/no-cache.
- `manifest.webmanifest`: metadatos de instalación PWA.
- `PROJECT-STATE.md`: memoria maestra funcional/técnica.
- `CHANGELOG.md`: historial de cambios.
- `README.md`: documentación general.
- `SETUP-SUPABASE.md` y `SUPABASE-700.4.sql`: documentación/esquema histórico de Supabase; tratarlos como archivos sensibles.

## Datos y assets
- `data/inventory.json`: inventario/estructura maestra histórica del Mundial.
- `data/projects-seed.json`: proyectos/semillas iniciales.
- `data/team-groups.json`: agrupaciones de selecciones/equipos.
- `data/flags.json` y `data/flags-v4.json`: banderas.
- `assets/club-crests/`: escudos de clubes usados por Liga Este/Megacracks.
- `assets/ligaeste-specials/`: iconos de apartados especiales de Liga Este.
- `assets/`: portadas, iconos, logos y dependencias empaquetadas.

## Regla práctica al corregir bugs
- Bug puramente visual: inspeccionar primero `styles.css` y el HTML generado por `app.js`; evitar alterar datos.
- Bug de renderizado/interacción: inspeccionar `app.js` y después CSS relacionado.
- Bug de checklist/datos: identificar primero la fuente concreta (`app.js`, `megacracks-data.js` o `data/*`) y preservar cantidades existentes.
- Bug PWA/versionado: revisar conjuntamente `version.json`, `app-config.js`, `service-worker.js` y referencias visibles.
- Bug de sincronización: NO parchear sin estudiar las funciones cloud y las protecciones multi-pestaña existentes.

---

# 28. MAPA FUNCIONAL DE `app.js`

Funciones/zonas críticas presentes en 704.14.12:

## Identidad y colección
- `COLLECTION_DEFINITIONS`: catálogo de familias/tipos y temas.
- `inferCollectionType(...)`: determina el tipo de colección/proyecto.
- `collectionDefinition(...)`: devuelve definición visual/funcional.
- `applyCollectionIdentity(...)`: aplica identidad de colección.
- `syncCollectionChrome(...)`: sincroniza elementos globales de interfaz.
- `syncPaniniPremiumHeader(...)`: controla la cabecera premium Panini. Debe respetar que Liga Este/Megacracks solo la muestran en `Cromos`.

## Proyectos e inventario
- `defaultProject(...)`: estructura base de un proyecto.
- `ensureProjectInventorySchema(...)`: migraciones/correcciones del inventario sin perder cantidades.
- `ensureProjectTeamOrder(...)`: orden de equipos/apartados.
- `migrateLegacy(...)`: compatibilidad con estados antiguos.
- `bootstrapProjectsFromSeed(...)`: inicialización desde seeds.
- `ensurePokemonProjects(...)` / `hydratePokemonProjects(...)`: creación e hidratación de Pokémon.
- `persistProjects(...)`: persistencia local del estado.
- `orderedProjects(...)` / `ensureCollectionOrder(...)`: orden de proyectos/familias.

## Renderizado principal
- `renderGlobalCollection()`: router de la vista `Cromos` según colección activa.
- `renderLigaEsteCollection()`: render de Liga Este.
- `renderMegacracksCollection()`: render de Megacracks.
- `renderPokemonCollection()`: render de Pokémon.
- `renderStatistics()`: estadísticas Mundial/Liga Este/Megacracks y delegación Pokémon.
- `renderPokemonStatistics()`: estadísticas Pokémon.
- `renderCollections()`: pantalla `Colecciones`.
- `setMainTab(...)`: cambio entre Cromos/Estadísticas/Cambiar/Colecciones/Ajustes.

## Acordeones y búsqueda Panini
- `toggleLigaEsteTeam(team)`: apertura/cierre y retorno desde resultado aislado en Liga Este.
- `toggleMegacracksTeam(team)`: equivalente Megacracks.
- `ligaEsteTeamSearchText(team)` y `megacracksTeamSearchText(team)`: texto indexable de cada bloque.
- La búsqueda puede dejar un único club/apartado visible; en ese estado la flecha debe devolver a `Todos`, no quedar bloqueada.

## Intercambio
- `openTradeAnalyzer()` / `renderTradeAnalyzerResult()`: Analizar lista.
- `renderExchangeStep(...)`, `renderExchangeSummary()`, `renderExchangeList()`: intercambio manual.
- Favoritos/protegidos tienen render/gestión propios; preservar exclusiones.

## Colecciones y traspasos
- `renderCollections()`: familias y proyectos.
- `switchProject(id)`: activa proyecto.
- `openCreateProject()`: nuevo proyecto.
- `openTransferInventory()` y funciones asociadas: traspaso.

## QR
- `renderQrMatrix(...)`: QR.
- `openShareStickerBase()`: compartir app.
- `showQrComparison(...)` / `openQrCompare()`: comparación.

---

# 29. MODELO DE DATOS DEL PROYECTO

La estructura creada por `defaultProject(...)` incluye como mínimo:
- `id`
- `name`
- `target`: objetivo de álbumes; mínimo conceptual 1.
- `seedType`
- `collectionType`
- `collectionOrder`
- `inventory`
- `history`
- `finishedSessions`
- `sessionStats`
- `exchange.give`
- `exchange.receive`
- `teamOrder`
- `selectedTeam`
- `pendingSync`
- `lastSyncedAt`
- `ui`
- `createdAt`

`ui` contiene estado de interfaz como filtros, orden, pestaña principal y scroll. Algunas colecciones añaden estado específico de acordeones.

## Opciones de colección
`collectionOptions` conserva opciones que NO deben confundirse con borrar datos:
- `collaborationEnabled`
- opciones de Extra Stickers Mundial (`extra`)
- `ligaEsteExtrasEnabled`

Desactivar una opción de visibilidad/participación no equivale a eliminar el inventario asociado.

## Orden oficial
`projectTeamOrder(...)` prioriza el orden maestro oficial. Un `teamOrder` antiguo procedente de nube no debe reordenar arbitrariamente el álbum oficial.

---

# 30. PERSISTENCIA LOCAL Y SINCRONIZACIÓN — CONTRATO DE SEGURIDAD

Constantes actuales observadas:
- `DATA_SCHEMA_VERSION = 2`
- `DATA_REVISION = "2026-07-17-collections-v70111"`
- `PROJECTS_KEY = "world-cup-2026-projects-v600"`
- `ACTIVE_PROJECT_KEY = "world-cup-2026-active-project-v600"`

Los nombres históricos `world-cup-2026-*` siguen existiendo por compatibilidad. NO renombrarlos solo por branding sin una migración segura.

## Funciones cloud críticas
- `stateFingerprint(...)`: huella del estado comparable.
- `cloudMeta()` / `writeCloudMeta(...)`: metadatos locales de revisión.
- `setCloudBaseline(...)`: baseline para detectar divergencias.
- `saveExternalCloudBackup(...)`: copia preventiva ante conflicto.
- `createAutoBackup(...)`: copia automática antes de operaciones sensibles.
- `notifyOtherTabs(...)` / `warnOtherTab()`: coordinación/advertencia multi-pestaña.
- `cloudPayload()`: serialización enviada a nube.
- `scheduleCloudSave(...)`: guardado diferido.
- `saveCloudState(...)`: escritura cloud.
- `applyCloudPayload(...)`: aplicación de estado cloud.

## Regla absoluta
Nunca simplificar este sistema a “local gana” o “última pestaña que cierre gana”. Una pestaña vieja no puede sobrescribir silenciosamente una revisión más reciente.

Antes de modificar sincronización, validar al menos:
1. un solo dispositivo;
2. dos pestañas con una antigua;
3. PC + iPhone;
4. estado local más nuevo que cloud;
5. cloud más nuevo que local;
6. conflicto real;
7. recarga después de sincronizar;
8. cierre de pestaña antigua.

## Corrección 704.14.12 — falso conflicto recurrente en escritorio
Se detectó que `saveCloudState()` abría directamente el diálogo de conflicto cuando la revisión de Supabase era mayor que `cloudRevision`, aunque una revisión mayor por sí sola no demuestra divergencia de inventarios. Esto podía provocar que en PC reapareciera «Hay dos inventarios diferentes» incluso después de elegir «Usar datos de la nube».

Contrato desde 704.14.12:
- una revisión remota superior debe pasar primero por `reconcileCloudRow(...)`;
- `reconcileCloudRow(...)` compara fingerprint local, fingerprint remoto y baseline;
- si local y remoto son iguales, solo se adopta la revisión nueva;
- si solo uno cambió respecto al baseline, se aplica/guarda automáticamente según corresponda;
- el diálogo se reserva para una divergencia real de ambos estados;
- el baseline de `cloudMeta()` solo se reutiliza si `meta.userId` coincide con el usuario autenticado;
- se mantienen CAS, backups preventivos y protección multipestaña.

---

## Corrección 704.14.13 — conflicto PC, intercambio manual y traspaso

### Sincronización PC / nube
Se confirmó que el fingerprint usado para decidir si había una divergencia incluía estado de navegación/estructura derivada (`activeProjectId`, `selectedTeam` y `teamOrder`). Esos valores pueden variar legítimamente entre PC e iPhone o normalizarse al renderizar sin que el inventario haya cambiado. Eso podía reabrir el diálogo «Hay dos inventarios diferentes» después de escoger la nube.

Contrato desde 704.14.13:
- `stateFingerprint(...)` compara el conjunto de proyectos persistentes, pero NO incluye `activeProjectId`;
- `comparableProjects(...)` NO incluye `selectedTeam` ni `teamOrder`;
- abrir otra colección, otro club o recalcular el orden oficial no constituye por sí solo un conflicto de inventario;
- inventario, variantes Pokémon, objetivo, opciones de colección, orden de colecciones, intercambio persistente y existencia de proyectos siguen formando parte de la comparación;
- ante una divergencia real se mantienen el diálogo, CAS, backups y protección multipestaña.

### Intercambio manual Liga Este / Megacracks
En las filas de intercambio manual se muestra también `Stock xN` junto a la información del jugador/cromo. Los botones −1/+1 siguen representando las unidades preparadas para dar/recibir y no modifican el stock hasta completar el flujo correspondiente.

### Traspasar inventario
El formulario de traspaso deja de depender del submit nativo de un `<form method="dialog">`. El botón de confirmación ejecuta explícitamente `executeTransferInventory()`, evitando que el navegador cierre el diálogo sin completar la operación. Antes del cálculo se consolida el estado de la colección activa; al finalizar se persisten proyectos, historial y pendientes de sincronización y el aviso confirma las unidades resultantes del destino.

# 31. PWA, CACHÉ Y VERSIONADO

En 704.14.15:
- `version.json` = `704.14.15`.
- `app-config.js` = `704.14.15`.
- caché = `wc26-build-704-14-15`.
- `app.js` obtiene `APP_VERSION` desde `WC26_CONFIG`.

`service-worker.js` usa:
- archivos `NO_CACHE_FILES` para configuración/versionado sensible;
- `NETWORK_FIRST_FILES` para núcleo de la aplicación;
- `ASSETS` para recursos empaquetados.

## Cada nueva build debe
1. incrementar versión de forma coherente;
2. actualizar `version.json`;
3. actualizar `app-config.js`;
4. cambiar `cacheName`;
5. revisar cualquier fallback/referencia de versión;
6. comprobar que `Información` muestra la versión nueva;
7. evitar que el iPhone quede atrapado en recursos de una build anterior.

No cambiar nombres históricos de caché/keys por estética sin estudiar compatibilidad.

---

# 32. POKÉMON — CONTRATO DE DATOS EXACTO EN 704.14.12

Tipos definidos:
- `pokemon-pitch-black`
- `pokemon-chaos-rising`
- `pokemon-perfect-order`
- `pokemon-surging-sparks`
- `pokemon-151`
- `pokemon-phantasmal-flames`
- `pokemon-ascended-heroes`

## Pitch Black — ME05
- Base oficial: 84.
- Total numerado: 120.
- BASE: 001–084.
- ILLUSTRATION RARE: 085–095.
- ULTRA RARE: 096–113.
- SPECIAL ILLUSTRATION RARE: 114–119.
- MEGA HYPER RARE: 120.

## Chaos Rising — ME04
- Base oficial: 86.
- Total: 122.
- BASE: 001–086.
- ILLUSTRATION RARE: 087–097.
- ULTRA RARE: 098–115.
- SPECIAL ILLUSTRATION RARE: 116–121.
- MEGA HYPER RARE: 122.

## Perfect Order — ME03
- Base oficial: 88.
- Total: 124.
- BASE: 001–088.
- ILLUSTRATION RARE: 089–099.
- ULTRA RARE: 100–117.
- SPECIAL ILLUSTRATION RARE: 118–123.
- MEGA HYPER RARE: 124.

## Surging Sparks — SV08
- Base oficial: 191.
- Total: 252.
- BASE: 001–191.
- ILLUSTRATION RARE: 192–214.
- ULTRA RARE: 215–235.
- SPECIAL ILLUSTRATION RARE: 236–246.
- HYPER RARE: 247–252.

## Metadatos e imágenes
- `pokemonMeta` contiene metadatos de cartas por proyecto.
- Las imágenes se construyen actualmente con Scrydex mediante `pokemonDirectImageUrl(...)` y `setId` (`me5`, `me4`, `me3`, `sv8`).
- La metadata se hidrata desde las fuentes configuradas en `POKEMON_SET_DEFS`.
- No sustituir el proveedor/formato sin probar miniaturas, visor ampliado, carga inicial y funcionamiento offline/degradado.

## Cálculo Pokémon
- Una carta numerada cuenta como “distinta” cuando existe al menos una copia/variante poseída.
- En Base Set, las variantes elegibles se contabilizan por separado para Básica/Holo/Inverse Holo.
- Las copias totales incluyen variantes.
- Las repetidas son copias extra por encima de la primera de cada variante/tipo contabilizado.
- El progreso general se calcula sobre el total numerado del set.

---

# 33. ESTADÍSTICAS — REGLAS QUE NO DEBEN CAMBIAR ACCIDENTALMENTE

## Liga Este / Megacracks
La vista específica debe priorizar legibilidad y mostrar:
- `Cromos que tienes`: unidades totales.
- `Cromos base`: referencias base conseguidas / disponibles.
- `Me faltan`: faltantes de clubes/base según la lógica vigente.
- `Repetidas`: unidades extra.
- `Especiales`: progreso por apartado.
- resumen general y clubes completos.
- progreso por álbum cuando el objetivo sea >=2.

Los especiales visibles para estadísticas deben respetar `teamVisibleForProject(...)` y las opciones activas de la colección.

## Objetivo múltiple
No calcular únicamente “tengo/no tengo”. Para objetivo 2, 3, etc., el progreso por álbum debe reflejar cuántas referencias alcanzan cada nivel de copia requerido.

## Pokémon
Usar `renderPokemonStatistics()` y su cálculo específico; no reutilizar a ciegas las métricas Panini.

---

# 34. RESPONSIVE / iPHONE — REGLAS DE REGRESIÓN

StickerBase se usa intensivamente como PWA en iPhone. Antes de aprobar cambios de UI comprobar:
- safe-area superior e inferior;
- barra inferior fija;
- espacio final suficiente para que la barra no oculte filas;
- teclado abierto en buscador;
- cierre del teclado;
- búsqueda con sugerencias;
- scroll mientras hay sugerencias;
- acordeón abierto y cerrado;
- retorno desde un único resultado de búsqueda;
- ausencia de zoom persistente de Safari;
- ausencia de líneas/blancos residuales entre header/buscador/filtros;
- iconos y escudos centrados en cajas de tamaños distintos.

No resolver problemas de stacking únicamente aumentando `z-index` sin comprobar iOS. El enfoque aprobado para sugerencias Panini es que el resultado forme parte del flujo y empuje el contenido inferior cuando sea necesario.

---

# 35. ASSETS Y DEPENDENCIAS

Regla:
- Preferir assets locales empaquetados para elementos estructurales de la UI (escudos, especiales, portadas cuando ya existen).
- No borrar un asset porque parezca no usado sin buscar referencias en HTML/CSS/JS/service worker.
- Si se añade un asset necesario offline/PWA, revisar si debe incorporarse a `ASSETS` del service worker.
- Pokémon actualmente depende también de imágenes/metadatos externos; preservar fallback y funcionamiento aunque una imagen no cargue.

---

# 36. CHECKLIST DE REGRESIÓN OBLIGATORIO ANTES DE ENTREGAR

Toda build que toque UI o lógica común debe comprobar, como mínimo:

1. Arranque limpio de la app.
2. Proyecto activo correcto después de recargar.
3. Inventario intacto.
4. `+` y `−` funcionan y persisten.
5. Cambio entre proyectos funciona.
6. World Cup abre y conserva funciones existentes.
7. Liga Este abre.
8. Megacracks abre.
9. Las cuatro colecciones Pokémon abren.
10. `Cromos` muestra la identidad correcta.
11. Liga Este/Megacracks: cabecera premium SOLO en `Cromos`.
12. `Estadísticas` sin cabecera Panini premium y con texto legible.
13. `Cambiar` sin cabecera Panini premium.
14. `Colecciones` sin cabecera Panini premium.
15. Buscador Liga Este por jugador.
16. Buscador Megacracks por jugador.
17. Sugerencias visibles por encima/en flujo correcto, sin quedar detrás de filtros.
18. Seleccionar un resultado abre el bloque correcto.
19. Flecha del bloque aislado devuelve a todos los clubes tanto en Liga Este como Megacracks.
20. Especiales también abren/cierran correctamente.
21. Escudos centrados.
22. Iconos de especiales centrados.
23. `Orden del álbum` mantiene tamaño/alineación correctos.
24. Pokémon: búsqueda sin zoom persistente en iPhone.
25. Pokémon: selección de variante Base funciona.
26. Pokémon: EX/directas no muestran selector de variante incorrecto.
27. Pokémon: visor de carta abre/cierra correctamente.
28. Estadísticas corresponden a la colección activa.
29. Objetivo múltiple muestra progreso por álbum cuando procede.
30. `Colecciones`: carpetas, orden, Activa y `•••` funcionan.
31. `Cambiar`: manual, Analizar lista y favoritos/protegidos siguen accesibles donde corresponde.
32. QR/compartir no se rompe.
33. Exportaciones existentes siguen disponibles.
34. Restaurar/exportar copia sigue accesible.
35. Sincronización no genera conflicto artificial ni pérdida de datos.
36. Versión visible coincide con build.
37. Service worker/cache apunta a la nueva build.
38. Probar viewport móvil estrecho y escritorio.

Si una build toca solo documentación, no es necesario alterar funcionalidad ni inventario.

---

# 37. CAMBIOS HISTÓRICOS RECIENTES RELEVANTES

## 704.14.9
- Corrige visibilidad de sugerencias Liga Este/Megacracks usando enfoque de flujo.
- Introduce `PROJECT-STATE.md`.

## 704.14.10
- Amplía el PROJECT STATE para cubrir el proyecto completo.

## 704.14.13
- Intercambio manual de Liga Este/Megacracks muestra `Stock xN` en cada fila.
- Traspasar inventario ejecuta la confirmación mediante botón explícito, sin depender de `method="dialog"`, y confirma las unidades finales del destino.
- El fingerprint de conflicto ya no incluye `activeProjectId`, `selectedTeam` ni `teamOrder`; navegar de forma distinta en PC/iPhone no se considera divergencia de inventario.
- Mantiene la protección CAS, backups, revisión remota y protección multipestaña.

## 704.14.12
- Corrige el falso conflicto recurrente de sincronización observado en PC.
- Las revisiones remotas más nuevas se reconcilian por fingerprint/baseline antes de mostrar un conflicto.
- El baseline persistido se valida contra el usuario autenticado.
- No altera inventarios, colecciones ni la protección CAS/multipestaña.

## 704.14.11
- Corrige el retorno desde resultados de búsqueda aislados.
- La flecha de un club normal filtrado vuelve a la vista completa, igual que ya ocurría con especiales.
- Aplica a Liga Este y Megacracks.
- El buscador y sus sugerencias quedan funcionales en la build de referencia.

---

# 38. REGLA DE CONTINUIDAD PARA EL PRÓXIMO CHAT

El próximo chat debe tratar el ZIP COMPLETO 704.14.13 (o una build posterior explícitamente entregada) como fuente de verdad.

Orden de trabajo:
1. Leer este `PROJECT-STATE.md` completo.
2. Inspeccionar el ZIP y confirmar la versión real.
3. Localizar la implementación actual antes de editar.
4. Hacer el cambio mínimo necesario.
5. No reescribir módulos estables por comodidad.
6. Ejecutar comprobaciones/regresión relacionadas.
7. Incrementar build.
8. Actualizar PROJECT STATE y CHANGELOG cuando proceda.
9. Entregar ZIP COMPLETO + ZIP SOLO CAMBIOS + listas de archivos.

Si el usuario aporta una captura que contradice este documento, la captura describe el comportamiento real observado y debe investigarse; no asumir que el documento demuestra que la UI funciona.

---

# 39. PRINCIPIO FINAL DE PRESERVACIÓN

StickerBase ya contiene muchas capas desarrolladas durante numerosas iteraciones. Una mejora local no justifica perder comportamiento existente.

Antes de tocar una zona, preguntarse:
- ¿afecta al inventario?
- ¿afecta a Supabase?
- ¿afecta a otra colección?
- ¿afecta a iPhone/PWA?
- ¿afecta a estadísticas?
- ¿afecta a intercambio/exportación/QR?
- ¿afecta al cache/versionado?

Priorizar siempre cambios pequeños, verificables y reversibles.

---

FIN DEL PROJECT STATE MAESTRO — BUILD DE REFERENCIA 704.14.16

---

# 34. CORRECCIÓN 704.14.14 — BACKUPS, CONFLICTO RECURRENTE Y TRASPASO ATÓMICO

## Causa raíz confirmada
Las rutas «Usar datos de la nube» y «Traspasar inventario» crean una copia automática antes de sustituir/mover datos. Hasta 704.14.13 se podían conservar 10 snapshots completos en `localStorage`. Con varias colecciones e historiales, esa clave puede alcanzar la cuota del navegador. Si `localStorage.setItem(...)` lanza `QuotaExceededError`, JavaScript interrumpe la operación justo antes de aplicar la nube o antes de mutar el inventario. El síntoma es que el usuario confirma, el diálogo se cierra, pero no ocurre nada y el conflicto puede reaparecer.

## Contrato de backups automáticos desde 704.14.14
- Se conserva la clave histórica `panini-mercat-auto-backups-v5`.
- Máximo de snapshots automáticos: 3.
- `pokemonMeta` queda fuera de snapshots automáticos porque es catálogo derivado/recuperable, no inventario del usuario.
- Si la cuota no admite los 3 snapshots, se intenta conservar solo el más reciente.
- Si tampoco cabe, se guarda una copia mínima de seguridad del mismo snapshot, centrada en colecciones e inventarios y sin historial/UI derivables.
- Si ni siquiera la copia mínima puede persistirse, la operación protegida se aborta mostrando error; nunca debe fallar silenciosamente.
- Al arrancar se podan snapshots antiguos para liberar cuota sin tocar `projects` ni inventarios.
- Las copias previas a una operación usan `commitProjectStateLocalOnly()` y no programan una subida cloud prematura.

## Sincronización local/nube
`stateFingerprint(...)` compara clones normalizados de local y nube. La normalización aplica a ambos lados el mismo esquema/migraciones/defaults y nunca modifica ni el payload remoto ni el estado vivo durante la comparación.

`applyCloudPayload(...)` debe:
1. cancelar cualquier guardado cloud diferido anterior;
2. clonar y adaptar la copia elegida de Supabase a la build actual;
3. persistir/cargar/renderizar esa copia;
4. consolidar localmente los defaults persistentes que haya generado el render;
5. calcular después el fingerprint final y fijar `cloudBaselineFingerprint` + `cloudMeta`.

El baseline se carga únicamente para el usuario autenticado y se limpia al cerrar sesión.

## Traspasar inventario
Desde 704.14.14 el traspaso es una operación protegida:
- captura clones completos de origen y destino antes de modificar;
- crea backup preventivo resistente a cuota;
- aplica copiar/mover y sumar/reemplazar;
- registra historial y pendientes;
- persiste `projects`;
- relee `PROJECTS_KEY` y compara un fingerprint exacto del inventario destino con el inventario en memoria.

Si cualquiera de esos pasos falla, se restauran origen y destino desde los clones previos, se intenta persistir el rollback y se informa al usuario. Nunca debe quedar un traspaso parcial ni mostrarse éxito si el inventario no quedó escrito.

## 704.14.14
- Corrige la causa común de fallo silencioso en «Usar datos de la nube» y «Traspasar inventario» cuando las copias automáticas agotaban la cuota de `localStorage`.
- Backups automáticos limitados/podados de forma segura y con fallback de inventario.
- Fingerprint local/nube normalizado simétricamente y baseline fijado después de completar la aplicación real del payload cloud.
- Traspaso verificado contra persistencia exacta y con rollback ante fallo.


# 35. CORRECCIÓN 704.14.15 — LIGA ESTE / ELCHE CF Nº 02

En Liga Este 2026/27, únicamente la referencia **02 del Elche CF** se considera actualmente pendiente. Su información maestra es `Pendiente / Pendiente`, por lo que reutiliza el mecanismo general `isPendingCollectionItemForProject()` y queda excluida del cálculo de faltantes, progreso y estadísticas que ya ignoran referencias pendientes.

Contrato de regresión:
- no convertir a pendiente el nº 02 del resto de clubes;
- no aplicar esta excepción a apartados especiales de Liga Este;
- no aplicar esta excepción a Megacracks;
- no alterar cantidades de inventario existentes por este cambio de checklist.

## 704.14.15
- Elche CF nº 02: `Eder Saravia / Entrenador` → `Pendiente / Pendiente`.
- La referencia deja de contar en las estadísticas de Liga Este mediante el mecanismo de pendientes ya existente.


# 36. AJUSTE 704.14.16 — DENSIDAD VISUAL LIGA ESTE / MEGACRACKS

En Liga Este 2026/27 y Megacracks 2026/27 la vista principal conserva el diseño premium, pero las tarjetas de clubes y las filas de cromos se compactan para reducir scroll vertical, especialmente en iPhone/PWA.

Contrato visual:
- las tarjetas de club usan menos altura, padding y separación vertical;
- escudo, nombre, estado y chevron siguen siendo claramente legibles;
- las filas de jugadores/cromos reducen altura y padding sin convertir los botones −/+ en objetivos táctiles pequeños;
- el cambio es específico de Liga Este/Megacracks y no debe propagarse a Pokémon ni World Cup;
- no se modifica ninguna lógica de inventario, estadísticas, filtros, Supabase o navegación.

Intercambio manual:
- el stock actual es información primaria y debe mostrarse en un bloque propio dentro de la zona de STOCK;
- los botones −1/+1 representan únicamente lo que se prepara para dar/recibir;
- no volver a esconder el stock como texto secundario en la línea de posición del jugador.

## 704.14.16
- Compactación de tarjetas de clubes y filas de cromos en Liga Este/Megacracks.
- Stock actual destacado junto a controles de intercambio manual.
- Sin cambios de datos ni comportamiento funcional.


## Build 704.14.17 — ampliación Pokémon
- Se añaden 151, Phantasmal Flames y Ascended Heroes como álbumes Pokémon nativos, no como proyectos genéricos.
- Las instalaciones existentes reciben únicamente los proyectos que falten mediante la migración aditiva `stickerbase.pokemon.collections.v2`; no se reinicializan inventarios existentes.
- Fuentes de metadata: PokemonTCG/pokemon-tcg-data; imágenes mantienen el proveedor Scrydex ya usado por StickerBase.
- Rangos: 151 BASE 001–165, IR 166–181, UR 182–197, SIR 198–204, Hyper Rare 205–207. Phantasmal Flames BASE 001–094, IR 095–107, UR 108–124, SIR 125–129, Mega Hyper Rare 130. Ascended Heroes BASE 001–216, IR 217–249, UR 250–263, Mega Attack Rare 264–270, SIR 271–292, Mega Hyper Rare 293–295.
- Las tres identidades visuales aprobadas deben conservar la misma UX/arquitectura de los demás álbumes Pokémon; solo cambia el tema visual.


# 38. CORRECCIÓN 704.14.18 — CREAR NUEVO ÁLBUM / POKÉMON

El flujo **Crear nuevo proyecto / Crear nuevo álbum** debe exponer todas las colecciones que StickerBase soporta de forma nativa. Desde 704.14.18 el selector incluye World Cup 2026, Liga Este 2026/27, Megacracks 2026/27 y las siete expansiones Pokémon disponibles: Pitch Black, Chaos Rising, Perfect Order, Surging Sparks, 151, Phantasmal Flames y Ascended Heroes.

Contrato funcional:
- una colección Pokémon creada desde este diálogo debe usar `collectionInventoryTemplate(type)` y `seedTypeForCollection(type)` igual que los proyectos Pokémon iniciales;
- debe conservar la UX Pokémon completa: checklist/rangos, variantes Base Set, estadísticas, buscador, visor, metadata e identidad visual del tipo elegido;
- las fuentes de repetidas solo pueden proceder de otro proyecto del mismo `collectionType`;
- el objetivo inicial al seleccionar Pokémon es 1; Panini mantiene 2 como valor inicial del diálogo;
- añadir una nueva colección Pokémon a `POKEMON_SET_DEFS`/`COLLECTION_DEFINITIONS` exige revisar también este selector para que pueda crearse manualmente;
- el selector debe ser desplazable en móvil para no crecer fuera de la pantalla.

## 704.14.18
- Reparada la omisión de Pokémon en «Crear nuevo álbum».
- Incluidas las 7 expansiones Pokémon actualmente soportadas.
- Sin cambios en inventarios existentes ni en Supabase.

### Build 704.14.19 — identidad visual 151 y portada Ascended Heroes
- Pokémon 151 usa un tema claro integral inspirado en su ETB: fondo perla continuo, tarjetas/acordeones blancos, turquesa como acento, filas claras y navegación inferior clara. No deben reaparecer superficies negras heredadas del tema Pokémon genérico ni franjas blancas aisladas entre bloques.
- Este cambio es exclusivamente visual: no altera checklist, variantes, inventario, buscador, estadísticas, visor ni sincronización Pokémon.
- En la biblioteca de Colecciones, Ascended Heroes usa Mega Dragonite ex #271 como carta de portada/chase visual.

# 39. BUILD 704.14.20 — 151 DEGRADADO TURQUESA + GALERÍA DE COLECCIONES

## Pokémon 151
La identidad clara de 151 se consolida con un fondo continuo perla/turquesa. La zona central de la vista de cromos no puede recuperar el fondo negro heredado del tema Pokémon genérico ni una cápsula oscura alrededor del buscador.

Contrato visual de 151:
- fondo de cabecera, contenido y zona previa a la navegación visualmente continuo;
- degradado muy suave desde blanco/perla hacia turquesa claro detrás de estadísticas y acordeones;
- buscador blanco con borde turquesa dentro de un contenedor exterior turquesa/perla translúcido;
- acordeones y filas blancos/translúcidos sobre el degradado;
- barra inferior clara;
- la lógica Pokémon, checklist, variantes, estadísticas, inventario, visor y sincronización siguen compartiendo el motor común y no se especializan por este tema.

## Biblioteca / Colecciones
La pestaña Colecciones adopta una galería visual compacta inspirada en portadas:
- secciones `FÚTBOL` y `POKÉMON TCG`;
- tarjetas en cuadrícula de tres columnas en móvil y auto-grid en pantallas mayores;
- cada tarjeta prioriza portada, nombre y resumen breve del álbum;
- las colecciones Pokémon usan su carta chase configurada como portada; Ascended Heroes usa específicamente Mega Dragonite ex #271;
- Liga Este y Megacracks usan las portadas locales ya incluidas en `assets/collection-covers/`; World Cup usa su icono oficial local;
- abrir, editar y reordenar colecciones sigue disponible desde cada tarjeta mediante controles superpuestos discretos;
- crear nueva colección se conserva como botón `+` compacto en la cabecera.

Contrato de regresión: el rediseño de biblioteca es exclusivamente de presentación. No debe cambiar `projects`, orden persistido, inventarios, targets, Supabase ni las reglas de creación/duplicado/traspaso.


# 40. BUILD 704.14.21 — COLECCIONES JERÁRQUICAS + BUSCADOR 151

## Pokémon 151
El buscador del tema 151 debe quedar completamente integrado en su identidad clara. No puede reaparecer el negro del tema Pokémon genérico alrededor del campo de búsqueda. El contenedor estructural exterior se conserva en turquesa/perla translúcido y la regla específica de 151 tiene prioridad sobre el tema Pokémon general.

## Colecciones / jerarquía de biblioteca
La pestaña Colecciones conserva la galería visual de portadas de 704.14.20, pero esa galería se muestra dentro de una jerarquía de acordeones para evitar scrolls largos y preparar nuevas familias futuras.

Estructura aprobada:
- `Football Cards` es el acordeón raíz de las colecciones de fútbol.
  - `Mundial` muestra los proyectos `world-cup-2026` en la cuadrícula visual.
  - `Liga Este` muestra los proyectos `liga-este-2026-27`.
  - `Megacracks` muestra los proyectos `megacracks-2026-27`.
  - futuras familias Topps deberán añadirse dentro de `Football Cards`, no como raíz separada salvo nueva decisión.
- `Pokémon TCG` es un único acordeón raíz. Al abrirlo se muestran directamente todos los álbumes Pokémon en la cuadrícula visual; NO crear subcarpetas por expansión.

El estado abierto/cerrado se guarda solo en `localStorage` mediante `COLLECTION_FOLDER_STATE_KEY`. Es navegación local de interfaz: no debe sincronizarse con Supabase ni entrar en fingerprints/conflictos de inventario.

Contrato de regresión:
- conservar tarjetas de portada, apertura, edición y controles de reordenación;
- no cambiar `projects`, inventarios, targets, orden persistente ni sincronización;
- no convertir Pokémon en una jerarquía por expansión;
- futuras colecciones de fútbol deben integrarse conceptualmente en `Football Cards`.

## 704.14.21
- Corregido fondo negro residual del buscador de 151.
- Biblioteca reorganizada en acordeones `Football Cards` / `Pokémon TCG`, con subacordeones únicamente para familias de fútbol.

# 41. BUILD 704.14.22 — CONTENEDOR DEL BUSCADOR 151 EN TURQUESA

## Pokémon 151
La cápsula estructural exterior que rodea el campo de búsqueda se conserva porque forma parte del espaciado/composición del encabezado, pero en 151 nunca debe usar el negro heredado del tema Pokémon genérico.

Contrato visual actualizado de 151:
- el contenedor exterior del buscador usa turquesa/perla translúcido integrado con el degradado general;
- el campo interior sigue siendo blanco con borde turquesa fino;
- no debe existir ninguna superficie negra alrededor del buscador en 151;
- esta excepción es exclusivamente visual y no altera el buscador, sugerencias, filtros ni su comportamiento.

## Colecciones
La jerarquía `Football Cards` / `Pokémon TCG` de 704.14.21 queda sin cambios y continúa siendo la referencia vigente.


# 42. BUILD 704.14.23 — SINCRONIZACIÓN SEGURA DURANTE CAMBIOS RÁPIDOS

## Condición de carrera corregida
Una escritura a Supabase representa una fotografía inmutable del estado tomada antes de iniciar la petición. El usuario puede seguir modificando inventario mientras la red responde; esos cambios posteriores nunca pueden atribuirse a la petición anterior.

Comportamiento obligatorio:
- `saveCloudState()` serializa las escrituras por pestaña mediante `cloudSaveInFlight`; no debe haber dos escrituras cloud simultáneas desde la misma pestaña.
- `cloudPayload()` genera el snapshot a enviar y se calcula `savedFingerprint` a partir de ese snapshot exacto.
- Al confirmar Supabase una escritura, `cloudBaselineFingerprint` debe avanzar a `savedFingerprint`, nunca al fingerprint del estado vivo si éste cambió durante el `await`.
- Si `stateFingerprint()` al finalizar es distinto de `savedFingerprint`, significa que hubo cambios posteriores: no se vacía `pendingSync`, no se marca la colección como totalmente sincronizada y se encola una nueva subida inmediata.
- Solo cuando el estado vivo coincide con el snapshot confirmado pueden vaciarse `pendingSync` y actualizarse `lastSyncedAt`.
- Los eventos realtime/focus/foreground que llegan durante una escritura se difieren; el eco realtime de la propia escritura no debe abrir un conflicto antes de recibir la respuesta HTTP.

## Regresión prohibida
Al pulsar rápidamente varias veces `+` o `−` (especialmente en Liga Este/Megacracks), el valor local final debe conservarse. Por ejemplo, si el usuario pasa de x0 a x5 mientras una petición anterior salió cuando estaba en x3, la nube puede guardar x3 temporalmente, pero StickerBase debe detectar que existen cambios posteriores y enviar x5 inmediatamente después. Nunca puede:
- reducir x5 a x3 al recibir realtime/focus;
- borrar los cambios pendientes posteriores;
- mostrar `Hay dos inventarios diferentes` como consecuencia de su propia escritura anterior.

Esta protección afecta al motor común de persistencia y debe mantenerse para Mundial, Liga Este, Megacracks y Pokémon.


# 43. BUILD 704.14.24 — PORTADAS OFICIALES EN COLECCIONES

En la cuadrícula visual de la pestaña `Colecciones`, las familias de fútbol usan assets locales específicos de biblioteca:
- Mundial 2026: portada oficial multicolor con trofeo (`world-cup-2026-library.webp`).
- Liga Este 2026/27: portada oficial del álbum (`liga-este-2026-27-library.webp`).
- Megacracks 2026/27: portada oficial 25 aniversario (`megacracks-2026-27-library.webp`).

Estas imágenes son exclusivas de la vista de Colecciones. No sustituir con ellas las imágenes de cabecera internas salvo petición expresa. Mantenerlas locales para funcionamiento PWA/offline y evitar dependencias de URLs externas.


# 44. BUILD 704.14.25 — HEADERS OFICIALES + ESTADO DE ESPECIALES MEGACRACKS

Las portadas locales oficiales usadas en la biblioteca de Colecciones para Mundial 2026, Liga Este 2026/27 y Megacracks 2026/27 se reutilizan también en el header de sus respectivos proyectos. Mundial conserva su composición clara/compacta; Liga Este y Megacracks conservan su header premium con estadísticas.

En Megacracks, todos los acordeones especiales (ENJOY, ENJOY POWER y demás apartados definidos como especiales) deben mostrar en su subtítulo el total de cards y el estado `X pendientes` o `Completo`, usando el mismo criterio de objetivo/inventario que los clubes y excluyendo cualquier referencia marcada como `Pendiente`. No volver a dejar los especiales con solo `X cards`.


# 45. BUILD 704.14.26 — VARIANTES POKÉMON REALES + FIRST PARTNER

## Regla maestra de variantes del Base Set
StickerBase NO debe volver a mostrar de forma genérica `Básica / Holo / Inverse Holo` para todas las cartas Pokémon. La UI depende de la rareza real:
- Common / Uncommon: `Normal` + `Reverse Holo`.
- Rare (single star / holo rare): `Holo` + `Reverse Holo`.
- Pokémon ex / Double Rare y superiores: una única versión del checklist base.
- Rarezas posteriores al número oficial (IR, UR, SIR, Hyper/Mega Hyper, etc.): una única versión.

Ascended Heroes es una excepción: cada Pokémon no-ex del main set tiene, además de Normal/Holo según rareza, `Energy Reverse` y una segunda reverse de patrón de Ball; los Pokémon de Team Rocket usan `R Reverse` en lugar del patrón Ball. Trainers y Energy usan solo la reverse estándar. Las estadísticas deben calcular elegibilidad por variante; no usar como denominador todas las cartas base.

## Ascended Heroes — checklist corregido
El main set oficial es 217 y el total 295. Rangos: BASE 001–217; IR 218–250; UR 251–264; Mega Attack Rare 265–270; SIR 271–293; Mega Hyper Rare 294–295. La migración mueve de forma conservadora cualquier cantidad ya registrada en 217, 250, 264 y 293 al apartado correcto.

## First Partner Illustration Collection
Nueva colección Pokémon soportada: 27 promos MEP 037–063, una sola versión por carta, repartidas en tres acordeones:
- Series 1 (037–045): Kanto, Sinnoh, Alola.
- Series 2 (046–054): Johto, Unova, Galar.
- Series 3 (055–063): Hoenn, Kalos, Paldea.
Cada carta se trata como Promo · Illustration Rare fija, sin Normal/Holo/Reverse adicionales. Está disponible en Crear nuevo álbum y se añade a instalaciones existentes mediante la migración Pokémon v3 sin duplicar colecciones ya presentes.


# 46. BUILD 704.14.27 — FIRST PARTNER SERIES 2/3 IMÁGENES

Corregida la carga visual de las miniaturas MEP 046–063 de First Partner. Series 2 y 3 son más recientes y el endpoint TCGdex usado inicialmente no dispone/entrega todavía todas esas imágenes, aunque Series 1 sí cargaba. Para MEP 046–063 se usan fallbacks directos verificados de UnownArchives CDN. No modificar inventarios ni numeración; First Partner continúa siendo MEP 037–063 dividido en tres series de 9.


# 47. BUILD 704.14.28 — INDICADOR VISUAL DE POKÉMON INCOMPLETO

En todas las colecciones Pokémon, la fila de una carta muestra un fondo rojizo suave mientras falte al menos una de sus variantes requeridas. Cuando todas las variantes reales tienen al menos x1, recupera el fondo normal. Las cartas de una sola versión se consideran completas desde x1. Es exclusivamente visual y no altera inventario, checklists ni sincronización.


# 48. BUILD 704.14.29 — CHISPAS FULGURANTES / SURGING SPARKS: VARIANTES REALES

Se revisó la checklist de Surging Sparks (SV08) para que la Master Base refleje las variantes físicas reales. En BASE 001–191: Common/Uncommon usan Normal + Reverse Holo; Rare usan Holo + Reverse Holo; Pokémon ex son una única carta; y las ocho ACE SPEC — 162 Amulet of Hope, 164 Brilliant Blender, 176 Energy Search Pro, 182 Megaton Blower, 183 Miracle Headset, 185 Precious Trolley, 186 Scramble Switch y 191 Enriching Energy — son una única variante ACE SPEC, sin Normal/Holo/Reverse adicional. Las rarezas 192–252 continúan como cartas individuales. La implementación conserva la clave de inventario `basic` para ACE SPEC con la etiqueta visual `ACE SPEC`, evitando migraciones destructivas y preservando cantidades ya registradas en esa variante. El indicador rojizo de incompleto de 704.14.28 debe considerar únicamente estas variantes reales, por lo que una ACE SPEC a x1 queda completa.


# 49. BUILD 704.14.30 — ESTADO ROJIZO POKÉMON ROBUSTO

El indicador visual de carta incompleta se aplica directamente sobre cada `pokemon-card-row` con prioridad `important`, porque algunos temas Pokémon definen fondos base también con `!important`. Una carta queda rojiza mientras falte al menos una variante real requerida; al completarse todas, recupera el fondo normal. 151 usa una versión clara del aviso. Esta capa es puramente visual.


# 50. BUILD 704.14.31 — MEGA EVOLUTION + RIVALES PREDESTINADOS

Se incorporan dos colecciones Pokémon completas al mismo motor usado por el resto de expansiones. Mega Evolution (ME01/me1): main set 001–132, 188 cartas totales, IR 133–154, UR 155–176, SIR 177–186 y Mega Hyper Rare 187–188. Rivales Predestinados / Destined Rivals (DRI/sv10): main set 001–182, 244 cartas totales, IR 183–205, UR 206–227, SIR 228–238 y Hyper Rare 239–244. Ambas están disponibles en Crear nuevo álbum y se muestran dentro del acordeón Pokémon TCG. Las instalaciones existentes reciben los nuevos proyectos mediante migración Pokémon v4, sin duplicar tipos ya existentes.

Identidad visual acordada: Mega Evolution mantiene base oscura con cian/turquesa eléctrico y matiz púrpura; Rivales Predestinados usa base negra con naranja/rojo inspirada en Team Rocket. Conservan el mismo comportamiento Pokémon: carga de metadatos e imágenes, variantes por rareza, estadísticas, buscador, visor de carta, cantidades y resaltado rojizo de carta incompleta. No modificar inventarios de colecciones anteriores ni sincronización para incorporar estas expansiones.


## 704.14.32 — Headers Pokémon con identidad propia
- Todas las colecciones Pokémon muestran artwork temático en el lado derecho del header, manteniendo la estructura premium existente.
- La referencia visual se basa en el Pokémon/personaje protagonista de cada expansión (ETB/booster/chase), usando imágenes de cartas ya soportadas por el proveedor de imágenes de StickerBase.
- Pitch Black: Mega Darkrai ex.
- Mega Evolution: Mega Lucario ex #179.
- En la galería `Colecciones`, SOLO Mega Evolution cambia su portada a #179; el resto conserva la portada anterior.
- Contrato: estos elementos son decorativos y nunca forman parte del inventario/fingerprint/Supabase.


## 704.14.33 — contrato visual de headers Pokémon en iPhone
- No usar secret/SIR/full-art completas como fondo directo del header: en formato iPhone el recorte puede revelar nombres de ataques, habilidades o texto de carta.
- Los headers usan una impresión regular del protagonista y un recorte/zoom centrado en el artwork superior, conservando exactamente la altura y estructura del header existente.
- Protagonistas: Pitch Black Mega Darkrai #048; Chaos Rising Mega Greninja #022; Perfect Order Mega Zygarde #047; Surging Sparks Pikachu #057; 151 Mew #151; Phantasmal Flames Mega Charizard X #013; Ascended Heroes Mega Dragonite #152; First Partner Bulbasaur MEP037; Mega Evolution Mega Lucario #077; Destined Rivals Team Rocket's Mewtwo #081.
- La portada de biblioteca de Mega Evolution continúa siendo Mega Lucario ex #179. No cambiar las demás portadas de Colecciones por este trabajo.
- Los elementos del header son decorativos y quedan fuera de inventario, fingerprint y sincronización.


## 704.14.34 — contrato de artwork de headers Pokémon
- Los headers Pokémon ya no deben obtener su imagen decorativa desde `pokemonDirectImageUrl()` ni desde una carta del checklist.
- Usan assets locales bajo `assets/pokemon-header-art/`, separados del inventario y del fingerprint.
- En móvil el artwork debe comenzar aproximadamente desde el 32–38% derecho del header, entrando visualmente hacia la izquierda y fundiéndose mediante máscara; nunca debe aparecer texto/marco de una carta.
- Mantener el botón volver y la información del header por encima del artwork.
- Mega Evolution conserva exclusivamente en la biblioteca de Colecciones la portada #179.

## 704.14.35 — contrato final de composición de headers Pokémon
- Eliminar la viñeta `POKÉ-MON` del lado izquierdo en todos los headers Pokémon; no debe volver a introducirse.
- El artwork debe llegar físicamente hasta el borde derecho del header (`inset:0`, sin margen derecho) y extenderse por todo el ancho visual del banner.
- Los assets locales de `assets/pokemon-header-art/` están preparados en formato panorámico 1200×340: fondo extendido + protagonista conservado completo/anclado a la derecha + zona izquierda oscurecida para texto.
- Mantener el título/kicker/subtítulo a la izquierda y el botón volver a la derecha, ambos sobre el artwork.
- En iPhone no usar un contenedor parcial con `right:14px/18px` ni un `object-fit:cover` sobre una fuente vertical que vuelva a cortar al protagonista.
- No modificar por este sistema inventarios, checklists, estadísticas, fingerprint, Supabase ni portadas de la biblioteca; Mega Evolution mantiene #179 como portada de Colecciones.


## 704.14.36 — contrato de aislamiento visual del header Pokémon
- Los archivos bajo `assets/pokemon-header-art/` pueden proceder de una composición visual, pero StickerBase nunca debe mostrar directamente su interfaz incrustada.
- `syncPokemonHeaderFace()` define `--pokemon-header-art`; CSS usa esa fuente como fondo atmosférico desenfocado/oscurecido y como capa frontal recortada.
- La capa frontal debe excluir la franja superior, la inferior y la zona izquierda donde puedan existir status bar, título, subtítulo o buscador de la fuente.
- En iPhone el protagonista se escala aproximadamente al 76–80% según colección y queda anclado al borde derecho, evitando el primer plano/mutilación observado en 704.14.34–35.
- El único texto visible del header debe ser el HTML real de StickerBase. La viñeta lateral POKÉ-MON permanece eliminada.
- No tocar por esta capa visual inventario, checklists, estadísticas, fingerprint, Supabase ni portadas de Colecciones.

## 704.14.37 — contrato definitivo de artwork limpio en headers Pokémon
- Los 10 archivos de `assets/pokemon-header-art/*.webp` son ahora lienzos RGBA 1200×340 con solo una zona de artwork válida anclada a la derecha y transparencia/fundido hacia el resto del header.
- Está prohibido volver a usar como header un screenshot/mockup completo que contenga texto, buscador, barra de estado, botones o cualquier otra UI incrustada.
- `pokemon-header-face::before` queda desactivado: no debe volver a mostrar el asset como fondo completo o desenfocado, porque esa ruta fue la responsable de reintroducir restos de UI en 704.14.36.
- La capa `<img>` no usa `clip-path`, zoom ni recortes destructivos. Debe conservar `transform:none`, `clip-path:none` y ocupar el lienzo completo; el recorte seguro ya está realizado dentro del propio asset.
- Se mantiene sin viñeta POKÉ-MON en la izquierda y con el artwork llegando visualmente hasta el borde derecho.
- No tocar inventario, checklists, estadísticas, portadas de Colecciones, fingerprint ni Supabase al ajustar estos headers.


## 704.14.38 — contrato de las cuatro cabeceras rehechas
- No tocar las cabeceras que el usuario consideró pasables.
- Rehechas: First Partner, Ascended Heroes, Mega Evolution y Rivales Predestinados.
- First Partner usa material real de la colección: Bulbasaur MEP 037.
- Las cuatro usan `POKEMON_HEADER_CARD_ART` + `.is-card-art`; solo debe verse la zona de ilustración.
- Nunca mostrar nombre de carta, ataques, habilidades ni texto de reglas en el header.
- Mantener fallback local si la fuente remota falla.
- Rivales Predestinados debe mostrar el título completo mediante reducción tipográfica localizada.
- No modificar inventario, fingerprint, Supabase, checklists, estadísticas ni portadas.

## 704.14.39 — Scanner de precios Pokémon / contrato
- La navegación Pokémon vuelve a tener cinco pestañas. La tercera se muestra como `Intercambio`.
- Para cualquier `pokemon-*`, la pestaña Intercambio NO debe mostrar intercambio manual, Analizar lista, protegidos ni QR de Panini: únicamente `pokemonPriceScannerView`.
- El scanner está contextualizado a la expansión Pokémon activa para minimizar falsos positivos: OCR del número de colección → `setId + localId` → TCGdex.
- Idiomas expuestos: castellano (`es`), inglés (`en`), japonés (`ja`) y chino simplificado (`zh-cn`) y chino tradicional (`zh-tw`), con fallback de lookup a inglés cuando la ficha localizada no exista.
- Los únicos datos de precio visibles son los cinco aprobados: `Trend`, `AVG1`, `AVG7`, `AVG30`, `Low`. La fuente mostrada es Cardmarket a través de `pricing.cardmarket` de TCGdex.
- Principio de seguridad de matching: es mejor no mostrar precio que asignar el precio de otra carta. Si el número no está dentro de los rangos de la colección activa, la consulta se bloquea.
- La cámara usa `capture=environment`; el OCR intenta leer la parte inferior de la carta mediante Tesseract.js cargado bajo demanda. Siempre debe existir entrada manual del número como fallback.
- Este módulo no modifica inventario, variantes, checklists, estadísticas, fingerprint, Supabase ni las funciones de intercambio de fútbol.

## 704.14.40 — contrato Scanner Pokémon global
- La colección Pokémon desde la que se abre Intercambio NO restringe el scanner. Puede buscar cualquier carta Pokémon.
- Flujo principal: botón `Escanear carta` → cámara trasera en directo (`getUserMedia`) → OCR periódico de la zona inferior → estabilidad de lectura → búsqueda automática. No exigir disparador/foto manual.
- El formato `número/denominador` es la clave principal de desambiguación global: filtrar candidatos por `localId` y comparar denominador con `set.cardCount.official` o `total`.
- Si hay más de una candidata plausible, mostrar selección visual; está prohibido asignar silenciosamente un precio a una carta ambigua.
- Mantener entrada manual y captura de foto solo como fallback.
- Idiomas: ES, EN, JA, ZH simplificado/tradicional; para ZH simplificado se permite fallback ZH-TW/EN mientras TCGdex no tenga cobertura completa.
- Tras resultado debe existir `Escanear otra carta` para reabrir inmediatamente la cámara.
- Los únicos precios visibles continúan siendo Trend, AVG1, AVG7, AVG30 y Low.
- No modificar inventario, variantes, checklists, estadísticas, fingerprint, Supabase ni intercambio de fútbol.

## 704.14.41 — contrato scanner Pokémon nombre + número
- El scanner Pokémon global NO debe basarse únicamente en el número de colección. Debe analizar la carta completa y cruzar como mínimo numeración + nombre OCR.
- La guía de cámara debe encuadrar la carta completa en vertical; `pokemonScanFrameCanvas()` recorta ese marco completo.
- Los pequeños movimientos no reinician el reconocimiento: las lecturas del mismo número acumulan votos aunque no sean frames consecutivos.
- En cuanto hay confirmación suficiente, `pokemonScanStopCamera(false)` debe ejecutarse ANTES del lookup; una carta ya capturada nunca debe seguir escaneándose en segundo plano.
- `pokemonScanGlobalCandidates()` ordena también por similitud entre el nombre OCR y el nombre TCGdex. Una coincidencia clara puede resolverse automáticamente; una ambigua debe mostrar candidatos con la cámara ya detenida.
- OCR según idioma elegido: castellano=spa, inglés=eng, japonés=jpn, chino simplificado=chi_sim, chino tradicional=chi_tra.
- Mantener entrada manual como fallback y los únicos precios visibles: Trend, AVG1, AVG7, AVG30 y Low.
- No modificar inventario, variantes, checklists, estadísticas, fingerprint, Supabase ni intercambio de fútbol.


## 704.14.42 — contrato scanner Pokémon fullscreen
- `Escanear carta` debe abrir la cámara a pantalla completa (`body.pokemon-scanner-fullscreen`), no dentro de la tarjeta pequeña de Intercambio.
- El marco debe representar una carta completa 63:88 y ocupar aproximadamente 75–80% del ancho útil / hasta 72–78% de la altura.
- Mientras haya movimiento apreciable dentro del marco, NO ejecutar Tesseract. Esperar estabilidad ~650 ms y entonces procesar una captura de alta resolución.
- OCR obligatorio sobre carta completa: usar nombre + número para resolver la carta; el número no debe ser la única señal cuando el nombre es legible.
- Tras una identificación suficiente, detener tracks de cámara ANTES de iniciar la búsqueda global/precios. No debe continuar escaneando ni reiniciar por pequeños movimientos.
- Si el nombre no sale, se admite resolver tras dos lecturas estables coincidentes del número completo y mostrar candidatos si hay ambigüedad.
- Mantener botón cerrar, fallback de foto y entrada manual.
- No tocar inventario, variantes, checklists, estadísticas, fingerprint, Supabase ni intercambio de fútbol.


## 704.14.43 — contrato de scanner Pokémon fullscreen
- `Escanear carta` debe abrir un overlay real a pantalla completa. Para evitar clipping causado por transforms/overflow del shell PWA, `.pokemon-scan-camera` se mueve temporalmente a `body` mediante placeholder y se restaura al cerrar.
- El rectángulo visible es la única región principal de análisis. `pokemonScanCardGeometry()` debe mapear el `getBoundingClientRect()` del marco a coordenadas reales del sensor teniendo en cuenta `object-fit: cover`. No volver a asumir un crop central fijo del sensor.
- Movimiento se calcula solo dentro de la carta, con margen interior, y no puede reiniciarse por cambios en teclado/fondo/manos fuera del marco.
- OCR principal: carta completa capturada a alta resolución + recorte superior para nombre + recorte inferior para número; la carta completa queda como fallback para numeraciones desplazadas.
- Precargar el worker OCR al abrir cámara. El estado del HUD debe cambiar para que el usuario sepa si está encuadrando, estabilizando, leyendo o si falta nitidez.
- Mantener botón `Leer ahora` como fallback, pero el flujo normal debe ser automático tras ~480 ms de estabilidad.
- Al conseguir una identificación suficiente, detener tracks/cámara antes de buscar y mostrar resultado/candidatos. Nunca continuar escaneando tras haber aceptado una carta.
- Este módulo no modifica inventario, variantes, checklists, estadísticas, fingerprint, Supabase ni funciones de intercambio de fútbol.

## 704.14.44 — contrato scanner Pokémon rápido multiframe
- No volver a bloquear el OCR por un umbral de movimiento ni exigir ~500 ms de estabilidad; el pulso normal de la mano debe ser aceptado.
- El reconocimiento es continuo y acumula votos/pistas entre frames: nombre y número no necesitan aparecer perfectos en el mismo frame.
- Cada frame OCR usa un canvas combinado con recorte superior (nombre) e inferior (numeración), procesados en una sola llamada Tesseract.
- En cuanto número/set sean únicos, o nombre+número produzcan una coincidencia clara, detener físicamente la cámara antes de renderizar precios.
- Mantener la búsqueda global Pokémon independiente de la colección desde la que se abrió Intercambio.
- Nunca inventar una carta cuando siga habiendo ambigüedad; mostrar candidatos.
- No tocar inventario, checklists, estadísticas, fingerprint ni Supabase.


## 704.14.45 — contrato Scanner Visual v2
- El scanner Pokémon es híbrido visual-first para la decisión: OCR de nombre/número = recuperación de candidatos; comparación visual = condición necesaria para autoaceptar.
- `pokemon-scanner/visual-matcher.js` está desacoplado de `app.js` y expone `StickerBasePokemonVisual.rank(...)`. Su implementación actual usa firmas perceptuales de artwork/carta completa (bordes, RGB e histogramas), con caché de referencias.
- Está prohibido volver a detener la cámara solo porque un número OCR aparezca una o dos veces. Un candidato único por numeración tampoco se acepta sin confirmación visual o evidencia textual+visual suficiente.
- Si la confianza visual es insuficiente, continuar escaneando o mostrar candidatos; nunca inventar una coincidencia.
- El scanner puede generar candidatos solo por nombre cuando el número todavía no sea legible.
- Mantener cámara fullscreen, búsqueda global Pokémon, idiomas ES/EN/JA/ZH, Cardmarket Trend/AVG1/AVG7/AVG30/Low y fallback manual.
- No tocar inventario, variantes, checklists, estadísticas, fingerprint ni Supabase.

## 704.14.46 — contrato Vision 3 backend-first
- Para perseguir latencia/precisión premium, el reconocimiento pesado queda desacoplado de la PWA. `WC26_CONFIG.pokemonVisionApi` activa el servicio visual.
- Con endpoint activo, NO ejecutar Tesseract antes de la identificación visual: enviar el crop guiado y procesar respuesta del backend.
- Aceptación automática exige `CONFIDENT`, margen Top1/Top2 y confianza alta o consenso temporal de al menos 2 frames.
- Si el backend no está configurado, conservar el matcher local como fallback, nunca romper el scanner existente.
- El backend es un artefacto separado para modelo ONNX + índice de embeddings precalculado + rectificación + fusión; no mezclarlo con inventario/Supabase.
- No tocar inventario, variantes, checklists, estadísticas, fingerprint ni Supabase.


## 704.14.47 — En camino + Mis Singles / scanner retirado
- Se elimina completamente el scanner Pokémon experimental de la PWA: no existe `pokemonPriceScannerView`, cámara, OCR, matcher visual, Vision client ni scripts `pokemon-scanner/*`. Los contratos 704.14.39–704.14.46 quedan como historial técnico y están SUPERADOS por esta build.
- En Pokémon, la tercera pestaña de la navegación inferior pasa a ser `📦 En camino`. En fútbol conserva `⇄ Cambiar` y todas las funciones de intercambio existentes.
- Cada carta de una colección Pokémon puede marcarse `En camino`. En BASE la marca pertenece a la variante seleccionada (Normal/Holo/Reverse/etc.); en cartas fijas pertenece a esa carta concreta.
- El estado pendiente se guarda en `project.pokemonIncoming` y forma parte del fingerprint/cloud sync. Marcar `Recibida` incrementa exactamente la carta/variante correspondiente y elimina el pendiente. Nunca contar una carta en camino como inventario antes de recibirla.
- `En camino` agrega pendientes de TODAS las colecciones Pokémon, no solo la activa, y permite `Recibida` o `Quitar`.
- Nueva colección virtual `Mis Singles`: sirve para registrar cartas sueltas de cualquier expansión sin crear/completar el set entero. Se crea solo al abrirla por primera vez para no introducir mutaciones al arrancar/sincronizar.
- `Mis Singles` busca manualmente en TCGdex por nombre o número, permite ES/EN/JP/CN, conserva imagen/set/número/rareza/idioma y admite estado `En camino`.
- Los singles forman parte de `project.pokemonSingles`, del fingerprint y de Supabase igual que el resto de datos persistentes.
- La biblioteca Pokémon muestra siempre una tarjeta `Mis Singles`; no crear una subcarpeta por expansión.
- No modificar las checklists, variantes, cantidades existentes ni la lógica de sincronización rápida 704.14.23.


## Build 704.14.48 — routing desde Mis Singles
- Regla permanente: una búsqueda iniciada en `Mis Singles` no implica que la carta deba almacenarse allí.
- Resolver primero por `setId` contra las colecciones Pokémon existentes y confirmar que el número de carta existe como clave real en el checklist/inventario de una sección de ese proyecto.
- Si hay destino compatible: `La tengo` suma en ese álbum; `En camino` se guarda en `pokemonIncoming` de ese álbum.
- Si no hay destino compatible: almacenar en `pokemonSingles`.
- En BASE con múltiples acabados, pedir la variante mediante selector antes de registrar o marcar En camino.
- Nunca crear automáticamente una colección completa solo porque se busque/compre un single.

## 704.14.53 — contrato Mis Singles / En camino estable
- `En camino` debe mostrar pendientes de `pokemonSingles` con `status="incoming"` y de `pokemonIncoming` de todos los álbumes Pokémon. La colección virtual `pokemon-singles` se procesa explícitamente antes del filtro de álbumes.
- En modo Pokémon + pestaña `trade`, `#tradeView` y `#pokemonIncomingView` deben quedar sin atributo `hidden` y visibles de forma determinista; `#paniniTradeView` queda oculto. No volver a depender de una sola capa de `hidden` en Safari/PWA.
- El buscador de Mis Singles es predictivo: a partir de 2 caracteres lanza búsqueda tras ~350 ms sin exigir botón. Enter/Búsqueda manual siguen disponibles.
- Inputs de búsqueda Pokémon en móvil deben usar mínimo 16 px para impedir el auto-zoom de Safari/iOS.
- En móvil, los resultados deben conservar miniatura visible + nombre/set/número/rareza/estado y colocar acciones sin comprimir la información principal.
- Si un resultado puede enrutarse a un álbum existente, su miniatura debe priorizar `meta.images.small` / `pokemonDirectImageUrl()` de ese álbum. Esto evita aceptar assets de catálogo que sean reversos/placeholders para cartas ya conocidas por StickerBase (especialmente First Partner).
- Mantener detección `Ya la tienes` / `Ya está en camino` por carta y variante. No duplicar el mismo estado.
- No modificar inventarios existentes, checklists, variantes ni la lógica de sincronización rápida/Supabase.

### Build 704.14.54 — Mis Singles Discover + En camino independiente
- `pokemonIncomingView` es ahora hermano de `tradeView`, no hijo. En Pokémon, `setMainTab("trade")` muestra exclusivamente `pokemonIncomingView`; en Panini muestra `tradeView`. No volver a anidar En camino dentro del intercambio Panini.
- Mis Singles adopta UX Discover: búsqueda predictiva (300 ms), Mejor resultado y Cartas y versiones en grid de 2 columnas móvil.
- Historial local (NO cloud/fingerprint): `stickerbase.pokemon.singles.recentViewed.v1` y `stickerbase.pokemon.singles.recentAdded.v1`, máximo 20 snapshots.
- El ranking "Mejor resultado" es relevancia textual (nombre/número/set), no popularidad externa.
- Las acciones siguen respetando routing automático: si la carta está en el checklist de un álbum existente, se registra allí; si no, en Mis Singles.


## 704.14.61 — precios de mirrors de álbumes
- Toda carta no-BASE que se espeje automáticamente desde un álbum Pokémon a Mis Singles debe intentar obtener Cardmarket inmediatamente si aún no tiene `cardmarket`, aunque `autoValueScanAt` sea reciente.
- No usar `autoValueScanAt` como bloqueo para enriquecer con precio una ficha recién creada. Ese timestamp solo limita la reevaluación global de cartas BASE para la regla > 2 €.
- Los precios ya existentes conservan refresco máximo cada 24 h mediante `pokemonSinglesRefreshStoredPrices()`.
- No alterar inventario, cantidades, checklists ni routing álbum + Mis Singles.


## 704.14.62 — reparación definitiva de precios de mirrors
- Causa confirmada en el flujo de mirrors: `pokemonSinglesAlbumCardStub()` generaba `tcgdexId` desde el `setId` compacto interno (`me5-115`, etc.), mientras TCGdex puede requerir el código oficial con cero/punto (`me05-115`, etc.). Esto impedía recuperar el nombre inglés fiable usado para emparejar Cardmarket.
- Se añade resolución tolerante de IDs TCGdex: conserva compatibilidad con IDs existentes y prueba variantes oficiales para Mega Evolution y sets `.5`.
- Al resolver una carta se persisten en memoria `tcgdexId` y `englishName`, por lo que los mirrors ya creados se autorreparan durante el refresco; no hace falta borrarlos/recrearlos.
- Un fallo de Cardmarket ya NO actualiza `cardmarketFetchedAt`. Solo una obtención de precio válida marca el refresco de 24 h. Los fallos registran `cardmarketLastErrorAt` únicamente como diagnóstico y pueden reintentarse.
- No alterar inventario, cantidades, checklists ni routing álbum + Mis Singles.


## 704.14.63 — normalización canónica de Mis Singles
- Problema raíz confirmado: los singles añadidos desde Búsqueda nacían de un detalle completo de TCGdex, mientras los espejos de álbum nacían de un stub local con imagen Scrydex `small` y podían depender solo del matcher Cardmarket. Eran dos pipelines de ficha distintos.
- Contrato nuevo: todo mirror existente debe converger a una ficha canónica equivalente a una alta desde Búsqueda. `pokemonSinglesRepairExistingMirrors()` resuelve TCGdex por set+número (incluyendo candidatos `me3/me03`, `.5`, y fallback por `localId`) y persiste identidad técnica, imagen low/high y pricing.
- `pokemonSinglesUpsertMirror()` NO debe permitir que un stub automático pise campos ya enriquecidos de un mirror. Solo una acción manual puede aportar una ficha de catálogo más completa sobre un mirror existente; enlace de álbum, estado y fecha se conservan explícitamente.
- Los mirrors guardan `imageLarge`; `wirePokemonSingleCards()` la pasa al visor. No depender de reemplazar `/low.webp` cuando la fuente original puede ser Scrydex `/small`.
- Cardmarket para mirrors usa dos vías: primero `pricing.cardmarket` del detalle TCGdex como fallback coherente con Búsqueda, y después el dataset público directo cuando existe coincidencia válida. Un fallo no escribe `cardmarketFetchedAt`.
- La reparación se marca con `canonicalSchema=2` y `canonicalHydratedAt`; fallos temporales usan `canonicalRepairAttemptAt` con reintento diferido para evitar llamadas repetitivas en cada render.
- UX de Cromos/Mis Singles: eliminar el hero interno duplicado. Mantener la cabecera global y tabs compactos con contadores. `Colección` lista solo recibidas; `En camino` contiene los pendientes.
- No tocar inventario, cantidades, variantes, checklists, fingerprint ni sincronización Supabase salvo persistir los campos enriquecidos de las fichas de Mis Singles.
