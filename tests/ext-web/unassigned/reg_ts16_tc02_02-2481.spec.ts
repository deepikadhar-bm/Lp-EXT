import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC02_02', async ({ page }) => {
    // Prerequisite: REG_TS16_TC02_01_Verify Add-Adhoc Adjustments  Lock Desk is able to add Ad-hocs from pricing on both
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'hidden' });
    await expect(page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]")).toBeVisible();
    await stepGroups.stepGroup_Adding_New_Ad_hoc_Adjustment(page, vars);
    await stepGroups.stepGroup_Verifying_Rate_Adjustment_Table_with_Added_Data_in_Add_Adhoc(page, vars);
    await expect(page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td")).toHaveAttribute('title', "text-success");
    vars["AddedNewRateAdjustmentData"] = await page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceValue|\"]").textContent() || '';
    vars["ExpectedTotalRateAdjustment"] = (parseFloat(String(vars["AddedNewRateAdjustmentData"])) + parseFloat(String(vars["AddedRateValue"]))).toFixed(3);
    expect(String(vars["ActualTotalRateAdjustmentValue"])).toBe(vars["ExpectedTotalRateAdjustment"]);
    await stepGroups.stepGroup_Storing_Data_from_Adjustment_Summary_and_Verifying_Updated_R(page, vars);
    await stepGroups.stepGroup_Storing_and_Verifying_Data_from_Loan_Scenario_Page_and_Price(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
