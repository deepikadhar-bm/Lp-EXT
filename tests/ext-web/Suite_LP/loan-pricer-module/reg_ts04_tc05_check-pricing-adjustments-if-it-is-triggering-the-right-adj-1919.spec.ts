import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC05_Check pricing adjustments if it is triggering the right adj.', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"results-columnsMain\"]")).toBeVisible();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      if (true) /* Checkbox Show Rate Adjustment Checkbox(loan pricer) is check */ {
        vars["ShowRateAdjustment"] = "checked";
      } else {
        vars["ShowRateAdjustment"] = "unchecked";
      }
      if (true) /* Checkbox Show Pricing Adjustment Checkbox(loan pricer) is ch */ {
        vars["ShowPriceAdjustment"] = "checked";
      } else {
        vars["ShowPriceAdjustment"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (String(vars["ShowRateAdjustment"]) === String("unchecked")) {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]")).toBeVisible();
      await stepGroups.stepGroup_Enabling_Rate_adjustment_And_Price_Adjustment_Checkbox_In_Co(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await page.locator("//a[@aria-label=\"Loan Number\"]").click();
      await page.waitForTimeout(30000);
      await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
      await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
      await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]")).toBeVisible();
      await stepGroups.stepGroup_Verifying_Rate_Adjustment_Popup_DetailsCustom_UI_In_Loan_Pri(page, vars);
    } else if (String(vars["ShowRateAdjustment"]) === String("checked")) {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]")).toBeVisible();
      await stepGroups.stepGroup_Verifying_Rate_Adjustment_Popup_DetailsCustom_UI_In_Loan_Pri(page, vars);
    }
    if (String(vars["ShowPriceAdjustment"]) === String("unchecked")) {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
      await stepGroups.stepGroup_Enabling_Rate_adjustment_And_Price_Adjustment_Checkbox_In_Co(page, vars);
      await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
      await page.locator("//a[@aria-label=\"Loan Number\"]").click();
      await page.waitForTimeout(30000);
      await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
      await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
      await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
      await stepGroups.stepGroup_Verifying_Price_Adjustment_Popup_DetailsCustom_UI_In_Loan_Pr(page, vars);
    } else if (String(vars["ShowPriceAdjustment"]) === String("checked")) {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
      await stepGroups.stepGroup_Verifying_Price_Adjustment_Popup_DetailsCustom_UI_In_Loan_Pr(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
