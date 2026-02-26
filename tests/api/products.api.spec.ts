import { test, expect } from '@playwright/test';

const API_BASE = 'https://automationexercise.com/api';

test.describe('🔌 API Tests', () => {

  test('TC_API_001 - GET All Products returns 200', async ({ request }) => {
    const response = await request.get(`${API_BASE}/productsList`);
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
  });

  test('TC_API_002 - Products contain required fields', async ({ request }) => {
    const response = await request.get(`${API_BASE}/productsList`);
    const body = await response.json();
    const product = body.products[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
  });

  test('TC_API_003 - POST Products returns 405', async ({ request }) => {
    const response = await request.post(`${API_BASE}/productsList`);
    const body = await response.json();
    expect(body.responseCode).toBe(405);
  });

  test('TC_API_004 - GET Brands returns 200', async ({ request }) => {
    const response = await request.get(`${API_BASE}/brandsList`);
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.brands)).toBeTruthy();
  });

  test('TC_API_005 - POST Search Product with valid term', async ({ request }) => {
    const response = await request.post(`${API_BASE}/searchProduct`, {
      form: { search_product: 'top' }
    });
    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(body.products.length).toBeGreaterThan(0);
  });

  test('TC_API_006 - POST Search without param returns 400', async ({ request }) => {
    const response = await request.post(`${API_BASE}/searchProduct`);
    const body = await response.json();
    expect(body.responseCode).toBe(400);
  });

  test('TC_API_007 - Create Account returns 201', async ({ request }) => {
    const response = await request.post(`${API_BASE}/createAccount`, {
      form: {
        name: 'Test User',
        email: `testuser_${Date.now()}@test.com`,
        password: 'Test@1234',
        title: 'Mr',
        birth_date: '10',
        birth_month: 'January',
        birth_year: '1990',
        firstname: 'Test',
        lastname: 'User',
        address1: '123 Test Street',
        country: 'United States',
        zipcode: '10001',
        state: 'New York',
        city: 'New York',
        mobile_number: '1234567890'
      }
    });
    const body = await response.json();
    expect(body.responseCode).toBe(201);
  });
});