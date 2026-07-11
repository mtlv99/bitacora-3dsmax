# Bitácora - Modelado 3D I

Bitácora de clase para el curso de **Modelado 3D I**, usando el software **3ds Max**.

El sitio se publica como una página con [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) y se despliega automáticamente en GitHub Pages.

## Estructura del proyecto

```
.
├── Bitacora.md       # Apuntes de clase rápidos y desorganizados, organizados por semana.
└── astro/             # Sitio Astro + Starlight generado a partir de la bitácora
```

## Desarrollo local del sitio

El sitio vive en la carpeta [astro/](astro/). Para levantarlo localmente:

```bash
cd astro
yarn install
yarn dev
```

Esto inicia un servidor local en `http://localhost:4321`.

Otros comandos disponibles (ejecutados desde `astro/`):

| Comando         | Acción                                        |
| --------------- | ---------------------------------------------- |
| `yarn build`    | Genera el sitio de producción en `./dist/`     |
| `yarn preview`  | Previsualiza el build de producción localmente |

## Despliegue

El sitio se despliega automáticamente a GitHub Pages mediante el workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) en cada push a `main`.
