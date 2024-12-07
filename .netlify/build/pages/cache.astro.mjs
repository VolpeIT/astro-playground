/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CI0KheRh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Cache = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cache;
  const currentTime = (/* @__PURE__ */ new Date()).toLocaleTimeString();
  Astro2.response.headers.set("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=600");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "tal" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>The current time is: ${currentTime}</h1> ` })}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/cache.astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/cache.astro";
const $$url = "/cache";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Cache,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
