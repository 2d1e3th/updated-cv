# May Antonette Alterado — Personal CV Portfolio

## About

**The Digital Fieldbook** is an interactive professional journal for May Antonette A. Alterado. Its editorial notebook identity combines organized information, technology, and understated botanical growth.

*Where organized ideas grow into meaningful work.*

This project migrates the existing `2d1e3th/updated-cv` portfolio to React and Vite. Verified profile information and the original portrait are preserved. No employment, certificates, awards, project outcomes, or graduation dates have been invented.

## Student

- **May Antonette A. Alterado**
- Bachelor of Science in Information Technology
- Davao del Norte State College
- 4th Year / Undergraduate — supported by the original repository README
- Philippines

## Technologies Used

- React and JavaScript
- Vite
- Tailwind CSS with custom editorial styles
- Framer Motion
- Lucide React
- Public GitHub REST API
- Vercel deployment configuration

## Main Features

- Responsive layouts for mobile, tablet, and desktop
- Interactive Field Notes chapter navigation and reading progress
- Subtle animated growth path and brief, non-blocking entrance note
- Career objective, Quick Notes, and academic timeline
- Interactive skills knowledge map; button-controlled accordions on mobile
- Project case files with accessible native modal dialogs
- Live GitHub repository metadata with timeout and saved-data fallback
- Expandable milestone register and honest experience preparation state
- Animated working rhythm and validated email-draft contact form
- Dedicated `/cv` page with A4 print mode
- Searchable Ctrl/Cmd+K command palette with arrow-key navigation
- Visible keyboard focus, skip link, and reduced-motion support
- Responsive WebP portrait assets; original JPEG retained in `public/assets`

## Running Locally

Use Node.js **22.12+** (or a version supported by the locked Vite release).

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. The default is `http://127.0.0.1:5173`. This React application must be served through Vite; opening `index.html` directly as a file does not run the application.

For a production check:

```sh
npm run build
npm run preview
```

The build is generated in `dist/`. Open `/cv` to view the CV and use **Print / Save as PDF**. `/cv.html` remains supported as a compatibility route.

## Deployment

Import this existing GitHub repository into Vercel and deploy the branch containing the migration:

- Framework preset: **Vite**
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: **none required**

`vercel.json` configures the build and rewrites `/cv` and `/cv.html` to the application entry point. Static assets are served from `public/` during development and copied into `dist/` during builds.

A local production preview verifies the generated application. It does not publish it to Vercel. Push and deploy this branch when ready; no deployment has been initiated by this migration.

## Live Website

Live URL: Add after Vercel deployment

## Updating the Fieldbook

| File | Content |
| --- | --- |
| `src/data/profile.js` | Profile, links, career objective, skills, interests, chapter labels |
| `src/data/projects.js` | Verified case studies, contribution, tools, status, screenshot and links |
| `src/data/repositories.js` | Verified offline GitHub metadata and relevance ordering |
| `src/data/achievements.js` | Credentials and milestone categories |
| `src/data/experience.js` | Verified involvement timeline entries |
| `src/sections/Profile.jsx` | Senior High School fields awaiting confirmation |
| `src/index.css` | Design tokens, responsive layouts, and print styles |
| `public/assets/` | Portrait source, responsive images, and actual portfolio screenshot |

The CV reads the same profile, skills, projects, achievements, and experience data, so those edits stay consistent. Empty Facebook and Instagram URLs are automatically hidden. Add only confirmed links and information.

Project entries support `name`, `category`, `description`, `overview`, `problem`, `contribution`, `technologies`, `status`, `github`, `demo`, `screenshot`, and `screenshotAlt`. Use `null` for unavailable demos or screenshots. Further case studies require verified details; repository existence alone does not establish a personal contribution.

Achievement entries support `{ id, category, title, issuer, year, description, url }`. Experience entries support `{ id, year, role, activity, organization, description, skills }`. Both arrays start empty intentionally.

## GitHub and Contact Behavior

GitHub data is fetched without a token from `https://api.github.com/users/2d1e3th/repos?per_page=100`. Relevant original repositories are prioritized; forks, archived repositories, profile configuration, and unrelated personal pages are excluded. API failures, rate limits, malformed top-level responses, and an eight-second timeout use a verified snapshot. Missing repository descriptions and languages are handled without inventing details.

The contact form trims and validates required fields, then opens a `mailto:` draft. It does **not** send or store messages. Visitors need an email application configured and must review and send the draft themselves. A direct email link remains available.

## Validation and Development History

See [QA notes](docs/QA.md) for the tested behavior and remaining deployment limits. Development is recorded as separate migration, design, content, interaction, API, CV, accessibility, and documentation commits. Existing history has not been rewritten.

## Uploaded CV

The original one-page CV supplied by Antonette is available at `public/documents/May-Antonette-Alterado-CV.pdf`. Header, hero, and command-palette **View CV** links open that PDF. The hero also provides a **Download CV** link. The generated `/cv` print view remains available and includes a link to download the original PDF.

To replace the uploaded CV later, overwrite the PDF at the same path. Its contents are not automatically synchronized with the website’s profile data.
