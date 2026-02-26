import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly productsList: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly searchedProductsSection: Locator;
  readonly productCards: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productsList = page.locator('.features_items');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchedProductsSection = page.locator('#searched-products');
    this.productCards = page.locator('.product-image-wrapper');
    this.pageTitle = page.locator('h2:has-text("All Products")');
  }

  async goto() { await this.page.goto('/products'); }

  async searchProduct(productName: string) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async getProductCount(): Promise<number> {
    return await this.productCards.count();
  }

  async verifyProductsPageLoaded() {
    await expect(this.pageTitle).toBeVisible();
    await expect(this.productsList).toBeVisible();
  }
}