import { expect, test, type Page } from '@playwright/test';
import { PNG } from 'pngjs';

const routes = [
  { name: 'home-es', path: '/', oldPath: '/' },
  { name: 'home-en', path: '/en/', oldPath: '/en/' },
  { name: 'ehvi-es', path: '/ehvi/', oldPath: '/ehvi/' },
  { name: 'ehvi-en', path: '/en/ehvi/', oldPath: '/en/ehvi/' },
  { name: 'legal-es', path: '/legal/', oldPath: '/legal/' },
  { name: 'legal-en', path: '/en/legal/', oldPath: '/en/legal/' },
];

const OLD_ORIGIN = 'http://127.0.0.1:4173';
const NEW_ORIGIN = 'http://127.0.0.1:4174';

async function extractStructure(page: Page, ignoreIds: string[]) {
  return page.evaluate((ignored) => {
    const ignoredTags = new Set([
      'SCRIPT',
      'STYLE',
      'LINK',
      'NOSCRIPT',
      'TEMPLATE',
      'META',
      'NEXT-ROUTE-ANNOUNCER',
      'NEXTJS-PORTAL',
    ]);
    const attributes = [
      'role',
      'type',
      'hidden',
      'aria-label',
      'aria-current',
      'aria-expanded',
      'aria-controls',
      'aria-pressed',
      'aria-live',
      'aria-labelledby',
      'data-group',
      'data-area',
      'data-group-id',
    ];
    const imageAttributes = ['src', 'alt', 'width', 'height'];
    const result: string[] = [];

    function walk(element: Element, depth: number) {
      if (ignoredTags.has(element.tagName)) return;
      if (ignored.includes(element.id)) return;

      if (element.tagName !== 'BODY') {
        const classes = Array.from(element.classList).sort().join('.');
        const attrs = attributes
          .map((name) =>
            element.hasAttribute(name) ? `${name}=${element.getAttribute(name)}` : ''
          )
          .filter(Boolean);
        if (element.tagName === 'IMG') {
          attrs.push(
            ...imageAttributes
              .map((name) =>
                element.hasAttribute(name)
                  ? `${name}=${element.getAttribute(name)}`
                  : ''
              )
              .filter(Boolean)
          );
        }
        result.push(
          `${depth}:${element.tagName.toLowerCase()}${
            element.id ? `#${element.id}` : ''
          }${classes ? `.${classes}` : ''}${attrs.length ? `[${attrs.join(',')}]` : ''}`
        );
      }

      for (const child of Array.from(element.children)) {
        walk(child, depth + 1);
      }
    }

    walk(document.body, 0);
    return result;
  }, ignoreIds);
}

async function extractStyles(page: Page) {
  return page.evaluate(() => {
    const selectors = [
      '.wrap',
      '.site-header',
      '.brand',
      '.brand-image',
      '.desktop-nav',
      '.nav-end',
      '.language',
      '.nav-contact',
      '.menu-button',
      '.mobile-nav',
      '.hero',
      '.hero-copy',
      '.hero h1',
      '.hero h1 em',
      '.hero .lead',
      '.hero-actions',
      '.hero-small',
      '.brand-showcase',
      '.hero-brand-image',
      '.brand-showcase-bottom',
      '.intro-band',
      '.intro-band .wrap',
      '.work',
      '.section-head',
      '.service-list',
      '.service',
      '.service summary',
      '.service-num',
      '.service-sub',
      '.service-plus',
      '.ehvi-feature',
      '.feature-layout',
      '.feature-copy',
      '.feature-note',
      '.ehvi-preview',
      '.preview-head',
      '.preview-status',
      '.preview-core',
      '.preview-areas',
      '.preview-foot',
      '.feature-disclaimer',
      '.company',
      '.company-tags',
      '.company-copy',
      '.contact',
      '.contact-right',
      'footer',
      '.footer-links',
      '.copyright',
      '.ehvi-hero',
      '.ehvi-word.large',
      '.ehvi-hero h1 em',
      '.ehvi-intro',
      '.pill',
      '.notice-band',
      '.notice-band .wrap',
      '.journey',
      '.journey>div',
      '.step-no',
      '.directory',
      '.directory .section-head',
      '.search-row',
      '.search-box',
      '.search-box input',
      '.reset-search',
      '.filters',
      '.filters button',
      '.filters button[aria-pressed="true"]',
      '.results-count',
      '.areas-grid',
      '.area-card',
      '.area-group',
      '.interactive-section',
      '.interactive-layout',
      '.connection-panel',
      '.faq',
      '.faq details',
      '.faq summary',
      '.legal',
      '.legal h1',
      '.legal h2',
      '.legal p',
      'dialog',
      '.dialog-close',
      '.dialog-notice',
      '.dialog-pending',
      '.dialog-dismiss',
      '.button.dark',
      '.button.lime',
      '.button.light',
      '.text-link',
    ];
    const properties = [
      'display',
      'position',
      'boxSizing',
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft',
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
      'fontFamily',
      'fontSize',
      'fontWeight',
      'fontStyle',
      'lineHeight',
      'letterSpacing',
      'textAlign',
      'textTransform',
      'color',
      'backgroundColor',
      'borderTopWidth',
      'borderTopStyle',
      'borderTopColor',
      'borderTopLeftRadius',
      'gap',
      'rowGap',
      'columnGap',
      'gridTemplateColumns',
      'flexDirection',
      'alignItems',
      'justifyContent',
      'overflow',
      'boxShadow',
      'transform',
      'maxWidth',
    ];
    const widthSelectors = new Set([
      '.wrap',
      '.site-header',
      '.hero',
      '.brand-showcase',
      '.brand-image',
      '.hero-brand-image',
      '.intro-band .wrap',
      '.work',
      '.ehvi-feature',
      '.feature-layout',
      '.company',
      '.contact',
      'footer',
      '.ehvi-hero',
      '.journey',
      '.directory',
      '.areas-grid',
      '.area-card',
      '.interactive-section',
      '.interactive-layout',
      '.faq',
      '.legal',
    ]);
    const result: Record<string, Record<string, string>> = {};

    for (const selector of selectors) {
      const element = document.querySelector(selector);
      if (!element) {
        result[selector] = { missing: 'true' };
        continue;
      }
      const computed = getComputedStyle(element);
      const values: Record<string, string> = {};
      for (const property of properties) {
        values[property] = computed.getPropertyValue(property);
      }
      if (widthSelectors.has(selector)) {
        values.width = computed.width;
      }
      result[selector] = values;
    }

    return result;
  });
}

async function screenshotDiffRatio(
  oldBuffer: Buffer,
  newBuffer: Buffer
): Promise<number> {
  const { default: pixelmatch } = await import('pixelmatch');
  const oldImage = PNG.sync.read(oldBuffer);
  const newImage = PNG.sync.read(newBuffer);

  if (
    oldImage.width !== newImage.width ||
    oldImage.height !== newImage.height
  ) {
    throw new Error(
      `Screenshot dimensions differ: ${oldImage.width}x${oldImage.height} vs ${newImage.width}x${newImage.height}`
    );
  }

  const diff = new PNG({ width: oldImage.width, height: oldImage.height });
  const pixels = pixelmatch(
    oldImage.data,
    newImage.data,
    diff.data,
    oldImage.width,
    oldImage.height,
    { threshold: 0.1 }
  );

  return pixels / (oldImage.width * oldImage.height);
}

for (const route of routes) {
  test(`${route.name} keeps the original design`, async ({ page }, testInfo) => {
    const ignoreIds = route.name.startsWith('ehvi')
      ? ['ehvi-connection', 'area-dialog']
      : [];

    await page.goto(`${OLD_ORIGIN}${route.oldPath}`, {
      waitUntil: 'networkidle',
    });
    const oldStructure = await extractStructure(page, ignoreIds);
    const oldStyles = await extractStyles(page);
    const oldOverflow = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      viewport: window.innerWidth,
    }));
    await page.screenshot({
      path: testInfo.outputPath(
        `${route.name}-${testInfo.project.name}-old.png`
      ),
      fullPage: true,
    });
    const oldViewport = await page.screenshot();

    await page.goto(`${NEW_ORIGIN}${route.path}`, {
      waitUntil: 'networkidle',
    });
    const newStructure = await extractStructure(page, ignoreIds);
    const newStyles = await extractStyles(page);
    const newOverflow = await page.evaluate(() => ({
      document: document.documentElement.scrollWidth,
      body: document.body.scrollWidth,
      viewport: window.innerWidth,
    }));
    await page.screenshot({
      path: testInfo.outputPath(
        `${route.name}-${testInfo.project.name}-new.png`
      ),
      fullPage: true,
    });
    const newViewport = await page.screenshot();

    expect(newStructure).toEqual(oldStructure);
    expect(newOverflow).toEqual(oldOverflow);
    expect(newOverflow.document).toBeLessThanOrEqual(newOverflow.viewport + 1);
    expect(newOverflow.body).toBeLessThanOrEqual(newOverflow.viewport + 1);

    if (route.name.startsWith('ehvi')) {
      for (const selector of ['.dialog-dismiss', '.button.light']) {
        if (newStyles[selector]?.display === 'flex') {
          newStyles[selector] = {
            ...newStyles[selector],
            display: 'inline-flex',
          };
        }
      }
    }

    for (const [selector, oldValues] of Object.entries(oldStyles)) {
      if (oldValues.missing) continue;
      expect(
        newStyles[selector],
        `Missing selector in the new page: ${selector}`
      ).toBeTruthy();
      expect(
        newStyles[selector].missing,
        `Selector is missing in the new page: ${selector}`
      ).toBeFalsy();
      expect(
        newStyles[selector],
        `Computed styles differ for ${selector}`
      ).toEqual(oldValues);
    }

    const diffRatio = await screenshotDiffRatio(oldViewport, newViewport);
    testInfo.annotations.push({
      type: 'visual-diff',
      description: `${(diffRatio * 100).toFixed(3)}% of the viewport changed`,
    });
    const maxDiffRatio = route.name.startsWith('ehvi')
      ? testInfo.project.name === 'mobile'
        ? 0.06
        : 0.03
      : 0.02;
    expect(diffRatio).toBeLessThan(maxDiffRatio);
  });
}
