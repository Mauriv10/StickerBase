
## Build 704.14.34 — artwork independiente en headers Pokémon
- Sustituido el sistema de recorte de cartas por assets visuales locales dedicados al header.
- El artwork entra más hacia el centro/izquierda, como en las referencias aprobadas, con máscara progresiva para conservar la legibilidad del título.
- Ajustes específicos de ancho/opacidad para Pitch Black, Rivales Predestinados, First Partner y 151.
- Los nuevos assets se precachean en el service worker para funcionamiento PWA/iPhone.
- La portada de Mega Evolution en Colecciones continúa siendo Mega Lucario ex #179; las demás portadas no cambian.
- Sin cambios en inventario, checklists, estadísticas, variantes ni Supabase.
## Build 704.14.33 — headers Pokémon optimizados para iPhone
- Se corrige el problema visual de 704.14.32: los headers ya no usan secret/SIR ampliadas que podían mostrar texto de ataques o habilidades.
- Cada header usa una impresión regular del Pokémon/personaje protagonista y recorta exclusivamente la zona superior de ilustración mediante un encuadre específico para móvil.
- Pitch Black usa Mega Darkrai ex #048/084; Chaos Rising Mega Greninja ex #022/086; Perfect Order Mega Zygarde ex #047/088; Surging Sparks Pikachu ex #057/191; 151 Mew ex #151/165; Phantasmal Flames Mega Charizard X ex #013/094; Ascended Heroes Mega Dragonite ex #152/217; First Partner Bulbasaur MEP #037; Mega Evolution Mega Lucario ex #077/132; Rivales Predestinados Team Rocket's Mewtwo ex #081/182.
- Mega Evolution conserva Mega Lucario ex #179 como portada de la galería `Colecciones`, tal como pidió el usuario. El resto de portadas de `Colecciones` no cambia.
- No hay cambios en inventario, checklists, estadísticas, variantes ni Supabase.


## Build 704.14.32 — identidad visual Pokémon en headers
- Añadida imagen temática en el header de todas las colecciones Pokémon usando una carta protagonista de cada expansión como fuente visual, recortada para integrarse como artwork y sin alterar el layout funcional.
- Pitch Black usa Mega Darkrai ex como protagonista del header.
- Mega Evolution usa Mega Lucario ex #179 como protagonista y, además, su portada en `Colecciones` cambia específicamente a la carta #179 solicitada.
- Se conservan sin cambios las portadas actuales de todas las demás colecciones.
- Cambio exclusivamente visual: no modifica inventarios, checklists, estadísticas ni sincronización Supabase.
# Build 704.14.31

- Pokémon: añadidas Mega Evolution (ME01) y Rivales Predestinados / Destined Rivals (DRI).
- Mega Evolution: 132 cartas base, 188 totales; IR 133–154, UR 155–176, SIR 177–186 y MHR 187–188.
- Rivales Predestinados: 182 cartas base, 244 totales; IR 183–205, UR 206–227, SIR 228–238 y Hyper Rare 239–244.
- Ambas aparecen en Crear nuevo álbum y dentro del acordeón Pokémon TCG.
- Identidades visuales: Mega Evolution cian eléctrico; Rivales Predestinados naranja/rojo oscuro.
- Se mantiene el sistema de variantes reales, imágenes, estadísticas y aviso rojizo de incompletas.
- Sin cambios en inventarios existentes, Supabase ni sincronización.

# Build 704.14.30

- Pokémon: reforzado el indicador visual de carta incompleta.
- El fondo rojizo se aplica directamente a la fila con prioridad CSS, evitando que los fondos `!important` de cada tema lo oculten.
- 151 mantiene una variante rojiza clara adaptada a su tema perla/turquesa.
- Sin cambios en inventarios, checklists, variantes ni sincronización.

# Build 704.14.29

- Chispas Fulgurantes / Surging Sparks: revisada la lógica de variantes del set base.
- Common y Uncommon mantienen Normal + Reverse Holo.
- Rare mantienen Holo + Reverse Holo.
- Pokémon ex mantienen una única versión.
- Las 8 ACE SPEC (162, 164, 176, 182, 183, 185, 186 y 191) pasan a una única variante ACE SPEC; ya no se les exige una variante Normal/Reverse inexistente.
- Rarezas 192–252 siguen siendo cartas individuales.
- Sin cambios en cantidades almacenadas, sincronización ni otras colecciones.

# Build 704.14.28

- Pokémon: fondo rojizo suave cuando falta alguna variante requerida.
- Vuelve al aspecto normal al tener al menos x1 de todas sus variantes.
- Sin cambios de inventario, checklist ni sincronización.

# Build 704.14.27

- First Partner: corregida la carga de miniaturas de Series 2 (MEP 046–054) y Series 3 (MEP 055–063).
- La causa era que el proveedor de imágenes usado por Series 1 todavía no servía correctamente las cartas más recientes de Series 2/3.
- Se añaden URLs de respaldo verificadas únicamente para MEP 046–063, manteniendo intacta Series 1 y toda la lógica/inventario Pokémon.

# Build 704.14.26

