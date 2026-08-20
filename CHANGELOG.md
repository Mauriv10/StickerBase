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
