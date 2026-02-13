import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC03_02_Verify Add-Adhoc Adjustments Lock Desk is able to add/edit/delete Ad-hocs from pricing on both unlocked and locked loans', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Add_Adhoc_Adjustm(page, vars);
    await stepGroups.stepGroup_Adding_New_Adhoc_Adjustment_Data_and_verifying_Adhooc_Popup_(page, vars);
    await stepGroups.stepGroup_Verifying_Pricing_Adjustment_Table_with_Added_Data_in_Add_Ad(page, vars);
    vars["BasePrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]").textContent() || '';
    vars["AdjPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["AdjPrice"])).toBe(vars["TotalPricingAdjustmentValue"]);
    vars["NewNetPrice"] = (parseFloat(String(vars["BasePrice"])) - parseFloat(String(vars["AdjPrice"]))).toFixed(3);
    vars["NetPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]").textContent() || '';
    vars["FinalPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["NetPrice"])).toBe(vars["NewNetPrice"]);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["PriceValue"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    vars["PriceValue"] = String('').split("")["0"] || '';
    vars["PriceValue"] = String(vars["PriceValue"]).trim();
    expect(String(vars["PriceValue"])).toBe(vars["FinalPrice"]);
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_SG_LP_Verifying_Reprice_Loan_Confirmation_Lock_Information_i(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Verifying_The_Adjustment_For_the_Same_NoteRate(page, vars);
    await stepGroups.stepGroup_Verifying_the_Adjustment_for_Another_NoteRate(page, vars);
    await expect(page.locator("//h6[.=\"Pricing Adjustment\"]/following::table[1]//th[normalize-space(.)=\"$|AddedDescriptionData\n|\"]/../td/div[@class=\"percent\" and @data=\"$|EnteredPriceValue|\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
