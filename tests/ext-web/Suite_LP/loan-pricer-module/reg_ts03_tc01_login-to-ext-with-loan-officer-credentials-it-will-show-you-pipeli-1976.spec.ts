import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS03_TC01_Login to EXT with Loan Officer Credentials, it will show you Pipeline with the Loan you created in Encompass', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Pipeline\"]//span")).toBeVisible();
    await page.locator("//a[@aria-label=\"Pipeline\"]//span").click();
    await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    await page.locator("//input[@id='searchText']").fill("loan, Automation");
    await page.waitForTimeout(30000);
    await page.waitForLoadState('networkidle');
    vars["TotalRowCount"] = String(await page.locator("//tbody/tr").count());
    vars["UserCount"] = String(await page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]").count());
    if (String(vars["UserCount"]) !== String(vars["TotalRowCount"])) {
      for (let i = 0; i < await page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]").count(); i++) {
        await expect(page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]").nth(i)).toBeDisabled();
      }
    } else if (String(vars["UserCount"]) === String(vars["TotalRowCount"])) {
      for (let i = 0; i < await page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]").count(); i++) {
        await expect(page.locator("//tr //td[@data-title=\"Loan Officer\"] /div[normalize-space()=\"@|Loan Officer User|\"]").nth(i)).toBeDisabled();
      }
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
