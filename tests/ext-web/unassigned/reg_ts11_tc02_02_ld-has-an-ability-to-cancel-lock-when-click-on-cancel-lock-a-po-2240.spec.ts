import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS11_TC02_02_LD has an ability to Cancel Lock. when click on Cancel Lock a popup will ask to Cancel or Confirm.If Confirm, it will Cancel Lock and will show you following Events:1. Relock (Higher-', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
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
    await page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Lock Cancelled\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Lock Cancelled\"]")).toBeVisible();
    await expect(page.locator("//div[contains(text(), \"Rate Sheet Date\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Relock')]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Allow  Current  Market  Pricing \"] | //button[contains(text(),'Current  Market  Pricing')]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
