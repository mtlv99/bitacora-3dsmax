---
title: Semana 2 — Objetos paramétricos y transformaciones
description: "Crear y modificar objetos, snaps, agrupación, clonado y modificación específica con FFD."
---

## Crear y modificar

El **icono de más (+)** sirve para crear objetos primitivos:

- **Standard:** Box, Sphere, Cylinder, etc.
- **Extended:** objetos con más parámetros, como torus u oil tank.

:::note[Objetos paramétricos]
Son objetos con parámetros: permiten modificar sus propiedades sin perder la
forma original.
:::

El **segundo icono (Modify)** sirve para modificar los objetos base y crear
topologías más complejas. Hay tres tipos de modificación:

- **Paramétrica:** se modifican los parámetros del objeto sin perder la forma original (tamaño y estructura).
- **Específica:** modificación a partir de herramientas (modificadores).
- **Poligonal.**

El **Modifier list** es el registro de modificadores aplicados.

<details>
<summary>Cortar esferas</summary>

- **Hemisphere:** corta la esfera a la mitad.
- **Slice On** → **Slice from / to:** corta un "gajo" de la esfera.

</details>

## Herramientas de transformación

| Atajo | Herramienta | Nota |
| --- | --- | --- |
| `Q` | Select | Al repetir, cambia el tipo de área seleccionable |
| `W` | Select and move | |
| `E` | Select and rotate | |
| `R` | Select and scale | Al repetir, cambia el tipo de escala (uniforme, no uniforme…) |

:::tip[Escalar un anillo perfecto]
Repetir `R` cambia entre escala uniforme y no uniforme, lo cual es clave para
escalar un anillo de forma perfecta.
:::

### Coordenadas

Configurar unidades en `Customize → Units setup`.

Las **coordenadas universales o absolutas** están abajo en la UI: son las
coordenadas del objeto respecto al origen del mundo.

<details>
<summary>Diálogo de coordenadas de movimiento</summary>

Clic derecho en **Select and move**:

- **Absolute: world** — coordenadas del objeto respecto al origen del mundo.
- **Offset world** — para hacer operaciones matemáticas.

</details>

## Snaps

### Snaps de movimiento (`S`)

Para mover objetos con más precisión. Clic derecho sobre el icono de snap:

- **Pestaña Snaps:** desactivar *grid points*; activar *vertex* y *midpoint*.
- **Pestaña Options:** *enable axis constraints* y *display rubber band* (marcar ambos).

Para mover con snap, se mueve normalmente. Para moverse sobre varios ejes, clic en las direcciones deseadas del gizmo.

### Snaps de rotación (`A`)

Para rotar con incrementos de X grados. Clic derecho en snap → **Options → Angle** para cambiar el incremento.

:::note[Definiciones]
- **Vértice:** punto de unión entre 2 líneas.
- **Rotación:** se mide en grados; 360° es una vuelta completa.
- **Escala:** se mide en porcentaje; 100% es el tamaño original.
:::

:::caution
De momento, **no usar la herramienta de escala**. La escala hace el objeto más
grande pero no modifica sus parámetros de transformación.
:::

## Agrupar objetos

- `Group → Group` para agrupar; `Ungroup` para desagrupar.
- **Attach:** agregar un objeto a un grupo existente.
- **Open:** abrir un grupo y modificarlo sin desagruparlo. El borde rosado indica lo que está dentro.
- **Close:** cerrar el grupo tras modificarlo. El borde rosado desaparece.

## Clonar: Copy vs Reference

| Tipo | Relación con el original |
| --- | --- |
| **Copy** | Copia independiente, sin relación con el original |
| **Reference** | Copia vinculada: al modificar el original, todas las instancias cambian |

:::note
En el **Modifier list**, un elemento en **negrita** significa que es una instancia.
:::

## Modificación específica

Se pueden aplicar múltiples modificadores a un objeto. Al seleccionar un
modificador de la lista, el borde azul del objeto desaparece; para salir de ese
modo, clic de nuevo. Se pueden aplicar varios del mismo tipo o de distintos
tipos. Clic en el **basurero** para eliminar un modificador.

### FFD (Free Form Deformation)

Marca un gizmo adicional de color naranja.

| Variante | Puntos de control |
| --- | --- |
| FFD 2×2×2 | 8 |
| FFD 3×3×3 | 27 |
| FFD 4×4×4 | 64 |
| FFD (box) | Matriz variable (cantidad ajustable) |
| FFD (cyl) | Matriz variable de forma cilíndrica |
