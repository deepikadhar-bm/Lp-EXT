import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: MI Verification', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await page.goto("https://ppe-ext.cre8techuat.com/#/login");
    await page.locator("//input[@id='inputEmail']").fill("germanellield");
    await page.locator("//INPUT[@id='inputPassword']").fill("uat@Lp2022!");
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    await page.locator("//a[@aria-label=\"Quick Pricer\"]//span[contains(@class, 'dlp-icon') and contains(@class, 'fa-calculator-alt')]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='zip']").fill("91502, Burbank");
    await page.locator("//input[@placeholder=\"LTV\"]").clear();
    await page.locator("//input[@placeholder=\"LTV\"]").fill(testData["LTV Value"]);
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle');
    if (String(testData["LTV Value"]) > String("80")) {
      await expect(page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ")).toBeVisible();
    } else {
      await expect(page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
