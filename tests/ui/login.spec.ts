import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { invalidCredentials } from '../../utils/testData';

test.describe('🔐 Login Tests', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('TC006 - Login page loads correctly', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginPageLoaded();
  });

  test('TC007 - Login fails with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(invalidCredentials.email, invalidCredentials.password);
    await loginPage.verifyLoginError();
  });

  test('TC008 - Login fails with empty email', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginPasswordInput.fill('somepassword');
    await loginPage.loginButton.click();
    const emailValidation = await loginPage.loginEmailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(emailValidation).toBeTruthy();
  });

  test('TC009 - Login fails with empty password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginEmailInput.fill('test@example.com');
    await loginPage.loginButton.click();
    const passwordValidation = await loginPage.loginPasswordInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(passwordValidation).toBeTruthy();
  });

  test('TC010 - Login form fields are interactable', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.loginEmailInput.fill('user@test.com');
    await loginPage.loginPasswordInput.fill('password123');
    await expect(loginPage.loginEmailInput).toHaveValue('user@test.com');
    await expect(loginPage.loginPasswordInput).toHaveValue('password123');
  });
});