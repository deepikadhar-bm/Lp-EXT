import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Concessions', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REC TC: Events and Expiration Date For Concession ', async ({ page }) => {
    // Prerequisite: REG TC: Lock [Post Lock Price Concession In LD]
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'visible' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await expect(page.locator("(//span[@ng-reflect-ng-style='[object Object]'][text()='Locked'])[1]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Extension  Request\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    await stepGroups.stepGroup_SG_Verify_Expiration_Date(page, vars);
    // [DISABLED] SG: Expiration Lock date Verification
    // await stepGroups.stepGroup_SG_Expiration_Lock_date_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
