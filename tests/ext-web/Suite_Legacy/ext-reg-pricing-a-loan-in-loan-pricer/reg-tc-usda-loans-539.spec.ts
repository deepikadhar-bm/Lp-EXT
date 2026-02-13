import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: USDA Loans', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    vars["LOAN ID"] = testData["Loan Number"];
    await stepGroups.stepGroup_SG_Navigate_to_Get_Pricing_Recorder(page, vars);
    await stepGroups.stepGroup_SG_Storing_Loan_Amount(page, vars);
    // [DISABLED] Store the value displayed in the text box Loan Amount Input Field field into a variable LoanAmount
    // vars["LoanAmount"] = await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").inputValue() || '';
    // [DISABLED] Store LoanAmount in Loan Amount
    // vars["Loan Amount"] = vars["LoanAmount"];
    // [DISABLED] Remove the no of ( 1,4 ) positions of given string LoanAmount and store into runtime variable LoanAmount
    // vars["LoanAmount"] = String(vars["LoanAmount"]).substring(1, String(vars["LoanAmount"]).length - 4);
    // [DISABLED] concate LoanAmount and 000 and store the new string into a LoanAmount
    // vars["000"] = String('') + String('');
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//span[contains(text(),\"USDA\")]").evaluate(el => (el as HTMLElement).click());
    if (true) /* Element Active conventional is enabled */ {
      await page.locator("//li[@class=\"item active loan-type-conventional\"]").click();
    }
    await page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").waitFor({ state: 'visible' });
    if (true) /* Element Guarantee Fee Financed Input Field has attribute ng- */ {
      await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toHaveAttribute('title', vars["LoanAmount"]);
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Loan Amount"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["Fee Amount"] = await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").getAttribute('title') || '';
      vars["Added Loan Amount"] = (parseFloat(String(vars["Fee Amount"])) + parseFloat(String(vars["LoanAmount"]))).toFixed(0);
      vars[""] = String("Added Fee and Loan Amount").slice(0, 3) + "Added Fee and Loan Amount" + String("Added Fee and Loan Amount").slice(3);
      vars[""] = String("Added Fee and Loan Amount").slice(0, 0) + "Added Fee and Loan Amount" + String("Added Fee and Loan Amount").slice(0);
      await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toHaveAttribute('title', vars["Added Loan Amount"]);
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Added Fee and Loan Amount"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    } else if (true) /* Element Guarantee Fee Financed Input Field has attribute ari */ {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toHaveValue(vars["Loan Amount"]);
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Loan Amount"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      await page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["Fee Amount"] = await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").inputValue() || '';
      vars["Added Loan Amount"] = (parseFloat(String(vars["Loan Amount"])) + parseFloat(String(vars["Fee Amount"]))).toFixed(2);
      vars[""] = String("Added Fee and Loan Amount").slice(0, 3) + "Added Fee and Loan Amount" + String("Added Fee and Loan Amount").slice(3);
      vars[""] = String("Added Fee and Loan Amount").slice(0, 0) + "Added Fee and Loan Amount" + String("Added Fee and Loan Amount").slice(0);
      vars["Added Fee Amount"] = String(vars["Added Fee and Loan Amount"]).substring(0, String(vars["Added Fee and Loan Amount"]).length - 3);
      await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toHaveValue(vars["Added Fee Amount"]);
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
      await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Added Fee and Loan Amount"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    }
    await stepGroups.stepGroup_SG_Pricing_Results_Page_Verification(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
