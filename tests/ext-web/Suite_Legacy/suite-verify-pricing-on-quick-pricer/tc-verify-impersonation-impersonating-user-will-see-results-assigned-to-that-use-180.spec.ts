import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify impersonation (impersonating user will see results assigned to that user)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.locator("//label[normalize-space()='Impersonate']")).toBeVisible();
    await expect(page.locator("//input[@id='impersonateText']")).toHaveAttribute('title', "Self");
    await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
    vars["Eligible count [Self]"] = await page.locator("//a[contains(text(),'Eligible')]").textContent() || '';
    vars["Eligible count [Self]"] = String(vars["Eligible count [Self]"]).substring(11, String(vars["Eligible count [Self]"]).length - 1);
    vars["Ineligible Count [Self]"] = await page.locator("//a[contains(text(),'Ineligible')]").textContent() || '';
    vars["Ineligible Count [Self]"] = String(vars["Ineligible Count [Self]"]).substring(12, String(vars["Ineligible Count [Self]"]).length - 1);
    await page.locator("//input[@id='impersonateText']").clear();
    await page.locator("//input[@id='impersonateText']").fill(testData["Impersonate User Name"]);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//input[@id='impersonateText']")).toHaveAttribute('title', testData["Impersonate User Name"]);
    await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
    vars["Eligible count [Test Sigma Loan]"] = await page.locator("//a[contains(text(),'Eligible')]").textContent() || '';
    vars["Eligible count [Test Sigma Loan] "] = String(vars["Eligible count [Test Sigma Loan]"]).substring(11, String(vars["Eligible count [Test Sigma Loan]"]).length - 1);
    await expect(page.locator("//a[contains(text(),'Ineligible')]")).toBeVisible();
    vars["Ineligible Count [Test Sigma Loan]"] = await page.locator("//a[contains(text(),'Ineligible')]").textContent() || '';
    vars["Ineligible Count [Test Sigma Loan]"] = String(vars["Ineligible Count [Test Sigma Loan]"]).substring(12, String(vars["Ineligible Count [Test Sigma Loan]"]).length - 1);
    if (String(vars["Eligible count [Self]"]) !== String(vars["Eligible count [Test Sigma Loan]"])) {
    } else {
      expect(String(vars["Ineligible Count [Self]"])).toBe(String(vars["Ineligible Count [Test Sigma Loan]"]));
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
