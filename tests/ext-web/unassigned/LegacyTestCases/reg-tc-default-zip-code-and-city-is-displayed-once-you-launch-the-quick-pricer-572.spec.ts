import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Default Zip Code and City is displayed once you launch the Quick Pricer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await expect(page.locator("//a[normalize-space()='Search Result View']")).toBeVisible();
    await expect(page.locator("//span[normalize-space()='Pricing Scenario']")).toBeVisible();
    await expect(page.locator("(//div//label[text()=\"Zip\" or text()=\" Zip Code \"])[1]")).toBeVisible();
    await expect(page.locator("//input[@placeholder=\"Zip Code\"]")).toBeVisible();
    vars["QP : Zipcode and City"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
    vars["ZIPCODE"] = String(vars["QP : Zipcode and City"]).split(",")["1"] || '';
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Logout(page, vars);
      await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
      await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
      await stepGroups.stepGroup_SG_Logout(page, vars);
    }
  });
});
