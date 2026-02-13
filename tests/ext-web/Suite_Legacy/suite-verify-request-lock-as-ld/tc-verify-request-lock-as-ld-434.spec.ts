import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';
import * as excelHelper from '../../../src/helpers/excel-helpers';

test.describe('Suite: Verify Request Lock as LD', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: Verify Request Lock as LD', async ({ page }) => {
    // Prerequisite: Pre-cond: Create a loan API
    // TODO: Ensure prerequisite test passes first

    // Set up download handler
    page.on('download', async (download) => {
      const filePath = path.join('test-results', 'downloads', download.suggestedFilename());
      await download.saveAs(filePath);
      vars['_lastDownloadPath'] = filePath;
    });

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_as_LD(page, vars);
    // [DISABLED] SG: Login  as  LO
    // await stepGroups.stepGroup_SG_Login_as_LO(page, vars);
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
    // [DISABLED] Wait until the element Credit score Input Number In Fico is visible
    // await page.locator("//INPUT[@id='fico']").waitFor({ state: 'visible' });
    // [DISABLED] Clear the text displayed in the Credit score Input Number In Fico field
    // await page.locator("//INPUT[@id='fico']").clear();
    // [DISABLED] Enter FICO in the Credit score Input Number In Fico field
    // await page.locator("//INPUT[@id='fico']").fill(testData["FICO"]);
    // [DISABLED] Select option by index 0 in the Loan Purpose In Pricing Scenario list
    // await page.locator("//SELECT[@id='loanPurpose' or @aria-label=\"Loan Purpose\"]").selectOption({ index: parseInt("0") });
    // [DISABLED] Scroll to the element None Selected Button In Amortization Type into view
    // await page.locator("//*[@class='custom-select-wrap amortization-type']").scrollIntoViewIfNeeded();
    // [DISABLED] Click on None Selected Button In Amortization Type
    // await page.locator("//*[@class='custom-select-wrap amortization-type']").click();
    // [DISABLED] Click on Fixed In Amortization Type
    // await page.locator("//*[text()=\" Fixed \"]").click();
    // [DISABLED] Store text from the element Loan Type Drop down in search fields into a variable Loan Type Value
    // vars["Loan Type Value"] = await page.locator("//label[contains(text(),\"Loan Type\")]/..//button").textContent() || '';
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    await stepGroups.stepGroup_SG_Enter_Data_In_Search_Fields(page, vars);
    await page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]").waitFor({ state: 'visible' });
    if (true) /* Element Price Adj and Rate Adj is enabled */ {
      await page.locator("(//div[@ng-reflect-klass='currency adjustment-points'])[1]").click();
      vars["Rate Adj on Pricer "] = await page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[2]/td[3]/div[1]").getAttribute('title') || '';
      vars["Price Base Adj on Pricer"] = await page.locator(" //a[text()=\" Price \"]/..//i[contains(@class,\"text-succes\")]").getAttribute('title') || '';
      vars["Price Adj on Pricer"] = await page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[2]/div").getAttribute('title') || '';
      vars["Price final Adj on Pricer"] = await page.locator("//body[1]/modal-container[1]/div[1]/div[1]/lib-dlg-cost-to-borrower[1]/div[1]/div[2]/div[2]/div[2]/table[1]/tbody[1]/tr[1]/td[3]/div").getAttribute('title') || '';
      await page.locator("//lib-dlg-cost-to-borrower//button[@class='btn modal-close']").click();
    }
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
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[1]/td[3]/div[1]")).toHaveAttribute('title', vars["Rate Adj on Pricer "]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[1]/div[1]")).toHaveAttribute('title', vars["Price Base Adj on Pricer"]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[2]/div[1]")).toHaveAttribute('title', vars["Price Adj on Pricer"]);
    await expect(page.locator("//body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[3]/app-scenario-panel[1]/div[1]/div[2]/div[3]/div[1]/div/table[1]/tbody[1]/tr[2]/td[3]/div[1] | //body[1]/app-root[1]/div[1]/div[1]/app-dlt-main-layout[1]/div[1]/div[1]/app-lp-company-layout[1]/div[1]/app-lp-company-lock[1]/div[2]/app-scenario-panel/div/div[2]/div[4]/div/table/tbody/tr[2]/td[3]/div")).toHaveAttribute('title', vars["Price final Adj on Pricer"]);
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    // [DISABLED] Verify that the element Date In Lock Requested is present
    // await expect(page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]")).toBeVisible();
    // [DISABLED] Store text from the element Date In Lock Requested into a variable Request Lock Date
    // vars["Request Lock Date"] = await page.locator("(//span[text()=\"Auto Ellie Loan Officer\"]/parent::div/child::span)[3]").textContent() || '';
    // [DISABLED] Remove the no of ( 0,12 ) positions of given string Request Lock Date and store into runtime variable Date Before Comment Session
    // vars["Date Before Comment Session"] = String(vars["Request Lock Date"]).substring(0, String(vars["Request Lock Date"]).length - 12);
    await page.locator("//button[contains(text(),\"Request  Lock\")]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[text()=\"  Price \"]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Lock  Request with  Price  Concession\")]")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Lock\")]")).toBeVisible();
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
    while (!(await page.locator("//span[contains(.,'Lock Requested')]").isVisible())) {
      await page.waitForTimeout(30000);
    }
    await stepGroups.stepGroup_SG_Status_Verification(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan(page, vars);
    // [DISABLED] Take full page screenshot with URL
    // await page.screenshot({ fullPage: true });
    // [DISABLED] Write the data LOAN ID into xlsx file in newline where absolutepath is C:\Users\sysla\Downloads\LoanData.xlsx and store rownumber into a variable Row
    // excelHelper.writeCell(vars['_lastDownloadPath'] || '', '', '', String("Row"), "0");
    // [DISABLED] Write the data Status Date into Excel C:\Users\sysla\Downloads\LoanData.xlsx with Cell value Row , 1 and Sheet 0
    // excelHelper.writeCell("C:\\Users\\sysla\\Downloads\\LoanData.xlsx", vars["Row "], "1", String(vars["Status Date"]), "0");
    // [DISABLED] Write the data Loan Type Value into Excel C:\Users\sysla\Downloads\LoanData.xlsx with Cell value Row , 2 and Sheet 0
    // excelHelper.writeCell("C:\\Users\\sysla\\Downloads\\LoanData.xlsx", vars["Row "], "2", String(vars["Loan Type Value"]), "0");
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
