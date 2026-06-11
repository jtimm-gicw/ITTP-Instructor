import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';

dotenv.config();
const REACT_APP_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:5173';

test.describe('Live Weather and Movies data', () => {
  test('As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    const searchQuery = 'seattle';
    await page.getByRole('textbox').fill(searchQuery);
    await page.getByRole('button', { name: /explore/i }).click();


    await expect(page.getByRole('heading', {name: /weather/i })).toBeVisible();
  });

  test('As a user of City Explorer, I want to see info about movies related to the city I searched, so that I can learn more about the destination.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    const searchQuery = 'seattle';
    await page.getByRole('textbox').fill(searchQuery);
    await page.getByRole('button', { name: /explore/i }).click();

    await expect(page.getByRole('heading', { name: /movies/i })).toBeVisible();
  });
});
