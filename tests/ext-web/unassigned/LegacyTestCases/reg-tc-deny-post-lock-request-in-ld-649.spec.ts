import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Deny Post Lock Request In LD', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[contains(text(),'Deny')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Deny')]").click();
    await expect(page.locator("//span[.='Locked (Post-Lock Request Denied)']")).toBeVisible();
    await stepGroups.stepGroup_SG_Buttons_Verification_In_Requested_Post_Lock(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
