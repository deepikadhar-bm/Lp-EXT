import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: To save search scenarios to favorites click on Name field enter the entered zip code in the search field and click on + sign', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Enter_zip_code_in_the_search_field_and_click_on_sign_in_f(page, vars);
    await stepGroups.stepGroup_SG_Enter_zip_code_in_the_search_field_and_click_on_sign_in_f(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
