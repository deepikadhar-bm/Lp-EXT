import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify loan filters (Rate/Price/Program/Lender)', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await stepGroups.stepGroup_SG_Verify_Incrementing_Rates_by_125(page, vars);
    await page.locator("//label[normalize-space()=\"Lenders\"]/following-sibling::div/app-bs-multi-select").click();
    await page.locator("//bs-dropdown-container/div/ul/li[1]").click();
    if (true) /* Element EPM Option In Lenders Dropdown is visible */ {
      vars["Lender Name under Lender Dropdown"] = await page.locator("//bs-dropdown-container/div/ul/li[2]").textContent() || '';
      await page.locator("//bs-dropdown-container/div/ul/li[2]").click();
    } else {
      await page.locator("(//app-bs-multi-select[@id='lender-list'])[1]").click();
      vars["Lender Name under Lender Dropdown"] = await page.locator("//bs-dropdown-container/div/ul/li[2]").getAttribute('title') || '';
    }
    await page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='lender-list'][normalize-space()='Lenders'])[1]").click();
    await page.locator("//th[text()=' Lender ']").scrollIntoViewIfNeeded();
    vars["Lender Name under Lender Name"] = await page.locator("//th[normalize-space()='Lender']/ancestor::table//tr[1]/td[@data-label=\"COLUMN_NAME_ENUM.LENDER\"]/div[1]").textContent() || '';
    expect(String(vars["Lender Name under Lender Name"])).toBe(String(vars["Lender Name under Lender Dropdown"]));
    await expect(page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='program-list'][normalize-space()='Program'])[1]")).toBeVisible();
    await page.locator("(//app-bs-multi-select[@id='program-list'])[1]").click();
    await page.locator("//bs-dropdown-container/div/ul/li[1]").click();
    await page.locator("//bs-dropdown-container/div/ul/li[2]").click();
    vars["Program Name under Program Dropdown"] = await page.locator("//bs-dropdown-container/div/ul/li[2]").textContent() || '';
    vars["Program name from dropdown"] = String(vars["Program Name under Program Dropdown"]).trim();
    await page.locator("//th[text()=' Program ']").scrollIntoViewIfNeeded();
    vars["Program Name under Program Column"] = await page.locator("//th[text()=' Program ']/../../..//div[@container=\"body\"]").textContent() || '';
    vars["Program Name from column"] = String(vars["Program Name under Program Column"]).trim();
    expect(String(vars["Program name from dropdown"])).toBe(String(vars["Program Name from column"]));
    await page.locator("//bs-dropdown-container/div/ul/li[1]").click();
    await page.locator("(//div[@id='result-filter']/div[@class='pricing-banner']//label[@for='program-list'][normalize-space()='Program'])[1]").click();
    await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Rate_Filter_Verification(page, vars);
    await stepGroups.stepGroup_SG_Clear_filters(page, vars);
    await stepGroups.stepGroup_SG_Price_Filter_Verification(page, vars);
    vars["PriceData"] = await page.locator("//div[@class=\"percent\" and @ng-reflect-klass=\"percent\"]").getAttribute('title') || '';
    vars["Price Data After Substraction"] = (parseFloat(String("100")) - parseFloat(String(vars["PriceData"]))).toFixed(3);
    await page.locator("(//lib-pricing-result-table/table/thead/tr/th[3]/a)[1]").click();
    vars["Price Data After Clicked on Price Toggle"] = await page.locator("//div[@class=\"percent\" and @ng-reflect-klass=\"percent\"]").getAttribute('title') || '';
    expect(String(vars["Price Data After Substraction"])).toBe(String(vars["Price Data After Clicked on Price Toggle"]));
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
