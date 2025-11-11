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
   pnpm install
   ```

3. **Set up Stack Auth:**

   a. Register an account on [Stack Auth](https://stack-auth.com)

   b. Create a new project in the Stack Auth dashboard

   c. Copy the following keys from your project dashboard:
   - Project ID
   - Publishable Client Key
   - Secret Server Key

   d. Update the `.env.local` file with your actual credentials:

   ```bash
   NEXT_PUBLIC_STACK_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY=your-actual-publishable-key
   STACK_SECRET_SERVER_KEY=your-actual-secret-key
   ```

   e. In the Stack Auth dashboard, go to Team Settings and enable "client team
   creation"

   **Important:** The placeholder values in `.env.local` will cause a "project
   not found" error. You must replace them with your actual Stack Auth
   credentials.

   If you want to learn more about Stack Auth or self-host it, check out the
   [Docs](https://docs.stack-auth.com) and
   [GitHub](https://github.com/stack-auth/stack).

4. Start the development server and go to
   [http://localhost:3000](http://localhost:3000)

   ```bash
   pnpm run dev
   ```

## Deploying Dashboard

1. Build the application

   ```bash
   pnpm run build
   ```

2. Start the production server

   ```bash
   pnpm run start
   ```

## Troubleshooting

### "KnownError<CURRENT_PROJECT_NOT_FOUND>: The current project with ID your-project-id-here was not found"

This error occurs when Stack Auth environment variables are not properly
configured:

1. **Check your `.env.local` file** - Make sure it exists and contains your
   actual Stack Auth credentials
2. **Verify credentials** - Ensure you've replaced the placeholder values with
   real values from your Stack Auth dashboard
3. **Restart the development server** - Run `npm run dev` again after updating
   environment variables
4. **Check Stack Auth dashboard** - Verify your project is active and the
   credentials are correct

The error specifically mentions "your-project-id-here" which indicates
placeholder values are still being used.

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
