import { test, expect } from '@playwright/test';

const APP_URL = process.env.APP_URL || 'http://127.0.0.1:8000';
test.beforeEach(async ({ page }, testInfo) => {
  await page.goto(APP_URL + '/uuid-generator');
});

test('Has valid uuid', async ({ page }) => {
  const uuidElement = await page.innerHTML('div.text-lg.font-semibold.text-gray-900');
  const uuid = uuidElement.split('<')[0];
  await page.getByPlaceholder('Uuid v4').fill(uuid);

  expect(await page.getByText('Valid UUID v4').innerText()).toBe('Valid UUID v4');
});


test('Has invalid uuid', async ({ page }) => {
  await page.getByPlaceholder('Uuid v4').fill('random string');

  expect(await page.getByText('Invalid UUID v4').innerText()).toBe('Invalid UUID v4');
});
