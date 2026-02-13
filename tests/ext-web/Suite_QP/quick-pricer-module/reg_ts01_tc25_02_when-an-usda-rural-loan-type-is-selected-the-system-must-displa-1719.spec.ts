import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC25_02_when an USDA Rural loan type is selected, the system must display the Guaranteed fee amount and Total Loan Amount within the Cost to Borrower popup.', async ({ page }) => {
    // Prerequisite: REG_TS01_TC25_01_when an USDA Rural loan type is selected, the system must display the Guaranteed fe
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("//app-tab-component[@title=\"Quick Pricer\"]/div[1]/div[1]/div[4]/div[16]/div[2]/div[3]/div[1]/div[1]/label[1]").click();
      await expect(page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]")).toBeVisible();
      // [DISABLED] Scroll down to the element Results Columns In Configuration (Automation donot touch) into view
      // await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      if (true) /* Checkbox Show Cost To Borrower checkbox(custom ui) is checke */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[1]/A[1]/SPAN[1]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await expect(page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]")).toBeVisible();
    await page.locator("//span[contains(text(),\"USDA\")]").click();
    await expect(page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["GuaranteeFee(CustomUIActual)"] = await page.locator("//label[contains(text(),\"Guarantee Fee Amount\") or text()=\" USDA Guarantee Fee \"]/..//input").inputValue() || '';
    vars["TotalLoan(CustomUIActual)"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
    vars["GuaranteeFee(ExpectedCustom)"] = await page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span").getAttribute('title') || '';
    vars["GuaranteeFeeExpectedCustomUI"] = String(vars["GuaranteeFee(ExpectedCustom)"]).replace(/\$\,/g, '');
    vars["LoanAmount(CustomUIExpected)"] = await page.locator("//th[contains(text(),\" (Loan Amount)\")]").textContent() || '';
    expect(String(vars["LoanAmount(CustomUIExpected)"])).toBe(vars["TotalLoan(CustomUIActual)"]);
    if (String(vars["GuaranteeFee(CustomUIActual)"]) === String("0")) {
      await expect(page.locator("//th[contains(text(),\"Guarantee Fee\")]/..//span")).toBeVisible();
    } else {
      expect(String(vars["GuaranteeFee(CustomUIActual)"])).toBe(vars["GuaranteeFeeExpectedCustomUI"]);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
