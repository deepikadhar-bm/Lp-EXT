import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC14_01_Under impersonation select any user (LO / LD) you want to impersonate and check the pricing', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoanPricer_Without_Save(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_StatusManual(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_in_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//input[@id='impersonateText']")).toBeVisible();
    await page.locator("//input[@id='impersonateText']").clear();
    await page.locator("//input[@id='impersonateText']").fill("testsigma");
    await expect(page.locator("//li[text()[normalize-space() = \"test sigma\"]]")).toBeVisible();
    vars["UserToSelect(first)"] = await page.locator("//li[text()[normalize-space() = \"test sigma\"]]").textContent() || '';
    await page.locator("//li[text()[normalize-space() = \"test sigma\"]]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//label[contains(text(),\"Impersonated as:\")]")).toBeVisible();
    vars["ImpesonatedText(result)"] = await page.locator("//label[contains(text(),\"Impersonated as:\")]").textContent() || '';
    vars["ImpesonatedText(result)"] = String(vars["ImpesonatedText(result)"]).split(":")["2"] || '';
    expect(String(vars["ImpesonatedText(result)"])).toBe(vars["UserToSelect(first)"]);
    // [DISABLED] Click on SEARCH FIELDS
    // await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    // [DISABLED] Verify that the element Impersonate Textbox is present and With Scrollable FALSE
    // await expect(page.locator("//input[@id='impersonateText']")).toBeVisible();
    // [DISABLED] Clear the text displayed in the Impersonate Textbox field
    // await page.locator("//input[@id='impersonateText']").clear();
    // [DISABLED] Enter LoanOfficer in the Impersonate Textbox field
    // await page.locator("//input[@id='impersonateText']").fill("LoanOfficer");
    // [DISABLED] Store text from the element First username from user list into a variable UserToSelect(second)
    // vars["UserToSelect(second)"] = await page.locator("(//ul[@class=\"user-list\"]/li)[1]").textContent() || '';
    // [DISABLED] Click on First username from user list
    // await page.locator("(//ul[@class=\"user-list\"]/li)[1]").click();
    // [DISABLED] Click on Search Button
    // await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    // [DISABLED] Verify that the element Eligible QuickPricer is present and With Scrollable FALSE
    // await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    // [DISABLED] Verify that the element Impersonated as Text is present and With Scrollable FALSE
    // await expect(page.locator("//label[contains(text(),\"Impersonated as:\")]")).toBeVisible();
    // [DISABLED] Store text from the element Impersonated as Text into a variable ImpesonatedTextSecond(result)
    // vars["ImpesonatedTextSecond(result)"] = await page.locator("//label[contains(text(),\"Impersonated as:\")]").textContent() || '';
    // [DISABLED] Verify if ImpesonatedTextSecond(result) contains UserToSelect(second)
    // expect(String(vars["ImpesonatedTextSecond(result)"])).toBe(vars["UserToSelect(second)"]);
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//input[@id='impersonateText']")).toBeVisible();
    await expect(page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]").click();
    await expect(page.locator("//input[@id='impersonateText']")).toHaveValue("Self");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
