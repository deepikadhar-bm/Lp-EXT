import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC03_Favorites window will pop up with saved search scenarios', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
    await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
    await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
    await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//div[@class=\"result-panel\"]\n").waitFor({ state: 'visible' });
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]")).toBeVisible();
    await page.locator("//i[@class='fas fa-star yellow']").click();
    await page.locator("//h5[contains(text(),'Favorites')]").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[contains(text(),'Favorites')]")).toBeVisible();
    vars["FavoriteWindowText"] = await page.locator("//h5[contains(text(),'Favorites')]").textContent() || '';
    expect(String(vars["FavoriteWindowText"])).toBe("Favorites");
    await expect(page.locator("//label[.=' Name ']")).toBeVisible();
    await expect(page.locator("//div/input[@placeholder=\"Favorite name\"]")).toBeVisible();
    await expect(page.locator("//div[contains(@class, 'input-group-append')]//i[contains(@class, 'fa-plus')]")).toBeVisible();
    if (true) /* Element Favourite Table List(quick pricer) is visible */ {
      await expect(page.locator("//th[contains(text(),'Name')]")).toBeVisible();
      await expect(page.locator("//th[contains(text(),'Default')]")).toBeVisible();
      await expect(page.locator("//th[text()='Action']")).toBeVisible();
      await expect(page.locator("(//table[@class=\"table\"]//tr)[position()>=2]")).toBeVisible();
    } else {
      vars["test"] = Array.from({length: 5}, () => "abcdef".charAt(Math.floor(Math.random() * 6))).join('');
      await page.locator("//div/input[@placeholder=\"Favorite name\"]").fill(vars["test"]);
      await page.locator("//div[contains(@class, 'input-group-append')]//i[contains(@class, 'fa-plus')]").click();
      await page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]").click();
      await page.locator("//i[@class='fas fa-star yellow']").click();
      await page.locator("//h5[contains(text(),'Favorites')]").waitFor({ state: 'visible' });
      await expect(page.locator("//th[contains(text(),'Name')]")).toBeVisible();
      await expect(page.locator("//th[contains(text(),'Default')]")).toBeVisible();
      await expect(page.locator("//th[text()='Action']")).toBeVisible();
      await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]")).toBeVisible();
      await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class, \"text-grey\")]\n")).toBeVisible();
      await expect(page.locator("//table[@class=\"table\"]//tr/td/a[contains(normalize-space(text()), \"$|test|\")]/../..//i[contains(@class,\"text-danger\")]")).toBeVisible();
      await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//span[@aria-label=\"Close\"]").click();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
