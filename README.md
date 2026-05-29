# @arc234/create-react

Interactive CLI to scaffold a new React project with TypeScript, Vite, Tailwind CSS, Redux Toolkit, and React Router.

## Quick start

Requires **Node.js ≥ 22**.

```bash
npm create @arc234/react@latest
```

Or with your preferred package manager:

```bash
pnpm create @arc234/react
yarn create @arc234/react
```

The CLI will ask for:

- **Project name** — folder name and `package.json` name
- **Package manager** — npm, yarn, or pnpm
- **Install dependencies** — run install immediately after scaffolding

Then start developing:

```bash
cd my-app
pnpm dev
```

## What's included

Every scaffolded project ships with:

- **React 19** with the React Compiler
- **TypeScript** (strict) with path aliases
- **Vite 8** for dev and production builds
- **Tailwind CSS 4** with shared typography and design tokens
- **Redux Toolkit + RTK Query** with an Axios base query and a sample API slice
- **React Router 7** with lazy-loaded pages and route guards
- **Zod** for environment validation
- **Biome / Ultracite** for linting and formatting
- **Husky + lint-staged** for pre-commit checks

### Generated project scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview the production build |
| `pnpm check` | Run the linter |
| `pnpm fix` | Auto-fix lint issues |

### Environment

Copy `.env.example` to `.env` in the generated project and set your API base URL:

```bash
VITE_API_BASE_URL=http://localhost:3000
```

## Development

Clone the repo and install dependencies:

```bash
git clone https://github.com/arc-234/create-react.git
cd create-react
pnpm install
```

Run the CLI locally without publishing:

```bash
pnpm start
```

This executes `bin/index.js` and scaffolds a project in your current working directory using the `template/` folder.

## Releasing

This package uses [Changesets](https://github.com/changesets/changesets) for versioning and publishing.

```bash
# 1. Record a change (patch / minor / major + release notes)
pnpm changeset

# 2. Bump version and update CHANGELOG
pnpm version-packages

# 3. Commit, then publish to npm
git add . && git commit -m "chore: release vX.Y.Z"
pnpm release
```

## License

MIT — see [LICENCE](./LICENCE).
