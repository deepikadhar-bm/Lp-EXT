import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC02_Cancel', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Verifying_and_Clicking_In_Pipeline(page, vars);
    await stepGroups.stepGroup_Verifying_Locked_Status_Loan_or_Creating_a_New_Loan_and_maki(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await stepGroups.stepGroup_Verifying_Enabled_Buttons_Before_Cancelling_Request_Floating(page, vars);
    } else {
      await stepGroups.stepGroup_Verifying_Enabled_Buttons_Before_Cancelling_Request_Floating(page, vars);
    }
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]").click();
    await page.locator("//label[@for=\"priceExceptionRequested\"]").waitFor({ state: 'visible' });
    await expect(page.locator("(//*[contains(text(),\"Cancel\")])[last()]")).toBeVisible();
    await expect(page.locator("(//*[contains(text(),\"Cancel\")])[last()]")).toBeVisible();
    await page.locator("(//*[contains(text(),\"Cancel\")])[last()]").click();
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await stepGroups.stepGroup_Verifying_Enabled_Buttons_After_Cancelling_Request_Floating_(page, vars);
    } else {
      await stepGroups.stepGroup_Verifying_Enabled_Buttons_After_Cancelling_Request_Floating_(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
