import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Verify Pricing On Quick Pricer', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify pricing adjustments modal opens and data matches pricer', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    vars["Price Value Under Table"] = await page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[3]/div)[1]").getAttribute('title') || '';
    await expect(page.locator("(//lib-pricing-result-table/table/thead/tr/th[contains(normalize-space(),'Price Adj')])[1]")).toBeVisible();
    await page.locator("(//lib-pricing-result-table/table/thead/tr/th[contains(normalize-space(),'Price Adj')])[1]").scrollIntoViewIfNeeded();
    await page.locator("(//td[@data-label='COLUMN_NAME_ENUM.ADJ']/div)[1]").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//h5[normalize-space()='Fees and Costs']")).toBeVisible();
    await page.locator("//i[@class='fas fa-plus-square mr-3']").click();
    await expect(page.locator("//table[@class=\"adj-dlg\"]")).toBeVisible();
    await page.locator("//i[@class='fas fa-minus-square mr-3']").click();
    await expect(page.locator("//h5[normalize-space()='Adjustments and Disqualifications']")).toBeVisible();
    await page.locator("//div[@class='modal-body']//div[2]//div[1]//a[1]//i[1]").click();
    vars["Price In Adjustments"] = await page.locator("//lib-dlg-cost-to-borrower[1]//table[@class='adj-dlg']/tbody[1]/tr[1]/td[3]/div").getAttribute('title') || '';
    await page.locator("//lib-dlg-cost-to-borrower//button[@class='btn modal-close']").click();
    expect(String(vars["Price Value Under Table"])).toBe(String(vars["Price In Adjustments"]));
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
