# Digital Fieldbook — QA record

Verified locally on 24 October 2026 using headless Microsoft Edge / Playwright and the Vite development and production servers.

## Build and assets

- `npm install`: succeeds; dependency audit reports zero vulnerabilities at verification time.
- `npm run dev`: serves successfully.
- `npm run build`: generates the Vite `dist` application.
- Original JPEG preserved; responsive 360px and 720px WebP derivatives load.
- Project screenshot depicts the actual Fieldbook interface, not a fictional project.
- No conflict markers, duplicate IDs, broken section anchors, or React/page errors were detected.

## Layout

No horizontal document overflow at **320, 360, 375, 390, 430, 768, 820, 1024, 1440, or 1920px**. Mobile hero stacks, the skills map becomes accordions, the project dialog becomes a full-screen sheet, and chapter navigation simplifies into a progress strip.

## Interactions

- Mobile menu opens and closes; Escape, link activation, and outside clicks close it.
- Menu opening moves focus to the first link; Escape restores the toggle.
- Skills expand through buttons and keyboard activation, with no hover-only requirement.
- Case-file dialog contains focus, closes on Escape, and restores its opener.
- Ctrl+K and Cmd+K open the command palette; searching, arrow keys, Enter, no-result searches, and Escape are handled.
- Navigation targets match the eight chapter sections; active chapters update during scrolling.
- Milestone register expands to an honest empty state.
- Contact validation rejects empty/whitespace-only fields and invalid email addresses, trims values, and gives accurate email-draft feedback.
- Reduced-motion preference disables entrance/reveal movement and growth-path animation.

## GitHub

Both failure and successful API responses were tested. Failure uses saved metadata. Success prioritizes relevant repositories and excludes forks. Live metadata remains separate from verified case studies and personal contribution claims.

## CV

`/cv` renders all eight sections: Profile, Career Objective, Education, Skills, Projects, Achievements, Experience, and Contact. Print controls disappear during printing. The exported A4 output was rendered to an image and visually reviewed; the current content fits one clean page with readable dark text and no orphaned second page.

## Boundaries

Vercel configuration targets `npm run build`, `dist`, and CV route rewrites. Local production serving can be checked without a Vercel account. A public Vercel deployment has not been performed or verified. Browser tests do not prove that a visitor has a configured email client, and no message delivery is claimed. No Lighthouse score is claimed.
