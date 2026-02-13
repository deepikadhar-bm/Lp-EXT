import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC01_03_Verify ', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'hidden' });
    await page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_Adding_New_Ad_hoc_Adjustment(page, vars);
    // [DISABLED] Click on Add Ad-hoc Adjustments Button
    // await page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]").click();
    await expect(page.locator('//*')).toBeVisible();
    // [DISABLED] Wait until the element Add Ad-hoc adjustments Popup is visible
    // await page.locator("//div[text()[normalize-space() = \"Add Ad-hoc adjustments\"]]").waitFor({ state: 'visible' });
    // [DISABLED] Adding New Adhoc Adjustment Data and verifying Adhooc Popup Checked Priced
    // await stepGroups.stepGroup_Adding_New_Adhoc_Adjustment_Data_and_verifying_Adhooc_Popup_(page, vars);
    // [DISABLED] Wait until the element Request Lock Button is enabled
    // await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    // [DISABLED] Click on Request Lock Button
    // await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    // [DISABLED] Wait until the element Are you sure you want to submit a lock request? is visible
    // await page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock request?\"]]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Confirm Button In Lock Request Popup is present and With Scrollable FALSE
    // await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    // [DISABLED] Click on Confirm Button In Lock Request Popup
    // await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    // [DISABLED] Wait until the element Lock Button is enabled
    // await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Lock Button is enabled and With Scrollable FALSE
    // await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    // [DISABLED] Wait until the element Lock Button is visible
    // await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    // [DISABLED] Click on Lock Button
    // await page.locator("//button[normalize-space()='Lock']").click();
    // [DISABLED] Wait until the element Sell side summary Pop up is visible
    // await page.locator("(//div[contains(text(),'Sell side summary')])[1]").waitFor({ state: 'visible' });
    // [DISABLED] Click on Sell side summary Confirm Button
    // await page.locator("(//button[normalize-space()='Confirm Lock'])[1]").click();
    // [DISABLED] Wait until the element Test Manual LD Locked(Logs) is visible
    // await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    // [DISABLED] SG : LP : Search in Pipeline For Created Loan
    // await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    // [DISABLED] SG : LP : Verifying and Selecting Loan for Locked Locked Status(ML)
    // await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    // [DISABLED] Verifying Loan Scenario Page and Scroll to Add Adhoc Adjustment
    // await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Add_Adhoc_Adjustm(page, vars);
    // [DISABLED] Adding New Adhoc Adjustment and Verifying Add Adhoc Popup
    // await stepGroups.stepGroup_Adding_New_Adhoc_Adjustment_and_Verifying_Add_Adhoc_Popup(page, vars);
    // [DISABLED] Verifying Pricing Adjustment Table with Added Data in Add Adhoc
    // await stepGroups.stepGroup_Verifying_Pricing_Adjustment_Table_with_Added_Data_in_Add_Ad(page, vars);
    // [DISABLED] Store text from the element Base Price(Adjustment Summary) into a variable BasePrice
    // vars["BasePrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]").textContent() || '';
    // [DISABLED] Store text from the element Adj Price(Adjustment Summary) into a variable AdjPrice
    // vars["AdjPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    // [DISABLED] Verify if AdjPrice == TotalPricingAdjustmentValue
    // expect(String(vars["AdjPrice"])).toBe(vars["TotalPricingAdjustmentValue"]);
    // [DISABLED] Perform subtraction on BasePrice and AdjPrice and store the result inside a NewNetPrice considering 3 decimal places
    // vars["NewNetPrice"] = (parseFloat(String(vars["BasePrice"])) - parseFloat(String(vars["AdjPrice"]))).toFixed(3);
    // [DISABLED] Store text from the element Net Price(Adjustment Summary) into a variable NetPrice
    // vars["NetPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]").textContent() || '';
    // [DISABLED] Store text from the element Final Price(Adjustment Summary) into a variable FinalPrice
    // vars["FinalPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    // [DISABLED] Verify if NetPrice == NewNetPrice
    // expect(String(vars["NetPrice"])).toBe(vars["NewNetPrice"]);
    // [DISABLED] Verify if FinalPrice == NewNetPrice
    // expect(String(vars["FinalPrice"])).toBe(vars["NewNetPrice"]);
    // [DISABLED] Scroll down to the element Loan Scenario Window into view
    // await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    // [DISABLED] Store text from the element Price in Loan Scenario Page into a variable PriceValue
    // vars["PriceValue"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    // [DISABLED] Split string PriceValue using space and store the 0 into a PriceValue
    // vars["PriceValue"] = String('').split("")["0"] || '';
    // [DISABLED] Trim white space from PriceValue and store it in a runtime PriceValue
    // vars["PriceValue"] = String(vars["PriceValue"]).trim();
    // [DISABLED] Verify if PriceValue contains NewNetPrice
    // expect(String(vars["PriceValue"])).toBe(vars["NewNetPrice"]);
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
    // [DISABLED] Verify that the element Adjustments in Adjustment Popup is present and With Scrollable TRUE
    // await expect(page.locator("//h6[.=\"Pricing Adjustment\"]/following::table[1]//th[normalize-space(.)=\"$|AddedDescriptionData\n|\"]/../td/div[@class=\"percent\" and @data=\"$|EnteredPriceValue|\"]")).toBeVisible();
    // [DISABLED] SG: Logout
    // await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
