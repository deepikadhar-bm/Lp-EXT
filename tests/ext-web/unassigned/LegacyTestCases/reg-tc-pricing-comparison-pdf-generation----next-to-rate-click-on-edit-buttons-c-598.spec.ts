import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Pricing Comparison PDF generation --> Next to Rate click on Edit buttons (checkmark) and select more than one rate', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await expect(page.locator("//a[@aria-label=\"Config\"]//span")).toBeVisible();
    await page.locator("//a[@aria-label=\"Config\"]//span").click();
    await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
    await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
    await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
    await expect(page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]")).toBeVisible();
    await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").click();
    await expect(page.locator("//label[@for=\"general-pricer-settingsQuickPricer\"]")).toBeVisible();
    await page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[contains(@for,'document-generation-settingsQuickPricer')]")).toBeVisible();
    if (true) /* Element Allow Pricing Comparison Checkbox is visible */ {
      await expect(page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]")).toBeVisible();
    } else {
      await page.locator("//*[text()=\"Document Generation Settings\"]/..//label[@for=\"ppQuickPricerallowPricingComparison\"]/..//input[@type=\"checkbox\"]").check();
    }
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"Success\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Comparison_PDF_generation(page, vars);
  });
});
