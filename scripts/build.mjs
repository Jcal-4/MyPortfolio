import * as esbuild from 'esbuild';
import { rimraf } from 'rimraf';
import stylePlugin from 'esbuild-style-plugin';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import { copyFile } from 'fs/promises';

const args = process.argv.slice(2);
const isProd = args[0] === '--production';

await rimraf('dist');

/**
 * @type {esbuild.BuildOptions}
 */
const esbuildOpts = {
  color: true,
  entryPoints: ['src/main.tsx', 'index.html'],
  outdir: 'dist',
  entryNames: '[name]',
  write: true,
  bundle: true,
  format: 'iife',
  sourcemap: isProd ? false : 'linked',
  minify: isProd,
  treeShaking: true,
  jsx: 'automatic',
  loader: {
    '.html': 'copy',
    '.png': 'file',
  },
  plugins: [
    stylePlugin({
      postcss: {
        plugins: [tailwindcss, autoprefixer],
      },
    }),
  ],
};

import { cp } from 'fs/promises';

if (isProd) {
  await esbuild.build(esbuildOpts);
  // Copy index.html to 404.html for GitHub Pages SPA fallback
  await copyFile('dist/index.html', 'dist/404.html');
  // Copy all static assets from public/ to dist/
  await cp('public', 'dist', { recursive: true });
} else {
  const ctx = await esbuild.context(esbuildOpts);
  await ctx.watch();
  // Serve from dist so static files are available at root
  const { hosts, port } = await ctx.serve({ servedir: 'dist' });
  // Copy all static assets from public/ to dist/ in dev mode too
  await cp('public', 'dist', { recursive: true });
  console.log(`Running on:`);
  hosts.forEach((host) => {
    console.log(`http://${host}:${port}`);
  });
}
