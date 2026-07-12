---
title: Semana 6 - Pivotes, splines avanzados y modificadores
description: "Puntos de pivote, alineación, symmetry, herramientas de spline, boolean, sweep, chamfer y taper."
---

:::tip{icon="pencil"}
`Shift + Ctrl + eje del gizmo`: hace una copia de algunos polígonos.
:::

## Puntos de pivote

El punto de referencia que se utiliza para aplicar transformaciones, rotaciones y escalaciones.

<details>
<summary>Alinear objetos en un eje</summary>

`Hierarchy → Adjust pivot → Move / Rotate / Scale`

- **Affect pivot only:** mueve el punto de pivote sin mover el objeto. Atajo: `Insert`.
- **Reset pivot:** devuelve el pivote al punto donde estaba al crear el objeto.

</details>

<details>
<summary>Alinear vértices en un eje</summary>

`Edit Poly → seleccionar vértices → Align → X / Y / Z`

</details>

## Symmetry modifier

Hace la simetría de un objeto en cualquier eje. Sirve para modelar solo la mitad
y que el otro lado se genere automáticamente.

## Herramientas de spline

### Sobre vértices

| Herramienta | Para qué |
| --- | --- |
| End point auto-welding | Equivalente a un target; solo funciona en vértices sin cerrarse. Activar *automatic welding* |
| Weld | Solda vértices. Ajustar el radio de tolerancia y tener 2+ vértices seleccionados |
| Connect | Equivalente a un bridge; conecta varios vértices |
| Fillet | Redondea esquinas (similar al redondeo en CSS) |
| Chamfer | Genera un bisel en las esquinas |

:::caution
Un vértice de un spline **no puede soportar más de 2 segmentos**.
:::

### Sobre el spline completo

**Outline:** genera un borde/outline sobre el spline. El check de *Center* usa el
borde como referencia para generar el outline en base a eso.

<details>
<summary>Boolean de splines (requiere 2 sub-splines)</summary>

- **Union:** une 2 contornos.
- **Sustracción:** quita 2 contornos.
- **Intersección:** deja solo la intersección de 2 formas.

</details>

:::note[Splines desde Illustrator]
Guardar en **versión 8** y pasar el texto a curvas.
:::

## Sweep modifier

Barre una sección siguiendo la trayectoria de un spline, creando un volumen.

| Tipo de sección | Descripción |
| --- | --- |
| Use built-in section | Formas predefinidas con parámetros de modificación |
| Use custom section | `Section → Pick` (clic sobre la forma). Se toma como instancia: si se modifica la forma custom, afecta al sweep |

:::caution[Cambio destructivo]
Cambio o modificación **destructiva**: cambios que no tienen forma de revertirse.
:::

## Chamfer modifier

Funciona como un chamfer normal, pero **no** es un cambio destructivo. Se puede
aplicar a edges y polígonos específicos.

:::note
**Convert to poly:** similar a Blender, aplica todos los modificadores. Es un
cambio destructivo.
:::

## Taper modifier

Genera un estrechamiento en alguno de los extremos. Se aplica en el punto de
pivote. Para más precisión, clic sobre el taper modifier.
