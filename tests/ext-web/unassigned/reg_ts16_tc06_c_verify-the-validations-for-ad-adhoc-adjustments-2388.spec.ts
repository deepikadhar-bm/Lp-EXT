import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS16_TC06_C_Verify the validations for Ad Adhoc Adjustments', async ({ page }) => {
    // Prerequisite: REG_TS16_TC06_B_Verify the validations for Ad Adhoc Adjustments
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[text()[normalize-space() = \"Add Ad-hoc Adjustments\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Edit\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
