# Initial Audit

Date: 2026-06-02
V5 Update: 2026-06-04

## Current Structure

- Project path: `/Users/gallojules/Documents/Codex/2026-05-29/airbnb-uber`
- Framework: Next.js App Router.
- Next.js version requested in `package.json`: `^15.3.0`; installed lockfile resolves Next 15.x.
- React version: `^19.0.0`.
- Tailwind CSS version: `^3.4.17`.
- TypeScript: enabled with `strict: true`.
- `src/` exists.
- `src/app/` exists.
- `pages/` does not exist.
- Existing mock data lived in `src/lib/mock-data.ts`.
- Existing reusable components lived under `src/components/layout`, `src/components/forms`, `src/components/services`, and `src/components/ui`.
- Existing routes before V3 included `/`, `/services`, `/services/[slug]`, `/book`, `/providers/apply`, `/admin`, `/pitch`.
- Current project is not a Git repository, so no feature branch was created.

## Existing Useful Pages

- `/pitch`: PDF-style project presentation page and export script.
- `/services`, `/book`, `/providers/apply`, `/admin`: earlier MVP pages retained.
- `/[locale]`: multilingual visitor homepage.
- `/[locale]/services`, `/[locale]/signature`, `/[locale]/cruises`: localized visitor service and experience surfaces.
- `/[locale]/help/emergency`, `/[locale]/community`, `/[locale]/rewards`, `/[locale]/account`: existing safety, community, rewards and account demo modules.
- `/[locale]/admin`, `/[locale]/partners/presentation`: admin and institution partner presentation surfaces.
- `/sophie-plan`, `/partner-playbook`, `/sophie-combined`: PDF-style Sophie project and partner playbook pages.

## Current Problems

- No Git repository, so no branch or status isolation.
- No real lint script existed before V3.
- Existing earlier pages used external image URLs in legacy mock data; V3 pages now use a local placeholder image.
- Existing admin was a simple mock page without V3 CRM, resources, rewards, reviews, community or compliance views.
- V5 Travel Mart, kits, rentals, moments, trip board, merchants, fulfillment and cross-recommendation modules do not exist yet.
- Merchant inventory, hotel delivery, direct commerce, rental deposits and real orders are not enabled and must remain DEMO until legal/partner review.

## Reuse Strategy

- Preserve earlier MVP files and routes.
- Add a new localized App Router surface under `src/app/[locale]/`.
- Keep V3 data separate under `src/data/` and V3 types under `src/types/`.
- Use local mock data and localStorage only.
- Add clear DEMO / test labels for payments, ticketing, account, chat, reviews, rewards and partnerships.
- For V5, add Travel Mart and merchant/rental/trip modules incrementally without removing existing visitor, partner, supplier, admin, pitch or PDF features.
- Keep all product, rental, merchant, fulfillment, delivery and inventory language as DEMO, partner-confirmed, legally reviewed or manually confirmed.
- Avoid adding real prices, real stock, real delivery times, real merchant claims or regulated product sales.

## Directories Touched

- `src/app/[locale]/`
- `src/components/`
- `src/config/`
- `src/data/`
- `src/i18n/`
- `src/types/`
- `messages/`
- `docs/`
- `public/images/`
- V5 will also touch `src/lib/`, `scripts/`, `README.md` and `/pitch`.

## Existing Type And Data Status Before V5

- Types: compliance, service, cruise, official resources, rewards, reviews, community and partner.
- Data: services, signature experiences, cruises, official resources, reward rules/catalog, reviews, community events/posts/reports and partners.
- Missing V5 types: TravelMartCategory, MartItemType, FulfillmentMode, TravelMartItem, TravelKit, RentalItem, Merchant, FulfillmentMethod, TripBoard and RecommendationRule.
- Missing V5 mock data: travel mart items/categories, travel kits, moment services, rental items, merchants, fulfillment methods, trip checklist templates and recommendation rules.

## Pitch And PDF Status Before V5

- `/pitch` exists and can export through `npm run export:pitch`.
- Sophie plan and partner playbook PDFs exist through `npm run export:sophie`.
- V5 must update `/pitch` to include Paris Travel Mart, scenario kits, photo/rental moments, trip board, merchant portal and cross-recommendations.

## Uncommitted Change Protection

Because this is not a Git repository, no branch could be created. No destructive commands such as `git reset --hard`, `git clean -fd`, or file deletion were used. Existing source files were preserved unless directly updated for routing, layout, scripts or styling.
