// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// 👇 Cambia estos dos valores y todo lo demás se actualiza solo
const GITHUB_USER = 'TU-USUARIO';
const REPO_NAME = 'bitacora-3dsmax';

// https://astro.build/config
export default defineConfig({
	site: `https://${GITHUB_USER}.github.io`,
	base: `/${REPO_NAME}/`,
	integrations: [
		starlight({
			title: 'Bitácora - Modelado 3D I',
			description: 'Bitácora del curso de Modelado 3D I con 3ds Max.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: `https://github.com/${GITHUB_USER}/${REPO_NAME}`,
				},
			],
			sidebar: [
				{
					label: 'Clases',
					items: [
						{ label: 'Semana 1 — Interfaz y navegación', slug: 'clases/semana-01' },
						{ label: 'Semana 2 — Objetos y transformaciones', slug: 'clases/semana-02' },
						{ label: 'Semana 3 — Modelado poligonal', slug: 'clases/semana-03' },
						{ label: 'Semana 4 — Edición de malla', slug: 'clases/semana-04' },
						{ label: 'Semana 5 — Shapes y splines', slug: 'clases/semana-05' },
						{ label: 'Semana 6 — Pivotes y modificadores', slug: 'clases/semana-06' },
						{ label: 'Semana 7 — No destructivos y retopología', slug: 'clases/semana-07' },
					],
				},
			],
		}),
	],
});
