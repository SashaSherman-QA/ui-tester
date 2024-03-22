import { test, expect } from '@playwright/test';

const sitePages = [
  {
    url: 'https://www.kab.co.il/מהי-קבלה/',
    mask: [],
  },
  {
    url: 'https://www.kab.co.il/מכללת-קבלה-לעם/',
    mask: [
      '.ekit-main-swiper',
      '.elementor-slides-wrapper.elementor-main-swiper.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events',
    ],
  },
  // Add more test cases with their parameters as objects
];

// Dynamically generate test cases for each URL
for (const sitePage of sitePages) {
  const { url, mask } = sitePage;
  test(`${url}`, async ({ page }) => {
    await page.goto(url);
    await expect(page).toHaveScreenshot({
      fullPage: true,
      mask:
        mask.length > 0 ? mask.map((selector) => page.locator(selector)) : [],
    });
  });
}

// test(`https://kab.co.il`, async ({ page }) => {
//   await page.goto('https://kab.co.il');
//   await expect(page).toHaveScreenshot({
//     fullPage: true,
//     mask: [
//     ]
//   });
// });

// test(`https://laitman.co.il`, async ({ page }) => {
//   await page.goto('https://laitman.co.il');
//   await expect(page).toHaveScreenshot({
//     fullPage: true,
//     mask: [
//       page.locator('#flexslider').getByRole('link').first(),
//       page.locator('div.breaking-news')
//     ]
//   });
// });
