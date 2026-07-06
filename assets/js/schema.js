export const NORMALIZED_FIELDS = [
  "source_id","source_name","source_category","access_level","record_type","reporter_country","exporter_country","importer_country","partner_country","origin_country","destination_country","hs_code","hs_description","taxon_group","species","scientific_name","cites_appendix","eu_annex","source_code","purpose_code","trade_term","year","month","export_date","import_date","quantity","quantity_unit","net_weight_kg","value_usd","port_export","port_import","transport_mode","exporter_entity","exporter_person","importer_entity","consignee","notify_party","bill_of_lading","container_number","route","source_url","source_reference","confidence","limitations","risk_flags","risk_score"
];

export function emptyRecord(overrides = {}) {
  return Object.fromEntries(NORMALIZED_FIELDS.map((field) => [field, overrides[field] ?? ""]));
}

export const RECORD_TYPES = {
  AGGREGATE: "aggregate_flow",
  CITES: "species_trade_record",
  SHIPMENT: "entity_level_shipment",
  ENTITY: "entity_enrichment",
  TARIFF: "tariff_measure"
};
