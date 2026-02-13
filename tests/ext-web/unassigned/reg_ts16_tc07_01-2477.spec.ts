import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC07_01', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]")).toBeVisible();
    await stepGroups.stepGroup_Adding_New_Ad_hoc_Adjustment_For_Rate_Adjustment_withPositiv(page, vars);
    await expect(page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td")).toHaveAttribute('title', "text-danger");
    vars["AddedRateAdjustment"] = await page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceValue|\"]").textContent() || '';
    vars["AddedTotalRateAdjustment"] = await page.locator("//h6[normalize-space()='Rate Adjustment']/ancestor::*[2]//table[@class='pricing-details-table']//tfoot/tr[th[normalize-space()='Total']]//td/div").textContent() || '';
    expect(String(vars["AddedRateAdjustment"])).toBe(vars["AddedTotalRateAdjustment"]);
    await stepGroups.stepGroup_Storing_Data_from_Adjustment_Summary_and_Verifying_Updated_R(page, vars);
    await stepGroups.stepGroup_Storing_and_Verifying_Data_from_Loan_Scenario_Page_and_Price(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
