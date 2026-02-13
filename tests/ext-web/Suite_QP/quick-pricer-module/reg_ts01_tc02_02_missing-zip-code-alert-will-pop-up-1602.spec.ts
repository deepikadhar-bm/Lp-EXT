import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC02_02_Missing Zip Code alert will pop up', async ({ page }) => {
    // Prerequisite: REG_TS01_TC02_01_No Default Favourites are saved
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error Popup is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await expect(page.locator("//input[@id='ppQuickPricerdefaultZipCode']")).toHaveValue('');
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//div[@class=\"modal-content\"]//span[text()[normalize-space() = \"Missing zip code, please provide a zip code to have results\"]]").waitFor({ state: 'visible' });
    vars["ActualMissingZipcodeMessage"] = await page.locator("//div[@class=\"modal-content\"]//span[text()[normalize-space() = \"Missing zip code, please provide a zip code to have results\"]]").textContent() || '';
    vars["ExpectedMissingZipcodeMessage"] = "Missing zip code, please provide a zip code to have results";
    expect(String(vars["ActualMissingZipcodeMessage"])).toBe(vars["ExpectedMissingZipcodeMessage"]);
    await expect(page.locator("//span[text()[normalize-space() = \"ok\"]]")).toBeVisible();
    await page.locator("//span[text()[normalize-space() = \"ok\"]]").click();
    await page.locator("//div[@class=\"result-panel\"]\n").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@class=\"result-panel\"]\n")).toBeVisible();
    vars["ActualSearchResult"] = await page.locator("//div[@class=\"result-panel\"]\n").textContent() || '';
    vars["ExpectedSearchResult"] = "Unable to perform search. Please review your search parameters and add data to required fields.";
    expect(String(vars["ActualSearchResult"])).toBe(vars["ExpectedSearchResult"]);
    await expect(page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]")).toHaveValue('');
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
