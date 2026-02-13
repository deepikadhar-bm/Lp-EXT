import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC12_Verify if MI fee is getting triggered in pricer window when ltv > 80% (Conventional Loan) an Compensation Type is BorrowerPaid', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await page.locator("//label[@for=\"results-columnsMain\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[@for=\"results-columnsMain\"]")).toBeVisible();
      await page.locator("//label[@for=\"results-columnsMain\"]").click();
      await page.locator("//input[@id=\"keyColMainmi\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show MI Checkbox(Loan Pricer) is checked */ {
        await expect(page.locator("//input[@id=\"keyColMainmi\"]")).toBeVisible();
      } else {
        await expect(page.locator("//input[@id=\"keyColMainmi\"]")).toBeVisible();
        await page.locator("//input[@id=\"keyColMainmi\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColMainmi\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_or_Reprice_in_Loan_Appl(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Selecting_30_days_Lock_Days_From_Dropdown(page, vars);
    await expect(page.locator("//label[normalize-space(text())=\"LTV\"]")).toBeVisible();
    vars["OriginalLTVValue"] = await page.locator("//label[@aria-label=\"LTV\"]/..//input[@placeholder=\"LTV\"]").inputValue() || '';
    if (String(vars["OriginalLTVValue"]) > String("80.000 %")) {
      await page.locator("//label[normalize-space(text())=\"PMI Type\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[normalize-space(text())=\"PMI Type\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"PMI Type\"]").click();
      await page.locator("//select[@aria-label=\"PMI Type\"]").selectOption({ label: "Borrower Paid MI" });
      await expect(page.locator("//label[normalize-space(text())=\"MI Company\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"MI Company\"]").click();
      await page.locator("//select[@aria-label=\"MI Company\"]").selectOption({ label: "Enact" });
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
      await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
    } else if (String(vars["OriginalLTVValue"]) <= String("80.000 %")) {
      await page.locator("//input[@placeholder=\"LTV\"]").clear();
      vars["NewStoreLTVValue"] = String(Math.floor(Math.random() * (90 - 81 + 1)) + 81);
      await page.locator("//input[@placeholder=\"LTV\"]").fill(vars["NewStoreLTVValue"]);
      await page.keyboard.press('Enter');
      await page.locator("//label[normalize-space(text())=\"PMI Type\"]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[normalize-space(text())=\"PMI Type\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"PMI Type\"]").click();
      await page.locator("//select[@aria-label=\"PMI Type\"]").selectOption({ label: "Borrower Paid MI" });
      await expect(page.locator("//label[normalize-space(text())=\"MI Company\"]")).toBeVisible();
      await page.locator("//select[@aria-label=\"MI Company\"]").click();
      await page.locator("//select[@aria-label=\"MI Company\"]").selectOption({ label: "Enact" });
      await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
      await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
