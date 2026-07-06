# Wildlife Trade Customs Dashboard

A practical MVP dashboard for monitoring live wildlife trade through HS-code searches, customs/trade APIs, CITES/species enrichment, local intelligence uploads and commercial shipment provider stubs.

## What changed
- Static dashboard upgraded to multi-select reporter/partner/HS filtering.
- Modular provider abstraction added in `assets/js/providers.js`.
- Normalized schema added in `assets/js/schema.js`.
- Wildlife HS watchlist and ambiguity/laundering notes added in `assets/js/watchlist.js`.
- Risk scoring for catch-all HS codes, high-risk routes, source-code review, flow spikes and entity-linked rows added in `assets/js/risk.js`.
- CSV ingestion maps messy shipment, CITES, permit, registry and seizure columns into the normalized schema and reports unresolved columns.
- Optional Fastify backend proxy added in `server/server.js` to keep keys out of frontend code.
- Source documentation added in `DATA_SOURCES.md` and setup instructions in `API_SETUP.md`.

## Run locally
Static only:

```bash
python3 -m http.server 8000
```

Backend proxy:

```bash
npm install
cp .env.example server/.env
npm start
```

## Evidence levels
- **Aggregate flow**: country-pair totals only; no companies or people.
- **Species/CITES record**: species, source, purpose and term-level wildlife trade records; generally no company names.
- **Entity-level shipment**: uploader/commercial/permit/public manifest records with exporter/importer/port/shipment fields.

## Deployment
Deploy the static files to any static host. Deploy `server/` separately as a small Node service or serverless equivalent and route `/api/*` to it. Do not expose secrets in frontend code.
