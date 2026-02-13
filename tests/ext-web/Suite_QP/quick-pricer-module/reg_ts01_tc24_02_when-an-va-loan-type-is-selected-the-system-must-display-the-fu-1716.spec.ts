import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC24_02_when an VA loan type is selected, the system must display the Funding fee amount and Total Loan Amount within the Cost to Borrower popup.', async ({ page }) => {
    // Prerequisite: REG_TS01_TC24_01_when an VA loan type is selected, the system must display the Funding fee amount an
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await page.locator("//a[text()[normalize-space() = \"Quick Pricer Configuration\"]]").waitFor({ state: 'visible' });
      await page.locator("//a[text()[normalize-space() = \"Quick Pricer Configuration\"]]").click();
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await expect(page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]")).toBeVisible();
      // [DISABLED] Scroll down to the element Results Columns In Configuration (Automation donot touch) into view
      // await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      if (true) /* Checkbox Show Cost To Borrower Checkbox(Automation donot tou */ {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59costToBorrower\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await expect(page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]")).toBeVisible();
    await page.locator("//li/span[text()=\" VA \"]").click();
    await expect(page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input")).toBeVisible();
    vars["FundingFeeAmount(CustomUI)Actual"] = await page.locator("//label[contains(text(),\"Funding Fee Amount\")]/..//input").inputValue() || '';
    vars["TotalLoanAmount(CustomUI)Actual"] = await page.locator("//label[contains(text(),\"Total Loan Amount\")]/..//input").inputValue() || '';
    await page.locator("//button[@aria-label=\"Search\"]").click();
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[text()[normalize-space() = \"Cost to Borrower\"]]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.COST_TO_BORROWER\"]/div").click();
    vars["FundingFeeAmount(CustomUI)Ex"] = await page.locator("//th[contains(text(),\"Funding Fee\")]/..//span").getAttribute('title') || '';
    vars["FundingFeeAmountExpected"] = String(vars["FundingFeeAmount(CustomUI)Ex"]).replace(/\$\,/g, '');
    vars["LoanAmount(CustomUI)Expected"] = await page.locator("//th[contains(text(),\" (Loan Amount)\")]").textContent() || '';
    expect(String(vars["LoanAmount(CustomUI)Expected"])).toBe(vars["TotalLoanAmount(CustomUI)Actual"]);
    if (String(vars["FundingFeeAmount(CustomUI)Actual"]) === String("0")) {
      await expect(page.locator("//th[contains(text(),\"Funding Fee\")]/..//span")).toBeVisible();
    } else {
      expect(String(vars["FundingFeeAmount(CustomUI)Actual"])).toBe(vars["FundingFeeAmountExpected"]);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
