import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC10_Impersonate field is not available to the Loan Officer user', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    await stepGroups.stepGroup_Configuration_Icon(page, vars);
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await stepGroups.stepGroup_Verifying_Impersonate_and_Enter_data_in_impersonate_input_fi(page, vars);
    await page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]").click();
    await expect(page.locator("//input[@id='impersonateText']")).toHaveValue("Self");
    await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
    await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
    await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await stepGroups.stepGroup_Verifying_Impersonate_and_Enter_data_in_impersonate_input_fi(page, vars);
    await page.locator("//button[@aria-label=\"Clear User-Impersonation Search\"]").click();
    await expect(page.locator("//input[@id='impersonateText']")).toHaveValue("Self");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
