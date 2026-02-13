import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC01_04_Extension Request and Comment', async ({ page }) => {
    // Prerequisite: REG_TS08_TC01_03_Extension Request and Comment
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Extension_Request_Button(page, vars);
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    vars["CommentInput"] = "Requesting for Extension Period";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").click();
    await page.locator("//label[contains(text(),\"Lock Extension Request\")]").waitFor({ state: 'visible' });
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    await page.locator("//select[@id='l-e']").click();
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_Verifying_Test_Sigma_Extension_Requested_After_Clicking_on_E(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_New_Lock_Reque(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]").click();
    await stepGroups.stepGroup_Verifying_Disabled_button_Until_API_is_Completed2(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information_(page, vars);
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:') and contains(text(), \"$|CommentInput|\")]")).toBeVisible();
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Extension:\")]/..")).toBeVisible();
    vars["AddedExtensionPoints"] = await page.locator("//th[contains(text(), \"Extension:\")]/..//td").textContent() || '';
    expect(String(vars["AddedExtensionPoints"])).toBe(vars["ExtensionRequestPoints"]);
    await stepGroups.stepGroup_Storing_data_in_Pricing_Adjustment_and_verifying_with_the_Up(page, vars);
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends_for_the(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
