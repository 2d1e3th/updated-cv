# May Antonette Alterado — Personal CV Portfolio

## About

A responsive portfolio and CV for **May Antonette A. Alterado**, a Bachelor of Science in Information Technology undergraduate at Davao del Norte State College.

The current design uses a dark interface, bold typography, restrained green/blue/violet accents, and separate Home, About, Works, Certificates, and Contact pages. Its visual and navigation direction was informed by [Djembar Arafat’s portfolio reference](https://dribbble.com/shots/26918205-Next-js-Portfolio-Website-Series-Dark-UI); the implementation, portrait, content, and project imagery belong to this portfolio. No imagery or personal claims from the reference are reused.

Verified personal details, the original portrait, and the supplied PDF CV are preserved. No employment, awards, certificates, project results, or graduation dates are invented.

## Student

- May Antonette A. Alterado
- Bachelor of Science in Information Technology
- Davao del Norte State College
- 4th Year / Undergraduate, supported by the original repository README
- Philippines

## Technologies Used

- React, JavaScript, and Vite
- Tailwind CSS with custom responsive styles
- Framer Motion
- Lucide React
- Public GitHub REST API
- Vercel

The reference’s Next.js implementation is not a dependency; this repository retains its working React/Vite stack.

## Main Features

- Floating navigation with active-page indication and a keyboard-accessible mobile menu
- Client-side page transitions with browser Back/Forward support
- Dark theme by default and a saved light-theme preference
- Responsive portrait, foundational skill links, and interactive capability cards
- About page with career objective, Quick Notes, education, skills map, involvement, and working rhythm
- Verified project case file with accessible modal and an actual website screenshot
- Public GitHub metadata with an eight-second timeout and saved fallback
- Honest expandable certificates and milestones register
- Contact form with accessible validation and email-draft preparation
- Ctrl/Cmd+K searchable navigation
- Original PDF CV download and a separate printable `/cv` page
- Reduced-motion support, visible focus, semantic headings, and skip link

## Pages

| URL | Contents |
| --- | --- |
| `/` | Introduction, foundations, strengths, featured project |
| `/about` | Profile details, objective, education, skills, involvement, process |
| `/works` | Verified case study and public GitHub repositories |
| `/certificates` | Editable verified-credentials register |
| `/contact` | Contact options and email-draft form |
| `/cv` | Simple HTML CV with A4 print mode |
| `/documents/May-Antonette-Alterado-CV.pdf` | Original uploaded CV |

Legacy links such as `/#skills`, `/#education`, and `/#projects` lead to their corresponding page sections. `/cv.html` remains a compatibility route.

## Running Locally

Use Node.js **22.12+** or another version supported by the locked Vite release.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://127.0.0.1:5173`. Opening the source `index.html` directly from the filesystem does not run the application.

```sh
npm run build
npm run preview
```

The production application is generated in `dist/`. The preview server normally uses port 4173.

## Deployment

The existing Vercel project is connected to the GitHub `main` branch. Pushing completed changes to `main` triggers an automatic deployment.

- Framework: Vite
- Install: `npm install`
- Build: `npm run build`
- Output: `dist`
- Required environment variables: none

`vercel.json` includes explicit rewrites for the application pages and both HTML CV URLs so direct visits and browser refreshes work. PDF and image assets remain ordinary static files.

## Live Website

[updated-cv-psi.vercel.app](https://updated-cv-psi.vercel.app/)

## Maintaining Content

| File | Purpose |
| --- | --- |
| `src/data/profile.js` | Personal information, objective, social links, skills, interests |
| `src/data/projects.js` | Verified project details, contribution, tools, status, screenshots, links |
| `src/data/repositories.js` | Saved GitHub metadata and relevance ordering |
| `src/data/achievements.js` | Verified credentials and categories |
| `src/data/experience.js` | Verified involvement entries |
| `src/sections/Profile.jsx` | About layout and pending Senior High School fields |
| `src/sections/Home.jsx` | Homepage introduction, foundations, and strengths |
| `src/hooks/useNavigation.js` | Page navigation, legacy bookmarks, and focus behavior |
| `src/index.css` | Shared dark/light tokens, layouts, interactions, and print styles |
| `public/assets/` | Original JPEG, responsive WebP portraits, and actual portfolio screenshot |
| `public/documents/May-Antonette-Alterado-CV.pdf` | Original supplied PDF CV |

The generated HTML CV uses the same content data as the site. The original PDF is preserved separately: overwrite that file to update the PDF, and update the site data when its content changes. PDF contents do not synchronize automatically.

Achievement entries support `{ id, category, title, issuer, year, description, url }`. Experience entries support `{ id, year, role, activity, organization, description, skills }`. Both arrays start empty intentionally. Empty Facebook and Instagram links stay hidden.

## GitHub and Contact

Public repositories are fetched without a token from `https://api.github.com/users/2d1e3th/repos?per_page=100`. Relevant original repositories are prioritized. Forks, archived repositories, and unrelated personal pages are excluded. Unavailable APIs, rate limits, and timeouts use a verified saved snapshot. Repository metadata does not establish a personal contribution or completed case study.

The contact form trims and validates required fields, then opens a `mailto:` draft. It does not send or store messages. The visitor must have an email application configured and review and send the draft. A direct email link is always available.

## Verification

See [QA notes](docs/QA.md). Development is recorded in meaningful commits without replacing the repository’s previous history.
