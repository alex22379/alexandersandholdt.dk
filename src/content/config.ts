import { z, reference, defineCollection } from 'astro:content';

// Profile
const educationSection = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number().int().positive(),
    timeIndication: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string(),
  }),
});

// Bio
const bio = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      lastUpdate: z.string().datetime({ offset: true }),
    }),
});

// Portfolio
const portfolioCase = defineCollection({
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
  portfolioCase: portfolioCase,
  educationSection: educationSection,
  bio: bio,
};
