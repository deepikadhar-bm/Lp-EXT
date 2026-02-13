import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC05_Verify Delete -Adhoc Adjustments', async ({ page }) => {
    // Prerequisite: REG_TS16_TC04_Verify Edit-Adhoc Adjustments
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
    await page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]").click();
    await expect(page.locator("//table[@id='pricing-table']//button[contains(@class,'text-danger')]/..//input")).toBeVisible();
    await expect(page.locator("//button[contains(@class,'undo')]")).toBeVisible();
    await expect(page.locator("//div[@id='loan-pricing']//button[text()[normalize-space() = \"Apply\"]]")).toBeVisible();
    await page.locator("//div[@id='loan-pricing']//button[text()[normalize-space() = \"Apply\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Successfully Edited!\"]]").waitFor({ state: 'visible' });
    vars["ActualEditedMessage"] = await page.locator("//div[text()[normalize-space() = \"Successfully Edited!\"]]").textContent() || '';
    vars["ExpectedEditedMessage"] = "Successfully Edited!";
    expect(String(vars["ActualEditedMessage"])).toBe(vars["ExpectedEditedMessage"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Ok\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await page.getByText("Request sent successfully").waitFor({ state: 'visible' });
    // [DISABLED] Wait until the element Adjustments in pricing adjustment table is not visible
    // await page.locator("//tr[th[contains(normalize-space(),'$|AddedDescriptionInPricingAdjustmentTable|')]]//td/div[contains(., '$|EnteredPriceValue|')]\n").waitFor({ state: 'hidden' });
    await expect(page.locator("//tr[th[contains(normalize-space(),'$|AddedDescriptionInPricingAdjustmentTable|')]]//td/div[contains(., '$|EnteredPriceValue|')]\n")).toBeVisible();
    vars["NewTotalInPricingAdjustment"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    vars["NewTotalInPricingAdjustment"] = String(vars["NewTotalInPricingAdjustment"]).trim();
    vars["BasePrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Base']/preceding-sibling::th)]").textContent() || '';
    vars["AdjPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["AdjPrice"])).toBe(vars["NewTotalInPricingAdjustment"]);
    vars["NewNetPrice"] = (parseFloat(String(vars["BasePrice"])) - parseFloat(String(vars["AdjPrice"]))).toFixed(3);
    vars["NetPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Net']/preceding-sibling::th)]").textContent() || '';
    vars["FinalPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["NetPrice"])).toBe(vars["NewNetPrice"]);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["PriceValue"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    vars["PriceValue"] = String('').split("")["0"] || '';
    vars["PriceValue"] = String(vars["PriceValue"]).trim();
    expect(String(vars["PriceValue"])).toBe(vars["FinalPrice"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
