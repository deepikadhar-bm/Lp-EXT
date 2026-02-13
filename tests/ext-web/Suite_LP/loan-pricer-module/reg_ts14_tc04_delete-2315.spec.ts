import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC04_Delete', async ({ page }) => {
    // Prerequisite: REG_TS14_TC03_Add new
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]").click();
    vars["count"] = "1";
    vars["count1"] = "3";
    while (parseFloat(String(vars["count"])) <= parseFloat(String(vars["count1"]))) {
      await stepGroups.stepGroup_Filling_Request_Lock_Exception_popup_For_Another_Added_Row_a(page, vars);
      vars["count"] = (parseFloat(String(vars["count"])) + parseFloat(String("1"))).toFixed(0);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
