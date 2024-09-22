const { test, describe, expect } = require('@playwright/test');

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await test.step('front page can be opened', async () => {
      await page.goto('');
      await expect(page.getByText('ivysaur')).toBeVisible();
      await expect(
        page.getByText(
          'Pokémon and Pokémon character names are trademarks of Nintendo.'
        )
      ).toBeVisible();
    });
  });
  test('pokemon page can be navigated to', async ({ page }) => {
    await test.step('pokemon page can be navigated to', async () => {
      await page.goto('');
      await page.getByText('ivysaur').click();
      await expect(page.getByText('chlorophyll')).toBeVisible();
    });
  });
});
