# AGENTS.md — Admin Template

## Project Overview

admin-template is a React + TypeScript admin app built on Refine with Ant Design. It uses Supabase as the application data layer and Prisma for database modeling/migrations, with Vite as the build toolchain.

## Tech Stack
- **Framework:** React + TypeScript
- **Build toolchain:** Vite + `@vitejs/plugin-react`
- **Admin framework:** `@refinedev/core`, `@refinedev/antd`, `@refinedev/react-router`, `@refinedev/cli`, `@refinedev/kbar`, `@refinedev/devtools`
- **Routing:** `react-router`
- **UI framework:** `antd`, `@ant-design/icons`
- **Styling:** Tailwind CSS via `@tailwindcss/vite`
- **Data + backend:** `@supabase/supabase-js`, `@refinedev/supabase`
- **Database tooling:** Prisma, `@prisma/client`, `zod-prisma-types`, `prisma-case-format`
- **Validation:** `zod`, `antd-zod`
- **Utilities:** `camelcase-keys`, `dayjs`
- **Linting / Formatting:** Biome
- **Code generation:** Plop via `pnpm gene`
- **Package manager:** pnpm (`packageManager: pnpm@10.22.0`)

## Code Style and Structure

- Write clear, readable, production-quality code. Do not leave features partially implemented.
- Use functional React components with hooks.
- Prefer the latest stable React and TypeScript features and idioms.
- Keep components small and focused. Extract reusable logic into local modules or `src/lib/` / `src/utils/` when needed.
- Path aliases use `@/*` (configured in `tsconfig.json` and resolved in `vite.config.ts`).

## Naming Conventions

- **Components:** PascalCase (`MyComponent.tsx`)
- **Variables and functions:** camelCase
- **Files:** match the primary export's name

## UI and Styling

- Use Ant Design components for standard admin UI primitives.
- Use `@ant-design/icons` for iconography; this repo does not use `lucide-react`.
- Use Tailwind CSS utility classes directly where helpful.
- Keep Refine resource/route wiring close to the pages that consume it.

## Data and Schema

- Application data flows through Refine + Supabase: see `src/lib/supabase/dataProvider` and `src/utils/supabaseClient.ts`.
- Database models live in Prisma schema files under `prisma/schema/`. Use the repo’s Prisma migration and generation workflow before adding forms or queries around a new model.
- Prisma schema defines both a `prisma-client-js` generator (output in `src/shared/@generated/prisma/client`) and a `zod-prisma-types` generator (output in `src/shared/@generated/zod`).
- Runtime form/UI schemas in `src/shared/zod/` usually import the generated model schema and then derive create/edit variants by omitting server-managed fields.

## Local Data Workflow

Prerequisites for the current workflow:
- `pnpm i -g cross-env` (required by `pnpm gene` / TS Plop setup)
- `pnpm i -g dotenv` (required by the local-only migration commands)

The standard flow for adding or changing a model is:

1. Define or update the model in `prisma/schema/`.
2. Run `pnpm format-prisma` to normalize the Prisma schema files.
3. Create the migration:
   - normal flow: `npx prisma migrate dev --name {name}`
   - local-only flow: `dotenv -e .env -- npx prisma migrate dev --create-only`, then `dotenv -e .env -- npx prisma migrate dev`
4. Regenerate types/schemas: `pnpm prisma generate`.
5. Add or update the form/runtime schema in `src/shared/zod/`.
6. If using the local-only flow, run the contents of `prisma/grant.sql` and `prisma/trigger.sql` in Supabase Studio SQL editor, and enable the `moddatetime` extension manually in Studio.

Troubleshooting shortcuts from the repo docs:
- `42501` / permission denied on public schema: re-run `prisma/grant.sql` in the Studio SQL editor.
- `updated_at` not updating: run the `create trigger handle_updated_at` statement from `prisma/trigger.sql` in the Studio SQL editor.

Key local references:
- App API: `http://127.0.0.1:54321`
- DB port: `54322`
- Supabase Studio: `http://127.0.0.1:54323`
- SQL editor: `http://127.0.0.1:54323/project/default/sql/1`
- Extensions page: `http://127.0.0.1:54323/project/default/database/extensions`

## Code Generation

- `pnpm gene` uses Plop to scaffold page boilerplate from `plop-templates/`.
- The main generator creates list/edit/index page files under `src/pages/`.
- It expects the related model/schema plumbing to already exist; generate the Prisma + Zod artifacts first, then scaffold the page layer.

## Performance

- Memoize expensive computations and callbacks (`React.memo`).
- Lazy-load routes and heavy components with `React.lazy` + `Suspense` where appropriate.
- Avoid unnecessary re-renders; keep props stable or memoized.

## Linting and Formatting (Biome)

Formatting and linting are enforced by Biome (`biome.json` at the project root). Key settings:

- **Formatter:** 2-space indent, 100-char line width, single quotes, semicolons as-needed.
- **Tailwind class sorting:** enforced via `useSortedClasses` rule on `className`, `classList`, and configured functions such as `clsx`, `cva`, `tw`, `cn`.
- **Linting highlights:**
  - `noUnusedVariables`: warn
  - `useExhaustiveDependencies`: off
  - `noExplicitAny`: off
  - `noConsole`: off (`console.log` allowed)
  - `noNonNullAssertion`: off
  - `noArrayIndexKey`: warn
  - UI component folders are excluded from Biome linting via `biome.json`.


## Common Pitfalls

- **UTF-8 BOM:** PowerShell `Set-Content -Encoding UTF8` silently writes a BOM (`U+FEFF`). Prisma, YAML, and many parsers reject BOM. Use Python `pathlib.write_text(encoding="utf-8")` or `Out-File -Encoding utf8NoBOM` (PS 7+) when writing non-ASCII config files from scripts.

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start the Refine dev workflow |
| `pnpm build` | Type-check (`tsc`) + Refine production build |
| `pnpm start` | Start the Refine start workflow |
| `pnpm gene` | Generate boilerplate from plop templates |
| `pnpm format-prisma` | Normalize Prisma schema files via `format-prisma.js` |