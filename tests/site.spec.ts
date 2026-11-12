import { expect, test } from '@playwright/test';

const routes = [
  { path: '/', lang: 'es', title: 'VIBRA IA BIOTECH | Tecnología y negocio digital' },
  { path: '/ehvi/', lang: 'es', title: 'EHVI | VIBRA IA BIOTECH' },
  { path: '/legal/', lang: 'es', title: 'Información del sitio y privacidad | VIBRA IA BIOTECH' },
  { path: '/en/', lang: 'en', title: 'VIBRA IA BIOTECH | Technology and digital business' },
  { path: '/en/ehvi/', lang: 'en', title: 'EHVI | VIBRA IA BIOTECH' },
  { path: '/en/legal/', lang: 'en', title: 'Site information and privacy | VIBRA IA BIOTECH' },
];

test.describe('routes and metadata', () => {
  for (const route of routes) {
    test(`${route.path} has language, title, canonical and hreflang`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page.locator('html')).toHaveAttribute('lang', route.lang);
      await expect(page).toHaveTitle(route.title);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://vibraiabiotech.com${route.path}`
      );
      await expect(page.locator('link[rel="alternate"][hreflang="es"]')).toHaveAttribute(
        'href',
        route.path.startsWith('/en/')
          ? `https://vibraiabiotech.com${route.path.replace(/^\/en/, '')}`
          : `https://vibraiabiotech.com${route.path}`
      );
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute(
        'href',
        route.path.startsWith('/en/')
          ? `https://vibraiabiotech.com${route.path}`
          : `https://vibraiabiotech.com/en${route.path}`
      );
    });
  }

  test('sitemap and robots expose the six public routes', async ({ request }) => {
    const sitemap = await request.get('/sitemap.xml');
    expect(sitemap.status()).toBe(200);
    const sitemapText = await sitemap.text();
    expect((sitemapText.match(/<loc>/g) ?? []).length).toBe(6);
    expect(sitemapText).toContain('https://vibraiabiotech.com/');
    expect(sitemapText).toContain('https://vibraiabiotech.com/en/legal/');

    const robots = await request.get('/robots.txt');
    expect(robots.status()).toBe(200);
    const robotsText = await robots.text();
    expect(robotsText).toContain('User-Agent: *');
    expect(robotsText).toContain('Sitemap: https://vibraiabiotech.com/sitemap.xml');
  });

  test('unknown routes return 404', async ({ page }) => {
    const response = await page.goto('/does-not-exist/');
    expect(response?.status()).toBe(404);
  });
});

test.describe('home page', () => {
  test('shows seven work areas and the available EHVI project', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('.service')).toHaveCount(7);
    await expect(page.locator('.ehvi-preview')).toHaveAttribute('href', '/ehvi/');
    await expect(page.locator('.preview-status')).toHaveText('Disponible con código');
    await expect(page.locator('.feature-note')).toContainText('Disponible con código');
    await expect(page.locator('.hero h1 em')).toHaveCSS('color', 'rgb(215, 25, 43)');
  });

  test('language switch keeps the current page', async ({ page }) => {
    await page.goto('/');
    await page.locator('.language').click();
    await page.waitForURL('**/en/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');

    await page.goto('/ehvi/');
    await page.locator('.language').click();
    await page.waitForURL('**/en/ehvi/');

    await page.goto('/legal/');
    await page.locator('.language').click();
    await page.waitForURL('**/en/legal/');
  });

  test('mobile menu opens, closes and navigates', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
    await expect(page.locator('#mobile-nav')).toBeHidden();
    await page.locator('.menu-button').click();
    await expect(page.locator('#mobile-nav')).toBeVisible();
    await expect(page.locator('.menu-button')).toHaveAttribute('aria-expanded', 'true');
    await page.locator('#mobile-nav a[href="/ehvi/"]').click();
    await page.waitForURL('**/ehvi/');
    await expect(page.locator('#mobile-nav')).toBeHidden();
  });
});

test.describe('EHVI directory', () => {
  test('search, filters, reset and area dialog work', async ({ page }) => {
    await page.goto('/ehvi/');
    await expect(page.locator('.area-card')).toHaveCount(48);
    await expect(page.locator('.area-card:visible')).toHaveCount(48);

    await page.locator('#area-search').fill('nutrición');
    await expect(page.locator('#result-count')).toHaveText('1');
    await expect(page.locator('.area-card:visible')).toHaveCount(1);
    await expect(page.locator('.area-card:visible')).toContainText('Nutrición');

    await page.locator('#reset-search').click();
    await expect(page.locator('#result-count')).toHaveText('48');
    await expect(page.locator('.area-card:visible')).toHaveCount(48);

    await page.locator('.filters button[data-group="5"]').click();
    await expect(page.locator('#result-count')).toHaveText('8');
    await expect(page.locator('.area-card:visible')).toHaveCount(8);

    await page.locator('.area-card', { hasText: 'Pediatría' }).click();
    await expect(page.locator('#area-dialog')).toBeVisible();
    await expect(page.locator('#dialog-title')).toHaveText('Pediatría');
    await expect(page.locator('#dialog-text')).toContainText('pediatría');
    await expect(page.locator('#dialog-adult')).toBeVisible();
    await expect(page.locator('#area-dialog a.button.lime')).toHaveAttribute(
      'href',
      'https://ehvi.vercel.app/'
    );
    await page.locator('#area-dialog .dialog-close').click();
    await expect(page.locator('#area-dialog')).toBeHidden();

    await page.locator('#reset-search').click();
    await page.locator('.area-card', { hasText: 'Nutrición' }).click();
    await expect(page.locator('#dialog-title')).toHaveText('Nutrición');
    await expect(page.locator('#dialog-adult')).toBeHidden();
    await expect(page.locator('#area-dialog a.button.lime')).toHaveAttribute(
      'target',
      '_blank'
    );
    await expect(page.locator('#area-dialog a.button.lime')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    );
  });

  test('interactive panel links to EHVI with an access code', async ({ page }) => {
    await page.goto('/ehvi/');
    const primary = page.locator('#ehvi-connection a.button.lime');
    await expect(primary).toHaveAttribute('href', 'https://ehvi.vercel.app/');
    await expect(primary).toHaveAttribute('target', '_blank');
    await expect(primary).toHaveAttribute('rel', 'noopener noreferrer');
    await expect(primary).toContainText('Entrar en EHVI');
    await expect(page.locator('#ehvi-connection a.contact-link')).toHaveAttribute(
      'href',
      'mailto:gerencia@grupoelivo.com?subject=EHVI'
    );
  });

  test('English EHVI page uses the localized available status', async ({ page }) => {
    await page.goto('/en/ehvi/');
    await expect(page.locator('.pill')).toContainText('Available with access code');
    await expect(page.locator('.area-card')).toHaveCount(48);
    await expect(page.locator('#ehvi-connection a.button.lime')).toHaveAttribute(
      'href',
      'https://ehvi.vercel.app/'
    );
    await page.locator('.area-card', { hasText: 'Pediatrics' }).click();
    await expect(page.locator('#dialog-title')).toHaveText('Pediatrics');
    await expect(page.locator('#dialog-adult')).toBeVisible();
    await expect(page.locator('#area-dialog a.button.lime')).toBeVisible();
  });
});
