# Rica Ann D. Ranario — Graphic Portfolio

A static portfolio website (HTML5, CSS3, vanilla JavaScript — no frameworks, no backend, no database) built for free GitHub Pages hosting in the repository `ranarioricaann-portfolio/graphic-portfolio`.

Live URL (once deployed): https://ranarioricaann-portfolio.github.io/graphic-portfolio/

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage: hero, featured work, services, about preview, experience highlights, contact |
| `work.html` | Work folder index: one folder card per category, each linking to that category's folder page |
| `logo-design.html` | Logo Design folder page (placeholder — work on its way) |
| `product-mockups.html` | Product Mockups folder page (placeholder — work on its way) |
| `meta-ads-graphics.html` | Meta Ads Graphics folder page: the 2 Meta Ad projects (see below) |
| `about.html` | Professional intro, skills, software, experience timeline, education, languages |
| `contact.html` | Employment/recruitment and freelance enquiries (mailto — see below) |
| `celebrity-meta-ad.html` | REAL project: Celebrity Cruises — Limited-Time Offer Meta Ad (see below) |
| `explora-meta-ad.html` | REAL project: Explora Journeys — Exceptional Savings Meta Ad (see below) |
| `social-media-stories.html` | Social Media Graphics folder page — REAL gallery: 7 story graphics (see below) |
| `assets/stories/` | Real social media story graphics (JPG) shown in the Social Media Graphics folder (`social-media-stories.html`); one is also the folder cover on `work.html` / `index.html` |
| `project-template.html` | Project TEMPLATE (labelled placeholder) to copy for each real project |
| `assets/videos/` | Real project videos + poster frames for the Celebrity Cruises and Explora Journeys Meta Ads (see below) |
| `assets/css/style.css` | All styles. Palette only: #1D1D1B, #FFFFFF, #F3F0EA, #C6A77B, #77736C, #E6E0D6 |
| `assets/js/main.js` | Mobile nav toggle, portfolio filters, active nav state, footer year |
| `assets/Rica-Ann-Ranario-CV.pdf` | The real CV (source: CV-updated.pdf). Every Download CV button links here |
| `assets/favicon.svg` | "RR" initials favicon |
| `assets/placeholders/*.svg` | Clearly labelled placeholder images — NOT real work |
| `sitemap.xml`, `robots.txt`, `.nojekyll` | SEO / GitHub Pages support files |

All internal links and asset paths are relative, so the site works correctly as a GitHub Pages *project* site under `/graphic-portfolio/`.

## Folder structure (reorganised 2026-10-28)

Work is organised into **category folders**, like the "Selected Work" folder cards Anne asked for: each category's pieces live inside its own folder page, entered from a folder card.

- `work.html` is the folder index (also mirrored as the **Selected Work** section on `index.html`): one folder card per category with a cover image, the folder name, and a content count.
- **Social Media Graphics** → `social-media-stories.html` (7 real story graphics)
- **Logo Design** → `logo-design.html` (placeholder: work on its way, samples on request)
- **Product Mockups** → `product-mockups.html` (placeholder: work on its way, samples on request)
- **Meta Ads Graphics** → `meta-ads-graphics.html` (2 real projects · 8 videos), whose cards open the project pages `celebrity-meta-ad.html` and `explora-meta-ad.html`

These four folders are the portfolio's final folder set (confirmed by Anne on 2026-10-28, matching her reference screenshot). Naming: the advertising category's display name is **Meta Ads Graphics** everywhere (its internal `data-category` value stays `digital-advertising`). The Logo Design folder's internal `data-category` value is `logo-design`, and Product Mockups' is `product-mockups`.

## First real project (added 2026-10-28)

**Celebrity Cruises — Limited-Time Offer Meta Ad** (`celebrity-meta-ad.html`, in the Meta Ads Graphics folder `meta-ads-graphics.html`; internal `data-category` value `digital-advertising`) is the portfolio's first real project.

