import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Loan Pricer Module', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC03_Loan Creation Using Encompass For Loan Officer2 TestSigma', async ({ page }) => {
    await stepGroups.stepGroup_SG_LP_Login_To_Encompass(page, vars);
    await page.locator("//button[@id='header-app-switcher']//*[local-name() = 'svg'][@data-testid=\"ds-icon-svg\"]").click();
    await page.locator("//span[text()[normalize-space() = \"Pipeline\"]]").click();
    await page.locator("//button[@aria-label=\"Options Menu\"]").waitFor({ state: 'visible' });
    await expect(page.locator("//button[@aria-label=\"Options Menu\"]")).toBeVisible();
    await page.locator("//button[@aria-label=\"Options Menu\"]").click();
    await page.locator("//div[text()[normalize-space() = \"Import ULAD (MISMO 3.4)\"]]").click();
    await page.locator("//div[text()[normalize-space() = \"Import To:\"]]").waitFor({ state: 'visible' });
    await page.locator("//input[@type=\"file\"]").setInputFiles(path.resolve(__dirname, 'test-data', "DI-C01_v3.4 XML_UAT_Fixed Primary Anu.xml,DI-C01_v3.4 XML_UAT_Fixed Primary Anu.xml"));
    await page.locator("//div[@data-testid=\"import-loan-folder-form\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").click();
    await page.keyboard.press('Tab');
    vars["LoanFolderText"] = await page.locator("//div[@data-testid=\"import-loan-folder-form\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").textContent() || '';
    while (String(vars["LoanFolderText"]) !== String("Pipeline")) {
      await page.locator("//div[@data-testid=\"import-loan-folder-form\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Tab');
      vars["LoanFolderText"] = await page.locator("//div[@data-testid=\"import-loan-folder-form\"]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]").textContent() || '';
    }
    await page.locator("(//div[contains(@class,'combobox')])[1]").click();
    await page.locator("//button[@aria-label=\"search-template\"]").click();
    await page.locator("//div[@role=\"dialog\"]//span[text()[normalize-space() = \"Public Loan Templates\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"Companywide\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"Conventional\"]]").click();
    await page.locator("//button[text()[normalize-space() = \"Apply\"]]").click();
    await page.locator("//div[@data-testid=\"ds-radiogroup\"]/div[2]/label[1]/span[1]/*[local-name() = 'svg'][1]").click();
    await page.locator("(//div[contains(@class,'combobox__control')])[2]").click();
    await page.keyboard.press('Tab');
    vars["DropdownText"] = await page.locator("(//div[contains(@class,'combobox__control')])[2]").textContent() || '';
    while (String(vars["DropdownText"]) !== String("LoanOfficer2 TestSigma")) {
      await page.locator("(//div[contains(@class,'combobox__control')])[2]").click();
      await page.keyboard.press('ArrowDown');
      await page.keyboard.press('Tab');
      vars["DropdownText"] = await page.locator("(//div[contains(@class,'combobox__control')])[2]").textContent() || '';
    }
    await page.locator("//button[@data-testid=\"import-btn\"]").click();
    await page.locator("//span[text()=\"pipeline\"]").waitFor({ state: 'visible' });
    await page.reload();
    await page.waitForLoadState('networkidle');
    await page.locator("//button[@aria-label=\"Loan Folder\"]//*[local-name() = 'svg'][@data-testid=\"ds-icon-svg\"]").click();
    await page.locator("//span[@data-testid=\"ds-menu-item-menu-item-label\" and text()[normalize-space() = \"Pipeline\"]]").click();
    await page.locator("//span[text()[normalize-space() = \"Loan #\"]]").waitFor({ state: 'visible' });
    // [DISABLED] Wait until the element First Loan Number Created(Encompass) is visible
    // await page.locator("//span[text()=\"Loan #\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][4]  ").waitFor({ state: 'visible' });
    await expect(page.locator("//span[text()=\"Loan #\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][4]  ")).toBeVisible();
    vars["FirstCreatedLoanNumberEncompass"] = await page.locator("//span[text()=\"Loan #\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][4]  ").textContent() || '';
    vars["FirstLoanOfficerNameEncompass"] = await page.locator("(//span[text()=\"Loan Officer Name\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"] /following-sibling::div[1]//span)[7]").textContent() || '';
    await page.locator("//span[text()=\"Loan #\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][4]  ").click();
    await page.locator("//p[text()[normalize-space() = \"Borrower Information\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//p[text()[normalize-space() = \"Borrower Information\"]]")).toBeVisible();
    await page.locator("//p[text()[normalize-space() = \"Borrower Information\"]]").click();
    await expect(page.locator("//input[@id='4000-TextBox5']")).toBeVisible();
    await page.locator("//input[@id='4000-TextBox5']").clear();
    vars["SequenceNumber"] = new Date().toLocaleDateString('en-US') /* format: HHmmss */;
    vars["FirstNameWithSequenceNumber"] = "EXT" + "_" + vars["SequenceNumber"];
    await page.locator("//input[@id='4000-TextBox5']").fill(vars["FirstNameWithSequenceNumber"]);
    vars["LastName"] = "Auto_TS";
    await page.locator("//input[@data-testid=\"4002\"]").clear();
    await page.locator("//input[@data-testid=\"4002\"]").fill(vars["LastName"]);
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").click();
    await page.waitForTimeout(30000);
    await page.locator("//ul[@data-testid=\"ds-global-header-breadcrumb-list\"]/li[1]/a[1]").click();
    await page.locator("//span[text()=\"Borrower Name\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][5]  ").waitFor({ state: 'visible' });
    vars["BorrowerName"] = await page.locator("//span[text()=\"Borrower Name\"]/ancestor::div[@data-testid=\"ds-datatable-head-wrapper\"]/following-sibling::div[1]//div[@data-testid=\"data-table-cell\"][5]  ").textContent() || '';
    await stepGroups.stepGroup_SG_LP_Logout_From_Encompass(page, vars);
  });
});
