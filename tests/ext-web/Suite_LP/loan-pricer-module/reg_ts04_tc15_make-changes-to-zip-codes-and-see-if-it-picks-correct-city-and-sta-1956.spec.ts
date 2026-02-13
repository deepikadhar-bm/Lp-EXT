import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC15_Make changes to Zip Codes and see if it picks correct city and state under Property Details', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]").waitFor({ state: 'visible' });
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.waitForTimeout(30000);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_or_Reprice_in_Loan_Appl(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await page.locator("//input[@placeholder=\"Zip Code\"]").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill("10003");
    await page.keyboard.press('Enter');
    vars["State1"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    expect(String("New York")).toBe(vars["State1"]);
    await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill("60606");
    await page.keyboard.press('Enter');
    vars["State2"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    expect(String("Illinois")).toBe(vars["State2"]);
    await page.locator("//input[@placeholder=\"Zip Code\"]").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill("78131");
    await page.keyboard.press('Enter');
    vars["State3"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    expect(String("Texas")).toBe(vars["State3"]);
    await page.locator("//input[@placeholder=\"Zip Code\"]").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill("33111");
    await page.keyboard.press('Enter');
    vars["State4"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    expect(String("Florida")).toBe(vars["State4"]);
    await page.locator("//input[@placeholder=\"Zip Code\"]").click();
    await page.locator("//input[@placeholder=\"Zip Code\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\"]").fill("30033");
    await page.keyboard.press('Enter');
    vars["State5"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    expect(String("Georgia")).toBe(vars["State5"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