- Pokémon: las variantes del Base Set dejan de ser genéricas. Common/Uncommon muestran Normal + Reverse Holo; Rare muestran Holo + Reverse Holo; Pokémon ex y rarezas ocultas siguen como una única versión.
- Ascended Heroes: los Pokémon no-ex muestran su tercera paralela real (Energy Reverse + Ball Reverse, o R Reverse para Team Rocket); Trainers/Energy conservan la reverse normal.
- Ascended Heroes: corregido el checklist oficial a 217 cartas base / 295 totales y los rangos secretos, con migración conservadora de las referencias 217, 250, 264 y 293 para no perder inventario.
- Añadida Pokémon First Partner: 27 promos MEP 037–063, organizadas en Series 1, 2 y 3, con una única versión Promo por carta.
- Estadísticas Pokémon: denominadores por variante ahora cuentan solo las cartas realmente elegibles para cada acabado.

# Build 704.14.25

- Headers: Mundial 2026, Liga Este 2026/27 y Megacracks 2026/27 reutilizan las mismas portadas oficiales locales aprobadas para Colecciones.
- Mundial conserva su layout claro existente; solo incorpora la portada oficial en el header.
- Megacracks: los apartados especiales muestran ahora `X pendientes` o `Completo`, igual que los clubes, calculado sobre el inventario real y excluyendo referencias marcadas como Pendiente.
- Sin cambios en inventarios, checklists, sincronización ni datos de colecciones.

# Build 704.14.24

- Colecciones: sustituidas las portadas de biblioteca de Mundial 2026, Liga Este 2026/27 y Megacracks 2026/27 por las imágenes oficiales aprobadas por el usuario.
- Las tres imágenes se almacenan como assets locales WebP y no dependen de URLs externas.
- El cambio afecta únicamente a las tarjetas de la pestaña Colecciones; las cabeceras internas de los proyectos permanecen intactas.
- Sin cambios en inventarios, checklists, sincronización, orden ni lógica de proyectos.

# Build 704.14.23

- Sincronización: corregida una condición de carrera al añadir/restar cromos rápidamente mientras una subida a Supabase ya estaba en curso.
- Cada petición cloud conserva ahora el fingerprint exacto del snapshot realmente enviado; nunca marca como guardados cambios realizados después de crear ese snapshot.
- Si el inventario cambia durante una subida, esos cambios mantienen su estado pendiente y se lanza automáticamente una segunda sincronización al terminar la primera.
- Las escrituras a Supabase quedan serializadas: no pueden existir dos `saveCloudState()` compitiendo en paralelo desde la misma pestaña.
- Los eventos realtime/focus recibidos mientras se está escribiendo se difieren hasta finalizar la operación para evitar que el eco de la propia escritura genere un falso conflicto.
- Regresión protegida: una secuencia rápida como x0 → x5 no puede volver a x3 por una escritura anterior ni abrir un conflicto nube/local causado por esa misma secuencia.
- Sin cambios en checklists, inventarios iniciales, interfaz, colecciones ni estructura de Supabase.

# Build 704.14.18

- «Crear nuevo proyecto» muestra ahora todas las colecciones disponibles, incluidas las siete expansiones Pokémon: Pitch Black, Chaos Rising, Perfect Order, Surging Sparks, 151, Phantasmal Flames y Ascended Heroes.
- Los proyectos Pokémon creados desde este diálogo reutilizan su checklist, tema, variantes, estadísticas, buscador y visor nativos mediante el motor Pokémon existente.
- El objetivo inicial de álbumes pasa automáticamente a 1 al seleccionar una colección Pokémon; Panini mantiene el valor 2 usado hasta ahora.
- El selector se vuelve desplazable en móvil para alojar todas las colecciones sin desbordar el diálogo.
- No se modifican inventarios ni proyectos ya existentes.

# Build 704.14.17

- Añadidas tres colecciones Pokémon TCG nativas: **151**, **Phantasmal Flames** y **Ascended Heroes**.
- Se integran en el mismo motor Pokémon existente: acordeones, inventario, variantes del Base Set, estadísticas, buscador, visor ampliado, miniaturas y sincronización.
- Añadidos los catálogos remotos de metadata/imágenes: `sv3pt5`, `me2` y `me2pt5`.
- Checklists numeradas: 151 (165 base / 207 total), Phantasmal Flames (94 base / 130 total) y Ascended Heroes (216 cartas base antes de las rarezas especiales / 295 total).
- Ascended Heroes incorpora el apartado **MEGA ATTACK RARE** (264–270).
- Nuevas identidades visuales: 151 blanco/perla + turquesa; Phantasmal Flames negro/azul + cian/violeta; Ascended Heroes petróleo/turquesa + amarillo/magenta.
- La migración Pokémon pasa a `stickerbase.pokemon.collections.v2` para añadir las tres expansiones a instalaciones existentes sin recrear ni alterar los cuatro álbumes Pokémon previos.
- Actualizadas las cartas representativas de la biblioteca: Mew ex #205 (151), Mega Charizard X ex #125 (Phantasmal Flames) y Mega Dragonite ex #295 (Ascended Heroes).

# Build 704.14.16

