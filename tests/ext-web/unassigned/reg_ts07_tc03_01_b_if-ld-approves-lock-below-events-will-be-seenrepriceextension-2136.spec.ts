import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS07_TC03_01_B_If LD approves lock, Below Events will be seen,Reprice,Extension Request,Request Post-Lock Price Concession', async ({ page }) => {
    // Prerequisite: REG_TS07_TC03_01_A_If LD lock, Below Events will be seen 1. Reprice 2. Extension Request 3. Request 
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//a[@aria-label=\"Loan Number\"]").click();
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information2(page, vars);
    await expect(page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Locked\"]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toContainText(vars["AddingComment"]);
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]")).toBeVisible();
    vars["LPLockStatus"] = "Locked";
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked\"]")).toContainText(vars["LPLockStatus"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
