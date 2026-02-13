import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC02_01_Verify Add-Adhoc Adjustments  Lock Desk is able to add Ad-hocs from pricing on both unlocked and locked loans', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]")).toBeVisible();
    await stepGroups.stepGroup_Adding_New_Adhoc_Adjustment_and_Verifying_Add_Adhoc_Popup_fo(page, vars);
    await stepGroups.stepGroup_Verifying_Rate_Adjustment_Table_with_Added_Data_in_Add_Adhoc(page, vars);
    vars["BaseRate"] = await page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]").textContent() || '';
    vars["AdjRate"] = await page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    vars["AdjRate"] = String(vars["AdjRate"]).trim();
    expect(String(vars["AdjRate"])).toBe(vars["TotalRateAdjustmentValue"]);
    vars["FinalRate"] = await page.locator("//table//tr[th[normalize-space()='Rate']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["NoteRateValue"] = await page.locator("(//span[text()=\"Note Rate\"]/following::div)[1]").textContent() || '';
    expect(String(vars["NoteRateValue"])).toBe(vars["FinalRate"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
