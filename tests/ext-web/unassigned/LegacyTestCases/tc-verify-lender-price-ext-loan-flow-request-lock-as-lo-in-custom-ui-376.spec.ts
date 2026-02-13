import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Lender Price EXT Loan Flow:  Request Lock as LO In Custom UI', async ({ page }) => {
    // Prerequisite: Pre-cond: Config - CustomUI
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_To_EXT(page, vars);
    // [DISABLED] Store LoanID in LOAN ID
    // vars["LOAN ID"] = vars["LoanID"];
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    // [DISABLED] SG: Fetching Encrypted Loan Number from UI
    // await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await stepGroups.stepGroup_SG_Loan_Details_Page_Verification(page, vars);
    await expect(page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]")).toBeVisible();
    await page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]").click();
    await expect(page.locator("//span[contains(text(),\"Pricing search parameters missing\")]")).toBeVisible();
    await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
    await expect(page.locator("//h5[contains(text(),'SEARCH FIELDS')]")).toBeVisible();
    await expect(page.locator("//h5[.=' Borrower ']")).toBeVisible();
    await page.locator("//input[contains(@placeholder,'FICO')]").clear();
    await page.locator("//input[contains(@placeholder,'FICO')]").fill(testData["FICO"]);
    await expect(page.locator("//h5[contains(.,'Loan Information')]")).toBeVisible();
    await page.locator("//label[.=' Purchase Price ']").scrollIntoViewIfNeeded();
    await page.locator("//input[@placeholder='Purchase Price']").clear();
    await page.locator("//input[@placeholder='Purchase Price']").fill(testData["Purchase Price"]);
    await expect(page.locator("//h5[contains(text(),'Product Characteristics')]")).toBeVisible();
    await page.locator("//button[contains(.,'None selected')]").click();
    await page.locator("//span[contains(text(),'30 days')]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await stepGroups.stepGroup_SG_Adjustments_and_Disqualifications(page, vars);
    await stepGroups.stepGroup_SG_Export_Pricing(page, vars);
    await page.locator("(//button[@role=\"button\"])[2]").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await stepGroups.stepGroup_SG_More_Details_In_Scenario_Pricing_Request(page, vars);
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_SG_Date_In_Lock_Requested(page, vars);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Buttons_Verification(page, vars);
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    await stepGroups.stepGroup_SG_Request_Processing_Verification(page, vars);
    await stepGroups.stepGroup_SG_Confirm_For_Request_Lock(page, vars);
    while (!(await page.locator("//span[contains(.,'Lock Requested')]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.screenshot({ fullPage: true });
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
