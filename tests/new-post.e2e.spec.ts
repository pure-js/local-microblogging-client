import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/posts/new');
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Test Heading');
  await page.getByPlaceholder('Title').press('Tab');
  await page.getByPlaceholder('Write your text...').fill('Test body');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page).toHaveURL('/');
});
