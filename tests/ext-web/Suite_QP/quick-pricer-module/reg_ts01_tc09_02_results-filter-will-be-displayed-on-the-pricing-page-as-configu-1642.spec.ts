import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC09_02_Results Filter will be displayed on the pricing page as configured in the Results Settings(Custom UI)', async ({ page }) => {
    // Prerequisite: REG_TS01_TC09_01_Results Filter will be displayed on the pricing page as configured in the Results S
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
      await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await expect(page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]")).toBeVisible();
      if (true) /* Checkbox Results Filter checkbox(automation donot touch) is  */ {
        await expect(page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]")).toBeVisible();
        vars["ResultsFilter(CustomUI)"] = "checked";
      } else {
        await expect(page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]")).toBeVisible();
        vars["ResultsFilter(CustomUI)"] = "unchecked";
      }
      if (true) /* Checkbox Hide Ineligible Checkbox(Automation Donot touch) is */ {
        vars["HideIneligibleTab(custom ui)"] = "checked";
      } else {
        await expect(page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]")).toBeVisible();
        vars["HideIneligibleTab(custom ui)"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    } else {
      await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
      await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
      await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
      await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
      await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
      if (String(vars["HideIneligibleTab(custom ui)"]) === String("checked")) {
        await expect(page.locator("//a[contains (text(), \"Ineligible\")]")).toBeVisible();
      } else if (String(vars["HideIneligibleTab(custom ui)"]) === String("unchecked")) {
        await expect(page.locator("//a[contains (text(), \"Ineligible\")]")).toBeVisible();
      }
    }
    await page.locator("//div[contains(@class, 'collapse') and contains(@class, 'navbar-collapse') and contains(@class, 'menu-items')]/UL[1]/LI[3]/A[1]/SPAN[1]").click();
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    if (String(vars["ResultsFilter(CustomUI)"]) === String("checked")) {
      await expect(page.locator("(//button[@id='result-filter-btn'])[1]")).toBeVisible();
    } else if (String(vars["ResultsFilter(CustomUI)"]) === String("unchecked")) {
      await expect(page.locator("(//button[@id='result-filter-btn'])[1]")).toBeVisible();
      if (true) /* Element Configuration Icon is visible */ {
        await page.locator("//a[@aria-label=\"Config\"]//span").click();
        await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
        await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
        await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
        await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
        await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
        await page.locator("(//label[text()=\"Result Settings\" and contains(@for,\"QuickPricer\")])[last()]").scrollIntoViewIfNeeded();
        await page.locator("//input[@id=\"ppQuickPricer59showResultsFilter\"]").evaluate(el => (el as HTMLElement).click());
        vars["ResultsFilter(CustomUI)"] = "checked";
        await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
        await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
        await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
        await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
        await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
        await expect(page.locator("(//button[@id='result-filter-btn'])[1]")).toBeVisible();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
