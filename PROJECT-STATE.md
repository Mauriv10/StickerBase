# StickerBase — PROJECT STATE

Última actualización: 21/08/2026
Build de referencia: 704.14.9

## 1. Fuente de verdad y forma de trabajo

- Trabajar SIEMPRE desde el ZIP COMPLETO de la última build entregada.
- No reconstruir el proyecto desde versiones antiguas ni desde fragmentos del historial del chat.
- Mantener inventario, sincronización Supabase, datos de colecciones y funciones existentes salvo petición expresa.
- Cada entrega debe incluir:
  1. ZIP COMPLETO.
  2. ZIP SOLO CAMBIOS.
  3. Lista de archivos modificados, añadidos y eliminados.
- `PROJECT-STATE.md` debe actualizarse e incluirse en cada ZIP COMPLETO futuro.
- El ZIP SOLO CAMBIOS debe incluir `PROJECT-STATE.md` cuando este archivo haya sido actualizado.

## 2. Producto

Nombre: StickerBase
PWA / web app para gestionar colecciones de cromos y cartas, inventario, faltantes,
repetidos, estadísticas e intercambios.

URL conocida del proyecto:
`https://mauriv10.github.io/StickerBase/`

La app sincroniza datos mediante Supabase. No sustituir esta sincronización por
almacenamiento local ni modificar su comportamiento sin una petición explícita.

## 3. Colecciones principales actualmente trabajadas

### World Cup 2026
- Colección Panini del Mundial 2026.
- Estructura por selecciones, numeración propia por selección.
- Soporta múltiples álbumes/proyectos.
- Incluye Extra Stickers y opciones específicas ya implementadas.

### Liga Este 2026/27
- Colección Panini Liga Este 2026/27.
- Identidad visual premium morada.
- La cabecera premium debe aparecer en la pestaña `Cromos`.
- NO debe aparecer en `Estadísticas`, `Cambiar` ni `Colecciones`.
- La cabecera utiliza la portada real de la colección.
- NO se muestran imágenes individuales de los cromos.
- Clubes y especiales utilizan sus escudos/iconos correspondientes.
- Los iconos/escudos deben quedar perfectamente centrados.
- Vista de Cromos:
  - cabecera premium;
  - buscador;
  - filtros `Todos / Me faltan / Repetidos`;
  - selector `Orden del álbum`;
  - tarjetas/acordeones por club o apartado especial;
  - botones - / stock / +.
- El diseño aprobado es oscuro con degradados morados, sin líneas blancas decorativas
  extrañas entre cabecera, buscador o tarjetas.
- Estadísticas debe mantener contraste alto y toda la información legible.

### Megacracks 2026/27
- Colección Panini Megacracks 2026/27, 25.º aniversario.
- Identidad visual premium grafito/plata.
- Sigue el mismo patrón estructural de Liga Este, usando sus propios colores.
- La cabecera premium debe aparecer en `Cromos`.
- NO debe aparecer en `Estadísticas`, `Cambiar` ni `Colecciones`.
- Cabecera con imagen real de la colección/producto.
- NO se muestran imágenes individuales de las cartas.
- Estadísticas debe mantener contraste alto y toda la información legible.
- Orden de especiales deseado:
  ENJOY → ENJOY POWER → ZONA VIP → ZONA VIP POWER → MASTER ROOKIE →
  STARS ON 25 → ÉLITE → ÉLITE POWER → SPECIAL ONE BLACK →
  SPECIAL ONE GOLD → LIMITED EDITION.

## 4. Navegación inferior

Pestañas principales:
- Cromos
- Estadísticas
- Cambiar
- Colecciones
- Ajustes

La barra inferior es fija/flotante y no debe romperse por cambios en cabeceras,
buscadores, scroll o acordeones.

## 5. Funciones que deben preservarse