Its files live in `assets/videos/` — one MP4 plus one poster JPG per placement size, all of the same creative:

| File | Format |
|---|---|
| `celebrity-cruiseweb-meta-ad-4x5.mp4` / `-4x5-poster.jpg` | 4:5 portrait, 1080 × 1350 |
| `celebrity-cruiseweb-meta-ad-1x1.mp4` / `-1x1-poster.jpg` | 1:1 square, 1080 × 1080 |
| `celebrity-cruiseweb-meta-ad-9x16.mp4` / `-9x16-poster.jpg` | 9:16 vertical, 1080 × 1920 |
| `celebrity-cruiseweb-meta-ad-16x9.mp4` / `-16x9-poster.jpg` | 16:9 widescreen, 1920 × 1080 |

Each video is about 16 seconds and plays on the project page with native `<video controls>`; posters were extracted from the videos at ~3 seconds. No results, metrics, or role claims are stated for this project — those were not documented with the sample.

## Second real project (added 2026-10-28)

**Explora Journeys — Exceptional Savings Meta Ad** (`explora-meta-ad.html`, in the Meta Ads Graphics folder `meta-ads-graphics.html`) is the portfolio's second real project, sitting alongside the Celebrity Cruises project in the same folder.

Its files also live in `assets/videos/` — one MP4 plus one poster JPG per placement size, all of the same creative:

| File | Format |
|---|---|
| `explora-cruiseweb-meta-ad-1080x1030.mp4` / `-1080x1030-poster.jpg` | Feed, 1080 × 1030 |
| `explora-cruiseweb-meta-ad-1x1.mp4` / `-1x1-poster.jpg` | 1:1 square, 1080 × 1080 |
| `explora-cruiseweb-meta-ad-9x16.mp4` / `-9x16-poster.jpg` | 9:16 vertical, 1080 × 1920 |
| `explora-cruiseweb-meta-ad-16x9.mp4` / `-16x9-poster.jpg` | 16:9 widescreen, 1920 × 1080 |

Each video is about 21 seconds and plays on the project page with native `<video controls>`; posters were extracted from the videos at ~3.5 seconds. The creative promotes an "Exceptional Savings" all-inclusive offer (up to 30% off + up to $500 onboard credit). No results, metrics, or role claims are stated for this project — those were not documented with the sample.

## Third real project (added 2026-10-28)

**Social Media Stories** (`social-media-stories.html` — the Social Media Graphics folder page; internal `data-category` value `social-media-graphics`) is a set of seven real story-format graphics, each designed for a cruise or tour brand and co-branded with The Cruise Web. The Celebrity Cruises Spring Sale graphic is the folder's cover image on `work.html` and `index.html`.

The image files live in `assets/stories/`:

