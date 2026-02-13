import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC02_Ensure CLTV calculates correctly (loan amt + 2nd loan amt / property value (the minimun of property value and appraisal value)).', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]").scrollIntoViewIfNeeded();
    await expect(page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]")).toBeVisible();
    await expect(page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]")).toBeVisible();
    await page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]").check();
    await expect(page.locator("//input[contains(@aria-label,\"1st Lien with Subordinate 2nd\") and @type=\"checkbox\"]")).toBeVisible();
    await expect(page.locator("//input[contains(@placeholder,\"Subordinate\")]")).toBeVisible();
    await page.locator("//input[contains(@placeholder,\"Subordinate\")]").clear();
    await page.locator("//input[contains(@placeholder,\"Subordinate\")]").fill(testData["Subordinate Mortgage Value"]);
    vars["SecondLoanAmount"] = await page.locator("//input[contains(@placeholder,\"Subordinate\")]").inputValue() || '';
    await stepGroups.stepGroup_Verifying_Loan_Amount_Input_is_Empty_or_Not(page, vars);
    await page.keyboard.press('Enter');
    await stepGroups.stepGroup_Storing_Purchase_Price_and_Appraised_Value_and_comparing_whi(page, vars);
    vars["NewCLTVValue(Expected)"] = String(vars["NewCLTVValue(Expected)"]).trim();
    vars["OldCLTVValue(Actual)"] = await page.locator("//label[contains(text(),\"CLTV\")]/..//input").inputValue() || '';
    vars["OldCLTVValue(Actual)"] = String(vars["OldCLTVValue(Actual)"]).replace(/%/g, '');
    vars["OldCLTVValue(Actual)"] = String(vars["OldCLTVValue(Actual)"]).trim();
    expect(String(vars["NewCLTVValue(Expected)"])).toBe(vars["OldCLTVValue(Actual)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
