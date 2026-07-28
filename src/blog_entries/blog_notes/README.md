# Instructions for Creating a New Blog Post

1. Copy blogTemplate.tsx to either `stories/` or `thoughts/` and make corresponding name changes
2. Add a new entry in `data/blog_data.ts` for the cover title
3. Keep the cover separate from a flat folder of inline images, then run
   `npm run media:blog` with `--cover`, `--images`, and `--r2-path`
4. Copy the returned R2 URLs into the blog entry and `data/blog_data.ts`
