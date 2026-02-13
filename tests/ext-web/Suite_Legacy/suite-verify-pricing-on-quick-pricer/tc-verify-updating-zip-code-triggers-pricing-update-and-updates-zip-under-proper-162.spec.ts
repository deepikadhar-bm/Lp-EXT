import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify updating zip code triggers pricing update and updates zip under \\\'Property Details\\\'', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"Pricing Scenario\"]]")).toBeVisible();
    await expect(page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]")).toBeVisible();
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    // [DISABLED] Verify that the element ZIP Code Textbox has empty value
    // await expect(page.locator("//input[@placeholder=\"Zip Code\"]")).toHaveValue('');
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill(testData["Zip Code"]);
    await page.keyboard.press('Enter');
    await expect(page.locator("//button[contains(.,\"Search\") and @disabled]")).toBeVisible();
    await page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]").scrollIntoViewIfNeeded();
    vars["ZipCodeData"] = await page.locator("//input[@placeholder=\"Zip Code\"]").inputValue() || '';
    if (String(vars["ZipCodeData"]) === String(testData["Zip Code With Name"])) {
      vars["Only Zip Code In ZIP Text Box"] = String(vars["ZipCodeData"]).split(",")["1"] || '';
    } else {
      vars[""] = String('');
    }
    expect(String(testData["Zip Code"])).toBe(String(vars["Only Zip Code In ZIP Text Box"]));
    await page.locator("//span[normalize-space()='Property Details']").scrollIntoViewIfNeeded();
    await page.locator("//span[normalize-space()='Property Details']").click();
    await page.locator("//label[@for='side-zip'][text()='Zip']").scrollIntoViewIfNeeded();
    await expect(page.locator("//label[@for='side-zip'][text()='Zip']/following-sibling::div/input")).toBeVisible();
    vars[" ZIP Code In Property"] = await page.locator("//label[@for='side-zip'][text()='Zip']/following-sibling::div/input").inputValue() || '';
    expect(String(vars["Only Zip Code In ZIP Text Box"])).toBe(String(vars[" ZIP Code In Property"]));
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
