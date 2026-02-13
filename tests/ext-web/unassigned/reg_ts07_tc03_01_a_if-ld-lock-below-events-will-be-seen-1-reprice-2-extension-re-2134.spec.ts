import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS07_TC03_01_A_If LD lock, Below Events will be seen 1. Reprice 2. Extension Request 3. Request Post-Lock Price Concession 4. Cancel Lock', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Lock_Requested(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Lock_Requested_Status(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information2(page, vars);
    await expect(page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Lock Requested\"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Deny Request\"]]")).toBeVisible();
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await expect(page.locator("//textarea[contains(@class, 'form-row')]")).toBeVisible();
    vars["AddingComment"] = "Testing1";
    await page.locator("//textarea[contains(@class, 'form-row')]").fill(vars["AddingComment"]);
    await page.locator("//button[normalize-space()='Lock']").click();
    await page.locator("(//div[contains(text(),'Sell side summary')])[1]").waitFor({ state: 'visible' });
    vars["ActualSummaryText"] = await page.locator("(//div[contains(text(),'Sell side summary')])[1]").textContent() || '';
    vars["ExpectedSummaryText"] = "Sell side summary\r";
    expect(String(vars["ExpectedSummaryText"])).toBe(vars["ActualSummaryText"]);
    await expect(page.locator("//button[text()=\" Confirm Lock \"]")).toBeVisible();
    await page.locator("//button[text()=\" Confirm Lock \"]").click();
    await page.waitForTimeout(30000);
    await page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Locked\"]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toContainText(vars["AddingComment"]);
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Extension')]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").scrollIntoViewIfNeeded();
    await expect(page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div")).toContainText(vars["LockExpirationDate"]);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]")).toBeVisible();
    vars["LPLockStatus"] = "Locked";
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]")).toContainText(vars["LPLockStatus"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
