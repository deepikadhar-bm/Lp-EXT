import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS13_TC04_Deny with expiration date', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_auto_lock_polic(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusA(page, vars);
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    await stepGroups.stepGroup_Verifying_Request_Renegotiation_Button_and_Adding_Comment_an(page, vars);
    await stepGroups.stepGroup_Verifying_Renegotiation_Popup_and_Clicking_on_Confirm_Button(page, vars);
    await stepGroups.stepGroup_Verifying_Impersonate_User_and_Impersonating_to_Self(page, vars);
    await stepGroups.stepGroup_Selecting_45_days_Lock_Days_From_Dropdown(page, vars);
    await stepGroups.stepGroup_Verifying_and_Clicking_Search_Button(page, vars);
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Clicking_on_Price_Adj_and_Verifying_Added_Renegotiation(page, vars);
    await stepGroups.stepGroup_Verifying_Request_Lock_after_Added_Renegotiation_in_Price_Ad(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information2(page, vars);
    await expect(page.locator("//button[text()[normalize-space() = \"Deny Renegotiation Request\"]]")).toBeVisible();
    await expect(page.locator("//button[normalize-space()='Lock']")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Deny Renegotiation Request\"]]").click();
    await page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Locked (Renegotiation Request Denied)\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()=\"Test Sigma Lock\"]/..//span[text()=\"Locked (Renegotiation Request Denied)\"]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request 1 Day Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Extension\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Cancel Lock\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Renegotiation\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Price Concession\"]]")).toBeVisible();
    await expect(page.locator("//button[text()[normalize-space() = \"Request Floating Concession\"]]")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Pricing Adjustment\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//th[normalize-space()='Renegotiation Fee']/parent::tr/td//div")).toBeVisible();
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    vars["LockExpirationDateAfterRenegotiation"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    expect(String(vars["LockExpirationDateAfterRenegotiation"])).toBe(vars["LockExpiration"]);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(.)=\"Locked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"Officer User\"] ] /td[@data-title=\"LP Lock Status\"] /div[normalize-space(.)=\"Locked (Renegotiation Request Denied)\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
