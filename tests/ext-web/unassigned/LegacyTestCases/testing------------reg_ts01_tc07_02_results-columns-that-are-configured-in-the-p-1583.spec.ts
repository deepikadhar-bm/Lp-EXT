import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Testing------------REG_TS01_TC07_02_Results Columns that are configured in the pricing configuration appear in the pricing results', async ({ page }) => {
    // Prerequisite: REG_TS01_TC07_Results Columns that are configured in the pricing configuration appear in the pricing
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      // [DISABLED] Verifying Custom UI First Pricing Enabled
      // await stepGroups.stepGroup_Verifying_Custom_UI_First_Pricing_Enabled(page, vars);
      // [DISABLED] Scroll down to the element Custom UI into view
      // await page.locator("//b[contains(text(),'Custom UI')]").scrollIntoViewIfNeeded();
      // [DISABLED] Verify that the element Custom UI is present and With Scrollable FALSE
      // await expect(page.locator("//b[contains(text(),'Custom UI')]")).toBeVisible();
      if (true) /* Checkbox Custom UI Enabled Checkbox(Config setting) is unche */ {
        // [DISABLED] Click on Custom UI Enabled Checkbox(Config setting)
        // await page.locator("//label[@for=\"quickPricersCustomUI\"]/..//div/input[@type=\"checkbox\"]").click();
        // [DISABLED] Verify that the element Custom UI Enabled Checkbox(Config setting) is checked and With Scrollable FALSE
        // await expect(page.locator("//label[@for=\"quickPricersCustomUI\"]/..//div/input[@type=\"checkbox\"]")).toBeVisible();
      } else {
        // [DISABLED] Verify that the element Custom UI Enabled Checkbox(Config setting) is checked and With Scrollable FALSE
        // await expect(page.locator("//label[@for=\"quickPricersCustomUI\"]/..//div/input[@type=\"checkbox\"]")).toBeVisible();
      }
      // [DISABLED] Verify that the element Custom UI(srini test config) is present and With Scrollable FALSE
      // await expect(page.locator("//a[text()[normalize-space() = \"AUTOMATION DONT TOUCH\"]]")).toBeVisible();
      // [DISABLED] Click on Custom UI(srini test config)
      // await page.locator("//a[text()[normalize-space() = \"AUTOMATION DONT TOUCH\"]]").click();
      // [DISABLED] pricing enable in srini test custom ui
      // await stepGroups.stepGroup_pricing_enable_in_srini_test_custom_ui(page, vars);
      // [DISABLED] Click on Result type QM(custom ui)
      // await page.locator("//app-tab-component[@title=\"Quick Pricer\"]/div[1]/div[1]/div[4]/div[16]/div[2]/div[3]/ul[1]/li[2]/div[1]/div[1]/div[1]/div[1]/label[1]").click();
      await stepGroups.stepGroup_Results_columns_in_pricing_configuration_for_custom_ui_autom(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await stepGroups.stepGroup_Verification_in_Results_Columns_Quick_pricer_for_custom_UI(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
