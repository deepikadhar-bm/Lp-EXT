import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS14_TC01_02_Request Floation concession with comments', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Request_Floating_Concession_and_Filling_Requ(page, vars);
    await page.locator("(//span[normalize-space()='Test Sigma Loan']/parent::*/descendant::span[normalize-space()='Floating Concession Requested'])[1]").waitFor({ state: 'visible' });
    await expect(page.locator("(//span[normalize-space()='Test Sigma Loan']/parent::*/descendant::span[normalize-space()='Floating Concession Requested'])[1]")).toBeVisible();
    await stepGroups.stepGroup_Storing_and_Verifying_Added_Data_in_Request_Floating_Concess(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Floating_Conce(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Approve']")).toBeVisible();
    await page.locator("//button[contains(@class,'show-prices-btn') and normalize-space()='Approve']").click();
    await page.getByRole('button', { name: "Approved" }).waitFor({ state: 'visible' });
    await expect(page.locator("//button[normalize-space()='Approved' and @disabled]")).toBeVisible();
    await expect(page.locator("(//span[normalize-space()='Test Sigma Loan']/parent::*/descendant::span[normalize-space()='Floating Concession Requested'])[1]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Floating_Conce(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//button[normalize-space()='Approved' and @disabled]")).toBeVisible();
    await expect(page.locator("(//span[normalize-space()='Test Sigma Loan']/parent::*/descendant::span[normalize-space()='Floating Concession Requested'])[1]")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["LockExpirationDateAfterRequestFloatingConcession"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    expect(String(vars["LockExpirationDateAfterRequestFloatingConcession"])).toBe(vars["LockExpirationDateBeforeRequestFloatingConcession"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
