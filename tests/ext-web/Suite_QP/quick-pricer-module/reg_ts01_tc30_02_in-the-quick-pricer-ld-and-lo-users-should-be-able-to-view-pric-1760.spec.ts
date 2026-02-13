import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC30_02_In the Quick Pricer, LD and LO users should be able to view pricing results but should not see any action buttons on the result rows.', async ({ page }) => {
    // Prerequisite: REG_TS01_TC30_01_In the Quick Pricer, LD and LO users should be able to view pricing results but sho
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
      await page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Hide ineligible checkbox(automation donot touch) is */ {
        await expect(page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]")).toBeVisible();
      }
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//label[contains(@for,\"results-columnsQuickPricer\")])[last()]").click();
      await page.locator("//input[@id=\"keyColQuickPricer59hideActionColumn\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Hide action column checkbox(custom ui) is checked */ {
        await page.locator("//input[@id=\"keyColQuickPricer59hideActionColumn\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"keyColQuickPricer59hideActionColumn\"]")).toBeVisible();
      } else {
        await expect(page.locator("//input[@id=\"keyColQuickPricer59hideActionColumn\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//i[@class=\"fal fa-lock-alt text-info\"]").count(); i++) {
      await expect(page.locator("//i[@class=\"fal fa-lock-alt text-info\"]").nth(i)).toBeDisabled();
    }
    await page.locator("//a[contains (text(), \"Ineligible\")]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//table[contains(@class, 'pricing') and contains(@class, 'shadow-sm') and contains(@class, 'table-hover') and contains(@class, 'table')])[2]//th[text()[normalize-space() = \"Actions\"]]")).toBeVisible();
    for (let i = 0; i < await page.locator("//i[@class=\"fal fa-lock-alt text-info\"]").count(); i++) {
      await expect(page.locator("//i[@class=\"fal fa-lock-alt text-info\"]").nth(i)).toBeDisabled();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
