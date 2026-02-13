import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG_TS01_TC27_02', async ({ page }) => {
    // Prerequisite: REG_TS01_TC27_01
    // TODO: Ensure prerequisite test passes first

    await stepGroups.stepGroup_Login_To_EXT_Application(page, vars);
    if (true) /* Element Error POPUP is visible */ {
      await page.locator("//div[@class=\"modal-footer\"]//button/span//span[text()=\"ok\"]").click();
    }
    if (true) /* Element Configuration Icon is visible */ {
      await page.locator("//a[@aria-label=\"Config\"]//span").click();
      await expect(page.locator("//a[normalize-space()='Quick Pricer Configuration']")).toBeVisible();
      await page.locator("//a[normalize-space()='Quick Pricer Configuration']").click();
      await stepGroups.stepGroup_Verifying_Custom_UI_Checkbox_Enable(page, vars);
      await stepGroups.stepGroup_Enabling_Automation_Donot_Touch(page, vars);
      await page.locator("(//div[@class=\"outer-accordian\"]/label[contains(@for,\"search-fieldsQuickPricer\")])[last()]").scrollIntoViewIfNeeded();
      await page.locator("(//div[@class=\"outer-accordian\"]/label[contains(@for,\"search-fieldsQuickPricer\")])[last()]").click();
      await page.locator("(//input[contains(@id ,\"ausQuickPricer\")]/..//label[text()=\"AUS\"])[last()]").scrollIntoViewIfNeeded();
      if (true) /* Checkbox AUS Checkbox in Automation Donot Touch is checked */ {
        await expect(page.locator("(//input[contains(@id,\"ausQuickPricer\")])[last()]")).toBeVisible();
      } else {
        await expect(page.locator("(//input[contains(@id,\"ausQuickPricer\")])[last()]")).toBeVisible();
        await page.locator("(//input[contains(@id,\"ausQuickPricer\")])[last()]").evaluate(el => (el as HTMLElement).click());
        await expect(page.locator("(//input[contains(@id,\"ausQuickPricer\")])[last()]")).toBeVisible();
      }
      if (true) /* Checkbox Non Confirming Checkbox(Custom UI) is checked */ {
        vars["NonConforming"] = "checked";
      } else {
        vars["NonConforming"] = "unchecked";
      }
      if (true) /* Checkbox Guaranteed Underwriting Service(custom ui) is check */ {
        vars["GuaranteedUnderwritingService"] = "checked";
      } else {
        vars["GuaranteedUnderwritingService"] = "unchecked";
      }
      if (true) /* Checkbox Manual Underwriting(Custom UI) is checked */ {
        vars["ManualUnderwriting"] = "checked";
      } else {
        vars["ManualUnderwriting"] = "unchecked";
      }
      if (true) /* Checkbox LP(Custom UI) is checked */ {
        vars["LP"] = "checked";
      } else {
        vars["LP"] = "unchecked";
      }
      if (true) /* Checkbox DU(Custom UI) is checked */ {
        vars["DU"] = "checked";
      } else {
        vars["DU"] = "unchecked";
      }
      await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    }
    await expect(page.locator("//a[contains(@aria-label,'Quick Pricer')]")).toBeVisible();
    await page.locator("//a[contains(@aria-label,'Quick Pricer')]").click();
    await stepGroups.stepGroup_Selecting_Automation_Donot_Touch(page, vars);
    await page.getByText("Retrieving results, please wait.").waitFor({ state: 'hidden' });
    await expect(page.locator("//a[contains(text(), \"Eligible \")]")).toBeVisible();
    await page.locator("//h5[text()[normalize-space() = \"PRICERS\"]]").click();
    await expect(page.locator("//label[@aria-label=\"AUS Type\"]")).toBeVisible();
    await page.locator("(//button[contains(@class, \"bsMulti\")])[5]").click();
    if (String(vars["NonConforming"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Non-Conforming\")]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Non-Conforming\")]")).toBeVisible();
    }
    if (String(vars["GuaranteedUnderwritingService"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"GUS\")]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"GUS\")]")).toBeVisible();
    }
    if (String(vars["ManualUnderwriting\r"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Manual\")]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"Manual\")]")).toBeVisible();
    }
    if (String(vars["LP"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"LP\")]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"LP\")]")).toBeVisible();
    }
    if (String(vars["DU"]) === String("checked")) {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"DU\")]")).toBeVisible();
    } else {
      await expect(page.locator("//li[contains(@class, \"active\")]//span[contains(text(), \"DU\")]")).toBeVisible();
    }
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