- Liga Este y Megacracks: compactadas las tarjetas de clubes para reducir significativamente el scroll vertical manteniendo la estética premium.
- Liga Este y Megacracks: filas de jugadores/cromos más densas, conservando controles táctiles cómodos para −/+.
- Intercambio manual: el stock actual deja de aparecer como texto secundario bajo el nombre y pasa a un bloque propio visible junto a −1/+1.
- No se modifica lógica de inventario, estadísticas, intercambio, Supabase, navegación ni checklists.

# Build 704.14.15

- Liga Este 2026/27: el nº 02 del Elche CF pasa a `Pendiente` y queda excluido de las estadísticas mediante el mecanismo existente para referencias pendientes.
- El cambio afecta exclusivamente al nº 02 del Elche CF; no se modifican los nº 02 de ningún otro club, apartados especiales ni Megacracks.
- Sin cambios en cantidades de inventario, Supabase, sincronización ni otras funcionalidades.

# Build 704.14.14

- Sincronización: corregida la causa común que podía impedir aplicar «Usar datos de la nube»: una copia automática que excedía la cuota de `localStorage` podía abortar la operación antes de aplicar Supabase.
- Backups automáticos: máximo de 3 snapshots, exclusión de `pokemonMeta` derivado y fallback a una copia mínima de inventario si el navegador está cerca de su cuota.
- Sincronización: el fingerprint compara clones normalizados de local y nube con las mismas migraciones, esquema y defaults, sin modificar ninguno de los estados originales.
- Sincronización: `applyCloudPayload()` fija baseline y `cloudMeta` después de cargar/renderizar/consolidar la copia cloud, evitando que el baseline nazca obsoleto.
- Sincronización: baseline aislado por usuario y limpiado al cerrar sesión.
- Traspasar inventario: ejecución protegida por `try/catch`, backup resistente a cuota, verificación exacta del inventario persistido y rollback de origen/destino ante cualquier fallo.
- Se mantiene el sistema CAS, revisión creciente, protección multipestaña y backups preventivos.
- Sin cambios en checklists, datos maestros, cantidades de inventario ni configuración de Supabase.

# Build 704.14.13

- Intercambio manual: Liga Este y Megacracks muestran el stock actual (`Stock xN`) en cada fila mientras se preparan unidades para dar/recibir.
- Traspasar inventario: la confirmación deja de depender de `method="dialog"` y ejecuta explícitamente el traspaso; se consolida antes el estado activo y el aviso final incluye las unidades del destino.
- Sincronización: el fingerprint de conflicto deja de incluir navegación/estructura derivada (`activeProjectId`, `selectedTeam`, `teamOrder`), evitando falsos conflictos entre PC y móvil por tener abierta otra colección/club o por normalización del orden.
- Se conservan CAS, backups, revisión remota, protección multipestaña y el diálogo para divergencias reales.

# 704.14.12

- Sincronización: corregido un falso conflicto recurrente en PC cuando Supabase tenía una revisión más nueva pero no existía una divergencia real de inventario.
- `saveCloudState()` ya no abre directamente el diálogo solo por detectar una revisión superior: reutiliza `reconcileCloudRow()` y sus comprobaciones de fingerprint/baseline.
- El baseline persistido en el navegador solo se reutiliza si pertenece al mismo usuario autenticado.
- Se mantienen las copias preventivas y la protección CAS/multipestaña; no se cambia el criterio de seguridad ante conflictos reales.
- Sin cambios en inventarios, checklists ni datos de colecciones.
- Actualizado `PROJECT-STATE.md`.

# 704.14.11

- Liga Este y Megacracks: corregida la flecha de retorno después de entrar a un club desde el buscador.
- Si la vista está filtrada a un único club o especial, pulsar su flecha vuelve a “Todos los clubes”.
- El comportamiento queda unificado para clubes normales y apartados especiales.
- Actualizado `PROJECT-STATE.md`.
- Sin cambios en inventario, checklist, datos ni sincronización.

# 704.14.10

- Reescrito `PROJECT-STATE.md` como memoria maestra completa de StickerBase.
- Añadida documentación exhaustiva de Pokémon TCG, World Cup 2026, Liga Este 2026/27 y Megacracks 2026/27.
- Documentadas sincronización Supabase, copias/restauración, intercambios, QR, traspaso de inventario, exportaciones, estadísticas, navegación y decisiones visuales.
- Documentadas las cuatro expansiones Pokémon, variantes Base/Holo/Inverse Holo, rarezas, visor de cartas, portadas representativas y temas visuales.
- Documentadas incidencias históricas y regresiones que no deben reintroducirse.
- Sin cambios funcionales en la app.

# 704.14.9

- Liga Este y Megacracks: corregidas las sugerencias del buscador en iOS.
- Cuando existen resultados, el buscador crece y las sugerencias empujan los filtros hacia abajo, evitando que queden ocultas.
- Añadido `PROJECT-STATE.md` como estado maestro del proyecto para continuar futuras conversaciones desde el último ZIP completo.
- Sin cambios en inventario, checklist, datos de colecciones ni sincronización Supabase.

# 704.14.8

- Liga Este y Megacracks: las sugerencias del buscador se muestran en una capa flotante por encima de filtros y acordeones.
- El desplegable ya no queda oculto detrás del contenido al escribir.
- Las sugerencias adoptan la estética oscura propia de Liga Este y Megacracks.
- Sin cambios en la lógica del buscador, inventario, checklist, datos ni sincronización.

# 704.14.7

