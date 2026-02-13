import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Creating a New Loan and Making it Priced(Auto lock Policy)', async ({ page }) => {
    await stepGroups.stepGroup_API_Loan_Creation_For_officer_user(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await expect(page.locator("//tr[td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"] and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"] and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ]")).toBeVisible();
    await page.locator("//tr[     td[@data-title=\"LOS Lock Status\" and normalize-space(text())=\"Unlocked\"]     and td[@data-title=\"Loan Officer\" and normalize-space(.)=\"LoanOfficer2 TestSigma\"]     and td[@data-title=\"LP Lock Status\" and not(normalize-space())] ] //td[@data-title=\"Loan Number\"]/a[@aria-label=\"Loan Number\"]").click();
    await page.locator("(//div[contains(@class, \"loan-action\")]/button[text()=\" Get Pricing \"])[2]").waitFor({ state: 'visible' });
    if (true) /* Element Get Pricing Button For Loan is visible */ {
      await page.locator("(//div[contains(@class, \"loan-action\")]/button[text()=\" Get Pricing \"])[2]").click();
    }
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("(//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"])[2]").waitFor({ state: 'visible' });
    await page.locator("(//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"])[2]").click();
    await page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").waitFor({ state: 'visible' });
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
  });
});
