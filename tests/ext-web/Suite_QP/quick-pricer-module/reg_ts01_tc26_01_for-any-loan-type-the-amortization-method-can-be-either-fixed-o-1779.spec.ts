import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC26_01_For any loan type, the amortization method can be either Fixed or Variable, indicating whether the repayment schedule remains constant or can change over time.', async ({ page }) => {
    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").scrollIntoViewIfNeeded();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").clear();
      await page.locator("//input[@id='ppQuickPricerdefaultZipCode']").fill(testData["Zip code 1"]);
      await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
    }
    await expect(page.locator("//a[@aria-label=\"Quick Pricer\"]")).toBeVisible();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").click();
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await page.locator("//label[contains(text(),\"Amortization Type\")]").scrollIntoViewIfNeeded();
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Fixed");
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Conventional");
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").scrollIntoViewIfNeeded();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toBeVisible();
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toContainText("Variable");
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toBeVisible();
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toContainText("Fixed");
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(),\"30 Years Variable FHA Purchase \")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable FHA Purchase \")]")).toContainText("Variable");
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[1]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li/span[text()=\" VA \"]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toBeVisible();
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toContainText("Fixed");
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//ul[@role=\"menu\"]/li[2]").click();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    await page.locator("//li/span[text()=\" VA \"]").click();
    if (true) /* Checkbox Auto search on change Checkbox is unchecked */ {
      await page.locator("//button[@aria-label=\"Search\"]").waitFor({ state: 'visible' });
      await page.locator("//button[@aria-label=\"Search\"]").click();
    }
    await page.locator("//a[contains(text(), \"Eligible \")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(),\"30 Years Variable VA Purchase \")]")).toBeVisible();
    await expect(page.locator("//div[contains(text(),\"30 Years Variable VA Purchase \")]")).toContainText("Variable");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
