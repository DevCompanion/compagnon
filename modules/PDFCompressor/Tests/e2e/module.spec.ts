import { test, expect } from '@playwright/test';

const APP_URL = process.env.APP_URL ?? 'http://127.0.0.1:8000';
test.beforeEach(async ({ page }, testInfo) => {
  await page.goto(APP_URL + '/pdfcompressor');
});

test('I can access to the module page', async ({ page }) => {
    // header title contains PDFCompressor
    await expect(page).toHaveTitle(/PDFCompressor/);

    const text = await page.getByTestId('module').innerText();
    await expect(text).toContain('Hello, you are in the module PDFCompressor');
});
