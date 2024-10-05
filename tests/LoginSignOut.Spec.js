import { expect } from '@playwright/test';
import { chromium, firefox, webkit } from 'playwright';

(async () => {
  const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://alpha1.dev.zinclabs.dev/');
  await page.getByLabel('Email').fill('root@alpha1.com');
  await page.getByLabel('Password').fill('SecTest@700');
  await page.getByRole('button', { name: 'Login' }).click();

  await page.waitForLoadState('networkidle');
  console.log('Login successful!');

  await page.goto('https://alpha1.dev.zinclabs.dev/web/');
  await page.goto('https://alpha1.dev.zinclabs.dev/web/login');
  await page.locator('[data-test="login-user-id"]').click();
  await page.locator('[data-test="login-user-id"]').fill('root@alpha1.com');
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').fill('SecTest@700');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('button').filter({ hasText: 'root@alpha1.com' }).click();
  await page.getByText('Account').click();
  await expect(page.getByLabel('Collapse')).toContainText('root@alpha1.com');
  await page.locator('[data-test="menu-link-\\/logs-item"]').click();
  await page.locator('[data-test="date-time-btn"]').click();
  await page.locator('[data-test="date-time-absolute-tab"]').click();
  await page.locator('[data-test="date-time-relative-tab"]').click();
  await expect(page.locator('#date-time-menu')).toContainText('Seconds');
  await page.locator('[data-test="date-time-btn"]').click();
  await page.locator('label').filter({ hasText: 'Minutesarrow_drop_down' }).locator('i').waitFor({ state: 'visible' });
  await page.locator('label').filter({ hasText: 'Minutesarrow_drop_down' }).locator('i').click();
  await page.getByRole('option', { name: 'Seconds' }).locator('span').click();
  await expect(page.getByRole('toolbar')).toContainText('arrow_drop_down');
  await page.locator('button').filter({ hasText: 'root@alpha1.com' }).click();
  await page.getByText('Sign Out').click();
  await expect(page.locator('#app')).toContainText('Login');

  await browser.close();
})();