import 'server-only';

import { StackServerApp } from '@stackframe/stack';

const projectId =
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID ?? 'your-project-id-here';
const publishableClientKey =
  process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY ??
  'your-publishable-key-here';
const secretServerKey =
  process.env.STACK_SECRET_SERVER_KEY ?? 'your-secret-key-here';

export const stackServerApp = new StackServerApp({
  tokenStore: 'nextjs-cookie',
  projectId,
  publishableClientKey,
  secretServerKey,
  urls: {
    afterSignIn: '/dashboard',
  },
});
