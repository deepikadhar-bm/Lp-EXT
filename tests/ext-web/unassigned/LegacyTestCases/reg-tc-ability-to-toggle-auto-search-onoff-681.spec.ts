import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Ability to toggle Auto Search On/Off', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
    if (true) /* Element Default To Auto-Search Checkbox is visible */ {
      await page.locator("//app-tab-component[@title='Loan Pricer']//div[@class='d-flex flex-column flex-md-row flex-wrap']//div[4]//div[1]\n").uncheck();
    } else {
      await expect(page.locator("//app-tab-component[@title='Loan Pricer']//div[@class='d-flex flex-column flex-md-row flex-wrap']//div[4]//div[1]\n")).toBeVisible();
      await page.locator("//button[text()[normalize-space() = \"Save\"]]").scrollIntoViewIfNeeded();
    }
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").click();
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//h1[normalize-space()='Search has changed']\n")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Please click on search']")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Configuration_In_Quick_Pricer(page, vars);
    if (true) /* Element Default To Auto-Search Checkbox is visible */ {
      await page.locator("//app-tab-component[@title='Loan Pricer']//div[@class='d-flex flex-column flex-md-row flex-wrap']//div[4]//div[1]\n").check();
    } else {
      await expect(page.locator("//app-tab-component[@title='Loan Pricer']//div[@class='d-flex flex-column flex-md-row flex-wrap']//div[4]//div[1]\n")).toBeVisible();
      await page.locator("//button[text()[normalize-space() = \"Save\"]]").scrollIntoViewIfNeeded();
    }
    await page.locator("//button[text()[normalize-space() = \"Save\"]]").click();
    await stepGroups.stepGroup_SG_Save_In_Success_Alert(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await expect(page.locator("//h1[normalize-space()='Search has changed']\n")).toBeVisible();
    await expect(page.locator("//h3[normalize-space()='Please click on search']")).toBeVisible();
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
