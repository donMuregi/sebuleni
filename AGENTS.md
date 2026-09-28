<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Sebuleni Project Context (Agent Knowledge)

## Architecture & Tech Stack
- **Frontend:** Next.js (App Router)
- **CMS:** Payload CMS (v3) 
- **Styling:** Tailwind CSS + CSS variables (`var(--color-deepbrown)`, `var(--color-terracotta)`, `var(--color-sand)`, `var(--color-cream)`).

## Payload CMS Important Rules
- **Image Resolution:** When querying Payload from the frontend for anything containing `relationTo: 'media'` (like images in Collections or Globals), you **MUST use `depth: 2`**. (e.g., `payload.findGlobal({ slug: "roams", depth: 2 })`). If you use depth 1, the image URLs will not resolve and will crash the UI.
- **Caching:** The shop pages (`/shop` and `/shop/[slug]`) must export `const dynamic = 'force-dynamic';` because the app is hosted on a constrained shared hosting environment (cPanel) which struggles with static cache invalidation.

## Deployment Flow
- The site is manually deployed to a cPanel shared server by building the Next.js app locally (`npm run build`), zipping the files, uploading via cPanel File Manager, extracting, and restarting the Node app.