- Inventario +1 / -1.
- Faltantes y repetidos.
- Múltiples proyectos/álbumes.
- Ordenación de colecciones.
- Exportaciones existentes.
- Compartir listas.
- Comparación mediante QR.
- Traspasar inventario: copiar/mover/sumar/reemplazar.
- Favoritos y protegidos.
- Intercambio manual.
- Analizar lista.
- QR y lectura desde galería.
- Sincronización Supabase entre dispositivos.
- Persistencia de inventario existente.

## 6. Buscador — comportamiento actual requerido

Liga Este y Megacracks permiten buscar por club, número y jugador.

Ejemplos:
- `Lamine Yamal` debe encontrar FC Barcelona y, cuando corresponda, apartados
  especiales que contengan a Lamine.
- Las sugerencias deben verse completas mientras se escribe.
- En iPhone/iOS, con el teclado abierto, las sugerencias NO pueden quedar detrás de
  `Todos / Me faltan / Repetidos`, `Orden del álbum` ni de las tarjetas.
- Build 704.14.9 cambia específicamente este comportamiento: cuando hay sugerencias,
  el bloque del buscador crece y los resultados forman parte del flujo, empujando los
  filtros hacia abajo. Se evita depender de superposiciones/z-index frágiles.

## 7. Decisiones visuales importantes

- Mantener estética premium, especialmente en Liga Este y Megacracks.
- Liga Este: morado/violeta.
- Megacracks: negro/grafito/plata.
- Evitar líneas blancas no intencionadas.
- Buscadores y selectores deben mantener proporciones y bordes coherentes.
- Escudos de clubes centrados dentro de sus contenedores.
- Iconos de especiales centrados.
- No añadir imágenes de cromos/cartas individuales a Liga Este o Megacracks.
- La portada/imagen de colección sí se usa en cabeceras y tarjetas de proyectos cuando
  corresponde.

## 8. Estadísticas

- Prioridad absoluta a la legibilidad.
- Textos principales blancos/alto contraste sobre fondos oscuros.
- Textos secundarios suficientemente claros.
- Mostrar progreso general, cromos disponibles, faltantes, repetidos y especiales
  según la colección.
- No permitir que la barra inferior tape información crítica: debe existir espacio de
  scroll suficiente.

## 9. Intercambios

Apartado `Cambiar`:
- Intercambio manual.
- Analizar lista.
- Favoritos y protegidos.
- Funciones QR existentes.
- No mostrar la cabecera premium de Liga Este/Megacracks en esta pestaña.

## 10. Incidencias históricas que NO deben reintroducirse

- Cabecera premium apareciendo en Estadísticas, Cambiar o Colecciones.
- Cabecera de Liga Este tapando buscador/filtros.
- Línea blanca encima/debajo del buscador.
- `Orden del álbum` deformado o cortado.
- Escudos/iconos descentrados.
- Barra inferior dejando de ser fija.
- Sugerencias del buscador ocultas detrás de filtros/acordeones.
- Pérdida o sobrescritura del inventario sincronizado.
- Cambios visuales que alteren lógica de datos.

## 11. Build actual — 704.14.9

Objetivo de esta build:
- Reparar las sugerencias del buscador de Liga Este y Megacracks.
- En 704.14.8 las sugerencias podían existir pero quedar visualmente ocultas/solapadas
  en iOS.
- En 704.14.9, al haber resultados, el contenedor del buscador aumenta de altura y el
  panel de sugerencias queda en el flujo normal de la página.
- Los filtros se desplazan hacia abajo mientras las sugerencias están abiertas.
- No se modifica la lógica de búsqueda, inventario, checklist, datos ni Supabase.
- Se añade este `PROJECT-STATE.md` como documento maestro para continuar el desarrollo
  en conversaciones nuevas sin depender del historial completo.

## 12. Regla para próximas conversaciones

Si este archivo se entrega junto al último ZIP COMPLETO:
1. Leer `PROJECT-STATE.md`.
2. Considerar el ZIP adjunto como código fuente vigente.
3. Aplicar únicamente los cambios solicitados sobre esa build.
4. No asumir que una build histórica refleja el estado actual.
5. Actualizar este documento si una decisión funcional o visual importante cambia.
