import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Copy of (Pre-cond: Config - CustomUI)', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await page.locator("//a[@aria-label='Config']//span[@class='dlp-icon fal fa-cogs']").click();
    await page.locator("//a[text()[normalize-space() = \"Loan Pricer Configuration\"]]").click();
    if (true) /* Checkbox Custom UI Checkbox In Loan Pricer is unchecked */ {
      // [DISABLED] Check the checkbox Custom UI Checkbox In Loan Pricer
      // await page.locator("//input[@id=\"customUIMain\"]").check();
      await page.locator("//input[@id=\"customUIMain\"]").click();
    } else {
      await expect(page.locator("//input[@id=\"customUIMain\"]")).toBeVisible();
    }
    await page.locator("//button[contains(text(),'Save')]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),'Save')]").click();
    await page.locator("//span[contains(text(),'Success')]").waitFor({ state: 'visible' });
    await page.locator("//button[.='Ok ']").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
