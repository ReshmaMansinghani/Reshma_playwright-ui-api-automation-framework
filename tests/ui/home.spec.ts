import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly navbar: Locator;
  readonly signupLoginBtn: Locator;
  readonly productsBtn: Locator;
  readonly cartBtn: Locator;
  readonly logo: Locator;
  readonly featuredItemsSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.navbar = page.locator('#header');
    this.signupLoginBtn = page.getByRole('link', { name: ' Signup / Login' });
    this.productsBtn = page.getByRole('link', { name: ' Products' });
    this.cartBtn = page.getByRole('link', { name: ' Cart' });
    this.logo = page.locator('#header .logo');
    this.featuredItemsSection = page.locator('.features_items');
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  async navigateToLogin() {
    await this.signupLoginBtn.click();
    await this.page.waitForURL(/login/, { timeout: 10000 });
  }

  async navigateToProducts() {
    await this.productsBtn.click();
    await this.page.waitForURL(/products/, { timeout: 10000 });
  }

  async isLoaded() {
    await expect(this.logo).toBeVisible();
    await expect(this.navbar).toBeVisible();
  }
}