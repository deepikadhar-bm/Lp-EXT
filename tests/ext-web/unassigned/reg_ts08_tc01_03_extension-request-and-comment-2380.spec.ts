import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS08_TC01_03_Extension Request and Comment', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Cancel_in_Extension_Request_Button(page, vars);
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    vars["CommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[text()[normalize-space() = \"Extension Request\"]]").click();
    await page.locator("//label[contains(text(),\"Lock Extension Request\")]").waitFor({ state: 'visible' });
    await page.locator("//select[@id='l-e']").click();
    await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    vars["ExtensionRequestDays"] = String('').split("")["0"] || '';
    vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    await page.locator("//select[@id='l-e']").click();
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_Verifying_Test_Manual_LD_Extension_Requested_After_Clicking_(page, vars);
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]")).toContainText(vars["CommentInput"]);
    await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    vars["CommentInput"] = "Extension Request Comment";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]").click();
    await page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\" Date \"]/../span[text()=\"test Manual LD\"]/../span[text()=\"Locked\"]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:') and contains(text(), \"$|CommentInput|\")]")).toBeVisible();
    await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[contains(text(), \"Extension:\")]/..")).toBeVisible();
    vars["AddedExtensionPoints"] = await page.locator("//th[contains(text(), \"Extension:\")]/..//td").textContent() || '';
    expect(String(vars["ExtensionRequestPoints"])).toBe(vars["AddedExtensionPoints"]);
    await stepGroups.stepGroup_Storing_data_in_Pricing_Adjustment_and_verifying_with_the_Up(page, vars);
    await stepGroups.stepGroup_Verifying_Lock_Expiration_Days_and_Handling_Weekends_for_the(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Extension Request\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
