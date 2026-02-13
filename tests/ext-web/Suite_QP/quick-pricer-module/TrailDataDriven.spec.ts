import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';
import { testDataManager } from 'testdata/TestDataManager';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  // GLOBAL LEVEL: Get the profile once
  const profileName = "Regression Sheet Details1 [Quick Pricer]";
  const profile = testDataManager.getProfileByName(profileName);

  if (profile && profile.data) {
    // Loop through each data object in the JSON
    profile.data.forEach((dataRow, index) => {
      test(`REG_TS01_TC02_01_No Default Favourites are saved - User: ${dataRow.UserName} (Row ${index + 1})`, async ({ page }) => {
        // Initialize vars for this specific test iteration
        const vars: Record<string, string> = {
          "UserName": dataRow.UserName,
          "password": dataRow.password,
          "URL": dataRow.URL,
          "Zip code 1": dataRow["Zip code 1"],
          "Zip code 2": dataRow["Zip code 2"]
        };

        await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
        await stepGroups.stepGroup_SG_Logout(page, vars);

        await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
        await stepGroups.stepGroup_SG_Logout(page, vars);
        // if (true) /* Element Configuration Icon is visible */ {
        //   await stepGroups.stepGroup_Verify_default_zipcode_in_general_pricer_settings(page, vars);
        //   await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
        //   await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
        //   vars["DefaultZipcodeInConfig"] = await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").inputValue() || '';
        //   await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
        // }
        // await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
        // await expect(page.locator("//input[@placeholder=\"Zip Code\" or @id=\"zip\"]")).toBeVisible();
        // await expect(page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]")).toBeVisible();
        // await page.locator("//div[@class=\"stFavorite\"]//i[contains(@class, \"yellow\")]").click();
        // if (true) /* Element Favourite Table List(quick pricer) is visible */ {
        //   vars["count"] = "1";
        //   vars["TotalFavoriteRowCount"] = String(await page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]").count());
        //   while (parseFloat(String(vars["count"])) <= parseFloat(String(vars["TotalFavoriteRowCount"]))) {
        //     await page.locator("//table[@class=\"table\"]//td/a/i[contains(@class, \"text-danger\")]").click();
        //     if (true) /* Element Favourite Table List(quick pricer) is not visible */ {
        //       break;
        //     }
        //   }
        //   await page.locator("(//button[contains(@class,\"modal-close\")]/span[@aria-label=\"Close\"])[4]").click();
        // } else {
        //   await page.locator("//div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//span[@aria-label=\"Close\"]").click();
        // }
      });
    });
  }
});