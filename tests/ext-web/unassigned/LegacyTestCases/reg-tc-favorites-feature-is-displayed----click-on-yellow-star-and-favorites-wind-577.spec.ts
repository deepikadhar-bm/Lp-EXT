import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Favorites Feature is displayed --> Click on Yellow Star and Favorites window will pop up ', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//i[@class='fas fa-star yellow']")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await expect(page.locator("//h5[contains(text(),'Favorites')]")).toBeVisible();
    await expect(page.locator("//label[.=' Name ']")).toBeVisible();
    await expect(page.locator("//input[@id='favorite']")).toBeVisible();
    await expect(page.locator("//i[@class='fas fa-plus text-grey']")).toBeVisible();
    await expect(page.locator("//th[contains(text(),'Name')]")).toBeVisible();
    await expect(page.locator("//th[contains(text(),'Default')]")).toBeVisible();
    await expect(page.locator("//th[text()='Action']")).toBeVisible();
    await expect(page.locator("//a[contains(text(),'Purchase')]")).toBeVisible();
    await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n")).toBeVisible();
    await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class,\"text-danger\")]")).toBeVisible();
    await expect(page.locator("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn modal-close']")).toBeVisible();
    vars["Saved search scenario"] = await page.locator("//table[1]/tbody[1]/tr[last()]/td[1]").textContent() || '';
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
