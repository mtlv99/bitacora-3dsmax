// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const GITHUB_USER = 'mtlv99';
const REPO_NAME = 'bitacora-3dsmax';

// https://astro.build/config
export default defineConfig({
	site: `https://${GITHUB_USER}.github.io`,
	base: `/${REPO_NAME}/`,
	integrations: [
		starlight({
			title: 'Bitácora - Modelado 3D I',
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
					items: [{ autogenerate: { directory: 'clases' } }],
				},
			],
		}),
	],
});