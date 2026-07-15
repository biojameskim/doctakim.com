# Archive

Historical data kept for reference but not wired into the site. Nothing imports
these files — they're still type-checked (`tsconfig.json` includes all of `src`)
but excluded from the production bundle.

- `employment_data.ts` / `ExperienceTypes.ts` — work history, previously rendered
  on an "Experience" section of `Home.tsx` that no longer exists.
- `coursework.ts` — coursework list, same story.
