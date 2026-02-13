import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: Verify Get Pricing', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC- Smoke- Verify Get pricing', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile
    const testDataRows: Record<string, string>[] = []; // TODO: Load test data rows

    await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]").waitFor({ state: 'visible' });
    // [DISABLED] SG: Loan Details Page Verification
    // await stepGroups.stepGroup_SG_Loan_Details_Page_Verification(page, vars);
    await page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]").click();
    await expect(page.locator("//span[contains(text(),\"Pricing search parameters missing\")]")).toBeVisible();
    await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
    if (true) /* Checkbox Show Disqualified Checkbox is checked */ {
      await page.locator("//input[@id='show-disqualified']").uncheck();
    }
    // Loop over test data "Get Pricing Data" where set name equals null
for (const testDataRow of testDataRows) {
      await expect(page.locator("//input[@placeholder=\"FICO\"]")).toBeVisible();
      await page.locator("//input[@placeholder=\"FICO\"]").clear();
      await page.locator("//input[@placeholder=\"FICO\"]").fill(testData["FICO"]);
      if (true) /* Element Impound Types Dropdown is visible */ {
        await page.locator("//label[contains(text(),\"Impound Types\")]/../../../lib-pricing-dyna-field-item-view/div/div/select").click();
        await page.locator("//select/option[contains(.,\"No Impounds\")] ").click();
      }
      if (true) /* Verify that the element Lock Days Dropdown displays text con */ {
      } else {
        await page.locator("//label[@aria-label=\"Lock Days\"]").click();
        await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
      }
      // [DISABLED] Click on Lock Days Dropdown
      // await page.locator("//label[@aria-label=\"Lock Days\"]").click();
      // [DISABLED] Click on 30 Days Under Lock Days
      // await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
      if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
        // [DISABLED] Click on SEARCH FIELDS Under Pricing
        // await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
        await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
        await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
        await page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]").click();
        await page.locator("//button[@aria-label=\"Search\"]").click();
      } else {
        await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
        await page.locator("//li/span[normalize-space()=\"FHA\"]").click();
      }
      await page.waitForTimeout(120000);
      await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
      if (await page.locator("//label[contains(text(),\"Best X Pricing\")]").isVisible()) {
        await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
      }
      await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
      await expect(page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PROGRAM\"]/div/a")).toContainText("FHA");
      if (true) /* Element SEARCH FIELDS Under Pricing is enabled */ {
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
        await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
        await page.locator("//li[contains(@class,\"active loan-types-fha\")]/span[text()=\" FHA \"]").click();
        await page.locator("//li/span[text()=\" VA \"]").click();
        if (true) /* Verify that the element Lock Days Dropdown displays text con */ {
        } else {
          await page.locator("//label[@aria-label=\"Lock Days\"]").click();
          await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
        }
        await page.locator("//button[@aria-label=\"Search\"]").click();
      } else {
        await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
        await page.locator("//li/span[normalize-space()=\"VA\"]").click();
      }
      await page.waitForTimeout(120000);
      await stepGroups.stepGroup_SG_Check_Eligible_Loan(page, vars);
      await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
      if (await page.locator("//label[contains(text(),\"Best X Pricing\")]").isVisible()) {
        await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
      }
      await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
      await expect(page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PROGRAM\"]/div/a")).toContainText("VA");
      // [DISABLED] Click on Loan Type Drop down in search fields
      // await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
        // [DISABLED] Click on SEARCH FIELDS Under Pricing
        // await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
      // [DISABLED] Click on USDA Rural Loan Type
      // await page.locator("//span[contains(text(),\"USDA\")]").click();
      if (true) /* Element Active VA Loan Type is visible */ {
        // [DISABLED] Click on VA Loan Type
        // await page.locator("//li/span[text()=\" VA \"]").click();
      }
      if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
        // [DISABLED] Click on Search Button In Search Fields
        // await page.locator("//button[@aria-label=\"Search\"]").click();
      }
      // [DISABLED] Wait until the element First Row Of Rate Data is enabled
      // await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
      // [DISABLED] Verify that the element Program name under Pricing Data displays text contains USDA
      // await expect(page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.PROGRAM\"]/div/a")).toContainText("USDA");
    }
    if (true) /* Element SEARCH FIELDS Under Pricing is enabled */ {
      await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//li/span[text()=\" VA \"]").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
      await page.locator("//button[@aria-label=\"Search\"]").click();
    } else {
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
      await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    }
    await page.waitForTimeout(120000);
    await stepGroups.stepGroup_SG_Check_Eligible_Loan(page, vars);
    await page.locator("//table/tbody/tr[1]").waitFor({ state: 'visible' });
    // Loop over test data "Get Pricing Data" where set name equals null
for (const testDataRow of testDataRows) {
      if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
      await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").clear();
      await page.locator("//label/../div/input[@id=\"appraisedPrice\" or @placeholder =\"Appraised Value\"]").clear();
      await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").fill(testData["Purchase Price"]);
      await page.locator("//label/../div/input[@id=\"appraisedPrice\" or @placeholder =\"Appraised Value\"]").fill(testData["Appraised Value"]);
      await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").clear();
      await page.locator("//label/../div/input[@id=\"loanAmount\"] | //input[contains(@placeholder,'Loan Amount')]").fill(testData["Loan Amount"]);
      vars["Loan Type"] = await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").textContent() || '';
      vars["LTV Value"] = await page.locator("//input[@placeholder=\"LTV\" or @id=\"ltv\"]").inputValue() || '';
      if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
        await page.locator("//button[@aria-label=\"Search\"]").click();
      }
      if (true) /* Element Alert Message is visible */ {
        // [DISABLED] Click on OK In Alert Message
        // await page.locator("//span[.='OK' or @ng-reflect-ng-switch=\"ok\"]").click();
      }
    }
  });
});
