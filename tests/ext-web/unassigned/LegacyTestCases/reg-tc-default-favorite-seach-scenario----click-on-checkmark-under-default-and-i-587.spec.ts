import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Default Favorite Seach Scenario --> Click on checkmark under Default and it will be in green color', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//i[@class='fas fa-star yellow']")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await expect(page.locator("//h5[contains(text(),'Favorites')]")).toBeVisible();
    await page.locator("//tbody/tr[3]/td[2]/a[1]/i[1]").scrollIntoViewIfNeeded();
    await page.locator("//tbody/tr[3]/td[2]/a[1]/i[1]").check();
    await expect(page.locator("//tbody//tr//td//a//i[@class='fas fa-check-circle text-success']")).toHaveCSS('border', "rgba(40, 167, 69, 1)");
    vars["Default zipcode : Favorites"] = await page.locator("//a[contains(text(),'91106')]").textContent() || '';
    await page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn modal-close']").click();
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Default_zipcode_in_general_pricer_settings(page, vars);
      await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
      await expect(page.locator("//nav[@id='sidebar']//span[text()[normalize-space() = \"Pricing Scenario\"]]")).toBeVisible();
      await expect(page.locator("//input[@placeholder=\"Zip Code\"]")).toBeVisible();
      vars["Zip Code : Pricing Scenario"] = await page.locator("//input[@placeholder=\"Zip Code\"]").inputValue() || '';
      expect(String(vars["Default zipcode : Favorites"])).toBe(String(vars["Zip Code : Pricing Scenario"]));
      expect(String(vars["Default zipcode : Pricer Options"])).toBe(String(vars["Zip Code : Pricing Scenario"]));
      await stepGroups.stepGroup_SG_Logout(page, vars);
    } else {
      await stepGroups.stepGroup_SG_Logout(page, vars);
      await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
      await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
      await stepGroups.stepGroup_Favorites_Icon(page, vars);
      await expect(page.locator("//input[@placeholder=\"Zip Code\"]")).toBeVisible();
      vars["Zip Code : Pricing Scenario"] = await page.locator("//input[@placeholder=\"Zip Code\"]").inputValue() || '';
      expect(String(vars["Default zipcode : Favorites"])).toBe(String(vars["Zip Code : Pricing Scenario"]));
      await stepGroups.stepGroup_SG_Logout(page, vars);
    }
  });
});
