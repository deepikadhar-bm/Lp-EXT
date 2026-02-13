import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';
import * as fileHelper from '../../../../src/helpers/file-helpers';

test.describe('Suite: Generate Pricing Comparison PDF Document', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Generate Pricing Comparison PDF Document', async ({ page }) => {
    // Set up download handler
    page.on('download', async (download) => {
      const filePath = path.join('test-results', 'downloads', download.suggestedFilename());
      await download.saveAs(filePath);
      vars['_lastDownloadPath'] = filePath;
    });

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Pricing_Result_Verification(page, vars);
    await expect(page.locator("//a[normalize-space()='Search Result View']")).toBeVisible();
    await page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[1]/input)[1]").click();
    if (true) /* Element Checkbox 2 In Rate is visible */ {
      await page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[2]/td[2]/div[1]/input)[1]").click();
    } else {
      await expect(page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[2]/input[1]")).toBeVisible();
      await page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[2]/input[1]").click();
    }
    if (true) /* Element Checkbox 3 In Rate is visible */ {
      await page.locator("(//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[3]/td[2]/div[1]/input)[1]").click();
    } else {
      await expect(page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[3]/input[1]")).toBeVisible();
      await page.locator("//lib-pricing-result-table[1]/table[1]/tbody[1]/tr[1]/td[2]/div[3]/input[1]").click();
    }
    await page.locator("(//div[@class='rate-card-wrapper']/div[1])[1]").hover();
    vars["RateCardRate1Percent"] = await page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][1]/div[2]/div/div[2])[1]").textContent() || '';
    vars["RateCardRate1"] = String(vars["RateCardRate1Percent"]).split("[ ]")["1"] || '';
    vars["RateCardRate2Percent"] = await page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][2]/div[2]/div/div[2])[1]").textContent() || '';
    vars["RateCardRate2"] = String(vars["RateCardRate2Percent"]).split("[ ]")["1"] || '';
    vars["RateCardRate3Percent"] = await page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][3]/div[2]/div/div[2])[1]").textContent() || '';
    vars["RateCardRate3"] = String(vars["RateCardRate3Percent"]).split("[ ]")["1"] || '';
    if (true) /* Element Create PDF is visible */ {
      await page.locator("(//lib-rate-card//span[normalize-space()='CREATE PDF'])[1]").click();
    } else {
      await page.locator("(//div[@class='rate-card-wrapper']/div[1])[1]").hover();
      await page.locator("//button[contains(@class,'btn btn-primary mr-2 mt-2')]").click();
    }
    await expect(page.locator("//h5[normalize-space()='Send Pricing Comparison']")).toBeVisible();
    await expect(page.locator("//label[normalize-space()='Pricing Comparison PDF template']")).toBeVisible();
    await page.locator("//label[normalize-space()='Pricing Comparison PDF template']/following-sibling::div/select").click();
    await page.locator("//label[normalize-space()='Pricing Comparison PDF template']/following-sibling::div/select/option[2]").click();
    await expect(page.locator("//button[contains(text(),'Preview PDF')]")).toBeVisible();
    await page.locator("//button[contains(text(),'Preview PDF')]").click();
    await page.getByText(testData["PRICING-COMPARISON PDF"]).waitFor({ state: 'visible' });
    await page.locator("//button/span[text()='Download']").click();
    await page.locator("//h5[normalize-space()='PRICING-COMPARISON.PDF']/following-sibling::button/span").click();
    await page.waitForTimeout(5000);
    vars[""] = fileHelper.extractPdfText(vars['_lastDownloadPath'] || '');
    expect(String(vars["PDF File Data"])).toContain(String(vars["RateCardRate1"]));
    expect(String(vars["PDF File Data"])).toContain(String(vars["RateCardRate2"]));
    expect(String(vars["PDF File Data"])).toContain(String(vars["RateCardRate3"]));
  });
});
