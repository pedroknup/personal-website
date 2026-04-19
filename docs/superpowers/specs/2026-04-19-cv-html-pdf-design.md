# CV: HTML page with runtime PDF export

**Date:** 2026-04-19
**Branch:** `feat/cv-html-pdf` (off `master`)
**Notion task:** [Replace dynamic CV drawer with HTML CV page + runtime PDF export](https://www.notion.so/347dbdded41c81a08c67fb53f0af2a7e)

## Goal

Replace the existing fullscreen `CvModal` drawer with a normal HTML page route that renders the CV inline. The Download CV button must export the same DOM to a PDF at runtime, looking identical (or close enough) to the on-screen layout.

## Today's behavior (to be removed)

- `src/components/cv/cv.component.tsx` — `CvModal` rendered as a fullscreen drawer.
- `src/components/cv/experience-item-cv.component.tsx` — expandable description item used inside the modal.
- `src/components/cv/cv.style.scss`, `experience-item-cv.style.scss` — drawer-specific styles, animations, expand/collapse, fixed close button bar.
- Triggered from `home-page.component.tsx`:
  - `Curriculum Vitae` button → on desktop, sets `showCv` and renders `<CvModal>`; on mobile, opens the static PDF in `public/`.
  - URL hash `/#/resume` → sets `showCv` on mount.
  - Download button inside the modal → opens the static `public/pedro-knup-cv-05-2025.pdf`.

## New behavior

### Routing

- Add a real route: `/#/cv` (HashRouter). Keep `/#/resume` as an alias that redirects to `/#/cv`.
- The `Curriculum Vitae` button on the home page navigates to `/#/cv` (no more drawer; same on desktop and mobile).
- The home page no longer renders any CV modal/drawer.

### CV page (`src/pages/cv/cv-page.component.tsx`)

- Renders a single CV “sheet” constrained to **A4 width** (≈ 794px @ 96dpi) so the on-screen view matches the paper output.
- Top-of-page action bar (outside the sheet, not exported): **Download PDF** and **Back**.
- Inside the sheet:
  - **Header**: name, position, short tagline.
  - **Two columns**:
    - **Left sidebar (~30%, dark background, light text)**: profile photo, contact (email, location), social links, hard skills (`skillsCV`), languages (`skillLanguages`), soft skills (`softSkillsCV`), personal note.
    - **Main column (~70%, light background)**: bio (from `personalData.bio`), Professional Experience timeline, Education timeline.
- All content **always expanded**; no collapse/expand interaction. Use `description.content.cv` (the polished short version) for both screen and PDF.
- Each experience entry shows: title, date (right-aligned), place (italic), description, skill chips inline.

### PDF export

- New util `src/utils/export-cv-pdf.ts`.
- Dependencies: `html2canvas`, `jspdf` (added to `dependencies` in `package.json`).
- Click handler:
  1. Find the CV sheet element by ref/id.
  2. `html2canvas(node, { scale: 2, useCORS: true, backgroundColor: '#ffffff' })` → high-DPI canvas.
  3. Create A4 jsPDF (`portrait`, `mm`, `a4`); compute target image dimensions to fit page width with proportional height.
  4. If the rendered image is taller than one A4 page, **slice it across multiple pages** by drawing the same image with a negative `y` offset on each subsequent `addPage()`. (Standard html2canvas+jsPDF multi-page pattern.)
  5. `pdf.save('pedro-knup-cv.pdf')`.
- Disable the Download button + show "Generating…" while the export runs.

### Static PDF asset

- Stop linking to `public/pedro-knup-cv-05-2025.pdf`. Leave the file in place for now (don't delete) so any external links don't 404. Remove all in-app references to `PDF_URL`.

## Components to add

- `src/pages/cv/cv-page.component.tsx`
- `src/pages/cv/cv-page.style.scss`
- `src/pages/cv/index.ts`
- `src/utils/export-cv-pdf.ts`

## Components / code to remove

- `src/components/cv/` — entire folder (`cv.component.tsx`, `experience-item-cv.component.tsx`, the two `.scss` files, `index.ts`).
- All `CvModal` usages, `showCv` state, and `/resume` hash handling in `src/pages/home/home-page.component.tsx`.
- `PDF_URL` import from `src/data/constants.ts` wherever used. (Keep the constant itself — out of scope to delete unused exports.)

## Routing wiring

- `src/main.tsx`: replace the single `<HomeComponent />` render with a `<Routes>` block:
  - `/` → `<HomeComponent />`
  - `/cv` → `<CvPage />`
  - `/resume` → `<Navigate to="/cv" replace />`

## Visual style

- Typography: `Montserrat` (already in use).
- Sidebar: `#272727` bg, `#cfcfcf` text (matches existing).
- Accent: `$main-color` (`#f5cd38`) for headings/dividers.
- Print-safe colors (no transparent backgrounds on the sidebar — html2canvas handles them, but keeping it solid is safest).

## Out of scope

- Editing CV data content (use `bio.ts`, `skills.ts`, `experiences.ts` as-is).
- Mobile-optimized CV layout (the sheet is A4-shaped; on mobile users can scroll horizontally or zoom). The page is primarily for download anyway.
- Deleting the legacy static PDF in `public/`.
- Tests (no test infra exists in this project).

## Verification plan

1. `npm start` → open `http://localhost:3100/#/cv`.
2. Page renders the new CV; layout looks like the proposed design.
3. From home, "Curriculum Vitae" button navigates to `/#/cv`.
4. `/#/resume` redirects to `/#/cv`.
5. Click **Download PDF** → file downloads as `pedro-knup-cv.pdf`. Open it; visually compare against the on-screen rendering.
6. `npm run build` succeeds with no TypeScript errors.
