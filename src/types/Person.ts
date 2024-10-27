import { z } from "astro:content";

export const personSchema = z.object({
  name: z.string(),
  age: z.number().int().positive(),
  isEmployed: z.boolean(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  hobbies: z.array(z.string()),
  socialMedia: z.array(
    z.object({
      platform: z.string(),
      username: z.string(),
    })
  ),
  favorites: z.object({
    food: z.string(),
    color: z.string(),
    numbers: z.array(z.number().int()),
  }),
});

export type IPerson = z.infer<typeof personSchema>;
