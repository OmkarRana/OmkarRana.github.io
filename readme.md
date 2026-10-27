# Omkar Rana — Data Engineer portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS 4, and Framer Motion. All professional content comes from `CodingPractice/Resume/resume_de.pdf`, with the owner's confirmation that the listed skills, certifications, project results, and 3+ years of professional experience may be published.

## Run locally

Use Bun and Node.js 22 or newer (Next.js uses Node.js). Install Bun using its [official installation instructions](https://bun.com/docs/installation) if it is not already available. Run all commands from this project folder, `GitHub/OmkarRana.github.io`.

This checkout also has a project-local Bun executable in the ignored `.tools/` directory. To use it from PowerShell without a global installation, run this once per terminal session from the project root:

```powershell
$env:Path = (Join-Path $PWD '.tools\bun\bun-windows-x64') + ';' + $env:Path
$env:BUN_TMPDIR = Join-Path $PWD '.tools\tmp'
```

This only changes the current terminal session. The local executable is not committed; fresh checkouts should install Bun using the official instructions above.

```sh
bun install
bun run dev
```

Open http://localhost:3000. To validate and produce the production static export:

```sh
bun run typecheck
bun run build
```

The deployable site is generated in `out/`. Commit the generated `bun.lock` after the first successful installation; use `bun install --frozen-lockfile` for subsequent clean installs. `node_modules/` and the `.bun-cache/` package download cache both live inside this project and are excluded from Git. Dependency installation with Bun, the TypeScript check, and the production static export passed. Browser QA and Lighthouse scores remain unverified. The scripts use Next.js webpack mode because Turbopack failed to launch its CSS worker in this Windows environment.

## Project structure

```text
src/
  app/
    layout.tsx              Metadata, theme initialization, global layout
    page.tsx                Portfolio sections and decorative project illustrations
    globals.css             Tailwind import, design tokens, responsive styles
    icon.svg                Favicon
    robots.ts               Search crawler policy
    sitemap.ts              Canonical site sitemap
  components/
    interactions.tsx        Theme switch, mobile navigation, motion, form preview
  data/
    portfolio.json          Editable content, links, experience, projects, skills
    resume-source.json      Source PDF filename and date of last copy
public/
  resume.pdf                Stable resume download and browser-view URL
  og-image.png              Social sharing image
scripts/
  sync-resume.mjs           Copy a renamed/new PDF to the stable public URL
```

## Update the resume and website together

1. Save your updated resume PDF under any filename.
2. Copy it into the website using the command below (quote paths with spaces):

   ```sh
   bun run resume:sync "../CodingPractice/Resume/new-resume-name.pdf"
   ```

3. Update `src/data/portfolio.json` to match that PDF. The sync command copies the PDF and records its filename; it deliberately does not infer professional claims from PDF text or overwrite the JSON.
4. Check that experience dates, bullet points, skills, certifications, summary, and project descriptions agree with the updated resume. The `facts` array controls About-section numbers; `focusTechnologies` controls the hero's technology strip.
5. Run `bun run typecheck` and `bun run build`, review locally with `bun run dev`, then redeploy.

Ask Codex to read your newly named PDF and update both the website data and public download together whenever you want assisted updates. Updates are not monitored automatically. The public URL stays `/resume.pdf`, regardless of the source filename, so buttons never need to be changed.

Project `repoUrl` and `demoUrl` values are currently `null` because the resume supplies no project links. Add real URLs when available; their buttons appear automatically. Replace project entries in the JSON when newer projects are ready. Project header illustrations are decorative CSS concepts, not screenshots of the original projects. To change those illustrations, edit `page.tsx` and the corresponding CSS.

The site uses system fonts, so fonts require no network requests or build-time downloads. It includes semantic sections, a skip link, visible keyboard focus, reduced-motion support, a mobile menu that closes with Escape, and a persistent light/dark preference. Content remains visible if animation scripts do not load.

## Contact form status

The contact form is an explicitly disabled preview, as requested. It does not send or store messages. Email, LinkedIn, and GitHub links are usable now. No API keys are required.

For a future Resend integration, switch away from static export if using a Next.js route handler, implement server-side validation, rate limiting and delivery, and configure a private `RESEND_API_KEY` plus a verified sender in Vercel. Never put API keys in `NEXT_PUBLIC_*` variables or the JSON content file. Alternatively, retain static export and use an external form endpoint.

## Deploy to Vercel

1. Push this project to your GitHub repository and import it into Vercel.
2. Select the Next.js framework preset and Node.js 22 or newer. Set the install command to `bun install --frozen-lockfile` after committing `bun.lock`, and the build command to `bun run build`. Vercel serves the static export.
3. Set `NEXT_PUBLIC_SITE_URL` to your production origin, e.g. `https://your-domain.example`, without a trailing slash. This controls canonical, Open Graph, robots and sitemap URLs. Its default is `https://omkarrana.github.io`.
4. Deploy. Confirm the resume download, links, theme toggle, navigation and mobile layout.

No secrets or contact service configuration are required for the current version. The site has not been deployed by Codex.

## Deploy to GitHub Pages

The `output: "export"` setting also supports this repository's root GitHub Pages site, `https://omkarrana.github.io`.

1. Run `bun install` and `bun run build`.
2. Upload the contents of `out/` using a GitHub Pages Actions workflow (including `_next/` and `.nojekyll`). In repository settings, choose **GitHub Actions** as the Pages source.
3. Use `NEXT_PUBLIC_SITE_URL=https://omkarrana.github.io` at build time.

The included `public/.nojekyll` is copied into the export. The site assumes hosting at `/`; a project subpath such as `/portfolio/` would also require base-path-aware asset and navigation URLs.

## Before publishing

Check desktop and mobile layouts, both themes, keyboard navigation, resume download/view, certification destinations and social links. Run Lighthouse against the deployed production build; no score is claimed until measured. The AWS certification links to the resume's verification portal and displays its supplied verification ID.
