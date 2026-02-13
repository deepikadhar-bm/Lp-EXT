import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Relock - Verification of Expired Loans (Override) [ Standard UI UAT ]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Pre-cond: Config - Standard UI [Loan Pricer]', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await page.locator("//a[@aria-label='Config']//span[@class='dlp-icon fal fa-cogs']").click();
    await page.locator("//a[.=\"Loan Pricer Configuration\"]").click();
    if (true) /* Checkbox Enable Custom UI Under Loan Pricing is checked */ {
      await page.locator("//label[text()=\" Enable Custom UI \"]/../input").uncheck();
    } else {
      await expect(page.locator("//label[text()=\" Enable Custom UI \"]/../input")).toBeVisible();
    }
    await page.locator("//button[contains(text(),'Save')]").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),'Save')]").click();
    await page.locator("//span[contains(text(),'Success')]").waitFor({ state: 'visible' });
    await page.locator("//button[.='Ok ']").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
