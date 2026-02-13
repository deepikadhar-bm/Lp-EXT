import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS09_TC03_', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_Storing_Total_Loan_Amount_and_S(page, vars);
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_Verifying_Alert_and_Clicking_on_Override_and_Continue(page, vars);
    await page.locator("//label[.=' Request Lock Exception ']").waitFor({ state: 'visible' });
    await expect(page.locator("//input[@placeholder=\"Concession in points\"]")).toBeVisible();
    await expect(page.locator("//input[@placeholder=\"Concession in amount\"]")).toBeVisible();
    await expect(page.locator("//select[@aria-label=\"Reasons\"]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder=\"Type your Comment...\"]")).toBeVisible();
    await page.locator("//select[@aria-label=\"Concession Type\"]").click();
    await page.locator("//select[@aria-label=\"Concession Type\"]").selectOption({ label: "FEE" });
    await expect(page.locator("//input[@placeholder=\"Concession in points\"]")).toBeVisible();
    await expect(page.locator("//input[@placeholder=\"Concession in amount\"]")).toBeVisible();
    await expect(page.locator("//select[@aria-label=\"Reasons\"]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder=\"Type your Comment...\"]")).toBeVisible();
    await page.locator("//input[@placeholder=\"Concession in points\"]").fill(/* Number :: Random Double [Int] */ '');
    vars["PriceInConcessionPopup"] = await page.locator("//input[@placeholder=\"Concession in points\"]").inputValue() || '';
    await page.keyboard.press('Enter');
    await expect(page.locator("//input[@placeholder=\"Concession in points\"]")).not.toHaveValue('');
    vars["ActualAmountValue"] = await page.locator("//input[@placeholder=\"Concession in amount\"]").inputValue() || '';
    vars["ActualAmountValue"] = String(vars["ActualAmountValue"]).replace(/\,/g, '');
    vars["AmountValue"] = (parseFloat(String(vars["TotalLoanAmount"])) * parseFloat(String(vars["PriceInConcessionPopup"]))).toFixed(1);
    vars["ExpectedAmountValue"] = (parseFloat(String(vars["AmountValue"])) / parseFloat(String("100"))).toFixed(1);
    vars["ExpectedAmountValue"] = String('') + String('');
    expect(String(vars["ActualAmountValue"])).toBe(vars["ExpectedAmountValue"]);
    // TODO: Regex verification with empty pattern
    // Action: Verify if the text ActualAmountValue matches the pattern ^\$\d+.*\.\d$
    await page.locator("//input[@placeholder=\"Concession in amount\"]").clear();
    await page.locator("//input[@placeholder=\"Concession in amount\"]").fill(String(Math.floor(Math.random() * (5000 - 3001 + 1)) + 3001));
    await page.keyboard.press('Enter');
    vars["UpdatedAmount"] = await page.locator("//input[@placeholder=\"Concession in amount\"]").inputValue() || '';
    vars["ActualUpdatedPrice"] = await page.locator("//input[@placeholder=\"Concession in points\"]").inputValue() || '';
    vars["ActualUpdatedPrice"] = parseFloat(String(vars["ActualUpdatedPrice"])).toFixed(0);
    vars["PriceValue"] = (parseFloat(String(vars["UpdatedAmount"])) * parseFloat(String("100"))).toFixed(1);
    vars["ExpectedUpdatedPrice"] = (parseFloat(String(vars["PriceValue"])) / parseFloat(String(vars["TotalLoanAmount"]))).toFixed(1);
    expect(String(vars["ActualUpdatedPrice"])).toBe(vars["ExpectedUpdatedPrice"]);
    await page.locator("//textarea[@placeholder=\"Type your Comment...\"]").fill(Array.from({length: 500}, () => "abcdefghijklmnopqrstuvwxy".charAt(Math.floor(Math.random() * 25))).join(''));
    vars["EnteredData"] = await page.locator("//textarea[@placeholder=\"Type your Comment...\"]").inputValue() || '';
    vars[""] = String('').length.toString();
    await page.locator("//textarea[@placeholder=\"Type your Comment...\"]").fill(Array.from({length: 501}, () => "abcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 26))).join(''));
    vars["EnteredData"] = await page.locator("//textarea[@placeholder=\"Type your Comment...\"]").inputValue() || '';
    vars[""] = String('').length.toString();
    expect(String(vars["TotalCharacterCountWithZ"])).toBe(vars["TotalCharacterCountWithoutZ"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
