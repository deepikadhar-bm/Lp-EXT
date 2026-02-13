import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('EXT REG: Pricing a Loan (In Loan Pricer)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Verify Closing Cost', async ({ page }) => {
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
    // [DISABLED] Verify that the element Conventional Loan Type Button is present
    // await expect(page.locator("//li[contains(@class, \"active loan-types-conventional\")]")).toBeVisible();
    if (true) /* Element SEARCH FIELDS Under Pricing is not visible */ {
      await page.locator("//label[text()=\"Fico\" or text()=\" FICO \"]").click();
      await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      vars["Total Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").waitFor({ state: 'visible' });
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Total Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]").click();
      await page.locator("(//label[contains(text(), \"Financed\")]/..//div)[last()]").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["Total Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Total Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//li/span[text()=\" VA \"]").click();
      await page.locator("//select[@aria-label=\"Financed or Exempt?\"]").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["VA Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["VA Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      // [DISABLED] Click on Loan Type Drop down in search fields
      // await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      // [DISABLED] Click on USDA Loan Type
      // await page.locator("//span[contains(text(),\"USDA\")]").click();
      // [DISABLED] Click on Guarantee Fee Financed DropDown
      // await page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select").click();
      // [DISABLED] Click on Financed / Yes Option
      // await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      // [DISABLED] Store the value displayed in the text box Total Loan Amount Field field into a variable USDA Loan Amount
      // vars["USDA Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      // [DISABLED] Capturing Points From Price
      // await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      // [DISABLED] Click on Cost To Borrower Column
      // await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      // [DISABLED] Verify that the element Description in cost to borrower displays text contains USDA Loan Amount
      // await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["USDA Loan Amount"]);
      // [DISABLED] Verify that the element Description in cost to borrower displays text contains Points
      // await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      // [DISABLED] Click on Close Cost To Borrower
      // await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    } else {
      await page.locator("(//div[contains(normalize-space(),\"Lock Days* None selected\")])[17]//button[text()[normalize-space() = \"None selected\"]]").click();
      await page.locator("//span[text()[normalize-space() = \"30 days\"]]").click();
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      vars["Total Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Total Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]").click();
      await page.locator("(//label[contains(text(), \"Financed\")]/..//div)[last()]").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["FHA Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["FHA Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//li/span[text()=\" VA \"]").click();
      await page.locator("//select[@aria-label=\"Financed or Exempt?\"]").click();
      await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      vars["VA Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      await page.locator("//button[contains(.,\"Search\")][last()]").click();
      await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["VA Loan Amount"]);
      await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
      // [DISABLED] Click on SEARCH FIELDS Under Pricing
      // await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      // [DISABLED] Click on Loan Type Drop down in search fields
      // await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      // [DISABLED] Click on USDA Loan Type
      // await page.locator("//span[contains(text(),\"USDA\")]").click();
      // [DISABLED] Click on Guarantee Fee Financed DropDown
      // await page.locator("//label[contains(text(),\"Guarantee Fee Financed\")]/../div/select").click();
      // [DISABLED] Click on Financed / Yes Option
      // await page.locator("//label[contains(text(),\"Financed\")]/../div/select/option[text()=\" Yes \" or @ng-reflect-ng-value=\"YES\"]").click();
      // [DISABLED] Store the value displayed in the text box Total Loan Amount Field field into a variable USDA Loan Amount
      // vars["USDA Loan Amount"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
      // [DISABLED] Click on Search Button Under Search Fields
      // await page.locator("//button[contains(.,\"Search\")][last()]").click();
      // [DISABLED] Capturing Points From Price
      // await stepGroups.stepGroup_Capturing_Points_From_Price(page, vars);
      // [DISABLED] Click on Cost To Borrower Column
      // await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
      // [DISABLED] Verify that the element Description in cost to borrower displays text contains USDA Loan Amount
      // await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["USDA Loan Amount"]);
      // [DISABLED] Verify that the element Description in cost to borrower displays text contains Points
      // await expect(page.locator("(//th[text()=\"Description\"]/../../../tbody/tr/th)[1]")).toContainText(vars["Points"]);
      // [DISABLED] Click on Close Cost To Borrower
      // await page.locator("//div[@role=\"document\"]//span[@aria-label=\"Close\"]").click();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
