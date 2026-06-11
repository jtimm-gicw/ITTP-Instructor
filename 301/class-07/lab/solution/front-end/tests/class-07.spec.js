import dotenv from 'dotenv';
import { test, expect } from '@playwright/test';

dotenv.config();
const REACT_APP_URL = process.env.PLAYWRIGHT_TEST_URL || 'http://localhost:5173';

test.describe('Weather Placeholder and Errors', () => {
  test('As a user of City Explorer, I want to see weather info for the city I searched, so that I know how to pack for an upcoming trip.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    await expect(page.getByRole('heading', { name: /weather/i })).not.toBeVisible();

    const searchQuery = 'seattle';
    await page.getByRole('textbox').fill(searchQuery);
    await page.getByRole('button', { name: /explore/i }).click();
    await expect(page.getByRole('heading', { name: /weather/i })).toBeVisible();
  });

  test('As a user, I want clear messages if something goes wrong so I know if I need to make any changes or try again in a different manner.', async ({ page }) => {
    await page.goto(REACT_APP_URL);
    await page.waitForLoadState('networkidle');

    await expect(page.getByText(/Error/)).not.toBeVisible();

    await page.getByRole('button', { name: /explore/i }).click();
    await expect(page.getByText(/error/i)).toBeVisible();
  });
});
