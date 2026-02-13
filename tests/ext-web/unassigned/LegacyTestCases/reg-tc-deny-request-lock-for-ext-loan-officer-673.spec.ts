import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Deny Request Lock For EXT Loan Officer', async ({ page }) => {
    // Prerequisite: REG TC: Request Lock For EXT Loan Officer
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Deny Request\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").click();
    while (!(await page.locator("//span[normalize-space()='Lock Cancelled']").isVisible())) {
      await page.waitForTimeout(10000);
    }
    await expect(page.locator("//span[normalize-space()='Lock Cancelled']")).toBeVisible();
    await page.locator("//button[text()=\"  Price \"]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Events_and_Expiration_Date_With_Concession_For_EXT_Loan_O(page, vars);
  });
});
