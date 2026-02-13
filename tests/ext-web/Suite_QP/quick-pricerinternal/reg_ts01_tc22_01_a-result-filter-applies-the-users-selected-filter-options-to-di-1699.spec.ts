import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer(internal)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC22_01_A result filter applies the user’s selected filter options to display only the relevant results. It dynamically updates the output based on specific attributes', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await page.locator("//label[contains(@for,'result-settingsQuickPricer')]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Results Filter Checkbox is checked */ {
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
      } else {
        await page.locator("//input[@id='ppQuickPricershowResultsFilter']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='ppQuickPricershowResultsFilter']")).toBeVisible();
      }
      if (true) /* Checkbox Rate In Result Settings is checked */ {
        vars["Rate(ResultSettings)"] = "checked";
      } else {
        vars["Rate(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Price In Result Settings is checked */ {
        vars["Price(ResultSettings)"] = "checked";
      } else {
        vars["Price(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Loan Type Result Settings is checked */ {
        vars["LoanType(ResultSettings)"] = "checked";
      } else {
        vars["LoanType(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Loan Term Result Settings is checked */ {
        vars["LoanTerm(ResultSettings)"] = "checked";
      } else {
        vars["LoanTerm(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Program In Result Settings is checked */ {
        vars["Program(ResultSettings)"] = "checked";
      } else {
        vars["Program(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Lenders in Result Settings is checked */ {
        vars["Lenders(ResultSettings)"] = "checked";
      } else {
        vars["Lenders(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Enable Best X Filter Checkbox is checked */ {
        vars["BestX(ResultSettings)"] = "checked";
      } else {
        vars["BestX(ResultSettings)"] = "unchecked";
      }
      if (true) /* Checkbox Retain Applied Filters Checkbox is checked */ {
        vars["RetainApplied(ResultSettings)"] = "checked";
      } else {
        vars["RetainApplied(ResultSettings)"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[@id='result-filter-btn']")).toBeVisible();
    await page.locator("//button[@id='result-filter-btn']").click();
    if (String(vars["Rate(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]")).toBeVisible();
    }
    if (String(vars["Price(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]/../..//label[contains(text(),\" Price (Base\")]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]/../..//label[contains(text(),\" Price (Base\")]")).toBeVisible();
    }
    if (String(vars["LoanType(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"loan-type\" and text()[normalize-space() = \"Loan Type\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"loan-type\" and text()[normalize-space() = \"Loan Type\"]]")).toBeVisible();
    }
    if (String(vars["LoanTerm(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Loan Term\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Loan Term\"]]")).toBeVisible();
    }
    if (String(vars["Program(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"program-list\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"program-list\"]")).toBeVisible();
    }
    if (String(vars["Lenders(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"lender-list\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"lender-list\"]")).toBeVisible();
    }
    if (String(vars["BestX(ResultSettings)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"best-price\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"best-price\"]")).toBeVisible();
    }
    if (String(vars["RetainApplied(ResultSettings)"]) === String("checked")) {
      await page.locator("//input[@id='min-rate']").fill("1");
      await page.locator("//input[@id='max-rate']").fill("3");
      // [DISABLED] Click on Best X Pricing in Result filter
      // await page.locator("//label[@for=\"best-price\"]").click();
      await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[1]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[1]/div[1]/lib-result-filter-popover[1]/div[1]/div[1]/div[1]/i[1]").click();
      await page.locator("//input[@placeholder=\"FICO\"]").clear();
      await page.locator("//input[@placeholder=\"FICO\"]").fill("800");
      await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'visible' });
      await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
      await page.locator("//button[@id='result-filter-btn']").click();
      vars["MINValue"] = await page.locator("//input[@id='min-rate']").inputValue() || '';
      vars["MAXValue"] = await page.locator("//input[@id='max-rate']").inputValue() || '';
      expect(String(vars["MINValue"])).toBe("1");
      expect(String(vars["MAXValue"])).toBe("3");
    }
    await page.locator("//label[text()=\" Program \"]/..//span").click();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    vars["ProgramActual"] = await page.locator("//ul[@role=\"menu\"]/li[2]").textContent() || '';
    await page.locator("//div[@id='content']/search-tab-view-component[1]/div[1]/div[1]/div[2]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[1]/div[1]/lib-result-filter-popover[1]/div[1]/div[1]/div[1]/i[1]").click();
    // [DISABLED] Verify that the current page displays an element Program In Results Columns and With Scrollable TRUE
    // await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th/a[text()[normalize-space() = \"Program\"]]")).toBeVisible();
    vars["ProgramColumnDataExpected"] = await page.locator("//div/a[@placement=\"top\"]").textContent() || '';
    expect(String(vars["ProgramActual"])).toBe(vars["ProgramColumnDataExpected"]);
    await expect(page.locator("//small[text()[normalize-space() = \"Clear\"]]")).toBeVisible();
    await page.locator("//small[text()[normalize-space() = \"Clear\"]]").click();
    if (true) /* Element No Eligible Results Found is visible */ {
      await page.locator("//a[text()[normalize-space() = \"here\"]]").click();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
