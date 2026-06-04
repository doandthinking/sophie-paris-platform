# Paris Local Link / 巴黎安心行

MVP for a Paris-first multilingual visitor life operating system for international visitors, especially Chinese-speaking travelers.

The product now combines local services, safety help, community, rewards, partner pages, PDF pitch materials and a V5 Travel Mart layer for scenario-based visitor needs.

## MVP Boundary

This project is a demo and request-intent platform. It does not enable real payments, real ticketing, real authentication, real chat, real reward redemption, fake reviews, fake official partnerships, fake discounts or fake exclusivity.

V5 also does not enable real inventory, real product checkout, real delivery, real hotel front desk handoff, real merchant contracts, real rental deposits, real affiliate links or real product/reward redemption. It does not sell medicine, alcohol, tobacco, e-cigarettes, nicotine products or high-risk regulated products.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- local mock data
- localStorage demo forms
- Playwright PDF export for the existing pitch page

## Install and Run

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000`
- `http://localhost:3000/zh-CN`
- `http://localhost:3000/zh-TW`
- `http://localhost:3000/fr`
- `http://localhost:3000/en`
- `http://localhost:3000/zh-CN/help/emergency`
- `http://localhost:3000/zh-CN/community`
- `http://localhost:3000/zh-CN/rewards`
- `http://localhost:3000/zh-CN/travel-mart`
- `http://localhost:3000/zh-CN/travel-mart/kits`
- `http://localhost:3000/zh-CN/moments`
- `http://localhost:3000/zh-CN/trip-board`
- `http://localhost:3000/zh-CN/merchants`
- `http://localhost:3000/zh-CN/admin`
- `http://localhost:3000/zh-CN/admin/travel-mart`
- `http://localhost:3000/fr/partners/presentation`

## Scripts

```bash
npm run lint
npm run typecheck
npm run build
npm run export:pitch
```

`npm run lint` currently runs the TypeScript static check for this MVP.

## Directory Map

- `src/app/[locale]/`: V3 multilingual routes.
- `src/config/`: brand and feature flags.
- `src/data/`: mock services, cruises, resources, rewards, reviews, community and partners.
- `src/types/`: compliance and product types.
- `src/data/travelMartItems.ts`: Travel Mart demo items.
- `src/data/travelKits.ts`: scenario solution kits.
- `src/data/rentalItems.ts`: rental demo items.
- `src/data/momentServices.ts`: photo, costume, proposal and memory services.
- `src/data/merchants.ts`: merchant lead placeholders.
- `src/data/fulfillmentMethods.ts`: pickup, hotel front desk and concierge fulfillment placeholders.
- `src/data/recommendationRules.ts`: static cross-sell rules.
- `src/data/tripChecklistTemplates.ts`: trip board checklist templates.
- `src/i18n/`: locale helpers.
- `messages/`: four-language UI text.
- `docs/`: compliance, strategy, roadmap and launch documents.

## How to Add Services

Add a `Service` item to `src/data/services.ts` or `src/data/signatureExperiences.ts`. Use `LocalizedText`, set `demo`, `partnershipStatus`, `qualificationRequirement`, `sellerOfRecord`, and notices clearly.

## How to Add Official Resources

Add an `OfficialResource` to `src/data/officialResources.ts`. If not manually verified, use `TODO_VERIFY_OFFICIAL_URL`, `active: false`, and `manualVerificationRequiredBeforeLaunch: true`.

## How to Add Partners

Add a `PartnerLead` to `src/data/partners.ts` and update `docs/PARTNER_LEADS.csv`. Always set `manualVerificationRequiredBeforeSending: true` until contacts are rechecked.

## Future Migration

Future versions may add a database, accounts, payment, ticketing, real rewards, real reviews and safe messaging only after legal, privacy, insurance, qualification and partner-contract review.

Future V5 migrations may add:

- Database-backed trip board and merchant applications.
- Real merchant contracts.
- Real inventory only from partners.
- Payment after CGV, refund, withdrawal and consumer complaint review.
- Delivery only after hotel policy, merchant fulfillment and legal review.
- Rental deposits only after rental terms, cleaning, damage, late return and return rules are ready.
- Affiliate links only after written agreements and disclosure rules.
