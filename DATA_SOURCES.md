# Data sources for wildlife HS-code monitoring

## Fully implemented MVP connectors
- **UN Comtrade** — official aggregate trade API via backend proxy. It returns reporter/partner/HS/date/value/quantity/weight fields, not company names. Docs: https://comtradedeveloper.un.org/
- **U.S. Census International Trade API** — official U.S. aggregate import/export API via backend proxy. Some endpoints include port/district totals, but not exporter/importer names. Docs: https://www.census.gov/data/developers/data-sets/international-trade.html
- **Local CSV upload** — browser-side ingestion for shipment datasets, CITES exports, permits, company registries, seizure spreadsheets, and commercial exports the user is licensed to use.

## Documented / connector-ready open sources
- **WITS / World Bank** — official WITS API provides aggregate trade and tariff indicators. Add XML/SDMX parsing server-side for production. Docs: https://wits.worldbank.org/witsapiintro.aspx?lang=en
- **Eurostat Comext** — EU international trade in goods data is available through Eurostat APIs and Comext bulk CSV downloads. Aggregate only. Docs: https://ec.europa.eu/eurostat/web/international-trade-in-goods/database and https://ec.europa.eu/eurostat/web/user-guides/data-browser/api-data-access/api-getting-started/comext-database
- **WTO Tariff & Trade Data** — official platform covers applied tariffs, bound duties and import/trade data for 150+ economies; use official downloads/API portal where available. Docs: https://ttd.wto.org/en and https://apiportal.wto.org/apis
- **CITES Trade Database** — authoritative wildlife trade records from annual reports dating back to 1975. The full database download is available; query downloads and local import are preferred over scraping. Docs: https://trade.cites.org/
- **Species+ API** — API for taxonomy, CITES Appendix listings, EU Annex listings, quotas, trade suspensions, range and references. Requires token. Docs: https://api.speciesplus.net/documentation
- **TARIC / EU customs tariff** — official EU tariff database for tariff and regulatory measures; this dashboard reserves a lookup connector and documents access. Docs: https://taxation-customs.ec.europa.eu/customs/common-customs-tariff-cct/tariff-classification-goods/eu-customs-tariff-taric_en
- **EU Access2Markets** — useful public interface for market access and tariff guidance. Treat as web/manual unless an official machine-readable route is identified. Docs: https://trade.ec.europa.eu/access-to-markets/
- **OpenCorporates / GLEIF** — entity enrichment only; they do not prove shipment involvement unless linked to a shipment/permit/source record.

## Commercial / shipment-level sources
ImportGenius, TradeAtlas, Panjiva, ExportGenius, Volza and Datamyne may provide bill of lading, customs declaration, importer/exporter, dates, ports and shipment descriptions depending on country coverage and subscription. This project does not scrape or bypass these platforms. Use only documented APIs, server-side credentials, or CSV exports you are licensed to use.

## Legal and analytical limits
Open HS APIs are aggregate. They cannot globally identify exporters, importers, people, bill of lading numbers or containers. Entity-level attribution must come from shipment-level data, permits, public manifests, commercial datasets, public records, FOIA/public-record releases, CITES documents, or uploaded intelligence with lawful access rights.
