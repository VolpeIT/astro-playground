/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro } from '../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { a as aResult, $ as $$Layout } from '../chunks/Layout_CI0KheRh.mjs';
import axios from 'axios';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Result = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Result;
  const [err, res] = await axios.get[aResult]("https://randomuser.me/api/");
  if (err) throw new Error("tal");
  if (!res) throw new Error("tal");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate`${res.data.results.at(0)?.name.first}` })}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/result.astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/result.astro";
const $$url = "/result";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Result,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