- Liga Este y Megacracks: la cabecera premium se muestra exclusivamente en Cromos.
- Eliminada la cabecera de Estadísticas, Cambiar y Colecciones.
- Cromos: refuerzo del reset de scroll al entrar para que buscador y filtros no queden ocultos bajo la cabecera.
- Estadísticas: corregido el contraste de Progreso por álbum y textos secundarios.
- Sin cambios en inventario, checklist, datos ni sincronización.

# 704.14.6

- Liga Este y Megacracks (Cromos): estructura visual fijada al mockup aprobado.
- El buscador queda siempre visible inmediatamente bajo la cabecera premium.
- Eliminada la línea clara entre cabecera y buscador.
- Filtros Todos / Me faltan / Repetidos y Orden del álbum quedan alineados en una sola fila.
- Selector Orden del álbum reajustado para evitar texto cortado o aspecto deformado.
- El listado de clubes/equipos comienza siempre después de buscador y filtros.
- Sin cambios de inventario, checklist, datos ni sincronización.

# 704.14.5

- Liga Este y Megacracks: la cabecera premium se oculta en Colecciones y Cambiar.
- La cabecera permanece únicamente en Cromos y Estadísticas.
- Al cambiar de pestaña se reinicia también el scroll interno de StickerBase, evitando que buscador/filtros queden ocultos bajo la cabecera.
- Iconos de apartados especiales de Liga Este y Megacracks centrados igual que los escudos de clubes.
- Eliminada la última posibilidad de separadores claros heredados entre cabecera de equipo y listado.
- Sin cambios de inventario, checklist, sincronización ni datos.

# 704.14.4

- Liga Este y Megacracks: la cabecera premium se muestra también en la pestaña Cromos.
- Eliminados los separadores blancos heredados sobre el buscador y entre la cabecera del club y la tabla.
- Escudos centrados dentro de su contenedor en acordeones abiertos y cerrados.
- Se conserva la composición, tamaños, filtros y navegación de la 704.14.3.
- Sin cambios de inventario, checklist, sincronización ni datos.

# 704.14.2

- Liga Este y Megacracks: interfaz reconstruida siguiendo el mockup compacto aprobado.
- Se eliminan en Cromos los bloques superiores duplicados que rompían la continuidad visual.
- Buscador, filtros y orden pasan a un bloque compacto.
- Acordeones de clubes/equipos pasan a funcionar como cabecera visual principal.
- Tablas y controles +/- se compactan y se corrige el recorte lateral de botones.
- Barra inferior vuelve a formato integrado a todo el ancho, como en el diseño de referencia.
- Sin cambios de inventario, checklists, sincronización ni datos.

# 704.14.1

- Corrige la legibilidad del título de Pokémon TCG en la biblioteca.
- Liga Este y Megacracks adoptan una composición visual más integrada y coherente con el acabado premium de Pokémon.
- Sustituye los iconos LE/MC de cada álbum por portadas reales 2026/27.
- Refina cabecera, selector, búsqueda, filtros, acordeones y barra inferior de Liga Este y Megacracks.
- No se añaden imágenes individuales a los cromos/cards de fútbol.
- Sin cambios en inventario, checklists, sincronización ni lógica de negocio.

## 704.14.0
- Pokémon: corregida la insignia Activa en la biblioteca para que no quede oculta detrás de las flechas.
- Liga Este: rediseño Premium oscuro/morado-dorado en cabecera, selector, búsqueda, filtros, acordeones, filas, estadísticas y navegación.
- Megacracks: rediseño Premium negro/plateado en cabecera, selector, búsqueda, filtros, acordeones, filas, estadísticas y navegación.
- Colecciones: Liga Este y Megacracks reciben tarjetas premium propias, con mayor jerarquía visual y controles reorganizados.
- Opciones de colección: Liga Este y Megacracks pasan a pantalla completa con estética coherente con su colección.
- Sin cambios en inventarios, checklists ni sincronización.

## 704.14.0
- Pokémon · Colecciones: portadas fijadas a Mega Darkrai ex #116/084, Mega Greninja ex #116/086, Meowth ex #121/088 y Pikachu ex #219/191.
- El menú de los tres puntos de las colecciones Pokémon pasa a pantalla completa y adopta la estética oscura/premium Pokémon, respetando el color de acento de cada expansión.
- No se modifica el aspecto actual de las tarjetas de colección ni el inventario.

## 704.13.8
- Pokémon · Colecciones: sustituidas las miniaturas doradas genéricas por la carta chase representativa de cada expansión.
- Pitch Black: Mega Darkrai ex #116.
- Chaos Rising: Mega Greninja ex #116.
- Perfect Order: Mega Zygarde ex #124.
- Surging Sparks: Pikachu ex #238.
- Sin cambios en inventarios, progreso, temas visuales ni funcionamiento del visor de cartas.

## 704.13.7
- Pokémon: rediseñada la biblioteca de Colecciones para identificar cada expansión de un vistazo.
- Cada álbum Pokémon muestra miniatura visual, nombre completo, bloque/serie, progreso y cartas conseguidas.
- Pitch Black, Chaos Rising, Perfect Order y Surging Sparks conservan su identidad cromática individual también en Colecciones.
- Se mantienen los controles de orden, menú y estado Activa sin alterar Mundial, Liga Este ni Megacracks.

