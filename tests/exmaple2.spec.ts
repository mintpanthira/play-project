import {test, expect} from '@playwright/test';

test('go to writing test section', async ({page}) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('link', { name: 'Docs' }).click();
    //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await page.getByRole('link',{ name: 'Writing tests', exact:true}).click();
    await expect(page.getByRole('heading',{ name: 'Writing tests'})).toBeVisible();
})

test('search',async ({page}) => {
    await page.goto('https://playwright.dev/');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByPlaceholder('Search Docs')).toBeVisible();
    await page.getByPlaceholder('Search Docs').fill('Writing tests');
    await expect(page.getByText('Introduction')).toBeVisible();
})