import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: Pricing_Loan_LP', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS04_TC01_Make a different combinations from - loan purpose, loan type, loan options, occupancy etc and verify the pricing results', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Configuration Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_API_Loan_Creation_For_PaoLo(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Unlocked_StatusManual(page, vars);
    await page.locator("(//div[contains(@class, \"loan-action\")]/button[text()=\" Get Pricing \"])[2]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Verifying_Get_Pricing_or_Price_In_Loan_Application(page, vars);
    await page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_LP_Handling_Missing_FICO_Error_Popup(page, vars);
    await expect(page.locator("//h5[text()[normalize-space() = \"SEARCH FIELDS\"]]")).toBeVisible();
    await stepGroups.stepGroup_Selecting_Conventional_Loan_Type(page, vars);
    await stepGroups.stepGroup_Selecting_Fixed_Amortization_type(page, vars);
    await stepGroups.stepGroup_Selecting_Loan_Purpose_Purchase(page, vars);
    await stepGroups.stepGroup_Clear_Impersonate_user_From_Paolo_to_Test_Sigma(page, vars);
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Fixed");
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Conventional");
    await expect(page.locator("//div[contains(@class,\"search-summary\") and contains(text(), \"30\")]")).toContainText("Purchase");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//option[text()=\" Refinance \"]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Fixed\"]]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed Conventional Refinance\"]]")).toContainText("Fixed");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed Conventional Refinance\"]]")).toContainText("Conventional");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed Conventional Refinance\"]]")).toContainText("Refinance");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select/option[contains(text(),\"Purchase\")]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Variable\"]]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toContainText("Variable");
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toContainText("Conventional");
    await expect(page.locator("//div[contains(normalize-space(.),'30 Years Variable')]//i[contains(@class,'fa-chevron-down')]/parent::div")).toContainText("Purchase");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//div/ul/li/span[contains(text(),\"Conventional\")]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Variable\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//option[text()=\" Refinance \"]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable Conventional Refinance\")]")).toContainText("Variable");
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable Conventional Refinance\")]")).toContainText("Conventional");
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable Conventional Refinance\")]")).toContainText("Refinance");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Fixed\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select/option[contains(text(),\"Purchase\")]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toContainText("Fixed");
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toContainText("FHA");
    await expect(page.locator("(//div[normalize-space()='30 Years Fixed FHA Purchase'])[1]")).toContainText("Purchase");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li//span[text()[normalize-space() = \"FHA\"]]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//option[text()=\" Refinance \"]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Variable\"]]").click();
    await expect(page.locator("//label[@aria-label=\"Loan Amount\"]")).toBeVisible();
    await page.locator("//label[@aria-label=\"Loan Amount\"]").scrollIntoViewIfNeeded();
    await page.locator("//input[@placeholder=\"Loan Amount\"]").click();
    await page.locator("//input[@placeholder=\"Loan Amount\"]").clear();
    await page.locator("//input[@placeholder=\"Loan Amount\"]").fill("400000");
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Variable FHA Refinance\"]]")).toContainText("Variable");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Variable FHA Refinance\"]]")).toContainText("FHA");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Variable FHA Refinance\"]]")).toContainText("Refinance");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select/option[contains(text(),\"Purchase\")]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Fixed\"]]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toContainText("Fixed");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toContainText("VA");
    await expect(page.locator("//div[text()[normalize-space() = \"30 Years Fixed VA Purchase\"]]")).toContainText("Purchase");
    await page.locator("//h5[contains(text(),'SEARCH FIELDS')]").click();
    await expect(page.locator("//label[contains(text(),\"Loan Type\")]/..//button")).toBeVisible();
    await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").click();
    while (await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").isVisible()) {
      await page.locator("//*[contains(@class,\"fal fa-check mr-2 text-success\")]").click();
    }
    await page.locator("//li/span[text()=\" VA \"]").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//option[text()=\" Refinance \"]").click();
    await page.locator("//label[text()=\" Amortization Type \"]/..//button[contains(@class,\"dropdown-toggle pp-search\")]").click();
    while (await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").isVisible()) {
      await page.locator("(//*[contains(@class,\"fal fa-check mr-2 text-success\")])[2]").click();
    }
    await page.locator("//span[text()[normalize-space() = \"Variable\"]]").click();
    await page.locator("//button[@aria-label=\"Search\"]").click();
    await page.locator("//a[@aria-label=\"Quick Pricer\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable VA Refinance \")]")).toContainText("Variable");
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable VA Refinance \")]")).toContainText("VA");
    await expect(page.locator("//div[contains(text(),\" 30 Years Variable VA Refinance \")]")).toContainText("Refinance");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