## 704.13.4
- Pokémon: buscador funcional por nombre, número, rareza, tipo y subtipo; filtra directamente las cartas y abre los acordeones con coincidencias.
- Pokémon/iPhone: el buscador usa 16 px para evitar el zoom automático de Safari y se bloquea el desbordamiento horizontal.
- Pokémon: Estadísticas rediseñadas como Pokédex, con cartas distintas, Base Set, copias, repetidas, variantes y progreso por rareza oculta.
- Pokémon: se elimina temporalmente la pestaña Cambiar.
- Pokémon: se elimina la barra Todos / Pedir / Entregar.
- Mundial, Liga Este y Megacracks mantienen su navegación y estadísticas actuales.

## 704.13.3
- Pokémon: interfaz premium oscura/dorada aplicada a la app real, inspirada en la referencia aprobada.
- Encabezado, resumen de progreso, búsqueda, filtros, acordeones y navegación inferior adaptados exclusivamente a Pokémon.
- Las cartas muestran imagen real mediante Scrydex con URL determinista por set/número, incluso si el metadata antiguo de Supabase no incluía imágenes.
- BASE SET mantiene Básica / Holo / Inverse Holo por carta; las EX del set base y las rarezas ocultas siguen siendo tipos fijos.
- Acordeones de rarezas con contador, subtítulo y progreso del Base Set.
- Mundial, Liga Este y Megacracks no reciben cambios visuales.

## 704.13.2
- Pokémon pasa a una vista en acordeón inspirada en Liga Este/Megacracks.
- Cada carta muestra su imagen real cuando está disponible en los datos del set.
- Las cartas BASE no EX permiten llevar stock independiente de Básica, Holo e Inverse Holo.
- Las cartas EX del set base conservan su tipo fijo, sin selector de variante.
- Illustration Rare, Ultra Rare, Special Illustration Rare y Mega/Hyper Rare quedan en apartados independientes.
- Se conserva el inventario previo y se migra el stock Reverse Holo existente al nuevo registro de variantes sin borrarlo.
- Las variantes Pokémon se incluyen en el estado sincronizado con Supabase.
- No se rediseñan todavía encabezado ni barra inferior.

## 704.13.1
- Corregido el falso conflicto de sincronización al abrir StickerBase en otro dispositivo tras añadir Pokémon.
- La migración/hidratación Pokémon ya no modifica el estado local antes de comparar con Supabase.
- Al elegir la nube, el payload de Supabase se conserva como fuente de verdad, incluidos todos los álbumes de Liga Este.
- No se modifica inventario ni estructura existente en Supabase.

## 704.13.0
- Nueva familia Pokémon TCG en Colecciones.
- Añadidas Pitch Black (120), Chaos Rising (122), Perfect Order (124) y Surging Sparks (252).
- Checklist completa por número, nombre y rareza.
- Separación de BASE, Illustration Rare, Ultra Rare, Special Illustration Rare, Hyper/Mega Hyper Rare y Reverse Holo.
- Reverse Holo se registra como variante independiente para master set.
- Se mantienen sincronización segura y backups.

## 704.12.33
- Liga Este: Extra Stickers Bronce, Plata y Oro pasan a ser opcionales mediante un único interruptor en Ajustes.
- Si los Extra Stickers están desactivados, se conserva todo su inventario pero quedan fuera de vistas, faltantes, progreso y estadísticas; al reactivarlos vuelven a contar.
- Todas las colecciones: cuando el objetivo es 2 o más álbumes, Estadísticas muestra el progreso independiente de cada álbum (Álbum 1, Álbum 2, etc.).
- El progreso por álbum respeta las mismas reglas del proyecto: referencias Pendiente excluidas y módulos opcionales incluidos solo cuando están activos.
- Se mantiene íntegra la protección de sincronización/concurrencia de 704.12.32.
- Inventarios existentes intactos.

## 704.12.32
- Protección de concurrencia entre pestañas/dispositivos: las escrituras a Supabase usan comparación atómica de revisión (CAS).
- Una pestaña antigua ya no puede sobrescribir silenciosamente una revisión más nueva. Si otra pestaña guarda primero, la escritura queda rechazada y StickerBase refresca/abre conflicto.
- Cada pestaña mantiene su propia huella base en memoria; deja de usar la huella compartida de localStorage para decidir automáticamente qué copia es más nueva.
- Coordinación entre pestañas mediante BroadcastChannel y evento storage para refrescar el estado cuando otra pestaña sincroniza.
- Aviso si StickerBase detecta otra pestaña abierta.
- Copias automáticas locales ampliadas a las 10 últimas restauraciones/sincronizaciones.
- Construida directamente sobre 704.12.29: no incluye cambios de checklist de 704.12.30/.31.

## 704.12.29
- Las carpetas de «Colecciones» aparecen cerradas por defecto la primera vez.
- StickerBase recuerda de forma independiente si World Cup 2026, Liga Este 2026/27 y Megacracks 2026/27 quedaron abiertas o cerradas.
- El estado se conserva al salir y volver a entrar en «Colecciones» y al reiniciar la app en el mismo dispositivo.
- Inventarios, progreso y sincronización sin cambios.

