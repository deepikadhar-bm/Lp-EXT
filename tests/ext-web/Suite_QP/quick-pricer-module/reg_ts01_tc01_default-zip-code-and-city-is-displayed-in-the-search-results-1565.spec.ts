import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

   test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC01_Default Zip Code and City is displayed in the search results', async ({ page }) => {
    // Prerequisite: REG_TS01_TC02_01_No Default Favourites are saved
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
      await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
      await stepGroups.stepGroup_ZipCode_UI_in_Quick_Pricer_after_config_setting_update(page, vars);
      vars["ZipCode1"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
      vars["ZipCode1(lock desk)"] = String(vars["ZipCode1"]).split(",")["1"] || '';
      expect(String(vars["ZipCode1(lock desk)"])).toBe(testData["Zip code 1"]);
      await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 2"]);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      await page.locator("//button[contains(text(),'Save')]").scrollIntoViewIfNeeded();
      await stepGroups.stepGroup_ZipCode_UI_in_Quick_Pricer_after_config_setting_update(page, vars);
      vars["ZipCode2"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
      vars["ZipCode2(lock desk)"] = String(vars["ZipCode2"]).split(",")["1"] || '';
      expect(String(vars["ZipCode2(lock desk)"])).toBe(testData["Zip code 2"]);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await stepGroups.stepGroup_ZipCode_UI_in_Quick_Pricer_after_config_setting_update(page, vars);
    vars["ZipCode2"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
    vars["ZipCode2(loan officer)"] = String(vars["ZipCode2"]).split(",")["1"] || '';
    expect(String(vars["ZipCode2(loan officer)"])).toBe(vars["ZipCode2(lock desk)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
