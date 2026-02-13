import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: PPE Verify Mi Column', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: PPE Verify Mi Column', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_PPE(page, vars);
    await page.waitForLoadState('networkidle');
    await page.locator("//input[@id='ltvId']").clear();
    await page.locator("//input[@id='ltvId']").fill("81");
    await expect(page.locator("//td[@name='MI']")).toBeVisible();
    await page.waitForTimeout(3000);
    await page.locator("//input[@id='ltvId']").clear();
    await page.locator("//input[@id='ltvId']").fill("79");
    await expect(page.locator("//td[@name='MI']")).toBeVisible();
  });
});
