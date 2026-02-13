import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS09_TC01_LD has ability to Deny Request or Lock.', async ({ page }) => {
    // Prerequisite: REG_TS09_TC04_Prerequisite
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    } else {
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    vars["LockExpirationDate"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    vars["Price(LoanScenario)"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    await expect(page.locator("//h6[normalize-space()='Adjustment Summary']")).toBeVisible();
    vars["AdjPriceValue"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    vars["FinalPriceValue"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    vars["CommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_Verifying_Alert_and_Clicking_on_Override_and_Continue(page, vars);
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Popup_for_FEE_or_Price_or_Rate_D(page, vars);
    // [DISABLED] Wait until the element Request Lock Exception popup is visible
    // await page.locator("//label[.=' Request Lock Exception ']").waitFor({ state: 'visible' });
    // [DISABLED] Click on Lock Extension Dropdown
    // await page.locator("//select[@id='l-e']").click();
    // [DISABLED] Click on Select 7days in Lock Extension Request
    // await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    // [DISABLED] Store the text of the selected option from Lock Extension Dropdown list into a variable ExtensionRequestDaysandPoints
    // vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    // [DISABLED] Split the ExtensionRequestDaysandPoints with the / and store the value from the 1 in the ExtensionRequestDays
    // vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    // [DISABLED] Split the ExtensionRequestDaysandPoints with the / and store the value from the 2 in the ExtensionRequestPoints
    // vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    // [DISABLED] Split string ExtensionRequestPoints using space and store the 0 into a ExtensionRequestPoints
    // vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    // [DISABLED] Verify that the element Confirm Button In Lock Request Popup is present and With Scrollable FALSE
    // await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    // [DISABLED] Click on Confirm Button In Lock Request Popup
    // await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForLoadState('networkidle');
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await stepGroups.stepGroup_Verifying_Test_Manual_LD_Price_Concession_Requested_PostLock(page, vars);
    } else {
      await stepGroups.stepGroup_Verifying_Test_Sigma_Price_Concession_Requested_PostLock(page, vars);
    }
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]")).toBeVisible();
    vars["AddedConcessionType"] = await page.locator("(//li/div[normalize-space()='$|ConcessionType|:']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedConcessionType"] = String('').split("")["0"] || '';
    vars["AddedReason"] = await page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedExceptionPriceType"] = await page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedComment"] = await page.locator("(//li/div[normalize-space()='Comment :']/following-sibling::div[1])[1]").textContent() || '';
    expect(String(vars["AddedConcessionType"])).toBe(vars["PriceValueInPopup"]);
    expect(String(vars["AddedReason"])).toBe(vars["AddedReason(Popup)"]);
    expect(String(vars["AddedExceptionPriceType"])).toBe(vars["PriceConcessionAs(Popup)"]);
    expect(String(vars["AddedComment"])).toBe(vars["ExpectedComment"]);
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
      await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    } else {
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
      await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    }
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Custom Concession:\")]/..")).toBeVisible();
    vars["UpdatedTotalPricingAdjustment"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    vars["UpdatedAdjustmentPrice"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    expect(String(vars["UpdatedTotalPricingAdjustment"])).toBe(vars["UpdatedAdjustmentPrice"]);
    vars["NewLockExpirationDate"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    expect(String(vars["LockExpirationDate"])).toBe(vars["NewLockExpirationDate"]);
    vars["NewUpdatedPrice"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    vars["NewUpdatedPrice"] = String('').split("")["0"] || '';
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    if (true) /* Element Price Change Log Button is visible */ {
      await page.locator("(//button[contains(text(),\"Price Change Log\")])[1]").click();
      await expect(page.locator("//div[text()=\"Price Change Log\"]")).toBeVisible();
      vars["Price(newpricing)"] = await page.locator("//th[contains(normalize-space(),'New Pricing')]/ancestor::table//th[normalize-space()='Price']/following-sibling::th[2]").textContent() || '';
      expect(String(vars["Price(newpricing)"])).toBe(vars["NewUpdatedPrice"]);
    } else {
      await expect(page.locator("(//button[contains(text(),\"Price Change Log\")])[1]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
