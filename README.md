# Next.js Multi-tenant Dashboard

A minimalistic multi-tenant Next.js dashboard with minimal setup and a modular
design. Bring your own backend and database.

[Demo](https://stack-template.vercel.app/)

## Landing Page

<div align="center">
<img src="./assets/landing-page.png" alt="Teams" width="600"/>
</div>

## Dashboard

<div align="center">
<img src="./assets/dashboard-overview.png" alt="Teams" width="600"/>
</div>

## Multi-tenancy (Teams)

<div align="center">
<img src="./assets/team-switcher.png" alt="Teams" width="400"/>
</div>

## Account Settings

<div align="center">
<img src="./assets/account-settings.png" alt="Teams" width="500"/>
</div>

## Getting Started

1. Clone the repository

   ```bash
   git clone {REPO_URL}
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Register an account on [Stack Auth](https://stack-auth.com), copy the keys
   from the dashboard, and paste them into the `.env.local` file. Then, enable
   "client team creation" on the team settings tab.

   If you want to learn more about Stack Auth or self-host it, check out the
   [Docs](https://docs.stack-auth.com) and
   [GitHub](https://github.com/stack-auth/stack).

4. Start the development server and go to
   [http://localhost:3000](http://localhost:3000)

   ```bash
   npm run dev
   ```

## Deploying Dashboard

1. Build the application

   ```bash
   npm run build
   ```

2. Start the production server

   ```bash
   npm run start
   ```

## Features & Tech Stack

- Next.js 15 app router
- TypeScript
- Tailwind 4 & Shadcn UI
- Stack Auth
- Multi-tenancy (teams/orgs)
- Dark/Light mode

## Inspired by

- [Shadcn UI](https://github.com/shadcn-ui/ui)
- [Shadcn Taxonomy](https://github.com/shadcn-ui/taxonomy)
