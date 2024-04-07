import { test, expect } from '@playwright/test';

const sitePages = [
  // {
  //   url: 'https://www.kab.co.il/מכללת-קבלה-לעם/',
  //   mask: [
  //     '.ekit-main-swiper',
  //     '.elementor-slides-wrapper.elementor-main-swiper.swiper.swiper-initialized.swiper-horizontal.swiper-pointer-events',
  //   ],
  // },
 
  { url: 'https://www.kab.co.il/', mask: [], },
  { url: 'https://www.kab.co.il/אקטואליה/', mask: [], },
  { url: 'https://www.kab.co.il/מהי-קבלה/', mask: [], },
  { url: 'https://www.kab.co.il/בני-ברוך-קבלה-לעם/', mask: [], },
  { url: 'https://www.kab.co.il/משמעות-החיים/', mask: [], },
  { url: 'https://www.kab.co.il/ספר-הזוהר/', mask: [], },
  { url: 'https://www.kab.co.il/מקובלים/', mask: [], },
  { url: 'https://www.kab.co.il/מדע-ותפיסת-המציאות/', mask: [], },
  { url: 'https://www.kab.co.il/חגי-ישראל/', mask: [], },
  { url: 'https://www.kab.co.il/חינוך-והורות/', mask: [], },
  { url: 'https://www.kab.co.il/זוגיות/', mask: [], },
  { url: 'https://www.kab.co.il/דיכאון/', mask: [], },
  { url: 'https://www.kab.co.il/אקלים/', mask: [], },
  { url: 'https://www.kab.co.il/מוזיקה/', mask: [], },
  { url: 'https://www.kab.co.il/צרו-קשר/', mask: [], },
  { url: 'https://www.kab.co.il/פרויקטים-ואירועים/', mask: [], },
  { url: 'https://www.kab.co.il/sitemap-מפת-אתר/', mask: [], },
  { url: 'https://www.kab.co.il/מכללת-קבלה-לעם/', mask: [], },
  { url: 'https://www.kab.co.il/קבלה-לעם/', mask: [], },
  { url: 'https://www.kab.co.il/אנטישמיות-הבעיה-והפתרון/', mask: [], },
  { url: 'https://www.kab.co.il/media/', mask: [], },
  { url: 'https://www.kab.co.il/מלחמת-חרבות-ברזל-2/', mask: [], },
  { url: 'https://www.kab.co.il/אדישות-האום-לנפגעות-המלחמה/', mask: [], },
  { url: 'https://www.kab.co.il/איך-לגדל-ילדים-מאושרים/', mask: [], },
  { url: 'https://www.kab.co.il/איך-נשמור-על-עם-ישראל-ועל-חיילי-צהל/', mask: [], },
  { url: 'https://www.kab.co.il/איך-ספר-הזוהר-קשור-אלי/', mask: [], },
  { url: 'https://www.kab.co.il/אין-זמן-אין-מרחב/', mask: [], },
  { url: 'https://www.kab.co.il/אין-כבר-דרך-חזרה/', mask: [], },
  { url: 'https://www.kab.co.il/אינסוף-זיכרון/', mask: [], },

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
