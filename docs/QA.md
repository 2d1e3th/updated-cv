# Portfolio QA — dark multi-page redesign

Verified locally on 24 October 2026 using Vite and Microsoft Edge / Playwright.

## Checks

- Production build completes; the existing React/Vite dependencies are retained.
- Five main pages each have one H1 and no duplicate IDs.
- Each page checked at 320, 360, 375, 390, 430, 640, 768, 820, 1024, and 1440px: no horizontal document overflow.
- Page navigation preserves the running application; browser Back/Forward work.
- Mobile menu: first-link focus, Tab order, Escape, link selection, and outside-click closure.
- Theme toggle switches dark/light styles and retains the choice across reloads.
- Ctrl/Cmd+K: search, keyboard selection, cross-page section targets, empty results, Escape.
- Skills accordion responds to touch and keyboard activation.
- Project dialog contains focus, closes on Escape, and returns focus to its opener.
- Failed GitHub requests use four saved verified repository records.
- Credentials register displays an honest empty state.
- Contact validation rejects empty and whitespace-only values and invalid email addresses, trims input, and displays accurate draft feedback.
- Original PDF served successfully as application/pdf, with unchanged 70,889-byte content.
- HTML CV print controls are hidden; current content fits one A4 page.
- Legacy bookmarks redirect to the matching new page and section.
- Reduced-motion rendering and all five desktop/mobile page layouts reviewed.
- No React/page errors during these checks.

## Deployment

Explicit Vercel rewrites cover `/about`, `/works`, `/certificates`, `/contact`, `/cv`, and `/cv.html`. Image and PDF URLs remain static assets. The production build and deployment are checked separately before publishing is reported as complete.

No Lighthouse score is claimed. Website validation does not guarantee a visitor has an email application configured, and no actual message delivery is claimed.
