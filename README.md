# Elionyx-Health

Repository scaffold for Elionyx Health projects.

## Live Site
- Domain: elionyxhealth.com
- Hosting platform: Netlify

## Structure
- elionyxhealth-site: Public marketing website
- realdiag-software: Product/application codebase for RealDiag
- critmatch: Placeholder workspace (can later become a dedicated app/repo)

## Netlify Deploy Checklist
1. Push this repository to GitHub.
2. In Netlify, create a new site from Git and connect the repository.
3. Configure deploy settings:
	- Base directory: elionyxhealth-site
	- Build command: npm run build
	- Publish directory: dist
4. Set production domain to elionyxhealth.com in Netlify Domain Management.
5. Configure DNS records at your registrar:
	- Apex/root domain uses Netlify A/ALIAS target
	- www subdomain uses Netlify CNAME target
6. In Netlify, enable HTTPS and force SSL.
7. Trigger a deploy and verify site load, navigation, and assets.

## CI Gating For Auto Deploys
1. In GitHub, go to repository Settings > Branches > Branch protection rules.
2. Add or edit the rule for main.
3. Enable Require a pull request before merging.
4. Enable Require status checks to pass before merging.
5. Add the required check named build from workflow elionyxhealth-site CI.
6. In Netlify Site settings > Build and deploy > Continuous Deployment:
	- Production branch: main
	- Deploy contexts: only production deploys from main
7. Keep auto publishing enabled in Netlify.

Result: only merged PRs with passing CI can update main, and only main auto-deploys to production on Netlify.
