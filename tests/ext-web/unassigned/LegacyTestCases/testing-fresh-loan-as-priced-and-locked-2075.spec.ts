import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Testing fresh loan as priced and locked', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Locked\"]     and     td[@data-title=\"LP Lock Status\"]/div[normalize-space(text())=\"Locked\"] ]//td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await stepGroups.stepGroup_SG_LP_Verifying_the_Loan_and_Updating_it_as_priced(page, vars);
    await page.waitForTimeout(30000);
    await page.locator("//button[text()[normalize-space() = \"Request Lock\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Request Lock\"]]").scrollIntoViewIfNeeded();
    await stepGroups.stepGroup_SG_LP_Verifying_the_Loan_and_Updating_it_as_Locked(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
