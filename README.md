# Seedlift Landing Page

A production-ready Next.js 14 landing page for Seedlift, a done-for-you early user acquisition service for B2C startups and mobile apps.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Vercel deployment target
- Static site: no backend, auth, CMS, or database

## Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Live links

Update these values in `lib/site.ts`:

```ts
stripePaymentLink: 'https://buy.stripe.com/6oU14n5Xmehg9mDbOpfrW01',
testerSignupLink: 'https://form.typeform.com/to/Nw8MCObl',
```

Use a live Stripe Payment Link before accepting real payments. Test links usually include `test_` in the URL.

## Deployment

Push to GitHub and connect the repository to Vercel. Vercel should detect Next.js automatically.

```bash
git add .
git commit -m "Update Seedlift landing page"
git push
```

## Design notes

This version uses a dark, animated, lab-style growth agency aesthetic inspired by premium startup agency sites, but the copy and structure are adapted for Seedlift's early-user acquisition model. It intentionally excludes a “Book a call” CTA and an “Our work” section for now.

## Opinionated decisions

- Primary founder CTA sends directly to Stripe.
- Beta tester CTA sends directly to Typeform.
- Hero focuses on “Acquisition, engineered” to match the new direction.
- Pricing remains the single `$299` package with optional `$99/week` follow-on seeding.
- No Slack/live updates deliverable is included.
