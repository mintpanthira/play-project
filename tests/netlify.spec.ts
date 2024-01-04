import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://hokkung.netlify.app/');
    await expect(page.getByText('Leo')).toBeVisible();
});

test ('check github link',async ({ page }) => {
    await page.goto('https://hokkung.netlify.app/');
    //await page.getByRole('link', { name: 'GitHub' }).click();
    await page.getByTitle('Blogster on GitHub').click();
    // Wait for popup window
    const newTabPromise = page.waitForEvent('popup');
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL("https://github.com/hokkung");
});

test ('check medium link',async ({ page }) => {
    await page.goto('https://hokkung.netlify.app/');
    //await page.getByRole('link', { name: 'Medium' }).click();
    await page.getByTitle('Medium Link').first().click();
    const pagePromise = page.waitForEvent('popup');
    const newTab = await pagePromise;
    await newTab.waitForLoadState();
    await expect(newTab).toHaveURL("https://medium.com/@hokkung");
});
test ('dark mode and light mode',async ({ page }) => {
    await page.goto('https://hokkung.netlify.app/');
    await page.locator('//*[@id="mode-toggle"]').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'theme-bubblegum astro-KGC3BYEU dark');
    await page.locator('//*[@id="mode-toggle"]').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'theme-bubblegum astro-KGC3BYEU light');
});

test ('dark mode',async ({ page }) => {
    await page.goto('https://hokkung.netlify.app/');
    await page.locator('//*[@id="mode-toggle"]').click();
    await expect(page.locator('html')).toHaveAttribute('class', 'theme-bubblegum astro-KGC3BYEU dark');
});