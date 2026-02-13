import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Cancel Lock', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Cancel Lock Step 2', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    // [DISABLED] Write value LOAN ID to Regression Sheet Details [Loan Pricing] column Loan Number
    // // Write to test data profile: "Loan Number" = vars["LOAN ID"]
    // // TODO: Test data profile writes need custom implementation
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await page.locator("//h4[contains(text(),\"Lock Information\")]").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_SG_Accept_Lock(page, vars);
    // [DISABLED] SG: Filling Price Concession Pop Up For FEE
    // await stepGroups.stepGroup_SG_Filling_Price_Concession_Pop_Up_For_FEE(page, vars);
    await stepGroups.stepGroup_SG_Cancel_Lock(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    // [DISABLED] SG: Cancel Concession and Re-Price
    // await stepGroups.stepGroup_SG_Cancel_Concession_and_RePrice(page, vars);
    // [DISABLED] SG: Verification Of Comment and Concession Under more Details
    // await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    // [DISABLED] SG: Verification Of Comment and Concession Under more Details
    // await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    // [DISABLED] SG: Re Concession Lock
    // await stepGroups.stepGroup_SG_Re_Concession_Lock(page, vars);
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
