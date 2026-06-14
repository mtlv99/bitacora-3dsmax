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
F4: para poner edge faces (importante)
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
R: select and scale (si se apreta varias veces, cambia el tipo de escala: uniforme, no uniforme, etc. Importante para escalar un anillo de forma perfecta.)


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

Se pueden aplicar multiples modificadores a un objeto. Seleccionar nombre del modificador en la lista, notaremos que el borde azul del objeto desaparece. Para salir de este modo, click de nuevo. Se pueden aplicar varios modificadores del mismo tipo o diferentes.

- Click al basurero para eliminar modificador.

FFD: free form deformation. Se marca un gizmo adicional de color naranja.

- FFD 2x2x2: para deformar un objeto con una caja de control con 8 puntos de control.
- FFD 3x3x3: para deformar un objeto con una caja de control con 27 puntos de control.
- FFD 4x4x4: para deformar un objeto con una caja de control con 64 puntos de control.
- FFD (box): matriz variable. Permite cambiar la cantidad de puntos de control.
- FFD (cyl): matriz variable adopta una forma cilindrica en vez de cúbica.


# Semana 3

Para controlar la orientación de los objetos al crearlo, crearlos desde la perspectiva Front.


Tecla 1: activa modificador

Referencia: sistema de calcado. Para usar referencias como en el Blender, crear un plano, y luego en explorador de Windows arrastrar la imagen y dejarla caer sobre el plano. Hay que tener cuidado con las proporciones del plano.
- Usar visores sin perspectiva, importante.
- Alt + x: para poner el objeto a crear en modo de transparencia.


Modelado poligonal:

Tecnica de modelado que emplea el uso de poligonos. Cada parte se conoce como subobjetos.

- Vertices: punto de unión entre 2 o mas lados.
- Segmento (edges): linea que une 2 vertices.
- Poligono: Cualquier extension de superficie que tenga lados y vertices.

Para entrar en modo de modelado poligonal, aplicar modificador Edit Poly, ó abrir menu modeling y marcar casilla de apply edit poly.


Hay 5 niveles de subobjetos:

![alt text](Semana3/image.png)

- Primer icono: vertices (presionar 1)
- Segundo icono: segmentos (presionar 2)
- Tercer icono: borde (presionar 3)
- Cuarto icono: poligono (presionar 4)
- Quinto icono: elemento (presionar 5)

Para salir al modo objeto, click en el icono del modificador Edit Poly o click en el subnivel aplicado.


Metodos de selección:
- Grow
- Shrink
- Loop: (en un segmento de linea, doble click)
- Ring: (en un segmento de linea, Ctrl + doble click)


Se pueden aplicar modificadores a solo una parte de una seleción poligonal. Se pueden aplicar varios edit poly para mayor control y quitar el color rojo de los segmentos.

subdivisión de geometría:

crear más divisiones a partir de geometria existente.

- Swift loop: para crear un nuevo segmento a partir de un segmento existente. Para usarlo, click en el segmento deseado, y luego mover el mouse para elegir la posición del nuevo segmento.
- Cut
- P connect


Extensión de geometría:
- Shift + click (en segmento): crea un poligono a partir de un segmento. Deben ser parte de un borde. Se llama smart extrude.
- Shift + click (en poligono): para extruir un poligono. Se llama smart extrude.
- Extrude: para crear nueva geometría a partir de una selección poligonal. Para usarlo, seleccionar un poligono, click en extrude, y luego mover el mouse para elegir la altura de la extrusión.


Nivel de selección de borde: selecciona los segmentos exteriores de un objeto.


# Semana 4


Los poligonos solo existen en un lado.
- Normal: dirección a la cual el poligono está viendo directamente. Para ver las normales, en el panel de comandos, ir a display -> normals.


Extrusión:
- Para hacer extrusiones mas exactas, se puede dar click en el icono del dropdown del extrude. En este menu flotante, se pueden ingresar valores numéricos para la altura de la extrusión, así como también elegir el tipo de extrusión.

- Extrusiones por normal agrupada
- Extrusiones por normal local
- Extrusiones por polygon

La primera extrusión se hizo con normal local (la extrusión se hace en base a la normal). La segunda extrusión se hizo con polygon (la extrusión se hace respetando la dirección del poligono).

![alt text](semana4/image.png)


- Extrusión de vertices: también se puede extruir un vértice. Se puede usar para extruir los puntos donde corvengen varios segmentos.
- Extrusión de edges: también se puede extruir un segmento.


Chanfer:

Herramienta para redondear los bordes de un objeto.

- Recomendación es usar profundidad de 0.5 o -0.5.
- Se puede usar para esquinas en vertices y en segmentos.


Bevel:

Similar a una extrusión, pero con la capacidad de escalar el nuevo poligono creado. 

También funciona con:

- Bevel por normal agrupada
- Bevel por normal local
- Bevel por polygon


Inset:

Herramienta para crear un nuevo poligono dentro de un poligono existente.

Attach:

Para meter varias mallas en un solo objeto. Esto hará que se puedan seleccionar por separado a nivel de elemento.


Bridge:

Para crear un "puente" entre dos o mas elementos seleccionados.

Se pueden crear puentes entre:
- Poligonos, segmentos y bordes.

Cap poly:

Para cerrar un agujero en la malla. Se puede usar para cerrar agujeros creados por extrusiones, o para cerrar agujeros creados por eliminar poligonos.
Importante: crea un solo poligono.


Connect:

Para hacer una subdivisión de un poligono, creando un nuevo segmento que conecta dos vertices. Lo hace perpendicular al segmento seleccionado.

Funciona por inclusion y no por rango


Target:

Es como weld (soldadura) pero con la capacidad de elegir un vértice específico al cual hacer el weld. Para usarlo, seleccionar un vértice, click en target, y luego click en el vértice al cual se desea hacer el weld.



Weld:

Dos o más vertices se fusionan en un centro en común. Utiliza un parámetro de tolerancia para determinar qué vértices se fusionan. Empieza a contar desde el centro de la selección. El before y el after muestrán la cantidad de vertices antes y después de la operación de weld.

Geopoly:

Para convertir un objeto paramétrico en un objeto poligonal. Solo funciona en poligonos individuales. Esto es importante para poder modificar la geometría a nivel de subobjetos. Para usarlo, seleccionar el objeto, click derecho, y luego click en convert to -> convert to editable poly.

Para hacerlo en una caja: hacer un inset de varios poligonos -> eliminar los poligonos internos -> seleccionar usando bordes -> cap poly para cerrar el agujero -> seleccionar el poligono creado -> click en geopoly.

