import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC14_02_Under impersonation select any user (LO / LD) you want to impersonate and check the pricing', async ({ page }) => {
    // Prerequisite: REG_TS04_TC14_01_Under impersonation select any user (LO / LD) you want to impersonate and check the
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_StatusManual(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_in_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//input[@id='impersonateText']")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
