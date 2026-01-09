import 'server-only';

import { StackServerApp } from '@stackframe/stack';

const projectId =
  process.env.NEXT_PUBLIC_STACK_PROJECT_ID ?? '11111111-1111-4111-8111-111111111111';
const publishableClientKey =
  process.env.NEXT_PUBLIC_STACK_PUBLISHABLE_CLIENT_KEY ?? 'pk_test_000000000000000000000000';
const secretServerKey =
  process.env.STACK_SECRET_SERVER_KEY ?? 'sk_test_000000000000000000000000';

export const stackServerApp = new StackServerApp({
  tokenStore: 'nextjs-cookie',
  projectId,
  publishableClientKey,
  secretServerKey,
  urls: {
    afterSignIn: '/dashboard',
  },
});
