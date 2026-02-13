import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression Test Cases', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Export Pricing', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    // Write to test data profile: "Loan Number" = vars["LOAN ID"]
    // TODO: Test data profile writes need custom implementation
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    vars["Loan Amount On Pricing"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    vars["Purchase Price On Pricing"] = await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").inputValue() || '';
    vars["Appraised Value On Pricing"] = await page.locator("//label/../div/input[@id=\"appraisedPrice\" or @placeholder =\"Appraised Value\"]").inputValue() || '';
    vars["LTV Value On Pricing"] = await page.locator("//input[@placeholder=\"LTV\" or @id=\"ltv\"]").inputValue() || '';
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      vars[""] = String("LTV Value On Pricing").slice(0, 6) + "LTV Value On Pricing" + String("LTV Value On Pricing").slice(6);
    }
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
    }
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
    vars["Rate Value On Pricing"] = await page.locator("//table/tbody/tr/td[1]/div").textContent() || '';
    vars["Price Value On Pricing"] = await page.locator("(//td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
    vars["Price Value On Pricing"] = String(vars["Price Value On Pricing"]).split("/")["1"] || '';
    vars["Program Name On Pricing"] = await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PROGRAM\"]/div/a").textContent() || '';
    vars["Program Name On Pricing"] = String(vars["Program Name On Pricing"]).trim();
    await expect(page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]")).toBeVisible();
    await page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await expect(page.locator("//th[text()=\"Old Pricing Results\"]")).toBeVisible();
    await expect(page.locator("//th[text()=\"New Pricing Results\"]")).toBeVisible();
    await expect(page.locator("//th[contains(text(),'Fields')]")).toBeVisible();
    await page.locator("//th[contains(text(),'Fields')]/../../../../table").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
    await expect(page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"New Pricing Results\"]")).toContainText(testData["FICO"]);
    await page.locator("//button[contains(text(),\"Confirm\")]").click();
    await page.getByText("Export pricing is successful").waitFor({ state: 'visible' });
    await page.locator("(//button[@role=\"button\"])[2]").click();
    await page.waitForLoadState('networkidle');
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()=\"Note Rate\"]/../div[2]")).toContainText(vars["Rate Value On Pricing"]);
    await expect(page.locator("//div[text()=\" Price \"]/../div[2]")).toContainText(vars["Price Value On Pricing"]);
    await expect(page.locator("//div[text()=\"LTV\"]/../div[2]")).toContainText(vars["LTV Value On Pricing"]);
    await expect(page.locator("//div[text()=\"Loan Program\"]/../div[2]")).toContainText(vars["Program Name On Pricing"]);
    await expect(page.locator("//div[text()=\"FICO Score\"]/../div[2]")).toContainText(testData["FICO"]);
    await expect(page.locator("//div[text()=\" Purchase Price \"]/../div[2]")).toContainText(vars["Purchase Price On Pricing"]);
    await expect(page.locator("//div[text()=\" Base Loan Amount \"]/../div[2]")).toContainText(vars["Loan Amount On Pricing"]);
    await expect(page.locator("//div[text()=\"Appraised Value\"]/../div[2]")).toContainText(vars["Appraised Value On Pricing"]);
    await stepGroups.stepGroup_SG_Verify_Expiration_Date(page, vars);
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Lock Request with Price Concession\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Lock\")]")).toBeVisible();
    await page.locator("//button[text()=\"  Price \"]").click();
    await page.locator("//input[@placeholder=\"FICO\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//input[@placeholder=\"FICO\"]")).toBeVisible();
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
    }
    await expect(page.locator("//a[contains(text(),\"Eligible\") and @class=\"nav-link\"]")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
