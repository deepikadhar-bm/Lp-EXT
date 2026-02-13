import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (TC: Jet Mortage Flex Pricer)', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await page.goto(vars["Flex Pricer Jet Mortgage"]);
    await page.waitForLoadState('networkidle');
    await expect(page.locator("(//h5[normalize-space()='SEARCH FIELDS'])[1]")).toBeVisible();
    for (let dataIdx = -1; dataIdx <= -1; dataIdx++) {
      await stepGroups.stepGroup_SG_Enter_Data_In_Borrower_Fields(page, vars);
      await stepGroups.stepGroup_SG_Flex_Enter_Data_In_Loan_Information_Fields(page, vars);
      await stepGroups.stepGroup_SG_Enter_Data_In_Property_Fields(page, vars);
      await stepGroups.stepGroup_SG_Flex_Enter_Data_In_Income_Expenses_AMI_Fields(page, vars);
      await stepGroups.stepGroup_SG_Flex_Enter_Data_In_Product_Characteristics(page, vars);
      await page.locator("//button[text()[normalize-space() = \"Search\"]]").click();
      await page.waitForTimeout(10000);
      await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
      // [DISABLED] Uncheck the checkbox Best X Pricing Checkbox
      // await page.locator("//label[text()=\"Best X Pricing\"]/../input").uncheck();
      if (true) /* Element Active Eligible Tab is enabled */ {
        await page.locator("//label[text()=\"Program\"]/..//button").click();
        await page.locator("//li/span[contains(text(),\"All\")]").click();
        await page.locator("//li/span[contains(text(),\"@|Program Name|\")]").click();
        // [DISABLED] Verify that the element Lender displays text contains Expected Lender
        // await expect(page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[9]/div[1]")).toContainText(testData["Expected Lender"]);
        if (true) /* Element Non Prime or Expanded Prime or DSCR Program is not v */ {
          // [DISABLED] Click on Ineligible Tab
          // await page.locator("//a[contains (text(), \"Ineligible\")]").click();
        }
        await expect(page.locator("//td[@data-label='COLUMN_NAME_ENUM.PROGRAM']/div/a")).toBeVisible();
        vars["Actual Program name"] = await page.locator("//td[@data-label='COLUMN_NAME_ENUM.PROGRAM']/div/a").textContent() || '';
        // Write to test data profile: "Expected Program Name" = vars["Actual Program name"]
        // TODO: Test data profile writes need custom implementation
        vars["First Row Rate Value "] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[2]").textContent() || '';
        await stepGroups.stepGroup_Store_Data_From_Price_Adjustment(page, vars);
        // Write to test data profile: "All Pricing Adj Programs" = vars["Price Adjustment Programs"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Pricing Adjustment Values" = vars["Pricing Adjustment Values"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Actual Base Price Value" = vars["Actual Base Price Value"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Actual Adj Price Value" = vars["Actual Adj Price Value"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Actual Final Price Value" = vars["Actual Final Price Value"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Actual Final Rate Value" = vars["Actual Final Rate Value"]
        // TODO: Test data profile writes need custom implementation
        if (true) /* Element Active Ineligible Tab is enabled */ {
          await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
          vars["First Row Rate Value"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]").textContent() || '';
          await page.locator("//span[contains(text(),\"Disq.\")]").click();
          await expect(page.locator("//div[@class=\"modal-body\"]/h5")).toContainText(vars["First Row Rate Value "]);
          await page.locator("//div[@class=\"modal-body\"]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
        }
        if (true) /* Element Pricing Disqualification Table is enabled */ {
          vars["Pricing Disqualification Reasons"] = (await page.locator("//h6[text()=\"Pricing Disqualification\"]/../table/tbody/tr/td").allTextContents()).join(', ');
          // Write to test data profile: "Pricing Disqualification Reasons" = vars["Pricing Disqualification Reasons"]
          // TODO: Test data profile writes need custom implementation
          // Write to test data profile: "Test Status" = "Disqualified"
          // TODO: Test data profile writes need custom implementation
          await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
        } else if (true) /* Element Rate Disqualification Table is enabled */ {
          vars["Rate Disqualification Reasons"] = (await page.locator("//h6[text()=\"Rate Disqualification\"]/../table/tbody/tr/td").allTextContents()).join(', ');
          // Write to test data profile: "Rate Disqualification Reasons" = vars["Rate Disqualification Reasons"]
          // TODO: Test data profile writes need custom implementation
          // Write to test data profile: "Test Status" = "Disqualified"
          // TODO: Test data profile writes need custom implementation
          await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
        } else {
          // Write to test data profile: "Test Status" = "Passed"
          // TODO: Test data profile writes need custom implementation
        }
        if (true) /* Element SEARCH FIELDS Under Pricing is visible */ {
          await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
        }
      } else {
        await page.locator("//a[contains(text(),\"Eligible\") and @class=\"nav-link\"]").click();
        vars["Error Message"] = await page.locator("(//div[@class=\"result\"]/div/div/div)[1]").textContent() || '';
        // Write to test data profile: "Fail Reason" = vars["Error Message"]
        // TODO: Test data profile writes need custom implementation
        // Write to test data profile: "Test Status" = "Disqualified"
        // TODO: Test data profile writes need custom implementation
        await page.locator("//a[contains(text(),'Ineligible')]").click();
        await page.locator("//label[text()=\"Program\"]/..//button").click();
        await page.locator("//li/span[contains(text(),\"All\")]").click();
        await page.locator("//li/span[contains(text(),\"@|Program Name|\")]").click();
        await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
        vars["First Row Rate Value"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]").textContent() || '';
        await page.locator("//span[contains(text(),\"Disq.\")]").click();
        await expect(page.locator("//div[@class=\"modal-body\"]/h5")).toContainText(vars["First Row Rate Value"]);
        await page.locator("//div[@class=\"modal-body\"]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("1000"));
        if (true) /* Element Pricing Disqualification Table is enabled */ {
          vars["Pricing Disqualification Reasons"] = (await page.locator("//h6[text()=\"Pricing Disqualification\"]/../table/tbody/tr/td").allTextContents()).join(', ');
          // Write to test data profile: "Pricing Disqualification Reasons" = vars["Pricing Disqualification Reasons"]
          // TODO: Test data profile writes need custom implementation
        }
        if (true) /* Element Rate Disqualification Table is enabled */ {
          vars["Rate Disqualification Reasons"] = (await page.locator("//h6[text()=\"Rate Disqualification\"]/../table/tbody/tr/td").allTextContents()).join(', ');
          // Write to test data profile: "Rate Disqualification Reasons" = vars["Rate Disqualification Reasons"]
          // TODO: Test data profile writes need custom implementation
        }
        await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
        await page.locator("//h5[text()=\" SEARCH FIELDS \"]").click();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
