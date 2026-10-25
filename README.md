# Sightbridge landing demo

An independent, local prototype by Brunova for Sightbridge. This repository contains a captured public landing view and a separately built advisor-chat widget. It is **not** the official Sightbridge website. The assistant API and admin console live in the companion `agent-service` repository in the same GitHub organization.

## Run locally

Use Node.js 22.12 or newer. Start the companion Agent Service first at `http://localhost:8001`, including its worker and Google OAuth configuration. Then:

```bash
npm ci
npm run check
npm run build
python3 -m http.server 8766
```

Open `http://localhost:8766`. The chat bubble asks for Google sign-in before allowing a question. Its sign-out control closes the shared chat and console session, clears the visible conversation, and closes the bubble. Reopening it presents Google sign-in so another account can be selected. The Google web client in Agent Service must allow `http://localhost:8001/auth/google/callback`; the API must use this landing as `OIDC_CHAT_URL` and allow its origin. `widget-config.js` supplies the API URL, defaulting to the local port. No credentials belong in this repository.

The captured landing keeps its public links pointed at `sightbridge.com`; the demo badge distinguishes this prototype from the live company site. The original public layout and assets are used only to show the widget in context. The widget styling, disclaimer and access flow are supplied by this demo.

## Scope

This repository presents the landing and advisor-chat experience. The chat answers only from the companion service's approved public source set, shows citations for grounded answers and a brief disclaimer on every completed answer. It does not provide personalized tax, legal or investment advice.

## What I left out and what I would build next

I kept access control deliberately simple: Google verifies identity and role-based access control (RBAC) decides who can use the chat or administer it. I left out attribute-based access control (ABAC), such as policies that vary by advisor firm, document ownership, or client context. Those rules would need real organizational data and policy decisions that this public-source demo does not have.

Next, I would use real advisor questions to measure where retrieval misses relevant evidence, where sources disagree, and when the assistant should decline to answer. Those results would guide refinements to the source set and citations before adding more complex access policies or connecting private workflows.
