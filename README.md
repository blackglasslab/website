# Bader Lab public site

Minimal Next.js website for `baderlab.de`, designed for straightforward deployment on Vercel.

## Stack

- Next.js (App Router)
- React
- Plain CSS via `app/globals.css`

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Create a new Vercel project and import this folder/repository.
2. Framework preset: **Next.js**.
3. Build command: `next build`.
4. Output setting: default Next.js output.
5. Add the production domain (`baderlab.de` and optionally `www.baderlab.de`) in the Vercel project settings.
6. Update DNS records at the domain registrar to point to Vercel.

## Content notes

- The current publications page uses clean placeholders and is ready to be replaced with real citations.
- Team and join pages are intentionally minimal for an initial public launch.
- No private/internal database references are included.

## Suggested next edits

- Replace placeholder publications with real references.
- Add team members, logos, or funding acknowledgements if desired.
- Add analytics/privacy/legal pages if needed for the final public launch.
