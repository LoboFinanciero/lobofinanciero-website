# El Lobo Financiero — Assets Manifest
Place all files in /public

## LOGO
- loboLogo.png — transparent bg, dark backgrounds only. Nav height: 52px.

## APP RENDERS
- privacy-es.png → Feature 1 Privacy (portrait ~3:5)
- speed-es.png   → Feature 2 Speed   (portrait ~3:5)
- value-es.png   → Feature 3 Value   (portrait ~3:5)
Not used in v1: island-es.png, subscriptions-es.png

## EXTERNAL LINKS
- TikTok:   https://www.tiktok.com/@ellobofinancierou
- YouTube:  https://www.youtube.com/@ElLoboFinanciero
- App Store: https://apps.apple.com/us/app/lobotracker/id6756343539
- Explainer: https://youtube.com/shorts/1b-XFtVPD5g?feature=share

## COLORS
:root {
  --coral:   #EC5C73;  /* CTA, H1 accent, labels */
  --blue-a:  #08599D;  /* YouTube card — OPTION A (original) */
  --blue-b:  #1A7FCF;  /* YouTube card — OPTION B (brighter) ← client decides */
  --yellow:  #F9DC5C;  /* Stats, badges */
  --white:   #F5F8FB;  /* Page bg */
  --dark:    #2E2828;  /* Nav, hero, TikTok card */
}
Implement both blues as commented options. Client will uncomment one.

## TYPOGRAPHY
Google Fonts: DM Sans 400, 500, 700
https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap

H1:    700, clamp(2.4rem, 5vw, 4rem)
H2:    700, clamp(1.8rem, 3vw, 2.4rem)
H3:    700, 1.35rem
Body:  400, 1rem, line-height 1.7
Label: 700, 0.74rem, letter-spacing 0.14em, uppercase, color: --coral

Future secondary font (not active): Instrument Serif (Google Fonts)

## STRUCTURE
/
├── index.html (single page — all sections + #privacidad anchor)
└── public/
    ├── loboLogo.png
    ├── privacy-es.png
    ├── speed-es.png
    └── value-es.png