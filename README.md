# RICOHUNT — ricohunt.com

Website for RICOHUNT, a device sourcing service based in Ajman, UAE.
Customers request a phone, laptop or tablet; we source it from UAE market
traders, show the actual unit and final price, and deliver after approval.

## What's here

```
public/
  index.html    Single-page site (English + Arabic)
  app.js        Language toggle and WhatsApp request builder
  _headers      Security headers (Cloudflare Pages / Netlify format)
  robots.txt
  sitemap.xml
```

Static only: no backend, no database, no cookies. The request form builds a
WhatsApp message in the visitor's browser and stores nothing.

## Run locally

```bash
npx serve public
```

## Deploy (Cloudflare Pages)

1. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git →
   select `Live-market-hunts`.
2. Framework preset: None. Build command: empty. Output directory: `public`.
3. After the first deploy, open the `*.pages.dev` URL and check the site,
   the Arabic toggle and the WhatsApp button.
4. Custom domains → add `ricohunt.com` and `www.ricohunt.com`.
   Remove these domains from the old Rico job-platform project first.

Rollback: move the custom domains back to the previous project, or roll back
to an earlier deployment in Cloudflare Pages.

## Editing content

- English text lives in `public/index.html`.
- Arabic text lives in the `AR` object in `public/app.js`, keyed by the
  `data-i18n` attribute of each element. Change both when you change copy.
- WhatsApp number: `WA_NUMBER` in `app.js` and the `wa.me` links in `index.html`.

## Before going live — owner to confirm

- [ ] 7-day warranty conditions (FAQ answer and footer note)
- [ ] Payment wording (FAQ "When do I pay?")
- [ ] Trade licence activity covers device sales
- [ ] TikTok handle, if it should be linked

Do not publish prices, stock, reviews or delivery times that have not been
confirmed.
