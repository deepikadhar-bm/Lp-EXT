import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC04_Verify Edit-Adhoc Adjustments', async ({ page }) => {
    // Prerequisite: REG_TS16_TC03_01_Verify Add-Adhoc Adjustments Lock Desk is able to add/edit/delete Ad-hocs from pric
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Add_Adhoc_Adjustm(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Edit\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Edit\"]]").click();
    await page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]").waitFor({ state: 'visible' });
    await expect(page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]")).toBeVisible();
    await expect(page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]/..//input")).toBeVisible();
    await page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]/..//input").clear();
    vars["Data"] = /* Number :: Random Double [Long] */ '';
    await page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]/..//input").fill(vars["Data"]);
    await expect(page.locator("//div[@id='loan-pricing']//button[text()[normalize-space() = \"Apply\"]]")).toBeVisible();
    await page.locator("//div[@id='loan-pricing']//button[text()[normalize-space() = \"Apply\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Successfully Edited!\"]]").waitFor({ state: 'visible' });
    vars["ActualEditedMessage"] = await page.locator("//div[text()[normalize-space() = \"Successfully Edited!\"]]").textContent() || '';
    vars["ExpectedEditedMessage"] = "Successfully Edited!";
    expect(String(vars["ActualEditedMessage"])).toBe(vars["ExpectedEditedMessage"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Ok\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    vars["NewTotalInPricingAdjustment"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    vars["NewTotalInPricingAdjustment"] = String(vars["NewTotalInPricingAdjustment"]).trim();
    vars["BasePrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]").textContent() || '';
    vars["AdjPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["AdjPrice"])).toBe(vars["NewTotalInPricingAdjustment"]);
    vars["NewNetPrice"] = (parseFloat(String(vars["BasePrice"])) - parseFloat(String(vars["AdjPrice"]))).toFixed(3);
    vars["NetPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]").textContent() || '';
    vars["FinalPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["NetPrice"])).toBe(vars["NewNetPrice"]);
    // [DISABLED] Verify if FinalPrice == NewNetPrice
    // expect(String(vars["FinalPrice"])).toBe(vars["NewNetPrice"]);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["PriceValue"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    vars["PriceValue"] = String('').split("")["0"] || '';
    vars["PriceValue"] = String(vars["PriceValue"]).trim();
    expect(String(vars["PriceValue"])).toBe(vars["FinalPrice"]);
    // [DISABLED] Scroll up to the element Lock Information into view
    // await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    // [DISABLED] SG : LP : Verifying Reprice Loan Confirmation (Lock Information) in Loan Scenario Window and click on Search Button
    // await stepGroups.stepGroup_SG_LP_Verifying_Reprice_Loan_Confirmation_Lock_Information_i(page, vars);
    // [DISABLED] Click on Search Button
    // await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the element Eligible And Ineligible UI TAB is visible
    // await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    // [DISABLED] Verifying The Adjustment For the Same NoteRate
    // await stepGroups.stepGroup_Verifying_The_Adjustment_For_the_Same_NoteRate(page, vars);
    // [DISABLED] Verifying the Adjustment for Another NoteRate
    // await stepGroups.stepGroup_Verifying_the_Adjustment_for_Another_NoteRate(page, vars);
    // [DISABLED] Verify that the element Adjustments in Adjustment Popup is not present and With Scrollable FALSE
    // await expect(page.locator("//h6[.=\"Pricing Adjustment\"]/following::table[1]//th[normalize-space(.)=\"$|AddedDescriptionData\n|\"]/../td/div[@class=\"percent\" and @data=\"$|EnteredPriceValue|\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
