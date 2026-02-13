import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS07_TC01_LD has ability to Lock or Deny Extension Request', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Adding_Comment_Clicking_Request_Lock_and_Verifying_Popup_Scr(page, vars);
    await page.waitForTimeout(30000);
    if (String(testData["UserName"]).includes(String(testData["lockdeskuser"]))) {
      await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Requested\"]").waitFor({ state: 'visible' });
      await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Requested\"]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Deny Request\"]]")).toBeVisible();
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    } else {
      await page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Lock Requested\"]").waitFor({ state: 'visible' });
      await expect(page.locator("//span[text()=\"test sigma\"]/..//span[text()=\"Lock Requested\"]")).toBeVisible();
      await expect(page.locator("//button[text()[normalize-space() = \"Deny Request\"]]")).toBeVisible();
      await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toBeVisible();
      await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    }
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toContainText(vars["Comment"]);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Requested\"]")).toBeVisible();
    vars["LPLockStatus"] = "Lock Requested";
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Lock Requested\"]     and     td[@data-title=\"Loan Officer\"]/div[normalize-space(.)=\"LoanOfficer2 TestSigma\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Lock Requested\"]")).toContainText(vars["LPLockStatus"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
