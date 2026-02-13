import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('REG TC: Impersonate Feature ', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_Scenario(page, vars);
    await stepGroups.stepGroup_SG_Quick_Pricer_Verification(page, vars);
    await stepGroups.stepGroup_SG_Verifying_Impersonate(page, vars);
    await stepGroups.stepGroup_SG_Logout(page, vars);
  });
});
