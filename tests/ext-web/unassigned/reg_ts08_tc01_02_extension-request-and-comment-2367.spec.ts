import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC01_02_Extension Request and Comment', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Request_Extension_Button(page, vars);
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Extension\"]]")).toBeVisible();
    vars["CommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[text()[normalize-space() = \"Request Extension\"]]").click();
    await page.locator("//label[contains(text(),\"Lock Extension Request\")]").waitFor({ state: 'visible' });
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await stepGroups.stepGroup_Verifying_Disabled_button_Until_API_is_Completed(page, vars);
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"Test Sigma Loan\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:') and contains(text(), \"$|CommentInput|\")]").waitFor({ state: 'visible' });
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Extension:\")]/..")).toBeVisible();
    vars["AddedExtensionPoints"] = await page.locator("//th[contains(text(), \"Extension:\")]/..//td").textContent() || '';
    expect(String(vars["ExtensionRequestPoints"])).toBe(vars["AddedExtensionPoints"]);
    await stepGroups.stepGroup_Storing_data_in_Pricing_Adjustment_and_verifying_with_the_Up(page, vars);
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends_for_the(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
