import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Get Queue data for LD', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await page.locator("//a[contains(@class, 'extra-menu-dropdown') and contains(@class, 'dropdown-toggle')]").click();
    await page.locator("//a[contains(text(),\"Queue\")]").click();
    await page.locator("//button[@class='btn btn-refresh']/span").click();
    await page.locator("//span[contains(text(),\"Loan Number\")]/preceding-sibling::input[contains(@class, 'filter-input')]").fill(vars["LoanID"]);
    await page.locator("//select[contains(@class, 'filter-select')]").selectOption({ index: parseInt("0") });
    await page.locator("//*[@class='table-responsive']/table").filter({ hasText: String(vars["LoanID"]) }).click();
    // TODO: Find row in table containing text
    vars["rowNum"] = '0'; // Manual: find row in Queue Table containing ''
    await page.screenshot({ fullPage: true });
    if (true) /* Element Queue Error Status is visible */ {
      await page.locator("//TBODY[1]/TR[1]/TD[8]/BUTTON[2]").click();
      page.once('dialog', dialog => {
        expect(dialog.message()).toContain("Error Message");
        dialog.accept();
      });
      await page.screenshot({ fullPage: true });
      await page.locator("//div[contains(text(),\"Error On this Item:This price is no longer valid and or has become stale. You must re-run pricing before submitting a lock request.\")]/following-sibling::div[contains(@class, 'modal-footer')]/DIV[1]/DIV[1]/BUTTON[1]").click();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
