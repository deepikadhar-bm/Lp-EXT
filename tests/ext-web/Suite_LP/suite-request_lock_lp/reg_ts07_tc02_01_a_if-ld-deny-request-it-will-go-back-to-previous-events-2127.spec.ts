import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: Request_Lock_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS07_TC02_01_A_if LD Deny Request it will go back to previous Events', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Lock_Requested(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Lock_Requested_Status(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Lock Requested\"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Deny Request\"]]")).toBeVisible();
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await expect(page.locator("//textarea[contains(@class, 'form-row')]")).toBeVisible();
    vars["AddingComment"] = "Testing1";
    await page.locator("//textarea[contains(@class, 'form-row')]").fill(vars["AddingComment"]);
    await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").click();
    await page.waitForTimeout(30000);
    await page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Request Denied (Pre-Lock)\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toContainText(vars["AddingComment"]);
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").scrollIntoViewIfNeeded();
    await expect(page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div")).toContainText(vars["LockExpirationDate"]);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Request Denied (Pre-Lock)\"]")).toBeVisible();
    vars["LPLockStatus"] = "Request Denied (Pre-Lock)";
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Unlocked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Request Denied (Pre-Lock)\"]")).toContainText(vars["LPLockStatus"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
