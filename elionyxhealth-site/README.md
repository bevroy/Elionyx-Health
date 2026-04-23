# elionyxhealth-site

Public marketing website for Elionyx Health.

## Production
- Domain: elionyxhealth.com
- Hosted on: Netlify

## Notes
- Main page component: src/App.jsx
- Public assets: public/branding and public/ui
- This folder is the deployment source for Netlify once app scaffolding/build scripts are added.
- Canonical source logos: public/branding/source

## Local Development
- Install: npm install
- Start dev server: npm run dev
- Build production assets: npm run build
- Preview build: npm run preview

## Netlify Settings
- Base directory: elionyxhealth-site
- Build command: npm run build
- Publish directory: dist
- SPA redirects: configured in netlify.toml

## CI To Netlify Gate
1. Protect main with required status checks in GitHub.
2. Require check: build from workflow elionyxhealth-site CI.
3. Require pull requests for main.
4. In Netlify, set production branch to main.

With this setup, Netlify production deploys only happen from validated merges to main.
