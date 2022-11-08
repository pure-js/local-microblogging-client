import { test, expect } from '@playwright/test';
// import { test, expect, Page } from '@playwright/test';

// async function checkTodosInLocalStorage(page: Page, title: string) {
//   return page.waitForFunction((t) => JSON.parse(indexedDB['Platform']).map((todo: any) => todo.title).includes(t), title);
// }

test('test', async ({ page }) => {
  await page.goto('/posts/new');
  await page.getByPlaceholder('Title').click();
  await page.getByPlaceholder('Title').fill('Test Heading');
  await page.getByPlaceholder('Title').press('Tab');
  await page.getByPlaceholder('Write your text...').fill('Test body');
  await page.getByRole('button', { name: 'Post it' }).click();
  await expect(page).toHaveURL('/');
  // await checkTodosInLocalStorage(page, 'buy some sausages');
  // await page.getByRole('heading').click();
  // await expect(page).toHaveURL('http://localhost:5173/');
});
