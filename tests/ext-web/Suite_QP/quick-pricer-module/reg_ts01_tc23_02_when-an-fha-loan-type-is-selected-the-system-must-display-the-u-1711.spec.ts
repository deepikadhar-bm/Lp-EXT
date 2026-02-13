import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC23_02_when an FHA loan type is selected, the system must display the UFMIP fee within the Cost to Borrower popup. This ensures that the borrower can see all upfront costs associated with th', async ({ page }) => {
    // Prerequisite: REG_TS01_TC23_01_when an FHA loan type is selected, the system must display the UFMIP fee within the
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      if (true) /* Checkbox Show Cost To Borrower checkbox(custom ui) is checke */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await page.locator("//label[@aria-label=\"Loan Type\"]").click();
    await expect(page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    await page.locator("(//label[contains(text(), \"Financed\")]/..//div)[last()]").click();
    await page.locator("//option[text()=\" Financed \"]").click();
    vars["UFMIPFee(CustomUIActual)"] = await page.locator("//label[text()=\"UFMIP Fee Amount\" or contains(text(),\"UFMIP Amount\")]/..//input").inputValue() || '';
    await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").scrollIntoViewIfNeeded();
    vars["TotalLoanAmount(CustomUIActual)"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    if (true) /* Element Cost To Borrower(Quick Pricer) is not visible */ {
      await page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]").click();
    }
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
    vars["LoanAmountPopupValue"] = await page.locator("//th[contains(text(),\" (Loan Amount)\")]").textContent() || '';
    vars["UFMIP(CustomUIPopup)"] = await page.locator("//th[contains(text(),\"UFMIP Fee\")]/..//span").getAttribute('title') || '';
    vars["UFMIP(CustomUIPopupValue)"] = String(vars["UFMIP(CustomUIPopup)"]).replace(/\$\,/g, '');
    expect(String(vars["LoanAmountPopupValue"])).toBe(vars["TotalLoanAmount(CustomUIActual)"]);
    if (String(vars["UFMIPFee(CustomUIActual)"]) === String("0")) {
      await expect(page.locator("//th[contains(text(),\"UFMIP Fee\")]/..//span")).toBeVisible();
    } else {
      expect(String(vars["UFMIPFee(CustomUIActual)"])).toBe(vars["UFMIP(CustomUIPopupValue)"]);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
