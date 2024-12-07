/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CI0KheRh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<nav class="bg-red-500 px-24"> <div class="flex justify-center relative max-w-screen-xl m-auto"> <a href="tal" class="absolute left-0">tremendo</a> <a href="tal">Hola</a> <a href="tal">Hola</a> <a href="tal">Hola</a> <a href="tal" class="absolute right-0">Hola</a> </div> </nav> <main class="text-black px-24"> <div class="flex justify-between max-w-screen-xl m-auto"> <div class="flex-1 max-w-[770px]"> <h1 class="text-white">Tal</h1> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500 py-4 
          relative z-10 before-full before:bg-white
          ">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> <p class="bg-red-500">hola</p> </div> <div class="min-w-[100px]"></div> <form class="text-white h-min sticky top-[40px] z-20 min-w-[350px]">
tal
<input type="text" class="w-full"> </form> </div> </main> <footer class="bg-red-500 full-width layout"> <div class=""> <a href="/grid" class="">Grid</a> <a href="/layout" class="">Layout</a> <a href="/atom" class="">atom</a> <a href="/result" class="">result</a> </div> </footer> ` })}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/index.astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
