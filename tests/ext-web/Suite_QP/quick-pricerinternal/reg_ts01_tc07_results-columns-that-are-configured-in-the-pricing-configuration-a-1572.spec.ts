import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer(internal)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC07_Results Columns that are configured in the pricing configuration appear in the pricing results', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await page.locator("//label[@for=\"qmResultTypeQuickPricer\"]").click();
      await page.locator("//label[contains(@for,'pricer-optionsQuickPricer')]").click();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await stepGroups.stepGroup_Results_columns_in_pricing_configuration(page, vars);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await page.locator("//div[@class=\"result-panel\"]\n").waitFor({ state: 'visible' });
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await stepGroups.stepGroup_Verification_in_Results_Columns_Quick_pricer(page, vars);
    if (String(vars["MI"]) === String("checked")) {
      await page.locator("//label[normalize-space(text())=\"LTV\"]").scrollIntoViewIfNeeded();
      vars["LTVSearchFieldValue"] = await page.locator("//input[@placeholder=\"LTV\"]").inputValue() || '';
      if (String(vars["LTVSearchFieldValue"]) <= String("80.000 %")) {
        await page.locator("//input[@placeholder=\"LTV\"]").clear();
        vars["NewLTV Value"] = String(Math.floor(Math.random() * (90 - 81 + 1)) + 81);
        await page.locator("//input[@placeholder=\"LTV\"]").fill(vars["NewLTV Value"]);
        await page.locator("//select[@id='PMIType']").scrollIntoViewIfNeeded();
        await page.locator("//select[@id='PMIType']").click();
        await page.locator("//select[@id='PMIType']").selectOption({ index: parseInt("02") });
        await expect(page.locator("//label[contains(normalize-space(text()), \"Select MI Company\")] ")).toBeVisible();
        await page.locator("//select[@id='miCompany']").click();
        await page.locator("//select[@id='miCompany']").selectOption({ label: "Enact" });
        await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
        await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
        await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
        await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
      } else {
        await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
      }
    } else {
      expect(String(vars["LTVSearchFieldValue"])).toBe("80.000 %");
      await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
      await expect(page.locator("(//table/thead//th[text()=\" MI \"])[1]")).toBeVisible();
    }
    if (true) /* Verify if ShowArm == checked */ {
      // [DISABLED] Scroll down to the element Amortization Type in serach field into view
      // await page.locator("//label[text()[normalize-space() = \"Amortization Type\"]]").scrollIntoViewIfNeeded();
      // [DISABLED] Click on Amortization Type Dropdown
      // await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
      // [DISABLED] Click on ARM dropdown option in amortization type
      // await page.locator("//li[contains(@class,\"amortization-type-arm\")]//*[contains(text(),\"ARM\")]").click();
      // [DISABLED] Verifying Auto Search On Change Checkbox Is Checked
      // await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
      // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
      // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
      // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
      if (true) /* Element 30 Years Variable Conventional Purchase is visible */ {
        // [DISABLED] Click on 30 Years Variable Conventional Purchase
        // await page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div").click();
      }
      // [DISABLED] Verify that the element Arm Margin or Margin in column is present and With Scrollable FALSE
      // await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Margin\"]]")).toBeVisible();
    } else {
      // [DISABLED] Verify that the element Arm Margin in column is not present and With Scrollable FALSE
      // await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[1]//th[text()[normalize-space() = \"Margin\"]]")).toBeVisible();
    }
    if (String(vars["CompPlanInDollars"]) === String("checked")) {
      if (true) /* Element CompPlan all cell data with null has attribute data  */ {
        await expect(page.locator("//div[@class=\"percent-complan\" and @data=\"null / null\"]")).toHaveAttribute('aria-label', "null");
      } else {
        // [DISABLED] Verify that the element CompPlan all cell data with dollar contains value $ for data and With Scrollable FALSE
        // await expect(page.locator("//div[@class=\"percent-complan\" and not(contains(@data, \"null / null\"))]")).toHaveAttribute('aria-label', "$");
      }
      if (true) /* Element CompPlan all cell data with dollar is visible */ {
        vars["DataWithDollar"] = await page.locator("//div[@class=\"percent-complan\" and not(contains(@data, \"null / null\"))]").getAttribute('title') || '';
        expect(String(vars["DataWithDollar"])).toBe("$");
      }
      // [DISABLED] Store 1 in count
      // vars["count"] = "1";
      // [DISABLED] Store the count of elements identified by locator CompPlan common row into a variable ComPlanCellData
      // vars["ComPlanCellData"] = String(await page.locator("//div[@class=\"percent-complan\"]").count());
      while (true) /* Verify if count <= ComPlanCellData */ {
        // [DISABLED] Store the value for the attribute data of the element ComPplan common row with count into a variable CompPlanData
        // vars["CompPlanData"] = await page.locator("(//div[@class=\"percent-complan\"])[$|count|]").getAttribute('title') || '';
        if (true) /* Element ComPplan common row with count has attribute data va */ {
          // [DISABLED] Verify that the element ComPplan common row with count contains value null for data and With Scrollable TRUE
          // await expect(page.locator("(//div[@class=\"percent-complan\"])[$|count|]")).toHaveAttribute('aria-label', "null");
        } else if (true) /* Verify if ComPlanCellData contains $ */ {
          // [DISABLED] Verify that the element ComPplan common row with count contains value $ for data and With Scrollable TRUE
          // await expect(page.locator("(//div[@class=\"percent-complan\"])[$|count|]")).toHaveAttribute('aria-label', "$");
        }
      }
      // [DISABLED] Perform addition on 1 and count and store the result inside a count considering 0 decimal places
      // vars["count"] = (parseFloat(String("1")) + parseFloat(String(vars["count"]))).toFixed(0);
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
