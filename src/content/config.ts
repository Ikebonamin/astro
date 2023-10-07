// 0. criar config.ts
// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
import { format } from 'date-fns'; //biblioteca para datas!!!;
// 2. Define your collection(s)

const postCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform((str) => format(new Date(str), 'd MMMM, yyy')),
    featured: z.boolean().default(false),
    image: z.string(),
    title: z.string(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  posts: postCollection,
};

//  schema: z.object({}), é o objeto base do ZOD

// configurou tudo? Agora tem que criar a home do blog para preparar as queries//
