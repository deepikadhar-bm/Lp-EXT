import { Page } from '@playwright/test';

export async function waitForSpinnerToDisappear(page: Page) {
  await page.locator("//span[contains(@class,'circle')]").waitFor({ state: 'hidden' }).catch(() => {});
}

export async function waitForPageLoad(page: Page) {
  await page.waitForLoadState('networkidle');
}

export async function waitForElementVisible(page: Page, locator: string, timeout = 30000) {
  await page.locator(locator).waitFor({ state: 'visible', timeout });
}

export async function waitForElementHidden(page: Page, locator: string, timeout = 30000) {
  await page.locator(locator).waitFor({ state: 'hidden', timeout });
}
