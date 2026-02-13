import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Impersonation', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      await page.locator("//input[@id='impersonateText']").clear();
      await page.locator("//input[@id='impersonateText']").fill("testsigma");
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Lock\"]]").waitFor({ state: 'visible' });
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Lock\"]]").click();
      await expect(page.locator("//input[@id='impersonateText']")).toHaveAttribute('title', "Test Sigma Lock");
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//input[@id='impersonateText']").clear();
      await page.locator("//input[@id='impersonateText']").fill("testsigma");
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Loan\"]]").waitFor({ state: 'visible' });
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Loan\"]]").click();
      await expect(page.locator("//input[@id='impersonateText']")).toHaveAttribute('title', "Test Sigma Loan");
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    } else {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//input[@id='impersonateText']").clear();
      await page.locator("//input[@id='impersonateText']").fill("testsigma");
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Lock\"]]").waitFor({ state: 'visible' });
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Lock\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
      await expect(page.locator("//label[contains(text(),\"Impersonated as:\")]")).toContainText("Test Sigma Lock");
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      await page.locator("//input[@id='impersonateText']").clear();
      await page.locator("//input[@id='impersonateText']").fill("testsigma");
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Loan\"]]").waitFor({ state: 'visible' });
      await page.locator("//li[text()[normalize-space() = \"Test Sigma Loan\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
      await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
      await page.locator("//label[contains(text(),\"Impersonated as:\")]").waitFor({ state: 'visible' });
      await expect(page.locator("//label[contains(text(),\"Impersonated as:\")]")).toContainText("Test Sigma Loan");
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
