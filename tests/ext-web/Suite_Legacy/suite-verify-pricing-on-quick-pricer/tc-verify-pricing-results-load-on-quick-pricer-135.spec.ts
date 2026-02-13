import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify pricing results load on quick pricer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.getByText("Search Result View")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Show Rates in .125\")]")).toBeEnabled();
    await expect(page.locator("//label[contains(text(),\"Show Disqualified by QM Rules\")]")).toBeEnabled();
    await stepGroups.stepGroup_SG_Uncheck_Disqualified_by_QM_Rules(page, vars);
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//table[@class='pricing shadow-sm table-hover table mb-0']")).toBeVisible();
    await expect(page.locator("(//table//tbody)[last()]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
