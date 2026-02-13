import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Suite: PPE Check Private Pricing', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: PPE Select Loan Type', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_PPE(page, vars);
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("//md-select[@aria-label=\"Loan Type: \n\t         \t\t\t\t Conventional loans\n\t          \t \t\t\"]//span[contains(@class, 'md-select-icon')]").click();
    await page.locator("//div[@id='menu']/following-sibling::div[contains(@class, 'md-select-menu-container')]//md-content[contains(@class, 'md-privatePricing-theme')]").evaluate((el, y) => { (el as HTMLElement).scrollTop = y; }, parseInt("40"));
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[39]//div[contains(@class, 'md-container')]").click();
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[38]").click();
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[40]//div[contains(@class, 'md-container')]").click();
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[39]//div[contains(@class, 'md-container')]").click();
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[39]//div[contains(@class, 'md-container')]").click();
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
    await page.locator("(//md-option[contains(@class, 'md-checkbox-enabled') and contains(@class, 'md-ink-ripple')])[38]//div[contains(@class, 'md-container')]").click();
    await page.locator("//td[@name='RATE']").waitFor({ state: 'visible' });
  });
});
