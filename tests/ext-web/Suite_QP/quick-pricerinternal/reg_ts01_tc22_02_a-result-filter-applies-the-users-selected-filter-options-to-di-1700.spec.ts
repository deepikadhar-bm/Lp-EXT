import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer(internal)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC22_02_A result filter applies the user’s selected filter options to display only the relevant results. It dynamically updates the output based on specific attributes', async ({ page }) => {
    // Prerequisite: REG_TS01_TC22_01_A result filter applies the user’s selected filter options to display only the rele
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Show Results Filter CheckBox Custom UI is checked */ {
        await expect(page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]")).toBeVisible();
      }
      if (true) /* Checkbox Rate Result Settings CustomUI is checked */ {
        vars["Rate(CustomUI)"] = "checked";
      } else {
        vars["Rate(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Price CustomUI is checked */ {
        vars["Price(CustomUI)"] = "checked";
      } else {
        vars["Price(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Loan Type Custom UI is checked */ {
        vars["LoanType(CustomUI)"] = "checked";
      } else {
        vars["LoanType(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Loan Term Custom UI is checked */ {
        vars["LoanTerm(CustomUI)"] = "checked";
      } else {
        vars["LoanTerm(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Program Custom UI is checked */ {
        vars["Program(CustomUI)"] = "checked";
      } else {
        vars["Program(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Lenders CustomUI is checked */ {
        vars["Lenders(CustomUI)"] = "checked";
      } else {
        vars["Lenders(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Enable Best X Filter Custom UI is checked */ {
        vars["BestX(CustomUI)"] = "checked";
      } else {
        vars["BestX(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Retain Applied Filters Custom UI is checked */ {
        vars["RetainFilter(CustomUI)"] = "checked";
      } else {
        vars["RetainFilter(CustomUI)"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    } else {
      await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
      await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    }
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    if (true) /* Verify that the current page displays text Retrieving result */ {
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[@id='result-filter-btn']")).toBeVisible();
    await page.locator("//button[@id='result-filter-btn']").click();
    if (String(vars["Rate(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]")).toBeVisible();
    }
    if (String(vars["Price(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]/../..//label[contains(text(),\" Price (Base\")]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Rate\"]]/../..//label[contains(text(),\" Price (Base\")]")).toBeVisible();
    }
    if (String(vars["LoanType(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"loan-type\" and text()[normalize-space() = \"Loan Type\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"loan-type\" and text()[normalize-space() = \"Loan Type\"]]")).toBeVisible();
    }
    if (String(vars["LoanTerm(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[text()[normalize-space() = \"Loan Term\"]]")).toBeVisible();
    } else {
      await expect(page.locator("//label[text()[normalize-space() = \"Loan Term\"]]")).toBeVisible();
    }
    if (String(vars["Program(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"program-list\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"program-list\"]")).toBeVisible();
    }
    if (String(vars["Lenders(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"lender-list\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"lender-list\"]")).toBeVisible();
    }
    if (String(vars["BestX(CustomUI)"]) === String("checked")) {
      await expect(page.locator("//label[@for=\"best-price\"]")).toBeVisible();
    } else {
      await expect(page.locator("//label[@for=\"best-price\"]")).toBeVisible();
    }
    if (String(vars["RetainFilter(CustomUI)"]) === String("checked")) {
      await page.locator("//input[@id='min-rate']").clear();
      await page.locator("//input[@id='max-rate']").clear();
      await page.locator("//input[@id='min-rate']").fill("2");
      await page.locator("//input[@id='max-rate']").fill("4");
      // [DISABLED] Click on Best X Pricing In Result Filter
      // await page.locator("//label[@for=\"best-price\"]").click();
      await page.locator("//div/i[contains(@class,\"times-circle\")]").click();
      await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
      await page.locator("//input[@placeholder=\"FICO\"]").clear();
      await page.locator("//input[@placeholder=\"FICO\"]").fill("788");
      await expect(page.locator("//button[@aria-label=\"Search\"]")).toBeVisible();
      await page.locator("//button[@aria-label=\"Search\"]").click();
      await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
      await page.locator("//button[@id='result-filter-btn']").click();
    }
  });
});
