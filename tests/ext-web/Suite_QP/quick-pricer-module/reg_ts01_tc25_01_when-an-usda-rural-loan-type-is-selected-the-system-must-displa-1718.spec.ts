import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC25_01_when an USDA Rural loan type is selected, the system must display the Guaranteed fee amount and Total Loan Amount within the Cost to Borrower popup.', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await stepGroups.stepGroup_Cost_To_Borrower_Checkbox(page, vars);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//span[contains(text(),\"USDA\")]").click();
    await expect(page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["GuaranteeFee(Actual)"] = await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").inputValue() || '';
    vars["TotalLoanAmount(Actual)"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
    vars["LoanAmount(Expected)"] = await page.locator("//th[contains(text(),\" (Loan Amount)\")]").textContent() || '';
    vars["GuaranteeFee(Expected)"] = await page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span").getAttribute('title') || '';
    expect(String(vars["LoanAmount(Expected)"])).toBe(vars["TotalLoanAmount(Actual)"]);
    if (String(vars["GuaranteeFee(Actual)"]) === String("0")) {
      await expect(page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span")).toBeVisible();
    } else {
      expect(String(vars["GuaranteeFee(Expected)"])).toBe(vars["GuaranteeFee(Actual)"]);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