| File | Graphic | Format |
|---|---|---|
| `story-celebrity-spring-sale.jpg` | Celebrity Cruises — Spring Sale Story (75% off 2nd guest, up to $650 bonus savings, free 3rd/4th/5th guest) | 1080 × 1920 |
| `story-avalon-savings.jpg` | Avalon Waterways — Savings Story (up to $10,000 off per couple or up to 50% off per person, free airfare, free 1-night hotel) | 1080 × 1920 |
| `story-globus-tours.jpg` | Globus — Tours Offer Story (up to $1,200 off per couple, or free extra night) | 1080 × 1920 |
| `story-holland-america-travel-by-sea.jpg` | Holland America — Travel By Sea Story (free gratuities, Have It All package, free kids' fares, up to $300 onboard credit) | 1080 × 1920 |
| `story-norwegian-50-off.jpg` | Norwegian Cruise Line — 50% Off Story (50% off all cruises, free open bar, up to $200 onboard credit, save $250) | 1080 × 1920 |
| `story-oceania-voyages.jpg` | Oceania Cruises — Collection of Voyages Story (2028 & 2029, 230+ sailings, 60 overnight stays) | 1080 × 1920 |
| `story-tauck-travel-beyond-ordinary.jpg` | Tauck — Travel Beyond Ordinary Story (first-time guests: one complimentary pre/post hotel stay, 2026/2027 journeys) | 1080 × 1920 |

On the gallery page each graphic is shown in full at its correct 9:16 proportions (`object-fit: contain`, no cropping of the artwork's text). No results, metrics, or role claims are stated for these graphics — those were not documented with the samples.

## Local preview

Open `index.html` in a browser, or run a simple server from this folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## How to edit

- **Text / experience / skills:** edit the relevant `.html` file directly. Experience, education, and skills come from the CV — keep them accurate and do not add invented clients, projects, or statistics.
- **Styles:** edit `assets/css/style.css` only; keep the six-color palette above.
- **CV:** replace `assets/Rica-Ann-Ranario-CV.pdf` with a newer PDF using the exact same filename, and all Download CV buttons keep working.

## Adding a real project

1. Save the real design image(s) into a new folder, e.g. `assets/projects/my-project/` (use compressed JPG/PNG/WebP, with descriptive filenames).
2. Open the project's category folder page (`social-media-stories.html`, `logo-design.html`, `product-mockups.html`, or `meta-ads-graphics.html`), copy one `<article class="card project-card" …>` block there, then:
   - set `data-category` to the folder's value: `social-media-graphics`, `logo-design`, `product-mockups`, or `digital-advertising` (Meta Ads Graphics),
   - replace the placeholder `<img>` with the real image and write descriptive alt text,
   - replace the title and description with the real project's title and a short, factual description,
   - point the card link to the new project page (next step).
   Then update that folder's card on `work.html` and `index.html` (cover image and content count, e.g. "7 story graphics").
3. Copy `project-template.html` to a new file, e.g. `project-my-project.html`, and replace every `[Placeholder: …]` with the real overview, the work itself (gallery images or videos), and deliverables. Project pages intentionally keep it short — title, overview, the work, deliverables, related projects — and do NOT use Objective / Design Challenge, My Role & Responsibilities, Creative Execution, Final Design Gallery (as a labelled section), or Results / Documented Results sections; those were removed on purpose (Anne, 2026-10-28), so do not re-add them.
4. If the project is self-initiated/concept work, label it clearly: **"Self-Initiated Concept Project."** Never associate concept work with a real company.
5. Add the new page URL to `sitemap.xml`.

## Replacing placeholders

Placeholders live in `assets/placeholders/` and appear as folder covers (on `work.html` / `index.html`) and inside the Logo Design and Product Mockups folder pages, always labelled as placeholders / "Work on its way". To replace one, swap its `<img src>` for the real image path and update the `alt`, title, and description as above, and update the folder card's content line. When no placeholders remain, the `assets/placeholders/` folder and the placeholder notice on `work.html` can be deleted/removed.

## Contact page — no backend

`contact.html` intentionally has **no form**. The two pathways (Employment & recruitment, Freelance project) are `mailto:` links to `ranarioricaann@gmail.com` with prefilled subjects, so enquiries open in the visitor's own email app. Nothing is simulated, stored, or submitted to a server.

## Deployment (GitHub Pages)

1. Put all files in this folder at the root of the `ranarioricaann-portfolio/graphic-portfolio` repository (this folder *is* the site root) and push to GitHub.
2. In the repository: **Settings → Pages**.
3. Under "Build and deployment", choose **Deploy from a branch**, branch **`main`**, folder **`/ (root)`**, and save.
4. Wait for the deployment to finish; the site is served at https://ranarioricaann-portfolio.github.io/graphic-portfolio/
5. After future edits, just commit and push — GitHub Pages redeploys automatically.

## Checks before publishing

- Open every page and click every nav/footer link.
- On `work.html` and the homepage Selected Work section, open each folder card and check the folder page it lands on.
- Click a Download CV button and confirm the PDF opens/downloads.
- Test on a phone-width viewport (responsive grid: 3 columns desktop, 2 tablet, 1 mobile on Work).
- Confirm no placeholder is presented as real work.
