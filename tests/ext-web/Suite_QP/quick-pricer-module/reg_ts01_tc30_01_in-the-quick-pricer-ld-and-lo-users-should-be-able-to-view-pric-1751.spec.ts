import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC30_01_In the Quick Pricer, LD and LO users should be able to view pricing results but should not see any action buttons on the result rows.', async ({ page }) => {
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
      await page.locator("//label[@for=\"result-settingsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for='ppQuickPricerhideIneligibleResultsTab']").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Hide ineligible results tab Checkbox is unchecked */ {
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
      } else {
        await page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='ppQuickPricerhideIneligibleResultsTab']")).toBeVisible();
      }
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").scrollIntoViewIfNeeded();
      await page.locator("//label[@for=\"results-columnsQuickPricer\"]").click();
      await page.locator("//label[@for=\"keyColQuickPricerhideActionColumn\"]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Hide Action Column is unchecked */ {
        await expect(page.locator("//input[@id='keyColQuickPricerhideActionColumn']")).toBeVisible();
      } else {
        await page.locator("//input[@id='keyColQuickPricerhideActionColumn']").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("//input[@id='keyColQuickPricerhideActionColumn']")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Auto_Search_On_Change_Checkbox_Is_Checked(page, vars);
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
