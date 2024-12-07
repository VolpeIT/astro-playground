import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_CjJ8Vhrn.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/atom.astro.mjs');
const _page1 = () => import('./pages/cache.astro.mjs');
const _page2 = () => import('./pages/grid.astro.mjs');
const _page3 = () => import('./pages/person/_id_.astro.mjs');
const _page4 = () => import('./pages/result.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const _page6 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/atom.astro", _page0],
    ["src/pages/cache.astro", _page1],
    ["src/pages/grid.astro", _page2],
    ["src/pages/person/[id].astro", _page3],
    ["src/pages/result.astro", _page4],
    ["src/pages/index.astro", _page5],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6f4cf2cb-90b8-4139-80fb-73456a6949df"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
