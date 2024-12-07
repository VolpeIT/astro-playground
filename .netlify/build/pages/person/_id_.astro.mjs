/* empty css                                   */
import { c as createComponent, r as renderTemplate, a as renderComponent, d as renderScript, b as createAstro, m as maybeRenderHead, e as addAttribute } from '../../chunks/astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_QQhirNMN.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CI0KheRh.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const people = await getCollection("people");
  return people.map((person) => ({
    params: { id: person.slug },
    props: { person }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { person } = Astro2.props;
  const { data } = person;
  const { name } = data;
  const { Content } = await renderEntry(person);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`/atom`, "href")} id="backButton">Back</a> <h1>${name}</h1> ${renderComponent($$result2, "Content", Content, {})} ` })} ${renderScript($$result, "/home/fede/dev/volpe/astro-playground/src/pages/person/[id].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/fede/dev/volpe/astro-playground/src/pages/person/[id].astro", void 0);

const $$file = "/home/fede/dev/volpe/astro-playground/src/pages/person/[id].astro";
const $$url = "/person/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
