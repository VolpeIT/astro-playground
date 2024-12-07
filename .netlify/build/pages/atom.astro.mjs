/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CI0KheRh.mjs';
import { g as getCollection } from '../chunks/_astro_content_QQhirNMN.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Atom = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Atom;
  const people = await getCollection("people");
  const peopleData = people.map((person) => person.data);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AtomInput", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/fede/dev/volpe/astro-playground/src/components/index.astro", "client:component-export": "AtomInput" })} ${renderComponent($$result2, "AtomDisplay", null, { "client:only": "react", "personas": peopleData, "client:component-hydration": "only", "client:component-path": "/home/fede/dev/volpe/astro-playground/src/components/index.astro", "client:component-export": "AtomDisplay" })} ` })}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/atom.astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/atom.astro";
const $$url = "/atom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Atom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
