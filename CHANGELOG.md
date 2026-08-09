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
