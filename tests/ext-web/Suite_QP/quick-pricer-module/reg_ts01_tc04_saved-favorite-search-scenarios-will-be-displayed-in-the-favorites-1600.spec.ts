import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC04_Saved Favorite search scenarios will be displayed in the Favorites Window', async ({ page }) => {
    // Prerequisite: REG_TS01_TC03_Favorites window will pop up with saved search scenarios
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//div[@class=\"result-panel\"]\n").waitFor({ state: 'visible' });
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//i[@class='fas fa-star yellow']")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await page.locator("//h5[contains(text(),'Favorites')]").waitFor({ state: 'visible' });
    await expect(page.locator("//table[@class=\"table\"]")).toBeVisible();
    await expect(page.locator("//div/input[@placeholder=\"Favorite name\"]")).toBeVisible();
    await expect(page.locator("//div[contains(@class, 'input-group-append')]//i[contains(@class, 'fa-plus')]")).toBeVisible();
    vars["test"] = Array.from({length: 6}, () => "abcde".charAt(Math.floor(Math.random() * 5))).join('');
    await page.locator("//div/input[@placeholder=\"Favorite name\"]").fill(vars["test"]);
    await stepGroups.stepGroup_Adding_and_Verifying_Favourite_name_inside_Favourite_List(page, vars);
    await page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]").click();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await page.locator("//h5[contains(text(),'Favorites')]").waitFor({ state: 'visible' });
    await expect(page.locator("//table[@class=\"table\"]")).toBeVisible();
    await expect(page.locator("//div/input[@placeholder=\"Favorite name\"]")).toBeVisible();
    vars["test"] = Array.from({length: 6}, () => "abcde".charAt(Math.floor(Math.random() * 5))).join('');
    await page.locator("//div/input[@placeholder=\"Favorite name\"]").fill(vars["test"]);
    await stepGroups.stepGroup_Adding_and_Verifying_Favourite_name_inside_Favourite_List(page, vars);
    await page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]").click();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