## 704.12.27
- Unificado el porcentaje de progreso entre «Colecciones» y «Estadísticas» para Liga Este y Megacracks.
- Las referencias todavía marcadas como «Pendiente» quedan fuera del denominador y de los faltantes también en la biblioteca de colecciones.
- Es posible alcanzar el 100% cuando se poseen todas las referencias actualmente publicadas, aunque existan futuras posiciones «Pendiente».
- El cálculo es específico para cada proyecto y no depende de cuál esté activo.
- Inventario y sincronización sin cambios.

## 704.12.26
- Los contadores «pendientes» por club de Liga Este y Megacracks excluyen referencias todavía marcadas como «Pendiente».
- Inventario intacto.

## 704.12.25
- Megacracks 2026/27 · Levante UD: la referencia 214 pasa de «Pendiente» a Iván Romero.
- Al dejar de ser «Pendiente», la 214 vuelve automáticamente a contabilizarse en faltantes y estadísticas.
- No se modifica ninguna cantidad de inventario.

## 704.12.24
- Construida sobre la 704.12.23 estable.
- Liga Este y Megacracks: especiales de «Todos los clubes» funcionan como acordeones.
- Las referencias «Pendiente» quedan fuera de Me faltan, Repetidos, progreso y estadísticas.
- Añadida estadística «Cromos base» con formato obtenidos/disponibles, excluyendo «Pendiente».
- Al sustituir un «Pendiente» por el jugador real en una futura checklist, vuelve a contabilizarse automáticamente.

## 704.12.23
- Base: 704.12.22 estable.
- Corregido exclusivamente el cierre de la cámara del comparador QR.
- El botón de cámara usa ahora un único listener que alterna abrir/cerrar; se elimina el segundo manejador `onclick` que podía volver a abrir la cámara al intentar cerrarla.
- Al cerrar se detienen las pistas, se pausa el vídeo y se limpia `srcObject`.
- Sin cambios en Supabase, sincronización, splash, carga inicial ni datos de colecciones.

## 704.12.22
- Corregido «Abrir cámara» en Comparar mediante QR en Safari/iPhone.
- El lector en directo ya no depende exclusivamente de BarcodeDetector: usa jsQR como alternativa sobre el vídeo de la cámara.
- Añadidos estados de apertura/cierre y mensajes claros para permisos de cámara o incompatibilidad.

## 704.12.21
- Añadida función Compartir StickerBase en Ajustes.
- Genera un QR directo a la URL oficial para enseñar a otros coleccionistas.
- Permite compartir el enlace o guardar/compartir el QR como PNG.

## 704.12.20
- Liga Este y Megacracks: los filtros «Me faltan» y «Repetidos» incluyen también especiales, inserts y paralelas.
- Nuevo formato premium al compartir/copiar listas de Liga Este y Megacracks: clubes y especiales separados, con número, jugador y cantidades.
- El formato compacto mantiene una línea por club/apartado y el Mundial conserva su formato anterior.

## 704.12.19
- Analizar lista: la selección de cromos a recibir ahora permite multiselección entre coincidencias.
- Cada versión recibida admite cantidad independiente con controles − / + (x1, x2, x3…).
- El resumen y la actualización de inventario respetan las cantidades seleccionadas.

## 704.12.17
- Analizar lista: las coincidencias ambiguas ya no se eligen automáticamente; el usuario selecciona la versión exacta que da y recibe.
- Añadidos alias en español como `Oro` para Special One Gold.
- El resumen final muestra nombre del futbolista, apartado y número tanto para entregar como para recibir.
- Las cantidades recibidas se aplican correctamente al inventario.

## 704.12.16
- Analizar lista muestra ahora todas las cards detectadas, con jugador, apartado, número y stock.
- Las coincidencias sin stock siguen apareciendo y se marcan como no disponibles para ofrecer.
- Mejorado el reconocimiento jugador + categoría especial (ej.: `lamine gold`, `yamal gold`, `lamine special one gold`).
- Los botones de copiar/preparar explican su estado cuando no hay unidades disponibles.

## 704.12.14
- Favoritos y protegidos: escudos de clubes completos, sin recorte de bandera.
- QR: feedback visual al copiar el enlace.
- QR: sustituida la entrada manual por importación de una captura desde Fotos/galería.
- QR: lectura de imágenes mediante BarcodeDetector cuando está disponible y jsQR como respaldo.

## 704.12.13
- Analizar lista reforzado en Liga Este y Megacracks: admite club + números, jugador, número único, cantidades, rangos, abreviaturas y formatos mixtos.
- Favoritos y protegidos habilitados correctamente para Liga Este y Megacracks, incluyendo nombres de jugadores en el gestor.
- Comparar mediante QR habilitado para Mundial, Liga Este y Megacracks, con QR compacto de inventario y comparación automática.
- El QR puede escanearse dentro de la app cuando el navegador soporta BarcodeDetector o con la cámara del móvil mediante enlace StickerBase.

## 704.12.13
- Megacracks: Carlos Espí corregido al nº 215; 214 pasa a Pendiente, migrando el stock existente una sola vez.
- Buscador Megacracks ampliado a club, jugador y número; escudos completos en resultados.
- Orden oficial de especiales ajustado: Enjoy, Enjoy Power, Zona VIP, Zona VIP Power, Master Rookie, Stars on 25, Élite, Élite Power, Special One Black, Special One Gold y Limited Edition.
- Ediciones Limitadas pasa a mostrarse como Limited Edition conservando inventario existente.

