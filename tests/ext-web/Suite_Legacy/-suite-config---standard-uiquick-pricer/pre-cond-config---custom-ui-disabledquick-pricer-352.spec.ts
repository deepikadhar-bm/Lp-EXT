import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe(' Suite: Config - Standard UI[Quick Pricer]', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('Pre-cond: Config - Custom UI Disabled[Quick Pricer]', async ({ page }) => {
    await stepGroups.stepGroup_SG_Custom_UI_Disabled(page, vars);
  });
});
