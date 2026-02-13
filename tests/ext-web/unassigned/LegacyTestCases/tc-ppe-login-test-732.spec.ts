import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('TC: PPE Login Test', async ({ page }) => {
    await stepGroups.stepGroup_SG_Login_in_PPE(page, vars);
  });
});