## 704.12.11
- Megacracks: la barra «Todos / Pedir / Entregar» deja de ser fija y se desplaza con el contenido, igual que en Liga Este.

## 704.12.10
- Corregidos `start_url` y `scope` de la PWA a `/StickerBase/` tras renombrar el repositorio de GitHub Pages.
- Caché/versionado actualizado para forzar la nueva instalación.

# Build 704.11.17

- Liga Este: cabecera fija compacta rediseñada; solo el área central hace scroll.
- Selector general renombrado a «Todos los clubes».
- 20 escudos 2026/27 incluidos como assets PNG locales transparentes; sin dependencia de red ni fondos lilas.
- ADN / LaLiga Prime, LaLiga Fantasy, Draft 23, Draft 23 Kromix y Extra Sticker Bronce/Plata/Oro incluyen nombre real y posición según la checklist de Davileti9.
- Al seleccionar un insert se muestra su listado vertical con stock, igual que un club.
- Brillantes y Colaboración permanecen ocultos en Liga Este.

## 704.11.17 — Liga Este: identidad completa y clubes

- Cabecera morada/dorada reforzada con insignia Liga Este 26/27.
- Terminología contextual: Club, Elegir club y Todos los clubes.
- Escudos reales también en acordeones y selector de clubes.
- Barra inferior Liga Este ajustada al borde inferior respetando safe-area.
- Mundial 2026 mantiene su interfaz y terminología de selecciones.

## 704.11.2 — Liga Este: interfaz vertical por jugadores
- Liga Este pasa a una interfaz propia morado/dorado en cabecera y navegación inferior.
- Equipos en acordeón desplegable para evitar una lista interminable.
- Checklist de primera edición con número, nombre real y posición según Davileti9.
- Los huecos aún no publicados permanecen como Pendiente para futuras ediciones.
- Controles de stock − / cantidad / + en cada fila.
- Buscador ampliado a jugador, equipo, posición y número.
- Escudos de club mediante favicon oficial con fallback visual sin emoji.
- Mundial 2026 mantiene su interfaz anterior.

# Build 704.11.2 · Liga Este 2026/27 + selector de colección

- Añade selector visual de tipo al crear una nueva colección.
- Liga Este 2026/27 ya se puede crear desde la APP con checklist de primera edición.
- Incluye los 20 equipos, variantes A/B y las series ADN / LaLiga Prime, LaLiga Fantasy, Draft 23, Draft 23 Kromix y Extra Stickers Bronce/Plata/Oro.
- Las nuevas colecciones muestran su tipo en la biblioteca y cambian de identidad visual al abrirlas.
- Evita añadir por error las secciones Coca-Cola/Extra del Mundial a colecciones de otros tipos.
- Al transferir repetidas para crear una colección, solo permite proyectos del mismo tipo.
- Megacracks aparece en el selector como próxima colección, aún deshabilitada hasta cargar su checklist.
- Mantiene inventarios existentes y sincronización Supabase.

# Build 704.11.0 · Soporte multicolección

- Añade `collectionType` persistente y retrocompatible a cada proyecto.
- Define identidades separadas para World Cup 2026, Liga Este 2026/27 y Megacracks 2026/27.
- La cabecera, icono de biblioteca y tema visual cambian automáticamente según la colección activa.
- Los proyectos existentes se migran automáticamente a World Cup 2026 sin tocar inventario.
- Las nuevas colecciones heredarán el tipo de colección de su proyecto de origen.
- Base preparada para cargar checklists específicas sin duplicar el motor de inventario/Supabase.

# Build 704.10.5

- Añadido **Traspasar inventario** en Editar colección → Inventario.
- Permite **Copiar** o **Mover** inventario entre colecciones.
- Permite **Sumar** al destino o **Reemplazar** su inventario.
- El selector excluye siempre la colección de origen.
- Incluye resumen previo y confirmación final.
- Se crea copia de seguridad automática antes de ejecutar el traspaso.
- Las dos colecciones se actualizan en el estado persistente y se sincronizan con Supabase mediante el flujo existente de `projects`.
- Se conserva el resto de funciones de inventario y gestión de colecciones.

# Build 704.10.4

- Exportar álbum omite las referencias con cantidad 0.
- Los tres formatos existentes siguen disponibles: compartir con banderas, copiar texto y copiar compacto.
- Conserva la sincronización protegida, el orden oficial de selecciones y todas las funciones de la 704.10.3.


## 704.13.6
- Pokémon: las miniaturas de las cartas ahora se pueden pulsar para abrir un visor ampliado superpuesto sobre la app.
- El visor usa la imagen de mayor resolución disponible, mantiene la app visible y desenfocada al fondo y permite cerrar con X, tocando fuera o con Escape.
- Añadida interacción accesible mediante teclado en las miniaturas.


## 704.13.5
- Identidad visual independiente para Pitch Black, Chaos Rising, Perfect Order y Surging Sparks.
- Chaos Rising combina azul eléctrico y magenta; Perfect Order prioriza verde; Surging Sparks usa amarillo/naranja; Pitch Black conserva negro/dorado.

