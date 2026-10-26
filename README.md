# Sightbridge landing demo

An independent prototype by Brunova for Sightbridge. This repository contains a captured public landing view and a separately built advisor-chat widget. It is **not** the official Sightbridge website. The assistant API and admin console live in the companion `agent-service` repository in the same GitHub organization.

The deployed demo is at [sightbridge.brunova.mx](https://sightbridge.brunova.mx/). Its admin console is at [sightbridge.brunova.mx/console/](https://sightbridge.brunova.mx/console/); access requires an authorized Google account.

## Run locally

Use Node.js 22.12 or newer. Start the companion Agent Service first at `http://localhost:8001`, including its worker and Google OAuth configuration. Then:

```bash
npm ci
npm run check
npm run build
python3 -m http.server 8766
```

Open `http://localhost:8766`. The chat bubble asks for Google sign-in before allowing a question. Its sign-out control closes the shared chat and console session, clears the visible conversation, and closes the bubble. Reopening it presents Google sign-in so another account can be selected. The Google web client in Agent Service must allow `http://localhost:8001/auth/google/callback`; the API must use this landing as `OIDC_CHAT_URL` and allow its origin. `widget-config.js` uses the local API port on localhost and the same-origin `/api` path on the deployed site. No credentials belong in this repository.

After sign-in, accounts with console access see a discreet **Console** link beneath the chat title. Chat-only accounts do not see it, and the console independently enforces the same role check.

The captured landing keeps its public links pointed at `sightbridge.com`; the demo badge distinguishes this prototype from the live company site. The original public layout and assets are used only to show the widget in context. The widget styling, disclaimer and access flow are supplied by this demo.

## Scope

This repository presents the landing and advisor-chat experience. The chat answers substantive questions only from the companion service's approved public source set. Grounded answers show citations and a brief notice within the expanded sources section; conversational greetings do not show that notice. It does not provide personalized tax, legal or investment advice.

### Public sources used by the RAG demo

The companion Agent Service currently indexes these seven public sources. Its admin console shows the exact uploaded snapshot and processing status for each document.

1. [IRS — Like-kind exchanges: real estate tax tips](https://www.irs.gov/businesses/small-businesses-self-employed/like-kind-exchanges-real-estate-tax-tips)
2. [IRS — Instructions for Form 8824: deferred exchange timing](https://www.irs.gov/instructions/i8824)
3. [IRS — Publication 544: qualifying property and partial gain](https://www.irs.gov/publications/p544)
4. [IRS — Revenue Ruling 2004-86: Delaware statutory trusts](https://www.irs.gov/irb/2004-33_IRB)
5. [IRS — Publication 541: contributions to partnerships](https://www.irs.gov/publications/p541)
6. [SEC Investor.gov — Investor Bulletin: Non-traded REITs](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-89)
7. [Sightbridge — Public description of its strategies](https://sightbridge.com/)

## What I left out and what I would build next

I kept access control deliberately simple: Google verifies identity and role-based access control (RBAC) decides who can use the chat or administer it. I left out attribute-based access control (ABAC), such as policies that vary by advisor firm, document ownership, or client context. Those rules would need real organizational data and policy decisions that this public-source demo does not have.

Next, I would use real advisor questions to measure where retrieval misses relevant evidence, where sources disagree, and when the assistant should decline to answer. Those results would guide refinements to the source set and citations before adding more complex access policies or connecting private workflows.
