import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Quick Pricer(internal)', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC06_03_Create or Send PDF Button appears at the bottom with the selected Programs and a user is able to download the pricing comparison document', async ({ page }) => {
    // Prerequisite: REG_TS01_TC06_02_Create or Send PDF Button appears at the bottom with the selected Programs and a us
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Verify_Default_Configuration_In_General_Pricer_Settings(page, vars);
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox Allow Pricing Comparison(Automation Donot touch) is */ {
        await page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]/following::input[contains(@id,'allowPricingComparison')][1]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]/following::input[contains(@id,'allowPricingComparison')][1]")).toBeVisible();
      } else {
        await expect(page.locator("(//label[contains(@for,'pricer-optionsQuickPricer')])[position()>1]/..//label[contains(@for,'document-generation-settings')]/following::input[contains(@id,'allowPricingComparison')][1]")).toBeVisible();
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await expect(page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]")).toBeVisible();
    await page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]").check();
    await expect(page.locator("(//input[@type='checkbox' and @tooltip='View Details'])[1]")).toBeVisible();
    await stepGroups.stepGroup_Storing_and_comparing_data_fro_m_table_and_rate_card_popup_f(page, vars);
    await page.locator("(//div[@class='rate-card-wrapper']/div[@class='rate-card'][1]/div[2]/div/div[2])[1]").hover();
    await expect(page.locator("//div[contains(@class, 'action-btns')]/DIV[1]/DIV[2]/DIV[1]/BUTTON[1]")).toBeVisible();
    await page.locator("//div[contains(@class, 'action-btns')]/DIV[1]/DIV[2]/DIV[1]/BUTTON[1]").click();
    await page.locator("//h5[normalize-space()='Send Pricing Comparison']").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_Verifying_Preview_PDF_Button(page, vars);
    await page.locator("//div[@class=\"modal-header\"]/h5[normalize-space(text())=\"PRICING-COMPARISON.PDF\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[@class=\"modal-header\"]/h5[normalize-space(text())=\"PRICING-COMPARISON.PDF\"]")).toBeVisible();
    vars["ActualPricingComparisonPDF"] = await page.locator("//div[@class=\"modal-header\"]/h5[normalize-space(text())=\"PRICING-COMPARISON.PDF\"]").textContent() || '';
    expect(String(vars["ActualPricingComparisonPDF"])).toBe(testData["PRICING-COMPARISON PDF"]);
    await expect(page.locator("//button/span[text()='Download']")).toBeVisible();
    await expect(page.locator("//button/span[text()='Download']")).toBeVisible();
    await page.locator("//h5[normalize-space()='PRICING-COMPARISON.PDF']/following-sibling::button/span").click();
    await stepGroups.stepGroup_Verifying_send_pricing_comparison_popup(page, vars);
    await stepGroups.stepGroup_Enabling_Download_button_in_Send_Pricing_Comparison_popup(page, vars);
    await page.locator("//button[contains(@aria-label,\"Save \")]").click();
    await page.locator("//div[@class=\"modal-header\"]//span[text()=\"Success\"]").waitFor({ state: 'visible' });
    vars["ActualSuccessMessageText"] = await page.locator("//div[@class=\"modal-body\"]//div[text()=\"Pricing Comparison email has been sent\"]").textContent() || '';
    vars["ExpectedSuccessMessageText"] = "Pricing Comparison email has been sent\r";
    expect(String(vars["ActualSuccessMessageText"])).toBe(vars["ExpectedSuccessMessageText"]);
    await page.locator("//button[text()[normalize-space() = \"Ok\"]]").click();
    await stepGroups.stepGroup_Verifying_cancel_button_in_send_pricing_comparison_for_custo(page, vars);
    await stepGroups.stepGroup_Verifying_close_option_in_Rate_Card_for_custom_ui(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
