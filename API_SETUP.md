# API setup

## Static-only mode
Open `index.html` directly or deploy the repository as static files. Demo data, CSV upload, export, risk scoring, source status and schema normalization work without a backend. Live APIs that need keys or have CORS restrictions will be unavailable.

## Backend proxy mode
1. Copy `.env.example` to `server/.env` or export the variables in your host.
2. Install dependencies with `npm install`.
3. Start the proxy with `npm start`.
4. Serve the static dashboard from the repo root and keep the backend reachable at the same origin or proxy `/api/*` to port `8787`.

## Secrets
Never place API keys in `index.html` or `assets/js/*`. Keep keys in server-side environment variables only.

## Routes
- `GET /api/health` reports configured credentials.
- `GET /api/comtrade` proxies UN Comtrade aggregate export queries.
- `GET /api/census` proxies U.S. Census international trade export queries.
- `GET /api/speciesplus` proxies Species+ taxon lookup with `SPECIESPLUS_TOKEN`.
- `GET /api/opencorporates` proxies OpenCorporates search with `OPENCORPORATES_API_KEY`.
- `GET /api/gleif` searches GLEIF legal entity records.
- `GET /api/eurostat` is reserved for Comext API/bulk import implementation.

The proxy uses a simple in-memory cache for rate-limit friendliness. For production, replace this with Redis or platform cache storage and add per-user throttling.
