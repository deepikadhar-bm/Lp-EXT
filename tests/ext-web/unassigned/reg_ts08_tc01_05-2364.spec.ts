import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC01_05', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    vars["FirstCommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["FirstCommentInput"]);
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").click();
    await expect(page.locator("//label[contains(text(),\"Lock Extension Request\")]")).toBeVisible();
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 1 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["RequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["Points"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
