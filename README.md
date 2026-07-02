# cliff

Grace Cliff's portfolio site. Static HTML/CSS/JS, hosted on GitHub Pages, with content (project text, images, videos, the about page) managed in [Sanity](https://www.sanity.io) — a free content editor that anyone can use without touching code.

## Editing the site (for Grace)

All project and about-page content lives in the Sanity Studio at **`https://<project-name>.sanity.studio`** (the exact link gets filled in during setup below — bookmark it once you have it). Log in there to:

- **Edit an existing project** — click it in the Projects list, change the title/description/images, click **Publish**. Changes are live on the site immediately, no deploy needed.
- **Add a brand-new project** — click **Projects → Create**, fill in the fields (title, medium, cover image, description, gallery), set an **Order** number to control where it appears in the grid, and **Publish**. It shows up on the site automatically — no new file, no code.
- **Hide a project** without deleting it — turn off the **Published** toggle.
- **Add a video** — videos are never uploaded as files. Upload the video to a free YouTube or Vimeo account like normal, then paste the *embed* URL (e.g. `https://player.vimeo.com/video/12345` or `https://www.youtube.com/embed/xxxxx`, not the regular watch/share link) into the media block's **Embed URL** field.
- **Reorder the gallery** — drag items up/down in the Gallery list.
- **Edit the About page** — there's a single "About Page" entry pinned at the top of the content list.

## How it works (for whoever maintains the code)

The site itself has no build step — it's plain HTML/CSS with `<script type="module">` files, same as before. The only change is that `scripts/render.js` fetches content from Sanity's public read API at page-load time instead of reading it from a hardcoded JS file. `layout/portfolio.html`, `layout/about.html`, and `portfolio/project.html` are the three page templates; every individual project used to be its own HTML file — those now redirect to `portfolio/project.html?slug=<slug>` for backward compatibility with any old links.

```
studio/               Sanity Studio (schema + admin UI Grace logs into)
scripts/sanity-client.js   Public, read-only Sanity client (no secrets)
scripts/render.js     Fetches from Sanity and renders the grid/detail/about pages
content/projects.json Snapshot of all content as of the migration (backup/reference)
scripts/migrate/       One-time script that uploaded content/projects.json into Sanity
```

### One-time setup (already done once, kept here in case the project needs to be re-created)

1. Create a free account at [sanity.io](https://www.sanity.io) and a new project.
2. `cd studio && npm install && npx sanity login`, then replace `REPLACE_WITH_PROJECT_ID` in `studio/sanity.config.js` and `studio/sanity.cli.js` with the real project ID (find it in the Sanity dashboard, or run `npx sanity init` from `studio/` to create the project and have it fill this in for you).
3. Deploy the Studio so Grace has a URL to log into: `npx sanity deploy` (choose a studio hostname when prompted — this becomes `https://<hostname>.sanity.studio`).
4. In `scripts/sanity-client.js`, replace `REPLACE_WITH_PROJECT_ID` with the same project ID.
5. In the Sanity dashboard, make sure the dataset (`production`) has public read access (this is the default for new projects) so the site can fetch content without an API token.
6. Run the migration once to load `content/projects.json` into the new project:
   ```
   cd scripts/migrate
   npm install
   cp .env.example .env   # fill in SANITY_PROJECT_ID and a write-access API token from the Sanity dashboard
   npm run migrate
   ```
   Delete the API token from the Sanity dashboard afterward — it's only needed for this one-time import.
7. Spot-check content in the Studio, then serve the repo locally (e.g. `npx serve .`) and click through the site to confirm everything renders.

### Local development

No build step — just serve the repo root with any static file server (`npx serve .`, `python3 -m http.server`, etc.) and open `layout/portfolio.html`.
