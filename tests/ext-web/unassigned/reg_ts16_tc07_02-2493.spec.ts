import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC07_02', async ({ page }) => {
    // Prerequisite: REG_TS16_TC07_01
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]")).toBeVisible();
    await stepGroups.stepGroup_Adding_New_Ad_hoc_Adjustment_For_Rate_AdjustmentNegative_Rat(page, vars);
    await stepGroups.stepGroup_Verifying_Rate_Adjustment_Table_with_Added_Data_in_Add_Adhoc(page, vars);
    await expect(page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td")).toHaveAttribute('title', "text-success");
    vars["AddedNewRateAdjustmentData"] = await page.locator("//h6[text()=\"Rate Adjustment\"]/../..//table/tbody/tr   /th[normalize-space()=\"$|AddedDescriptionInPricingAdjustmentTable|\"]   /../td/div[number(normalize-space())=\"$|EnteredPriceDataValue|\"]").textContent() || '';
    vars["ExpectedTotalRateAdjustment"] = (parseFloat(String(vars["AddedNewRateAdjustmentData"])) + parseFloat(String(vars["EnteredPriceValue"]))).toFixed(3);
    expect(String(vars["ActualTotalRateAdjustmentValue"])).toBe(vars["ExpectedTotalRateAdjustment"]);
    await stepGroups.stepGroup_Storing_Data_from_Adjustment_Summary_and_Verifying_Updated_R(page, vars);
    await stepGroups.stepGroup_Storing_and_Verifying_Data_from_Loan_Scenario_Page_and_Price(page, vars);
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await page.locator("//button[text()=\"  Price \"]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@ng-reflect-tooltip=\"Previously Exported Rate\"]   /ancestor::div   //div[contains(@class,\"currency\")         and contains(@class,\"adjustment-points\")        and contains(@data,\"$|TotalRateAdjustmentValue|\")]")).toBeVisible();
    await page.locator("//div[@ng-reflect-tooltip=\"Previously Exported Rate\"]   /ancestor::div   //div[contains(@class,\"currency\")         and contains(@class,\"adjustment-points\")        and contains(@data,\"$|TotalRateAdjustmentValue|\")]").click();
    await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
    await expect(page.locator('//*')).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
