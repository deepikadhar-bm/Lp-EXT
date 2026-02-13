import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS06_TC04_01_B_Concessions will be applied in the Adjustments. Check if applied with correct amount. If LD approves lock, Below Events will be seen(ML)', async ({ page }) => {
    // Prerequisite: REG_TS06_TC04_01_A_Concessions will be applied in the Adjustments. Check if applied with correct amo
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//a[@aria-label=\"Loan Number\"]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    await page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]").scrollIntoViewIfNeeded();
    await expect(page.locator("(//li/div[text()=\" Comment : \"]/..//div)[2]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Reprice\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
