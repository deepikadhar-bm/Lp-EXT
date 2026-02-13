import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Export_Pricing_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS05_TC01_02', async ({ page }) => {
    // Prerequisite: REG_TS05_TC01_01
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Entering_Loan_in_Pipeline_based_on_Users(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    vars["NoteRate(LoanScenario)"] = await page.locator("(//span[text()=\"Note Rate\"]/following::div)[1]").textContent() || '';
    vars["LoanType(LoanScenario)"] = await page.locator("(//span[text()=\"Loan Type\"]/following::div)[1]").textContent() || '';
    vars["Fico(LoanScenario)"] = await page.locator("(//span[text()=\"FICO Score\"]/ancestor::div[2]//div)[2]").textContent() || '';
    vars["CityStateZipcode"] = await page.locator("(//span[text()=\"City, State and Zip\"]/following::div)[1]").textContent() || '';
    vars["Zipcode(LoanScenario)"] = String(vars["CityStateZipcode"]).split(",")["3"] || '';
    vars["Zipcode(LoanScenario)"] = String(vars["Zipcode(LoanScenario)"]).trim();
    vars["LockPeriod"] = await page.locator("(//span[text()=\"Lock Period\"]/following::div)[1]").textContent() || '';
    vars["LockPeriod"] = String('').split("")["0"] || '';
    vars["LockPeriod(loanScenario)"] = String(vars["LockPeriod"]).trim();
    await page.locator("//button[text()[normalize-space() = \"Price\"]]").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Price\"]]").click();
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[contains(text(),'SEARCH FIELDS')]")).toBeVisible();
    await page.locator("//input[@placeholder=\"FICO\"]").clear();
    await page.locator("//input[@placeholder=\"FICO\"]").fill("800");
    vars["FicoInputValue(New)"] = await page.locator("//input[@placeholder=\"FICO\"]").inputValue() || '';
    await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").clear();
    await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").fill("78131");
    vars["ZipCode(New)"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
    await page.locator("//label[normalize-space()='Loan Type']/following-sibling::lib-bs2-multi-select").click();
    await page.locator("//li/span[text()=\" Conventional \"]").click();
    await page.locator("//li/span[normalize-space()=\"FHA\"]").click();
    vars["LoanTypeValue(New)"] = await page.locator("//li/span[normalize-space()=\"FHA\"]").textContent() || '';
    await page.locator("//label[normalize-space()='Lock Days']/following-sibling::lib-bs2-multi-select").click();
    await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
    await page.locator("//li[contains(@class,'lock-days-45-days') and contains(normalize-space(.),'45 days')]").click();
    vars["LockDays(New)"] = await page.locator("//li[contains(@class,'lock-days-45-days') and contains(normalize-space(.),'45 days')]").textContent() || '';
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    vars["SecondRateValue(table)"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[2]").textContent() || '';
    await expect(page.locator("//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    await page.locator("(//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"])[2]").hover();
    await expect(page.getByText("Export Pricing")).toBeVisible();
    await page.locator("(//div[@id='content']/search-tab-view-component[1]/div[1]/div[2]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[15]/div[1]/div[1]/div[1]/div[1]/a[1]/i[1] | //a[@ng-reflect-tooltip=\"Export Pricing\"])[2]").click();
    await page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Export Pricing\"]]")).toBeVisible();
    vars["RateValue(NewPricingResultScreen)"] = await page.locator("//th[normalize-space(.)=\"Rate\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["DaysLockValue(NewPricingResultScreen)"] = await page.locator("//th[normalize-space(.)=\"Days Lock\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["CreditScoreValue(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["MortgageTypeValue(NewPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Mortgage Type\"]/following-sibling::th[@data-th=\"New Pricing Results\"]").textContent() || '';
    vars["CreditScoreValue(OldPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]").textContent() || '';
    vars["RateValue(OldPricingResultScreen)"] = await page.locator("//th[normalize-space(.)=\"Rate\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]").textContent() || '';
    vars["DaysLockValue(OldPricingResultScreen)"] = await page.locator("//th[normalize-space(.)=\"Days Lock\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]").textContent() || '';
    vars["MortgageTypeValue(OldPricingResult)"] = await page.locator("//th[normalize-space(.)=\"Mortgage Type\"]/following-sibling::th[@data-th=\"Old Pricing Results\"]").textContent() || '';
    expect(String(vars["SecondRateValue(table)"])).toBe(vars["RateValue(NewPricingResultScreen)"]);
    expect(String(vars["LockDays(New)"])).toBe(vars["DaysLockValue(NewPricingResultScreen)"]);
    expect(String(vars["FicoInputValue(New)"])).toBe(vars["CreditScoreValue(NewPricingResult)"]);
    expect(String(vars["LoanTypeValue(New)"])).toBe(vars["MortgageTypeValue(NewPricingResult)"]);
    expect(String(vars["NoteRate(LoanScenario)"])).toBe(vars["RateValue(OldPricingResultScreen)"]);
    expect(String(vars["LockPeriod(loanScenario)"])).toBe(vars["DaysLockValue(OldPricingResultScreen)"]);
    expect(String(vars["Fico(LoanScenario)"])).toBe(vars["CreditScoreValue(OldPricingResult)"]);
    expect(String(vars["LoanType(LoanScenario)"])).toBe(vars["MortgageTypeValue(OldPricingResult)"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]")).toBeVisible();
    vars["ExportPricingSuccessMessage(Actual)"] = await page.locator("//div[text()[normalize-space() = \"Export pricing is successful\"]]").textContent() || '';
    vars["ExportPricingSuccessMessage(Expected)"] = "Export pricing is successful";
    expect(String(vars["ExportPricingSuccessMessage(Actual)"])).toBe(vars["ExportPricingSuccessMessage(Expected)"]);
    await expect(page.locator("//button[text()[normalize-space() = \"Ok\"]]")).toBeVisible();
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
