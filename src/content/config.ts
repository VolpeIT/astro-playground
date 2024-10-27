import { defineCollection } from "astro:content";
import { personSchema } from "../types/Person";

const people = defineCollection({
  schema: personSchema,
});

export const collections = { people };
