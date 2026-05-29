# @arc234/react-starter

A React starter template with TypeScript, Vite, Tailwind CSS, Redux Toolkit, and React Router — ready to clone and build on.

## Create a project

```bash
cd my-app
pnpm install
pnpm dev
```

## What's included

- **React 19** with the React Compiler
- **TypeScript** (strict) with path aliases
- **Vite 8** for dev and production builds
- **Tailwind CSS 4** with shared typography and design tokens
- **Redux Toolkit + RTK Query** with Axios base query and a sample API slice
- **React Router 7** with lazy-loaded pages and route guards
- **Zod** for environment validation
- **Biome / Ultracite** for linting and formatting
- **Husky + lint-staged** for pre-commit checks

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Run the linter |
| `pnpm fix` | Auto-fix lint issues |

## Environment

Copy `.env.example` to `.env` and set your API base URL:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

## Requirements

Node.js **≥ 22**
