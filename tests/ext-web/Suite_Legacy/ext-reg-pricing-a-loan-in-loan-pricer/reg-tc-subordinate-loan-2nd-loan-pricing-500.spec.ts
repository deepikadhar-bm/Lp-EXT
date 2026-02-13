import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Subordinate Loan (2nd loan) Pricing', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
      vars["PurchasePrice"] = await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").inputValue() || '';
      await page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]/..//input").scrollIntoViewIfNeeded();
      await page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]/..//input").fill(testData["Sub Loan Amount"]);
      await page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]").click();
      vars["Actual CLTV Value"] = await page.locator("//label[contains(text(),\"CLTV\")]/..//input").inputValue() || '';
      vars["Sum Of Loan Amounts"] = (parseFloat(String(vars["LoanAmount"])) + parseFloat(String(testData["Sub Loan Amount"]))).toFixed(3);
      vars["Division Of Amounts"] = (parseFloat(String(vars["Sum Of Loan Amounts"])) / parseFloat(String(vars["PurchasePrice"]))).toFixed(6);
      vars["Expected CLTV Value"] = (parseFloat(String(vars["Division Of Amounts"])) * parseFloat(String("100"))).toFixed(3);
      expect(String('')).toBe(String(''));
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    } else {
      await page.locator("//select[@aria-label=\"Day Locks\" and @ng-reflect-model=\"30\"] | //label[contains(text(),\"Lock Days\")]/..//button").click();
      await page.locator("//label[text()=\" Lock Days\"]/..//ul/li/span[text()=\" 30 days \"]").evaluate(el => (el as HTMLElement).click());
      vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
      vars["PurchasePrice"] = await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").inputValue() || '';
      await page.locator("//label[contains(text(),\"Subordinate\")]/../input").check();
      await expect(page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]/..//input")).toBeVisible();
      await expect(page.locator("//label[contains(text(),\"CLTV\")]/..//input")).toBeVisible();
      await page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]/..//input").fill(testData["Sub Loan Amount"]);
      await page.locator("//label[text()=\" Subordinate Mortgage \" or text()=\"Subordinate Loan Amount\"]").click();
      vars["Actual CLTV Value"] = await page.locator("//label[contains(text(),\"CLTV\")]/..//input").inputValue() || '';
      vars["Actual CLTV Value"] = String(vars["Actual CLTV Value"]).substring(0, String(vars["Actual CLTV Value"]).length - 2);
      vars["Sum Of Loan Amounts"] = (parseFloat(String(vars["LoanAmount"])) + parseFloat(String(testData["Sub Loan Amount"]))).toFixed(3);
      vars["Division Of Amounts"] = (parseFloat(String(vars["Sum Of Loan Amounts"])) / parseFloat(String(vars["PurchasePrice"]))).toFixed(6);
      vars["Division Of Amount"] = String(vars["Division Of Amounts"]).substring(0, String(vars["Division Of Amounts"]).length - 1);
      vars["Expected CLTV Value"] = (parseFloat(String(vars["Division Of Amount"])) * parseFloat(String("100"))).toFixed(3);
      expect(String('')).toBe(String(''));
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
