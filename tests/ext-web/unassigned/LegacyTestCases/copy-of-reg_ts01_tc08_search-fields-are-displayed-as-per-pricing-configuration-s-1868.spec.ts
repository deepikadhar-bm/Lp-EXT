import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (REG_TS01_TC08_Search fields are displayed as per pricing configuration settings for Quick Pricer)', async ({ page }) => {
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
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").scrollIntoViewIfNeeded();
      await expect(page.locator("//label[contains(@for,'search-fieldsQuickPricer')]")).toBeVisible();
      await page.locator("//label[contains(@for,'search-fieldsQuickPricer')]").click();
      if (true) /* Checkbox Admin Fee Checkbox is checked */ {
        vars["Admin fee"] = "checked";
      } else {
        vars["Admin fee"] = "unchecked";
      }
      if (true) /* Checkbox Compensation Type Options Checkbox(default) is chec */ {
        vars["Compensation type option"] = "checked";
      } else {
        vars["Compensation type option"] = "unchecked";
      }
      if (true) /* Checkbox DTI Checkbox(default) is checked */ {
        vars["DTI in search"] = "checked";
      } else {
        vars["DTI in search"] = "unchecked";
      }
      if (true) /* Checkbox Hide Product Finder(default ui) is checked */ {
        vars["HideProductFinder"] = "checked";
      } else {
        if (true) /* Checkbox Show Options in Dialog(default ui) is checked */ {
          await page.locator("//label[@for='keyFieldQuickPricerspecialMortgageOptionCategoryDialog']/..//input").evaluate(el => (el as HTMLElement).click());
        }
        vars["HideProductFinder"] = "unchecked";
      }
      if (true) /* Checkbox Impound In Search(default) is checked */ {
        vars["Impound "] = "checked";
      } else {
        vars["Impound "] = "unchecked";
      }
      if (true) /* Checkbox Interest Only(defaultui) is checked */ {
        vars["InterestOnly"] = "checked";
      } else {
        vars["InterestOnly"] = "unchecked";
      }
      if (true) /* Checkbox First Time Home Buyer Checkbox(default) is checked */ {
        vars["Home buyer "] = "checked";
      } else {
        vars["Home buyer "] = "unchecked";
      }
      if (true) /* Checkbox Show Options in Dialog Search Field(default) is che */ {
        vars["ShowOptionsinDialog"] = "checked";
      } else {
        vars["ShowOptionsinDialog"] = "unchecked";
      }
      if (true) /* Checkbox Default Lock Day(default) is checked */ {
        vars["DefaultLockDay"] = "checked";
      } else {
        vars["DefaultLockDay"] = "unchecked";
      }
      if (true) /* Checkbox Backend DTI Checkbox(default ui) is checked */ {
        vars["BackendDTI"] = "checked";
      } else {
        vars["BackendDTI"] = "unchecked";
      }
      if (true) /* Checkbox Show Compensation Type(default) is checked */ {
        vars["ShowCompensationType"] = "checked";
      } else {
        vars["ShowCompensationType"] = "unchecked";
      }
      if (true) /* Checkbox Lock Days(default) is checked */ {
        vars["LockDays"] = "checked";
      } else {
        vars["LockDays"] = "unchecked";
      }
      if (true) /* Checkbox PMI Search Field(default) is checked */ {
        vars["PMI"] = "checked";
      } else {
        vars["PMI"] = "unchecked";
      }
      if (true) /* Checkbox My Lenders and Compensation is checked */ {
        vars["MyLendersandCompensation"] = "checked";
      } else {
        vars["MyLendersandCompensation"] = "unchecked";
      }
      if (true) /* Checkbox Show Customized Smo Categories(default) is checked */ {
        vars["CustomizedSmoCategories"] = "checked";
      } else {
        vars["CustomizedSmoCategories"] = "unchecked";
      }
      if (true) /* Checkbox Income And Debt Checkbox(default) is checked */ {
        vars["IncomeorDebt"] = "checked";
      } else {
        vars["IncomeorDebt"] = "unchecked";
      }
      if (true) /* Checkbox My Lenders And Comp is checked */ {
        vars["MyLendersAndComp"] = "checked";
      } else {
        vars["MyLendersAndComp"] = "unchecked";
      }
      if (true) /* Checkbox Property Valuation Type Checkbox(default) is checke */ {
        vars["Property valuation "] = "checked";
      } else {
        vars["Property valuation "] = "unchecked";
      }
      if (true) /* Checkbox Show Compensation Percent Checkbox(default) is chec */ {
        vars["Compensation percent "] = "checked";
      } else {
        vars["Compensation percent "] = "unchecked";
      }
      if (true) /* Checkbox AmI Information Checkbox(default) is checked */ {
        vars["AMI information "] = "checked";
      } else {
        vars["AMI information"] = "unchecked";
      }
      if (true) /* Checkbox Qm Filter Checkbox(default) is checked */ {
        vars["QM filter"] = "checked";
      } else {
        vars["QM filter"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_AUS_In_Search_Fields(page, vars);
    }
  });
});
