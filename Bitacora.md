# Bitacora

Bitacora de clase para el curso de Modelado 3D I. Utilizando Software 3DS Max

# Semana 1


![alt text](Semana1/image.png)

Visor: muestra espacio tridimensional

Lado derecho: panel de comandos. Se usa para crear, y modificar.

Arriba: barra de menú (herramientas). Se usa para guardar, abrir, importar, exportar, etc.'

Mas abajo: barra de herramientas. Se usa para crear, modificar, seleccionar, etc.

Ribbon: para modelado poligonal.

Hay elementos que se repiten en el panel de comandos, como por ejemplo: Box.

Izquierda: navagador de la escena. Se usa para organizar los objetos de la escena.

Abajo: barra de animación. Se usa para animar objetos.

Los archivos de 3DS Max se guardan con la extensión .max


Barras punteadas: para agregar elementos a la UI. Hay varios a traves de la UI.

Herramientas de navegación: menu abajo a la derecha, en la esquina.

Cambiar perpsectiva del visor con segundo corchete [Top/Left/Front/Perspective]
Poner fondo de diferente color con cuarto corchete [Default shading]

G: para quitar reticula (maya)

Visor activo: el que tiene el borde amarillo. Para cambiar de visor, click en el visor deseado. Alt + w

Cambiar viewport layout: en la esquina superior izquierda.

Edge faces: default shading + wireframe

F3: para poner wireframe/default shading
F4: para poner edge faces
Alt + middle click: para orbitar
Middle click: panear
Zoom: scroll del mouse
Z: Zoom extents. Maximiza todo lo que hay en la escena.
Zoom extents all: maximiza en todos los viewport.

Objetos seleccionables: hover y borde en amarillo
Objeto seleccionado: borde en celeste

gizmo de movimiento: las flechas para mover en un eje específico.

Clonar:
Shift + arrastrar: clona el objeto

Para meter referencias:

File -> View image file


Para cambiar color:
Barra de comando -> Name and color -> click en el cuadro de color -> elegir color

Ctrl + click sobre objetos: selección multiple

# Semana 2

Icono mas: crear (objetos primitivos).
- Standard: Box, Sphere, Cylinder, etc.
- Extended: objetos con mas parametros, como por ejemplo: torus, oil tank, etc.

- Son objetos paramétricos: con parametros. Permiten modificar propiedades sin perder la forma original.

Modificar (segundo icono):
- Para modificar objetos base de la parte de crear. Para crear topologías mas complejas.

- Modificación parametrica: se pueden modificar los parametros del objeto sin perder la forma original. Modificaciones de tamaño y estructura.
- Modificación específica: modificación a partir de herramientas (modificadores).
- Modificación poligonal:

- Modifier list: registro de modificadores


Para esferas:
- Hemisphere: para cortar a la mitad
- Slice On:
  - Slice from/to: para cortar un "gajo" de la esfera



Q: select. Si se selecciona varias veces cambia el tipo area seleccionable.
W: select and move
E: select and rotate
R: select and scale


Customize -> Units setup

Coordenadas universales u absolutas: Están abajo a la UI. Coordenadas del objeto en base al origen del mundo

Click derecho en Select and move -> Dialogo de coordenadas de movimiento
Absolute: world: coordenadas del objeto en base al origen del mundo
Offset world: para hacer operaciones matemáticas

Snaps de movimiento: para mover objetos con más precisión.
- Shortcut: S
- Click derecho sobre icono de snap.
  - Pestaña de snaps: desactivar grid points. Activar vertex y Midpoint.
  - Pestaña de options: enable axis constraints. Display rubber band (check en ambos).
- Para mover cosas con snap: mover normalmente.
- Para mover sobre varios ejes: hacer click en las direcciones deseadas en el gizmo.


Vertice: punto de unión entre 2 lineas.

Rotaciön: se mide en grados. 360 grados es una vuelta completa.

Snaps de rotación: para rotar objetos con incrementos de X grados.
- Shortcut: A
- Click derecho en snap: options -> angle (cambiar incremento).

- No usar herramienta de escala de momento.

Escala: se mide en porcentaje. 100% es el tamaño original del objeto.

- La herramienta de escala permite hacer un objeto más grande, pero no modifica sus parametros de transformación.

Para agrupar objetos:
- Group -> Group. Para desagrupar: Ungroup.
- Attach: para agregar un objeto a un grupo. Para cuando hace falta.
- Open para abrir un grupo y modificarlo sin desagruparlo. Borde rosado indica lo que está dentro del group.
- Close para cerrar el grupo después de modificarlo. Borde rosado desaparece.

Al copiar:
Copy vs reference:
- Copy: crea una copia del objeto. No tiene relación con el objeto original.
- Reference: crea una copia del objeto. Tiene relación con el objeto original. Si se modifica el objeto original, todas las instancias se verán afectadas. Ejemplo: cambiar tamaño del objeto original, todas las instancias cambiarán de tamaño.


En modifier list:
Box en negrita: significa que es una instancia.

# Modificación especifica:

Se pueden aplicar multiples modificadores a un objeto. Seleccionar nombre del modificador en la lista, notaremos que el borde azul del objeto desaparece. Para salir de este modo, click de nuevo.

- Click al basurero para eliminar modificador.

FFD: free form deformation. Se marca un gizmo adicional de color naranja.

- FFD 2x2x2: para deformar un objeto con una caja de control con 8 puntos de control.
- FFD 3x3x3: para deformar un objeto con una caja de control con 27 puntos de control.
- FFD 4x4x4: para deformar un objeto con una caja de control con 64 puntos de control.
- FFD (box)
- FFD (cyl)