import { test, expect } from '@playwright/test';

test('should have the correct page title', async ({ page }) => {
  // Navigate to the development server
  await page.goto('http://localhost:3000/');

  // Expect the title to contain the project name
  await expect(page).toHaveTitle(/Stack Template/);
});

test('should navigate to Sign In page', async ({ page }) => {
  // Navigate to the development server
  await page.goto('http://localhost:3000/');

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
  // Navigate to the development server
  await page.goto('http://localhost:3000/');

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
