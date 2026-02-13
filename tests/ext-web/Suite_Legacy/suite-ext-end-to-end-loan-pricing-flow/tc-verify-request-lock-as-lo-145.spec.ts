import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Suite: EXT: End To End Loan Pricing Flow', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Request Lock as LO', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
    while (!(await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").isVisible())) {
      await page.reload();
      await page.locator("//input[@id='searchText']").waitFor({ state: 'visible' });
    }
    // [DISABLED] Verify that the element PipeLine is present
    // await expect(page.locator("//div[@class='page-heading']//span[@class='dlp-icon fal fa-list-alt']")).toBeVisible();
    await page.locator("//input[@id='searchText']").fill(vars["LOAN ID"]);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    // [DISABLED] Click on Loan Number
    // await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await stepGroups.stepGroup_SG_Fetching_Encrypted_Loan_Number_from_UI(page, vars);
    await stepGroups.stepGroup_SG_Loan_Details_Page_Verification(page, vars);
    if (true) /* Element Get Pricing Under Loan is enabled */ {
    }
    await page.locator("//app-dlt-borrower-loan-right-side[contains(@class, 'loan-component-rigth-cards') and contains(@class, 'hide-mob')]/DIV[1]/DIV[1]/BUTTON[1]").click();
    await expect(page.locator("//span[contains(text(),\"Pricing search parameters missing\")]")).toBeVisible();
    await page.locator("//button[@class='btn btn-danger text-uppercase']").click();
    if (true) /* Checkbox Show Disqualified Checkbox is checked */ {
      await page.locator("//input[@id='show-disqualified']").uncheck();
    }
    await page.locator("//input[@placeholder=\"FICO\"]").waitFor({ state: 'visible' });
    await page.locator("//input[@placeholder=\"FICO\"]").clear();
    await page.locator("//input[@placeholder=\"FICO\"]").fill(testData["FICO"]);
    // [DISABLED] Select option by index 0 in the Loan Purpose In Pricing Scenario list
    // await page.locator("//SELECT[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]").selectOption({ index: parseInt("0") });
    await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select").click();
    await page.locator("//label[contains(text(),\"Loan Purpose\")]/../div/select/option[contains(text(),\"Purchase\")]").click();
    await page.locator("//*[text()=\" Fixed \"]").click();
    vars["Loan Type Value"] = await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").textContent() || '';
    if (true) /* Element Impound Types Dropdown is visible */ {
      await page.locator("//label[contains(text(),\"Impound Types\")]/../../../lib-pricing-dyna-field-item-view/div/div/select").click();
      await page.locator("//select/option[contains(.,\"No Impounds\")] ").click();
    }
    if (true) /* Element Lock Days Dropdown is enabled */ {
      await page.locator("//label[@aria-label=\"Lock Days\"]").fill("30");
      // [DISABLED] Click on Lock Days Dropdown
      // await page.locator("//label[@aria-label=\"Lock Days\"]").click();
      // [DISABLED] Click on 30 Days Under Lock Days
      // await page.locator("//ul/li/span[contains(.,\"30 days\")] | //select[@id=\"dayLocks\"]/option[text()=\"30 days \"]").click();
    }
    await page.locator("//button[contains(.,\"Search\")][last()]").waitFor({ state: 'visible' });
    await page.locator("//button[contains(.,\"Search\")][last()]").click();
    await page.waitForTimeout(15000);
    await page.locator("//a[contains(text(),'Eligible')]").waitFor({ state: 'visible' });
    if (true) /* Element Active Eligible Tab is visible */ {
      await expect(page.locator("//table/tbody/tr[1]")).toBeVisible();
    } else {
      await page.locator("//a[contains(text(),'Eligible')]").click();
      vars["Error message"] = await page.locator("(//div[@class=\"result\"]/div/div/div)[1]").textContent() || '';
      await expect(page.locator("(//div[@class=\"result\"]/div/div/div)[1]")).toBeVisible();
    }
    // [DISABLED] SG: Enter Data In Search Fields
    // await stepGroups.stepGroup_SG_Enter_Data_In_Search_Fields(page, vars);
    if (await page.locator("//label[contains(text(),\"Best X Pricing\")]").isVisible()) {
      await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
    }
    await page.locator("//label[contains(text(),\"Best X Pricing\")]").click();
    await page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]").waitFor({ state: 'visible' });
    vars["First Row Rate Value"] = await page.locator("(//td[1]/div/div[not(@class=\"see-more-row hide-mob\")])[1]").textContent() || '';
    await stepGroups.stepGroup_SG_Store_Data_From_Price_Adjustment_Loan_Pricer(page, vars);
    await expect(page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]")).toBeVisible();
    await page.locator("//*[@ng-reflect-tooltip=\"Export Pricing\"]").click();
    await expect(page.locator("//th[contains(text(),'Fields')]")).toBeVisible();
    await expect(page.locator("//th[normalize-space(.)=\"Credit Score\"]/following-sibling::th[@data-th=\"New Pricing Results\"]")).toContainText(testData["FICO"]);
    await page.locator("//button[contains(text(),\"Confirm\")]").click();
    await page.getByText("Export pricing is successful").waitFor({ state: 'visible' });
    await page.locator("(//button[@role=\"button\"])[2]").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]")).toBeVisible();
    await stepGroups.stepGroup_SG_Store_Values_from_PPE_EXT_Loan_View(page, vars);
    await page.locator("//a[normalize-space()='More Details ...']").scrollIntoViewIfNeeded();
    await page.locator("//a[normalize-space()='More Details ...']").click();
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[1]/td[3]/div[1]")).toHaveAttribute('title', vars["Actual Final Rate Value"]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[1]/div[1]")).toHaveAttribute('title', vars["Actual Base Price Value"]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[2]/div[1]")).toHaveAttribute('title', vars["Actual Adj Price Value"]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div")).toHaveAttribute('title', vars["Actual Final Price Value"]);
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await expect(page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]")).toBeVisible();
    vars["Request Lock Date"] = await page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]").textContent() || '';
    vars["Date Before Comment Session"] = String(vars["Request Lock Date"]).substring(0, String(vars["Request Lock Date"]).length - 12);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Request_Lock_Button_Verification(page, vars);
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").click();
    await expect(page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Lock\")]")).toBeVisible();
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").waitFor({ state: 'visible' });
    await stepGroups.stepGroup_SG_Refresh_Page_if_Popup_Not_Present(page, vars);
    if (true) /* Element Confirm For Request Lock is not visible */ {
      await stepGroups.stepGroup_SG_Get_Queue_data_for_LO(page, vars);
    }
    await page.locator("//div[normalize-space()='Are you sure you want to submit a lock request?']/following-sibling::div/div/button[normalize-space()='Confirm']\n").click();
    if (true) /* Element Alert Message is visible */ {
      // [DISABLED] Click on OK In Alert Message
      // await page.locator("//span[.='OK' or @ng-reflect-ng-switch=\"ok\"]").click();
    }
    while (!(await page.locator("@|Loan Status|").isVisible())) {
      await page.waitForTimeout(120000);
    }
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    await page.screenshot({ fullPage: true });
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Encompass_API_Verification_with_Storing_Values(page, vars);
    await stepGroups.stepGroup_SG_Comparing_values_between_PPE_EXT_and_API_for_loan_data(page, vars);
    await page.waitForTimeout(2000);
    // Write to test data profile: "Execution Status" = "Y"
    // TODO: Test data profile writes need custom implementation
  });
});
