import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC26_02_For any loan type, the amortization method can be either Fixed or Variable, indicating whether the repayment schedule remains constant or can change over time.', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@id='resultTemplate']/div[1]/div[1]/app-public-pricing-result[1]/lib-pricing-result[1]/lib-pricing-result-desktop-view[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Fixed");
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//div[contains(normalize-space(.),'30 Years Variable Conventional Purchase')]//i[contains(@class,'fa-chevron-down')]/parent::div").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable Conventional Purchase')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toBeVisible();
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toContainText("Variable");
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toBeVisible();
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toContainText("Fixed");
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable FHA Purchase \")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable FHA Purchase \")]")).toContainText("Variable");
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toBeVisible();
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toContainText("Fixed");
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    await expect(page.locator("//label[contains(text(),\"Amortization Type\")]")).toBeVisible();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    while (await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").isVisible()) {
      await page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]").click();
    }
    await expect(page.locator("(//i[@class=\"fal fa-check mr-2 text-success\"])[2]")).toBeVisible();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable VA Purchase \")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable VA Purchase \")]")).toContainText("Variable");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
