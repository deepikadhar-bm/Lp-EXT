import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../../src/helpers/step-groups';

test.describe('Regression: Concessions', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Concessions For EXT Lock Desk', async ({ page }) => {
    // Prerequisite: REG TC: Extensions For EXT Lock Desk
    // TODO: Ensure prerequisite test passes first

    const testData: Record<string, string> = {}; // TODO: Load from test data profile

    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Search_for_Loan(page, vars);
    await page.locator("(//table/tbody/tr)[2]").waitFor({ state: 'hidden' });
    await page.locator("//td[@data-title=\"Loan Number\"]/a[contains(text(),\"$|LOAN ID|\")]").click();
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").waitFor({ state: 'visible' });
    await page.locator("//h4[normalize-space()='Lock Information']").scrollIntoViewIfNeeded();
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the current page displays an element Comment Section
    // await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    // [DISABLED] Enter Comment in the Comment Section field
    // await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    // [DISABLED] Click on Request Post- Lock Price Concession Button
    // await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    // [DISABLED] Wait until the element Request Lock Exception popup is visible
    // await page.locator("//label[.=' Request Lock Exception ']").waitFor({ state: 'visible' });
    // [DISABLED] Select option using value 0: FEE in the Concession Type Dropdown list
    // await page.locator("//select[@aria-label=\"Concession Type\"]").selectOption({ label: "0: FEE" });
    // [DISABLED] Enter Points in the Concession value Input field
    // await page.locator("//input[@placeholder=\"Concession in points\"]").fill(testData["Points"]);
    // [DISABLED] Select option using value Concession Reason in the Reasons Dropdown menu list
    // await page.locator("//select[@aria-label=\"Reasons\"]").selectOption({ label: testData["Concession Reason"] });
    // [DISABLED] Click on Confirm Button in Request Lock Exception
    // await page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]/following-sibling::div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//button[text()[normalize-space() = \"Confirm\"]]").click();
    // [DISABLED] Wait until the element Deny Post- Lock Request Button is enabled
    // await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").waitFor({ state: 'visible' });
    // [DISABLED] Click on Deny Post- Lock Request Button
    // await page.locator("//button[contains(text(),'Deny  Post- Lock  Request')]").click();
    // [DISABLED] Wait until the element Request Post- Lock Price Concession Button is enabled
    // await page.locator("//button[contains(normalize-space(text()), \"Lock Request with Price Concession\")]").waitFor({ state: 'visible' });
    // [DISABLED] Verify that the current page displays an element Locked Post-Lock Request Denied
    // await expect(page.locator("//span[contains(text(),'Locked (Post-Lock Request Denied)')]")).toBeVisible();
    // [DISABLED] Verify that the element Reprice Button is enabled
    // await expect(page.locator("//button[contains(text(),\"Reprice\")]")).toBeVisible();
    // [DISABLED] Verify that the element Extension Button is enabled
    // await expect(page.locator("//button[contains(text(),'Extension')]")).toBeVisible();
    // [DISABLED] Verify that the element Request Post- Lock Price Concession Button is enabled
    // await expect(page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]")).toBeVisible();
    // [DISABLED] Verify that the element CancelButton is enabled
    // await expect(page.locator("//button[@class='btn btn-sm mr-2'][contains(text(),'Cancel')]")).toBeVisible();
    await expect(page.locator("//textarea[@placeholder='Comment']")).toBeVisible();
    await page.locator("//textarea[@placeholder='Comment']").fill(testData["Comment"]);
    await page.locator("//button[contains(text(),\"Request  Post- Lock  Price  Concession\")]").click();
    await expect(page.locator("//label[.=' Request Lock Exception ']")).toBeVisible();
    await stepGroups.stepGroup_SG_Filling_Price_Concession_Pop_Up_For_FEE(page, vars);
    // [DISABLED] Click on Concession Type textbox
    // await page.locator("//select[@aria-label='Concession Type']").click();
    // [DISABLED] Click on Fee Option
    // await page.locator("//option[contains(text(),\"FEE\")]").click();
    // [DISABLED] Enter Points in the Concession value Input field
    // await page.locator("//input[@placeholder=\"Concession in points\"]").fill(testData["Points"]);
    // [DISABLED] Store text from the element Concession value Input into a variable Concession Value
    // vars["Concession Value"] = await page.locator("//input[@placeholder=\"Concession in points\"]").textContent() || '';
    // [DISABLED] Select option using value Concession Reason in the Reasons Dropdown menu list
    // await page.locator("//select[@aria-label=\"Reasons\"]").selectOption({ label: testData["Concession Reason"] });
    // [DISABLED] Click on Confirm Button in Request Lock Exception
    // await page.locator("//button[text()[normalize-space() = \"Request Post- Lock Price Concession\"]]/following-sibling::div[contains(@class, 'modal') and contains(@class, 'fade') and contains(@class, 'show')]//button[text()[normalize-space() = \"Confirm\"]]").click();
    await page.locator("//button[normalize-space()='Lock']").waitFor({ state: 'visible' });
    await expect(page.locator("(//span[@ng-reflect-ng-style='[object Object]'][normalize-space()='Price Concession Requested (Post-Lock)'])[1]")).toBeVisible();
    await stepGroups.stepGroup_SG_Verification_Of_Comment_and_Concession_Under_more_Details(page, vars);
    // [DISABLED] Scroll up to the element More Details Under Scenario Pricing Request into view
    // await page.locator("//a[contains(text(),'More Details ..')]").scrollIntoViewIfNeeded();
    // [DISABLED] Click on More Details Under Scenario Pricing Request
    // await page.locator("//a[contains(text(),'More Details ..')]").click();
    // [DISABLED] Verify that the element Concession Reason In More Details is present
    // await expect(page.locator("//tbody/tr[8]/th[1]")).toBeVisible();
    // [DISABLED] Store text from the element Concession Reason In More Details into a variable Concession reason : More details
    // vars["Concession reason : More details"] = await page.locator("//tbody/tr[8]/th[1]").textContent() || '';
    // [DISABLED] Verify that the element Concession Adjustment Value In More Details is present
    // await expect(page.locator("//tbody/tr[8]/td[1]/div[1]")).toBeVisible();
    // [DISABLED] Store text from the element Concession Adjustment Value In More Details into a variable Concession adj value : More details
    // vars["Concession adj  value : More details"] = await page.locator("//tbody/tr[8]/td[1]/div[1]").textContent() || '';
    // [DISABLED] Compare two strings ' Concession Reason ' and ' Concession reason : More details ' for the comparison ' equal ' (TG)
    // expect(String(testData["Concession Reason"])).toBe(String(vars["Concession reason : More details"]));
    // [DISABLED] Compare two strings ' Concession Value ' and ' Concession adj value : More details ' for the comparison ' equal ' (TG)
    // expect(String(vars["Concession Value"])).toBe(String(vars["Concession adj  value : More details"]));
    await page.locator("//h4[contains(@class, 'text-info') and contains(@class, 'scenario-title')]").scrollIntoViewIfNeeded();
    // [DISABLED] Scroll to the element Lock Expiration Date into view
    // await page.locator("//div[@class='rounded data-content']//div[2]//div[1]//div[7]").scrollIntoViewIfNeeded();
    // [DISABLED] Verify that the element Lock Expiration Date is present
    // await expect(page.locator("//div[@class='rounded data-content']//div[2]//div[1]//div[7]")).toBeVisible();
    await stepGroups.stepGroup_SG_Verify_Expiration_Date(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
