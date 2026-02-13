import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: PPE Historical Pricing', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: PPE Historical Pricing', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_PPE(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//span[text()[normalize-space() = \"Pricing Information\"] and contains(@class, 'title')]").click();
    await page.locator("//input[@placeholder=\"Pricing Date\"]").click();
    await page.locator("//md-virtual-repeat-container[contains(@class, 'months') and contains(@class, 'md-virtual-repeat-container') and contains(@class, 'md-orient-vertical')]//div[contains(@class, 'md-virtual-repeat-scroller')]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("301248"));
    await page.locator("//md-virtual-repeat-container[contains(@class, 'months') and contains(@class, 'md-virtual-repeat-container') and contains(@class, 'md-orient-vertical')]//div[contains(@class, 'md-virtual-repeat-scroller')]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("301152"));
    await page.locator("//div[text()[normalize-space() = \"September 2024\"]]/following-sibling::table[contains(normalize-space(),\"SMTWTFS 123456789101112131415161718192021222324252627282930\")]//a[text()[normalize-space() = \"3\"] and contains(@class, 'dtp-select-day') and contains(@class, 'md-privatePricing-theme')]").click();
    await page.locator("//md-virtual-repeat-container[contains(@class, 'months') and contains(@class, 'md-virtual-repeat-container') and contains(@class, 'md-orient-vertical')]//div[contains(@class, 'md-virtual-repeat-scroller')]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("301200"));
    await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"OK\"]]").click();
    await page.waitForTimeout(5000);
    await expect(page.locator("//tbody[@ng-repeat='result in subGroup | orderBy:orderByTerms | filter:getFilter(listTerms)']")).toBeVisible();
    vars["Date Input"] = await page.locator("//*[@name='dateInput']").getAttribute('title') || '';
    expect(String(vars["Date Input"])).toBe("09/03/24");
  });
});