## 704.14.19
- Pokémon 151: tema claro completo y continuo aprobado; elimina superficies oscuras heredadas y franjas visuales discordantes en acordeones y navegación.
- Ascended Heroes: la portada de la colección pasa a usar Mega Dragonite ex #271.

## 704.14.20
- Pokémon 151: el fondo central pasa a un degradado perla/turquesa continuo; desaparecen definitivamente el bloque negro residual y la cápsula oscura alrededor del buscador.
- Colecciones: nueva biblioteca visual en formato galería, con tarjetas compactas de portada en cuadrícula y secciones FÚTBOL / POKÉMON TCG.
- Se conservan abrir, editar y reordenar álbumes mediante controles discretos sobre cada tarjeta.
- Ascended Heroes mantiene Mega Dragonite ex #271 como portada.
- Sin cambios en checklists, inventarios, estadísticas, variantes ni sincronización.


## 704.14.21 — 151 buscador limpio + Colecciones jerárquicas
- Pokémon 151: elimina definitivamente el fondo/cápsula negra heredada alrededor del buscador mediante reglas específicas de mayor prioridad.
- Colecciones: nueva jerarquía en acordeones. `Football Cards` agrupa Mundial, Liga Este y Megacracks; cada familia abre su galería de álbumes.
- `Pokémon TCG` abre directamente la cuadrícula visual de todos los álbumes Pokémon, sin subcarpetas por expansión.
- El estado abierto/cerrado de los acordeones es local al dispositivo y no forma parte de Supabase ni del fingerprint de inventario.
- Se mantiene la galería de portadas, abrir, editar y reordenar álbumes.

## 704.14.22 — Buscador 151 integrado en turquesa
- Pokémon 151: el contenedor estructural exterior del buscador deja de heredar negro del tema Pokémon general y pasa a turquesa/perla translúcido, coherente con el degradado de 151.
- El campo de búsqueda interior permanece blanco, con borde turquesa y contraste limpio.
- Colecciones permanece exactamente como en 704.14.21; no se modifica su jerarquía ni galería.
- Sin cambios en checklists, inventarios, estadísticas, navegación, proyectos ni sincronización.

## 704.14.35 — Header Pokémon edge-to-edge
- Elimina la viñeta lateral `POKÉ-MON` de todos los headers Pokémon.
- El artwork decorativo ocupa ahora el header completo hasta el borde derecho, sin margen lateral.
- Los assets de header se recomponen a formato panorámico para conservar el Pokémon/personaje completo y evitar el recorte excesivo observado en iPhone.
- El contenido textual permanece por encima con degradado de legibilidad; no cambia la altura del header.
- Sin cambios en inventario, checklists, estadísticas, portadas de Colecciones ni sincronización.


## 704.14.36 — Header Pokémon sin interfaz incrustada
- Corrige el fallo visual observado en iPhone donde los assets panorámicos 704.14.35 mostraban fragmentos de títulos, subtítulos y buscador dentro del propio artwork.
- La fuente visual se usa ahora en dos capas: fondo fuertemente desenfocado/oscurecido y una capa frontal recortada exclusivamente a la zona de ilustración.
- La capa frontal elimina las franjas superior/inferior del mockup y la mitad izquierda que contenía UI, y reduce el protagonista para evitar el recorte excesivo.
- Mantiene el artwork hasta el borde derecho, el header sin viñeta POKÉ-MON y el texto real de StickerBase por encima.
- Sin cambios en inventario, checklists, estadísticas, portadas de Colecciones, fingerprint ni Supabase.

## 704.14.37 — Header Pokémon limpio definitivo
- Sustituye los 10 assets de header por composiciones locales que contienen únicamente la zona de artwork; se eliminan físicamente de los archivos los títulos, subtítulos, buscadores, barras de estado y controles que venían incrustados en los mockups anteriores.
- El CSS deja de intentar ocultar UI mediante `clip-path`: el artwork se muestra completo dentro de un lienzo transparente 1200×340, anclado al borde derecho y con fundido real hacia la izquierda/inferior.
- Se elimina también la capa de fondo que reutilizaba el mockup completo, por lo que ya no existe ninguna ruta capaz de volver a mostrar texto/UI incrustada.
- Mantiene el header sin viñeta POKÉ-MON, la altura actual, el título real de StickerBase y el botón de volver por encima del artwork.
- Sin cambios en inventario, checklists, estadísticas, portadas de Colecciones, fingerprint ni Supabase.


## 704.14.38 — Headers First Partner / Ascended Heroes / Mega Evolution / Rivales
- Rehechas únicamente las cuatro cabeceras señaladas.
- First Partner usa Bulbasaur MEP 037 de la propia colección.
- Ascended Heroes usa Mega Dragonite ex; Mega Evolution, Mega Lucario ex; Rivales, Team Rocket's Mewtwo ex.
- Solo se muestra la franja de ilustración de la carta; nombre, ataques y reglas quedan fuera del viewport.
- Fallback local si falla la imagen remota.
- Rivales reduce el título solo lo necesario para evitar truncado.
- Sin cambios en inventario, checklists, estadísticas, sincronización o portadas.
