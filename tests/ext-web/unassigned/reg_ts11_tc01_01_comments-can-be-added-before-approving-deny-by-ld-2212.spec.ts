import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS11_TC01_01_Comments can be added before approving / Deny by LD', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Comment_Inbox_in_(page, vars);
    vars["Comment"] = "Testing";
    await page.locator("//textarea[contains(@class, 'form-row')]").fill(vars["Comment"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").click();
    await expect(page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock cancellation?\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Cancel\"]]").click();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]").click();
    await expect(page.locator("//div[text()[normalize-space() = \"Are you sure you want to submit a lock cancellation?\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Cancelled\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Lock Cancelled\"]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toContainText(vars["Comment"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
