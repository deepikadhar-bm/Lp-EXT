import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC28_02_Disqualified results will show up in the Ineligible tab.', async ({ page }) => {
    // Prerequisite: REG_TS01_TC28_01_Disqualified results will show up in the Ineligible tab.
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
      if (true) /* Checkbox Hide ineligible results tab Custom UI is unchecked */ {
        await expect(page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]")).toBeVisible();
      } else {
        await page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id=\"ppQuickPricer59hideIneligibleResultsTab\"]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await page.locator("//a[contains (text(), \"Ineligible\")]").click();
    await page.locator("(//th[text()[normalize-space() = \"Rate Adj.\"]])[2]").scrollIntoViewIfNeeded();
    for (let i = 0; i < await page.locator("(//th[normalize-space(text())='Price Adj'])[2]/ancestor::table//tbody//td[@data-label='COLUMN_NAME_ENUM.ADJ']//span[contains(@class,'text-danger')]").count(); i++) {
      await expect(page.locator("(//th[normalize-space(text())='Price Adj'])[2]/ancestor::table//tbody//td[@data-label='COLUMN_NAME_ENUM.ADJ']//span[contains(@class,'text-danger')]").nth(i)).toHaveText(String("Disq."));
    }
    for (let i = 0; i < await page.locator("(//th[normalize-space(text())='Rate Adj.'])[2]/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]//span[contains(@class,'text-danger')]").count(); i++) {
      await expect(page.locator("(//th[normalize-space(text())='Rate Adj.'])[2]/ancestor::table//tbody//td[@data-label=\"COLUMN_NAME_ENUM.RATE_ADJUSTMENT\"]//span[contains(@class,'text-danger')]").nth(i)).toHaveText(String("Disq."));
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
