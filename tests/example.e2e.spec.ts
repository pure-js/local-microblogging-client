import { test, expect } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('http://localhost:4173/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Local microblogging client/);

  // create a locator
  const newPost = page.getByText('New Post');

  // Expect an attribute "to be strictly equal" to the value.
  await expect(newPost).toHaveAttribute('href', '/posts/new');

  // Click the get started link.
  await newPost.click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*new/);
});
