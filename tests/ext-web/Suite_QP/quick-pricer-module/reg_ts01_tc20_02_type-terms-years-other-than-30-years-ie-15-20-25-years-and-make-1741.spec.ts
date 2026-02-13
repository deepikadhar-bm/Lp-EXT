import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC20_02_Type terms years other than 30 years i.e. 15, 20, 25 years and make sure you get the results', async ({ page }) => {
    // Prerequisite: REG_TS01_TC20_01_Type terms years other than 30 years i.e. 15, 20, 25 years and make sure you get th
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await expect(page.locator("//h4[text()[normalize-space() = \"Pricer Configs\"]]")).toBeVisible();
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
      await expect(page.locator("//b[contains(.,'Default Configuration')]")).toBeVisible();
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await stepGroups.stepGroup_Selecting_Automation_Dont_Touch_Without_Search(page, vars);
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"30 Years\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"15 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"30 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
    // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    await page.locator("//span[text()[normalize-space() = \"30 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"30 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
    // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//span[text()[normalize-space() = \"30 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"30 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
    // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    await page.locator("//span[text()[normalize-space() = \"15 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await expect(page.locator("//span[text()[normalize-space() = \"30 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    // [DISABLED] Wait until the text Retrieving results, please wait. is absent on the current page
    // await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
    // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"20\")]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"30 Years\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"15 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]").waitFor({ state: 'visible' });
    await page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Eligible And Ineligible UI TAB is present and With Scrollable FALSE
    // await expect(page.locator("//ul[contains(@class, 'nav-tabs') and contains(@class, 'pricing-tabs') and contains(@class, 'result-data-tabs') and contains(@class, 'pc-results-tabs')]")).toBeVisible();
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"15\")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button")).toBeVisible();
    await page.locator("//label[@aria-label=\"Term (Years)\"]/..//div//button").click();
    await page.locator("//span[text()[normalize-space() = \"15 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"15 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
    await page.locator("//span[text()[normalize-space() = \"20 Years\"]]").click();
    await expect(page.locator("//span[text()[normalize-space() = \"20 Years\"]]/i[contains(@class, \"text-success\")]")).toBeVisible();
  });
});
