import { c as createComponent, r as renderTemplate, e as addAttribute, b as createAstro, d as renderScript, a as renderComponent, i as renderHead, j as renderSlot } from './astro/server_D5P5sAKc.mjs';
import 'kleur/colors';
import 'clsx';
import * as z from 'zod';
/* empty css                        */

const result = Symbol("?");
const aResult = Symbol("!");
Function.prototype[result] = function(...args) {
  try {
    const result2 = this.apply(this, args);
    return [null, result2];
  } catch (error) {
    return [error, null];
  }
};
Function.prototype[aResult] = async function(...args) {
  try {
    const result2 = await this.apply(this, args);
    return [null, result2];
  } catch (error) {
    return [error, null];
  }
};

const $$Astro$2 = createAstro();
const $$Meta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Meta;
  const customErrorMap = (_, ctx) => {
    return { message: `${JSON.stringify(_.path)} ${JSON.stringify(ctx)} at Meta component"` };
  };
  z.setErrorMap(customErrorMap);
  const imageExtensions = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i;
  const faviconExtensions = /\.(ico|png|jpg|jpeg|svg)$/i;
  const propsSchema = z.strictObject({
    title: z.string(),
    description: z.string(),
    image: z.string().regex(imageExtensions, {
      message: "Invalid image field. Image must end with .jpg, .jpeg, .png, .gif, .bmp, .svg, or .webp."
    }),
    favicon: z.string().regex(faviconExtensions, {
      message: "Invalid favicon field. Favicon must end with .ico, .png, .jpg, or .jpeg."
    }),
    url: z.string().url()
  });
  const props = {
    title: Astro2.props.title,
    description: Astro2.props.description,
    image: Astro2.props.image,
    favicon: Astro2.props.favicon,
    url: Astro2.props.url
  };
  const [err, validatedProps] = propsSchema.parse[result](props);
  if (err) throw err;
  if (!validatedProps) throw new Error(`props cant be null`);
  return renderTemplate`<meta charset="UTF-8"><link id="favicon" rel="icon" type="image/svg+xml"${addAttribute(validatedProps.favicon, "href")}><meta name="color-scheme" content="light dark"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Global --><title>${validatedProps.title}</title><meta name="description"${addAttribute(validatedProps.description, "content")}><!-- Facebook Meta Tags --><meta property="og:url"${addAttribute(validatedProps.url, "content")}><meta property="og:type" content="website"><meta property="og:title"${addAttribute(validatedProps.title, "content")}><meta property="og:description"${addAttribute(validatedProps.description, "content")}><meta property="og:image"${addAttribute(validatedProps.image, "content")}><!-- Twitter Meta Tags --><meta name="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(validatedProps.url, "content")}><meta name="twitter:title"${addAttribute(validatedProps.title, "content")}><meta name="twitter:description"${addAttribute(validatedProps.description, "content")}><meta name="twitter:image"${addAttribute(validatedProps.image, "content")}>`;
}, "/home/fede/dev/volpe/astro-playground/node_modules/@volpe/astro-utils/lib/components/Meta.astro", void 0);

createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/home/fede/dev/volpe/astro-playground/node_modules/@volpe/astro-utils/lib/components/index.astro", void 0);

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/fede/dev/volpe/astro-playground/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/fede/dev/volpe/astro-playground/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "Meta", $$Meta, { "title": title, "description": "tal", "image": "favicon.svg", "favicon": "favicon.svg", "url": "https://google.com" })}${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body class="overflow-x-hidden"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/fede/dev/volpe/astro-playground/src/layouts/Layout.astro", void 0);

export { $$Layout as $, aResult as a };
