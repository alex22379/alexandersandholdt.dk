import { z, reference, defineCollection } from 'astro:content';

// Profile
const educationSections = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number().int().positive(),
    timeIndication: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
  }),
});

// Portfolio
const portfolioCases = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      coverImg: image(),
      c2a: z.object({
        prompt: z.string(),
        url: z.string().url(),
        faIcon: z.string(),
      }),
      title: z.string(),
      subtitle: z.string(),
    }),
});

export const collections = {
  portfolioCases: portfolioCases,
  educationSections: educationSections,
};
