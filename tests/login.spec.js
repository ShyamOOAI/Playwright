import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://alpha1.dev.zinclabs.dev/web/');
  await page.goto('https://alpha1.dev.zinclabs.dev/web/login');
  await page.locator('[data-test="login-user-id"]').click();
  await page.locator('[data-test="login-user-id"]').fill('root@alpha1.com');
  await page.locator('[data-test="login-password"]').click();
  await page.locator('[data-test="login-password"]').fill('SecTest@700');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('[data-test="menu-link-\\/logs-item"]').click();
  await page.locator('[data-test="date-time-btn"]').click();
  await page.getByText('Seconds1510153045').click();
  await page.locator('[data-test="date-time-absolute-tab"]').click();
  await page.locator('[data-test="logs-search-index-list"]').getByText('arrow_drop_down').click();
  await page.locator('[data-test="navbar-organizations-select"]').getByText('arrow_drop_down').click();
  await page.getByRole('option', { name: 'default', exact: true }).locator('div').nth(2).click();
  await page.locator('[data-test="logs-search-index-list"]').getByText('arrow_drop_down').click();
  await page.locator('[data-test="log-search-index-list-stream-toggle-default5"] div').nth(2).click();
  await page.locator('[data-test="logs-search-index-list"]').getByText('arrow_drop_down').click();
  await page.locator('[data-test="log-search-index-list-stream-toggle-default"] div').nth(2).click();
  await page.locator('[data-test="logs-search-index-list"]').getByText('arrow_drop_down').click();
  await page.locator('[data-test="log-search-index-list-stream-toggle-default5"] div').nth(2).click();
  await page.getByLabel('Expand "k8s_container_restart_count"').click();
  await page.locator('[data-test="logs-search-subfield-add-k8s_container_restart_count-1"] [data-test="log-search-subfield-list-equal-k8s_container_restart_count-field-btn"]').click();
  await page.locator('[data-test="logs-search-bar-show-histogram-toggle-btn"] div').nth(2).click();
  await page.getByLabel('SQL Mode').locator('div').nth(2).click();
  await page.locator('[data-test="logs-search-bar-refresh-btn"]').click();
  await page.locator('button').filter({ hasText: 'root@alpha1.com' }).click();
  await page.getByText('Sign Out').click();
  await expect(page.locator('[data-test="login-user-id"]')).toBeEmpty();
  await page.locator('[data-test="login-password"]').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('[data-test="login-password"]')).toBeEmpty();
});