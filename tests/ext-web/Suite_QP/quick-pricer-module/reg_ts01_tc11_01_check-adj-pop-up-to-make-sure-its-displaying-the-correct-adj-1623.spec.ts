import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC11_01_Check Adj Pop Up to make sure it\\\'s displaying the correct adj', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    await stepGroups.stepGroup_Configuration_Icon(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    if (true) /* Element Price Adj Column(Quick Pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
        await stepGroups.stepGroup_Price_Adj_and_Rate_Adj_for_Default_ui(page, vars);
        await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      }
    } else if (true) /* Element Price Adj Column(quick pricer) is visible */ {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
    }
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    // [DISABLED] Click on Program Column Data
    // await page.locator("//div/a[@placement=\"top\"]").click();
    vars["FirstRateValue(table)"] = await page.locator("(//th/a[normalize-space()=\"Rate\"]/ancestor::table//td//div/div)[1]\n").textContent() || '';
    vars["FirstPriceValue(table)"] = await page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div[1]").scrollIntoViewIfNeeded();
    await expect(page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div[1]")).toBeVisible();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.ADJ\"]/div[1]").click();
    await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    vars["RateValue(popup)"] = await page.locator("(//th[contains(text(),\"Rate\")]/..//div[@class=\"percent\"])[3]").getAttribute('title') || '';
    vars["PriceValue(popup price)"] = await page.locator("((//th[contains(text(),\"Price\")])[2]/../../..//div[@class=\"percent\"])[3]").getAttribute('title') || '';
    expect(String(vars["FirstRateValue(table)"])).toBe(vars["RateValue(popup)"]);
    expect(String(vars["FirstPriceValue(table)"])).toBe(vars["PriceValue(popup price)"]);
    await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
    if (true) /* Element Rate Adj Column(Quick Pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
        await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
        await stepGroups.stepGroup_Price_Adj_and_Rate_Adj_for_Default_ui(page, vars);
        await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      }
    } else if (true) /* Element Rate Adj Column(quick pricer) is visible */ {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]")).toBeVisible();
    }
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    vars["FirstRateValue(table)"] = await page.locator("(//th/a[normalize-space()=\"Rate\"]/ancestor::table//td//div/div)[1]\n").textContent() || '';
    vars["FirstPriceValue(table)"] = await page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]/div[1]").scrollIntoViewIfNeeded();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]/div[1]").click();
    await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    vars["RateValue(popup)"] = await page.locator("(//th[contains(text(),\"Rate\")]/..//div[@class=\"percent\"])[3]").getAttribute('title') || '';
    vars["PriceValue(popup price)"] = await page.locator("((//th[contains(text(),\"Price\")])[2]/../../..//div[@class=\"percent\"])[3]").getAttribute('title') || '';
    expect(String(vars["FirstRateValue(table)"])).toBe(vars["RateValue(popup)"]);
    expect(String(vars["FirstPriceValue(table)"])).toBe(vars["PriceValue(popup price)"]);
    await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
