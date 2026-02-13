import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Cancel Lock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Cancel Lock Step 1', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    // Write to test data profile: "Loan Number" = vars["LOAN ID"]
    // TODO: Test data profile writes need custom implementation
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is enabled */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
    }
    await stepGroups.stepGroup_SG_Check_Eligible_Loan(page, vars);
    await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Export_Pricing(page, vars);
    await page.locator("//body/modal-container[1]/div[1]/div[1]/app-dlg-message-box[1]/div[1]/div[3]/button[1]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    // [DISABLED] SG: Request Lock Button Verification
    // await stepGroups.stepGroup_SG_Request_Lock_Button_Verification(page, vars);
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    // [DISABLED] SG: Filling Price Concession Pop Up For FEE
    // await stepGroups.stepGroup_SG_Filling_Price_Concession_Pop_Up_For_FEE(page, vars);
    while (!(await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").isVisible())) {
      await page.waitForTimeout(20000);
    }
    await stepGroups.stepGroup_SG_Confirm_For_Request_Lock(page, vars);
    while (!(await page.locator("//span[contains(.,'Lock Requested')]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await expect(page.locator("//span[contains(.,'Lock Requested')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    if (true) /* Element Deny Request Button is enabled */ {
      // [DISABLED] Click on Deny Request Button
      // await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").click();
    } else {
      // [DISABLED] SG: Logout
      // await stepGroups.stepGroup_SG_Logout(page, vars);
      // [DISABLED] SG: Loan Search as LD
      // await stepGroups.stepGroup_SG_Loan_Search_as_LD(page, vars);
      // [DISABLED] Click on Deny Request Button
      // await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").click();
    }
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Verify that the current page displays an element Lock Cancelled
    // await expect(page.locator("//span[normalize-space()='Lock Cancelled']")).toBeVisible();
    // [DISABLED] SG: Verification Of Comment and Concession Under more Details
    // await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    // [DISABLED] SG: Cancel Concession and Re-Price
    // await stepGroups.stepGroup_SG_Cancel_Concession_and_RePrice(page, vars);
    // [DISABLED] SG: Re Concession Lock
    // await stepGroups.stepGroup_SG_Re_Concession_Lock(page, vars);
    // [DISABLED] SG: Verification Of Comment and Concession Under more Details
    // await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    // [DISABLED] Click on Lock Button
    // await page.locator("//button[normalize-space()='Lock']").click();
    while (true) /* While element Locked Status is not visible on the page */ {
      // [DISABLED] Wait for 30 seconds
      // await page.waitForTimeout(30000);
    }
    // [DISABLED] Verify that the element Locked Status is present
    // await expect(page.locator("(//h4[text()=\" Lock Information \"]/../../following-sibling::div//ul//li)[1]//span[text()=\"Auto Ellie Lockdesk\"]/../span[text()=\"Locked\"]")).toBeVisible();
    // [DISABLED] SG: Request Lockand Concession Events Verification
    // await stepGroups.stepGroup_SG_Request_Lockand_Concession_Events_Verification(page, vars);
    // [DISABLED] Scroll up to the element Scenario Pricing Request In Loan Application into view
    // await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").scrollIntoViewIfNeeded();
    // [DISABLED] Store DateFunctions :: dateAfterToday in Expected Expiration Date
    // vars["Expected Expiration Date"] = /* DateFunctions :: dateAfterToday */ '';
    // [DISABLED] Verify that the element Lock Expiration Date on Loan view displays text Expected Expiration Date
    // await expect(page.locator("//div[text()=\"Lock Expiration Date\"]/../div[2]")).toContainText(vars["Expected Expiration Date"]);
    // [DISABLED] SG: Logout
    // await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
