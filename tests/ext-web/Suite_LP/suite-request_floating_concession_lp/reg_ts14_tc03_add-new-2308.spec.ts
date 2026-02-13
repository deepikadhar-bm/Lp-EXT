import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Request_Floating_Concession_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC03_Add new', async ({ page }) => {
    // Prerequisite: REG_TS14_TC02_Cancel
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Request_Floating_Concession_and_Filling_Requ(page, vars);
    vars["TotalRowAfterClickingOnAddNew"] = String(await page.locator("//div[contains(@class,\"items-start\")]").count());
    expect(String(vars["TotalRowAfterClickingOnAddNew"])).toBe("2");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
