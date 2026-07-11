---
title: Semana 3 — Modelado poligonal
description: "Introducción al modelado poligonal: subobjetos, selección y subdivisión de geometría."
---

## Orientación y referencias

:::tip
Para controlar la orientación de los objetos al crearlos, crearlos desde la
perspectiva **Front**.
:::

- **Tecla `1`:** activa el modificador.

<details>
<summary>Usar referencias (sistema de calcado, tipo Blender)</summary>

Crear un plano y, desde el explorador de Windows, arrastrar la imagen y soltarla
sobre el plano. Cuidado con las proporciones del plano.

- Usar visores **sin perspectiva** (importante).
- `Alt + X`: pone el objeto en modo de transparencia.

</details>

## ¿Qué es el modelado poligonal?

Técnica que emplea polígonos. Cada parte se conoce como **subobjeto**:

- **Vértices:** punto de unión entre 2 o más lados.
- **Segmentos (edges):** línea que une 2 vértices.
- **Polígono:** cualquier extensión de superficie con lados y vértices.

Para entrar al modo poligonal: aplicar el modificador **Edit Poly**, o abrir el
menú *Modeling* y marcar *Apply Edit Poly*.

## Los 5 niveles de subobjetos

![Los cinco niveles de subobjetos en el panel de Edit Poly](../../../assets/semana3.png)

| Tecla | Nivel |
| --- | --- |
| `1` | Vértices |
| `2` | Segmentos |
| `3` | Borde |
| `4` | Polígono |
| `5` | Elemento |

:::note
Para salir al modo objeto, clic en el icono del modificador **Edit Poly** o en el
subnivel aplicado.
:::

## Métodos de selección

| Método | Cómo |
| --- | --- |
| Grow | Expande la selección |
| Shrink | Contrae la selección |
| Loop | Doble clic en un segmento |
| Ring | `Ctrl` + doble clic en un segmento |

:::tip
Se pueden aplicar modificadores a solo una parte de una selección poligonal.
Aplicar varios **Edit Poly** da mayor control y ayuda a quitar el color rojo de
los segmentos.
:::

## Subdivisión de geometría

Crear más divisiones a partir de geometría existente:

- **Swift loop:** crea un segmento nuevo a partir de uno existente. Clic en el segmento y mover el mouse para elegir la posición.
- **Cut**
- **P connect**

### Extensión de geometría

| Acción | Resultado |
| --- | --- |
| `Shift + clic` en segmento | Crea un polígono a partir del segmento (smart extrude). Debe ser parte de un borde |
| `Shift + clic` en polígono | Extruye el polígono (smart extrude) |
| Extrude | Crea geometría nueva desde una selección poligonal: seleccionar, clic en extrude y mover el mouse para la altura |

:::note
El **nivel de selección de borde** selecciona los segmentos exteriores de un objeto.
:::
