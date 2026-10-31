import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // If running against placeholder Stack Auth credentials, provide a mock project metadata response
  // so auth UI components can render reliably without an external Stack Auth project dependency.
  const isPlaceholder =
    !process.env.NEXT_PUBLIC_STACK_PROJECT_ID ||
    process.env.NEXT_PUBLIC_STACK_PROJECT_ID ===
      '11111111-1111-4111-8111-111111111111';

  if (isPlaceholder) {
    await page.route('**/api/v1/projects/current', async route => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          id: '11111111-1111-4111-8111-111111111111',
          display_name: 'Stack Template',
          config: {
            sign_up_enabled: true,
            credential_enabled: true,
            magic_link_enabled: true,
            passkey_enabled: true,
            client_team_creation_enabled: true,
            client_user_deletion_enabled: true,
            allow_localhost: true,
            allow_user_api_keys: true,
            allow_team_api_keys: true,
            enabled_oauth_providers: [{ id: 'github' }, { id: 'google' }],
            domains: [],
          },
        }),
      });
    });
  }
});

test('should have the correct page title', async ({ page }) => {
  // Navigate to the server
  await page.goto('/');

  // Expect the title to contain the project name
  await expect(page).toHaveTitle(/Stack Template/);
});

test('should navigate to Sign In page', async ({ page }) => {
  // Navigate to the server
  await page.goto('/');

  // Find the 'Sign In' link and click it
  await page.getByRole('link', { name: 'Sign In' }).click();

  // Expect the URL to change to the sign-in page
  await expect(page).toHaveURL(/.*\/sign-in/);

  // Optional: Check for a heading on the sign-in page
  await expect(
    page.getByRole('heading', { name: 'Sign in to your account' }),
  ).toBeVisible();

  // Check for link to Sign up page
  await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();

  // Check for the Sign in with GitHub button
  await expect(
    page.getByRole('button', { name: 'Sign in with GitHub' }),
  ).toBeVisible();

  // Check for the Sign in with Google button
  await expect(
    page.getByRole('button', { name: 'Sign in with Google' }),
  ).toBeVisible();

  // Check for the Sign in with Passkey button
  await expect(
    page.getByRole('button', { name: 'Sign in with Passkey' }),
  ).toBeVisible();

  // Check for the email input field
  await expect(page.locator('input[name="email"]')).toBeVisible();

  // Check for the Send email button
  await expect(page.getByRole('button', { name: 'Send email' })).toBeVisible();
});

test('should navigate to Sign Up page', async ({ page }) => {
  // Navigate to the server
  await page.goto('/');

  // Find the 'Sign Up' link and click it
  await page.getByRole('link', { name: 'Sign Up' }).click();

  // Expect the URL to change to the sign-up page
  await expect(page).toHaveURL(/.*\/sign-up/);

  // Optional: Check for a heading on the sign-up page
  await expect(
    page.getByRole('heading', { name: 'Create a new account' }),
  ).toBeVisible();

  // Check for link to sign in page
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();

  // Check for the Sign up with GitHub button
  await expect(
    page.getByRole('button', { name: 'Sign up with GitHub' }),
  ).toBeVisible();

  // Check for the Sign up with Google button
  await expect(
    page.getByRole('button', { name: 'Sign up with Google' }),
  ).toBeVisible();

  // Check for the email input field
  await expect(page.locator('input[name="email"]')).toBeVisible();

  // Check for the Send email button
  await expect(page.getByRole('button', { name: 'Send email' })).toBeVisible();
});
