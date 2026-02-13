import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify historical pricing ', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    if (await page.locator("//span[.='Result Filter']").isVisible()) {
      await page.locator("//span[.='Result Filter']").click();
    }
    await expect(page.locator("//span[.='Pricing Date']")).toBeVisible();
    await page.locator("//span[.='Pricing Date']").click();
    await page.locator("//button[@class=\"previous\"]/span").click();
    if (true) /* Element Pricing Date Under Result Filter is visible */ {
      if (true) /* Element Set Date In Calendar is visible */ {
        vars["Date"] = String(Math.floor(Math.random() * (28 - 20 + 1)) + 20);
        await page.locator("//table[@class='days weeks']/tbody/tr/td/span[text()=\"$|Date|\" and not(contains(@class,\"is-other-month\")) and not(contains(@class,\"disabled\"))]").click();
        await expect(page.locator("//button[contains(.,'Cancel')]")).toBeVisible();
        await page.locator("//button[@aria-label=\"Set Date\"]").click();
        await page.waitForLoadState('networkidle');
      }
    }
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]")).toBeVisible();
    await page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]").click();
    await expect(page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]")).toBeVisible();
    await expect(page.locator("//span[.='Pricing Date']")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
