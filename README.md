# dataveris.com

Dataveris is a U.S.-based software development and compliance consulting firm specializing in delivering secure, scalable, and regulation-ready digital solutions. We combine deep technical expertise with a rigorous understanding of global security standards—so your product not only performs, it passes audits.

Site: https://dataveris.com

## Requirements

- Node.js 16+ and pnpm

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy to GitHub pages

Build + static export + gh-pages publish are all wired up in one command:

```bash
pnpm run deploy
```

### What it does

* `predeploy` runs automatically → builds Next.js into /dist
* `deploy` publishes the dist/ folder to the gh-pages branch using gh-pages package.
