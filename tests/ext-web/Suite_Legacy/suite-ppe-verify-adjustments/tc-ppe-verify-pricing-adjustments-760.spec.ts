import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: PPE Verify Adjustments', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: PPE Verify Pricing Adjustments', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_PPE(page, vars);
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("(//a[contains(@class, 'currency') and contains(@class, 'md-privatePricing-theme')])[1]").click();
    await stepGroups.stepGroup_PPE_Verify_Adjustments(page, vars);
  });
});
