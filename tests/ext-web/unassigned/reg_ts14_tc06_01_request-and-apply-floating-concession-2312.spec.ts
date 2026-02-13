import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC06_01_Request and apply Floating Concession', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_Storing_Price_and_Scroll_to_Loc(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Request_Floating_Concession_and_Filling_Requ(page, vars);
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Floating Concession Requested\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Lock\"]/../span[text()=\"Floating Concession Requested\"]")).toBeVisible();
    await stepGroups.stepGroup_Storing_and_Verifying_Added_Data_in_Request_Floating_Concess(page, vars);
    await stepGroups.stepGroup_Clicking_on_Approve_Button_and_Waiting_Till_Approved_is_Disp(page, vars);
    await stepGroups.stepGroup_Verifying_and_Clicking_on_The_Cancel_Button_in_Apply_Floatin(page, vars);
    await stepGroups.stepGroup_Verifying_Data_and_Clicking_on_The_Confirm_Button_in_Apply_F(page, vars);
    await stepGroups.stepGroup_Verifying_Status_as_Test_Sigma_Lock_Locked(page, vars);
    await stepGroups.stepGroup_Verifying_Price_Change_and_Added_Concession_in_Loan_Scenario(page, vars);
    vars["LockExpirationDateAfterFloatingConcession"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    expect(String(vars["LockExpirationDateAfterFloatingConcession"])).toBe(vars["LockExpirationDateBeforeFloatingConcession"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
