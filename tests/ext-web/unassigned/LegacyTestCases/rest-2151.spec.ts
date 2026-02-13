import { test, expect } from '@playwright/test';
import path from 'path';
import * as stepGroups from '../../../src/helpers/step-groups';

test.describe('Unassigned', () => {
  let vars: Record<string, string> = {};

  test.beforeEach(async () => {
    vars = {};
  });

  test('rest', async ({ page }) => {
    vars["abc"] = /* Number :: Random Double [Long] */ '';
    vars["def"] = vars["abc"];
  });
});
