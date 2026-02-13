import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Export_Pricing_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS05_TC04_If Price is selected it will take user to Pricing Page where all the above steps will be done', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_PricedManual_Policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_Priced_Statu(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    vars["LTVValuePipeline"] = await page.locator("//span[text()=\"LTV\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["LoanTypePipeline"] = await page.locator("//span[text()=\"Loan Type\"]/../..//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["TotalLoanAmountPipeline"] = await page.locator("//span[text()=\"Total Loan Amount\"]/../..//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["LockDaysPipeline"] = await page.locator("//span[text()=\"Lock Period\"]/../..//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["LockDaysPipeline"] = /* toLowercase(string) */ '';
    vars["LockDaysPipeline"] = String(vars["LockDaysPipeline"]).replace(/lock/g, '');
    vars["LoanPurposePipeline"] = await page.locator("//span[contains(text(),\"Loan Purpose\")]/../..//div").textContent() || '';
    vars["CityStateZipPipeline"] = await page.locator("(//span[text()=\"City, State and Zip\"]/following::div)[1]").textContent() || '';
    vars["City"] = String('').split(",")["0"] || '';
    vars["CityPipeline"] = String(vars["City"]).trim();
    vars["State"] = String('').split(",")["1"] || '';
    vars["Zip"] = String('').split(",")["2"] || '';
    vars["StatePipeline"] = String(vars["State"]).trim();
    vars["ZipPipeline"] = String(vars["Zip"]).trim();
    vars["AppraisedValuePipline"] = await page.locator("//span[text()=\"Appraised Value\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["PurshasePricePipline"] = await page.locator("//span[text()=\"Purchase Price\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["FicoScorePipline"] = await page.locator("(//span[text()=\"FICO Score\"]/following::div)[1]").textContent() || '';
    vars["AmortizationTypePipline"] = await page.locator("//span[text()=\"Amortization Type\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["PurchaseAsPipline"] = await page.locator("//span[text()=\"Purchase as\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    vars["TermYearPipline"] = await page.locator("//span[text()=\"Terms\"]/ancestor::div[1]//div[contains(@class,\"text-right\")]").textContent() || '';
    await page.locator("//button[text()[normalize-space() = \"Price\"]]").scrollIntoViewIfNeeded();
    await page.locator("//button[text()[normalize-space() = \"Price\"]]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    vars["LTVValueSearchField"] = await page.locator("//input[@placeholder=\"LTV\"]").inputValue() || '';
    vars["LoanTypeSearchField"] = await page.locator("//button[text()[normalize-space() = \"Conventional\"]]").textContent() || '';
    vars["LoanAmountSearchField"] = await page.locator("//input[@placeholder=\"Loan Amount\"]").inputValue() || '';
    await expect(page.locator("//div[contains(@class,'lock-days')]//button")).toBeVisible();
    vars["LockDaysSearchField"] = await page.locator("//div[contains(@class,'lock-days')]//button").textContent() || '';
    await expect(page.locator("//select[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]")).toBeVisible();
    vars["LoanPurposeSearchField"] = await page.locator("//select[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["StateSearchField"] = await page.locator("//select[@aria-label=\"State\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["ZipSearchField"] = await page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]").inputValue() || '';
    vars["AppraisedValueSearchField"] = await page.locator("//label/../div/input[@id=\"appraisedPrice\" or @placeholder =\"Appraised Value\"]").inputValue() || '';
    vars["PurchasePriceSearchField"] = await page.locator("//label/../div/input[@id=\"purchasePrice\" or @placeholder =\"Purchase Price\"]").inputValue() || '';
    vars["FicoSearchField"] = await page.locator("//input[@placeholder=\"FICO\"]").inputValue() || '';
    await expect(page.locator("//*[@class='custom-select-wrap amortization-type']")).toBeVisible();
    vars["AmortizationTypeSearchField"] = await page.locator("//*[@class='custom-select-wrap amortization-type']").textContent() || '';
    vars["OccupancySearchField"] = await page.locator("//select[@id='side-property-use' or @aria-label=\"Occupancy\"]").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["CountySearchField"] = await page.locator("//label[contains(text(),\"County\")]/..//select").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    vars["TermYearSearchField"] = await page.locator("//div[contains(@class,'term-years')]").textContent() || '';
    expect(String(vars["LTVValuePipeline"])).toBe(vars["LTVValueSearchField"]);
    expect(String(vars["LoanTypePipeline"])).toBe(vars["LoanTypeSearchField"]);
    expect(String(vars["TotalLoanAmountPipeline"])).toBe(vars["LoanAmountSearchField"]);
    expect(String(vars["LoanPurposePipeline"])).toBe(vars["LoanPurposeSearchField"]);
    expect(String(vars["AmortizationTypePipline"])).toBe(vars["AmortizationTypeSearchField"]);
    expect(String(vars["FicoScorePipline"])).toBe(vars["FicoSearchField"]);
    expect(String(vars["PurshasePricePipline"])).toBe(vars["PurchasePriceSearchField"]);
    expect(String(vars["AppraisedValuePipline"])).toBe(vars["AppraisedValueSearchField"]);
    expect(String(vars["ZipPipeline"])).toBe(vars["ZipSearchField"]);
    expect(String(vars["LockDaysPipeline"])).toBe(vars["LockDaysSearchField"]);
    expect(String(vars["PurchaseAsPipline"])).toBe(vars["OccupancySearchField"]);
    if (String(vars["CityPipeline"]) === String(vars["CountySearchField"])) {
    } else {
      expect(String(vars["CountySearchField"])).toBe(vars["CityPipeline"]);
    }
    expect(String(vars["TermYearPipline"])).toBe(vars["TermYearSearchField"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
