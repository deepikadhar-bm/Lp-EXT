import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Verify Pricing Adjustments', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
    } else {
      await expect(page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]")).toBeVisible();
    }
    await page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]").click();
    vars["adjustments Price"] = await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div[1]").getAttribute('title') || '';
    vars["Actual Base Price Value"] = await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[1]/div[1]").getAttribute('title') || '';
    vars["Actual Final Price Value"] = await page.locator("//body/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div[1]").getAttribute('title') || '';
    await page.locator("//div[@class=\"modal-body\"]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
    vars["Adj"] = "0";
    vars["count"] = "1";
    while (await page.locator("(//h6[text()=\"Pricing Adjustment\"]/..//td/div)[$|count|]").isVisible()) {
      vars["Adj Value"] = await page.locator("(//h6[text()=\"Pricing Adjustment\"]/..//td/div)[$|count|]").getAttribute('title') || '';
      vars[""] = await page.locator("(//h6[text()=\"Pricing Adjustment\"]/..//td/div)[$|count|]").evaluate((el) => window.getComputedStyle(el as HTMLElement, '::after').color);
      vars["Adj"] = (parseFloat(String(vars["Adj"])) + parseFloat(String(vars["Adj Value"]))).toFixed(3);
      vars["count"] = (parseFloat(String(vars["count"])) + parseFloat(String("1"))).toFixed(0);
    }
    expect(String(vars["adjustments Price"])).toBe(vars["Adj"]);
    vars["Expected Final Price"] = (parseFloat(String(vars["Actual Base Price Value"])) - parseFloat(String(vars["adjustments Price"]))).toFixed(3);
    expect(String(vars["Expected Final Price"])).toBe(vars["Actual Final Price Value"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
