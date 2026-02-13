import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS09_TC05', async ({ page }) => {
    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Config Icon is visible */ {
      await stepGroups.stepGroup_Config_Custom_UI_EnabledLoan_Pricer(page, vars);
    }
    await stepGroups.stepGroup_Creating_a_New_Loan_and_Making_it_Locked_For_manual_policy(page, vars);
    await stepGroups.stepGroup_SG_LP_Search_in_Pipeline_For_Created_Loan_through_API(page, vars);
    await stepGroups.stepGroup_SG_LP_Verifying_and_Selecting_Loan_for_Locked_Locked_StatusM(page, vars);
    await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").waitFor({ state: 'visible' });
    await expect(page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]")).toBeVisible();
    // [DISABLED] Store text from the element Lock Expiration Date2(Scenario) into a variable LockExpirationDate
    // vars["LockExpirationDate"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    // [DISABLED] Store text from the element Price in Loan Scenario Page into a variable Price(LoanScenario)
    // vars["Price(LoanScenario)"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    // [DISABLED] Verify that the element Adjustment Summary is present and With Scrollable TRUE
    // await expect(page.locator("//h6[normalize-space()='Adjustment Summary']")).toBeVisible();
    // [DISABLED] Store text from the element Adj Price(Adjustment Summary) into a variable AdjPriceValue
    // vars["AdjPriceValue"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Adj.']/preceding-sibling::th)]").textContent() || '';
    // [DISABLED] Store text from the element Final Price(Adjustment Summary) into a variable FinalPriceValue
    // vars["FinalPriceValue"] = await page.locator("//table//tr[th[normalize-space()='Price']]/td[count(//table//th[normalize-space()='Final']/preceding-sibling::th)]").textContent() || '';
    await page.locator("//h6[text()[normalize-space() = \"Lock Information\"]]").scrollIntoViewIfNeeded();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    vars["CommentInput"] = "TestExtension";
    await page.locator("//textarea[@placeholder='Comment']").fill(vars["CommentInput"]);
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Popup_for_FEE_or_Price_or_Rate_D(page, vars);
    // [DISABLED] Wait until the element Request Lock Exception popup is visible
    // await page.locator("//label[.=' Request Lock Exception ']").waitFor({ state: 'visible' });
    // [DISABLED] Click on Lock Extension Dropdown
    // await page.locator("//select[@id='l-e']").click();
    // [DISABLED] Click on Select 7days in Lock Extension Request
    // await page.locator("//option[contains(text(),\" 7 Days\")]").click();
    // [DISABLED] Store the text of the selected option from Lock Extension Dropdown list into a variable ExtensionRequestDaysandPoints
    // vars["ExtensionRequestDaysandPoints"] = await page.locator("//select[@id='l-e']").evaluate(el => { const s = el as HTMLSelectElement; return s.options[s.selectedIndex]?.text || ''; });
    // [DISABLED] Split the ExtensionRequestDaysandPoints with the / and store the value from the 1 in the ExtensionRequestDays
    // vars["ExtensionRequestDays"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["1"] || '';
    // [DISABLED] Split the ExtensionRequestDaysandPoints with the / and store the value from the 2 in the ExtensionRequestPoints
    // vars["ExtensionRequestPoints"] = String(vars["ExtensionRequestDaysandPoints"]).split("/")["2"] || '';
    // [DISABLED] Split string ExtensionRequestPoints using space and store the 0 into a ExtensionRequestPoints
    // vars["ExtensionRequestPoints"] = String('').split("")["0"] || '';
    // [DISABLED] Verify that the element Confirm Button In Lock Request Popup is present and With Scrollable FALSE
    // await expect(page.locator("//button[text()[normalize-space() = \"Confirm\"]]")).toBeVisible();
    // [DISABLED] Click on Confirm Button In Lock Request Popup
    // await page.locator("//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.waitForLoadState('networkidle');
    await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]")).toBeVisible();
    vars["AddedConcessionType"] = await page.locator("(//li/div[normalize-space()='$|ConcessionType|:']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedConcessionType"] = String('').split("")["0"] || '';
    vars["AddedReason"] = await page.locator("(//li/div[normalize-space()='Reason :']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedExceptionPriceType"] = await page.locator("(//li/div[normalize-space()='Exception Price Type :']/following-sibling::div[1])[1]").textContent() || '';
    vars["AddedComment"] = await page.locator("(//li/div[normalize-space()='Comment :']/following-sibling::div[1])[1]").textContent() || '';
    expect(String(vars["AddedConcessionType"])).toBe(vars["PriceValueInPopup"]);
    expect(String(vars["AddedReason"])).toBe(vars["AddedReason(Popup)"]);
    expect(String(vars["AddedExceptionPriceType"])).toBe(vars["PriceConcessionAs(Popup)"]);
    expect(String(vars["AddedComment"])).toBe(vars["ExpectedComment"]);
    // [DISABLED] Wait until the element Added Comment in Current Lock is visible
    // await page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), '$|CommentInput|')]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the element Added Comment in Rate Sheet(Current Lock) displays text contains CommentInput and With Scrollable FALSE
    // await expect(page.locator("//div[contains(@class,'text-small') and contains(normalize-space(), 'Rate Sheet Date:')]")).toContainText(vars["CommentInput"]);
    // [DISABLED] Scroll down to the element Pricing Adjustment into view
    // await page.locator("//h6[text()=\"Pricing Adjustment\"]").scrollIntoViewIfNeeded();
    // [DISABLED] Verify that the element Extension in Pricing Adjustment is present and With Scrollable FALSE
    // await expect(page.locator("//th[contains(text(), \"Extension:\")]/..")).toBeVisible();
    // [DISABLED] Store text from the element Extension Point in Pricing Adjustment into a variable AddedExtensionPoints
    // vars["AddedExtensionPoints"] = await page.locator("//th[contains(text(), \"Extension:\")]/..//td").textContent() || '';
    // [DISABLED] Verify if AddedExtensionPoints contains ExtensionRequestPoints
    // expect(String(vars["AddedExtensionPoints"])).toBe(vars["ExtensionRequestPoints"]);
    // [DISABLED] Verifying Loan Scenario Page and Scroll to Lock Information
    // await stepGroups.stepGroup_Verifying_Loan_Scenario_Page_and_Scroll_to_Lock_Information(page, vars);
    // [DISABLED] Verifying Cancel in Extension Request Button
    // await stepGroups.stepGroup_Verifying_Cancel_in_Extension_Request_Button(page, vars);
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Verifying Test Manual LD Extension Requested After Clicking on Extension Request Button
    // await stepGroups.stepGroup_Verifying_Test_Manual_LD_Extension_Requested_After_Clicking_(page, vars);
    // [DISABLED] Verify that the element Locked Button is present and With Scrollable FALSE
    // await expect(page.locator("//button[contains(text(),\"Locked\")] | //button[text()=\"  Lock \"]")).toBeVisible();
    // [DISABLED] Verify that the element Deny Post- Lock Request Button is present and With Scrollable FALSE
    // await expect(page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]")).toBeVisible();
    // [DISABLED] Click on Deny Post- Lock Request Button
    // await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").click();
    // [DISABLED] Wait until the current page is loaded completely
    // await page.waitForLoadState('networkidle');
    // [DISABLED] Verifying Test Manual LD Locked (Post-Lock Request Denied) After Clicking on Deny Post- Lock Request Button
    // await stepGroups.stepGroup_Verifying_Test_Manual_LD_Locked_PostLock_Request_Denied_Afte(page, vars);
    // [DISABLED] Verifying Buttons After Clicking on Deny Post- Lock Request Button
    // await stepGroups.stepGroup_Verifying_Buttons_After_Clicking_on_Deny_Post_Lock_Request_B(page, vars);
    // [DISABLED] Scroll down to the element Loan Scenario Window into view
    // await page.locator("//h6[text()[normalize-space() = \"Loan Scenario\"]]").scrollIntoViewIfNeeded();
    // [DISABLED] Store text from the element Lock Expiration Date2(Scenario) into a variable LockExpirationAfterDenyPost
    // vars["LockExpirationAfterDenyPost"] = await page.locator("/html/body//span[text()=\"Lock Expiration Date\"]/parent::label/parent::div//div").textContent() || '';
    // [DISABLED] Store text from the element Price in Loan Scenario Page into a variable PriceAfterDenyPost
    // vars["PriceAfterDenyPost"] = await page.locator("(//span[text()=\"Price\"]/following::div)[1]").textContent() || '';
    // [DISABLED] Verify if LockExpirationAfterDenyPost == LockExpirationDate
    // expect(String(vars["LockExpirationAfterDenyPost"])).toBe(vars["LockExpirationDate"]);
    // [DISABLED] Verify if PriceAfterDenyPost == Price(LoanScenario)
    // expect(String(vars["PriceAfterDenyPost"])).toBe(vars["Price(LoanScenario)"]);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
