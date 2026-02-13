import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS09_TC02_LD has ability to Deny Request or Lock.', async ({ page }) => {
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
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//textarea[contains(@class, 'form-row')]")).toBeVisible();
    vars["CommentInput"] = "Post Lock Comment";
    await page.locator("//textarea[contains(@class, 'form-row')]").fill(vars["CommentInput"]);
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_Verifying_Alert_and_Clicking_on_Override_and_Continue(page, vars);
    await page.locator("//label[.=' Request Lock Exception ']").waitFor({ state: 'visible' });
    vars["count"] = "1";
    vars["count1"] = "2";
    while (parseFloat(String(vars["count"])) <= parseFloat(String(vars["count1"]))) {
      await stepGroups.stepGroup_Filling_Post_Lock_Price_Concession_popup_For_Another_Added_R(page, vars);
    }
    if (String(testData["UserName"]) === String(testData["lockdeskuser"])) {
      await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
      await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
      await expect(page.locator("//label[.=' Request Lock Exception ']")).toBeVisible();
      await page.waitForLoadState('networkidle');
      await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Price Concession Requested (Post-Lock)\"]").waitFor({ state: 'visible' });
    } else {
      await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
      await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
      await expect(page.locator("//label[.=' Request Lock Exception ']")).toBeVisible();
      await page.waitForLoadState('networkidle');
      await page.locator("//div[text()=\" Date \"]/../span[text()=\"test sigma\"]/../span[text()=\"Price Concession Requested (Post-Lock)\"]").waitFor({ state: 'visible' });
    }
    await stepGroups.stepGroup_Storing_and_Verifying_Added_Data_For_Post_Lock_Price_Concess(page, vars);
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(first)|\")]")).toBeVisible();
    await expect(page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(second)|\")]")).toBeVisible();
    vars["PricingAdjustment(first)"] = await page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(first)|\")]").textContent() || '';
    vars["PricingAdjustment(second)"] = await page.locator("//th[contains(text(), \"Custom Concession:\")]/..//td/div[contains(text(), \"$|AddedPriceValue(second)|\")]").textContent() || '';
    vars["ExpectedTotalPricingAdjustment"] = (parseFloat(String(vars["PricingAdjustment(first)"])) + parseFloat(String(vars["PricingAdjustment(second)"]))).toFixed(3);
    vars["ActualTotalPricingAdjustment"] = await page.locator("//table[@id='pricing-table']/tfoot/tr/td[last()]/div").textContent() || '';
    expect(String(vars["ActualTotalPricingAdjustment"])).toBe(vars["ExpectedTotalPricingAdjustment"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
