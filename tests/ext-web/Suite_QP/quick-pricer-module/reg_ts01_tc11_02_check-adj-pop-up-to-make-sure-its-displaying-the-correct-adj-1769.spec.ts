import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC11_02_Check Adj Pop Up to make sure it\\\'s displaying the correct adj', async ({ page }) => {
    // Prerequisite: REG_TS01_TC11_01_Check Adj Pop Up to make sure it's displaying the correct adj
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").waitFor({ state: 'visible' });
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").waitFor({ state: 'visible' });
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    if (true) /* Element Price Adj Column(quick pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await stepGroups.stepGroup_Verifying_Custom_UI_First_Pricing_Enabled(page, vars);
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
        await stepGroups.stepGroup_Price_Adj_and_Rate_Adj_for_Custom_ui(page, vars);
        await stepGroups.stepGroup_Verifying_quick_pricer_for_custom_UI(page, vars);
      }
    } else if (true) /* Element Price Adj Column(quick pricer) is visible */ {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Price Adj\"]")).toBeVisible();
    }
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    vars["FirstRateValue(table)"] = await page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td/div/div)[1]").textContent() || '';
    vars["FirstPriceValue(table)"] = await page.locator("(//table//th/a[normalize-space(.)=\"Rate\"]//following::td[@data-label=\"COLUMN_NAME_ENUM.PRICE\"]/div)[1]").getAttribute('title') || '';
    // [DISABLED] Remove the no of ( first,last ) positions of given string testdata and store into runtime variable runtime_testdata
    // vars["runtime_testdata"] = String("testdata").substring(0);
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]/div[1]").scrollIntoViewIfNeeded();
    await page.locator("//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]/div[1]").click();
    await page.locator("//h5[normalize-space()='Adjustments and Disqualifications']").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    vars["RateValue(popup)"] = await page.locator("(//th[contains(text(),\"Rate\")]/..//div[@class=\"percent\"])[3]").getAttribute('title') || '';
    vars["PriceValue(popup price)"] = await page.locator("\n(//th[contains(text(),\"Price\")]/..//td/div)[3]").getAttribute('title') || '';
    expect(String(vars["FirstRateValue(table)"])).toBe(vars["RateValue(popup)"]);
    expect(String(vars["FirstPriceValue(table)"])).toBe(vars["PriceValue(popup price)"]);
    await page.locator("//DIV[1]/LIB-DLG-COST-TO-BORROWER[1]/DIV[1]/DIV[1]/BUTTON[1]/SPAN[1]").click();
    if (true) /* Element Rate Adj Column(quick pricer) is not visible */ {
      if (true) /* Element Configuration Icon is visible */ {
        await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
        await stepGroups.stepGroup_Verifying_Custom_UI_First_Pricing_Enabled(page, vars);
        await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
        await stepGroups.stepGroup_Price_Adj_and_Rate_Adj_for_Custom_ui(page, vars);
        await stepGroups.stepGroup_Verifying_quick_pricer_for_custom_UI(page, vars);
      }
    } else if (true) /* Element Rate Adj Column(quick pricer) is visible */ {
      await expect(page.locator("//table[contains(@class, \"pricing\")]//th[normalize-space(text())=\"Rate Adj.\"]")).toBeVisible();
    }
    await stepGroups.stepGroup_Verifying_Rate_Adjustment_popup_detailsCustom_UI(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
