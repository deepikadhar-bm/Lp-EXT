import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC23_01_when an FHA loan type is selected, the system must display the UFMIP fee within the Cost to Borrower popup. This ensures that the borrower can see all upfront costs associated with th', async ({ page }) => {
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
      if (true) /* Checkbox Show Cost To Borrower Checkbox(DefaultUI) is checke */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricercostToBorrower\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColQuickPricercostToBorrower\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricercostToBorrower\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await expect(page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["UFMIPFeeAmount(Actual)"] = await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").inputValue() || '';
    vars["TotalLoanAmountField(Actual)"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
    vars["LoanAmountPopup"] = await page.locator("//th[contains(text(),\" (Loan Amount)\")]").textContent() || '';
    vars["UFMIPFee(Expected)"] = await page.locator("//th[contains(text(),\"UFMIP Fee\")]/..//span").getAttribute('title') || '';
    expect(String(vars["LoanAmountPopup"])).toBe(vars["TotalLoanAmountField(Actual)"]);
    if (String(vars["UFMIPFeeAmount(Actual)"]) === String("0")) {
      await expect(page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input")).toBeVisible();
    } else {
      expect(String(vars["UFMIPFeeAmount(Actual)"])).toBe(vars["UFMIPFee(Expected)"]);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
