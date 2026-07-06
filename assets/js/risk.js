import { HS_WATCHLIST } from "./watchlist.js";
export const HIGH_RISK_ROUTES = [["IDN","KOR"],["THA","KOR"],["MYS","KOR"],["VNM","KOR"],["MDG","KOR"],["ZAF","KOR"],["CMR","ARE"],["NGA","ARE"],["CZE","KOR"],["DEU","KOR"],["NLD","KOR"],["ARE","KOR"],["IDN","JPN"],["THA","JPN"],["MEX","USA"],["COL","USA"],["BRA","USA"],["SGP","KOR"],["HKG","USA"]];
export function scoreRecord(row, peers = []){
  const flags = [];
  const hs = String(row.hs_code || "").slice(0,6);
  let score = HS_WATCHLIST[hs]?.riskBase || 35;
  if(HS_WATCHLIST[hs]?.broad){ score += 12; flags.push("broad_or_catch_all_hs_code"); }
  const route = [row.exporter_country || row.origin_country, row.importer_country || row.destination_country].map(normalizeCountry);
  if(HIGH_RISK_ROUTES.some(([a,b]) => a === route[0] && b === route[1])){ score += 18; flags.push("high_risk_country_pair"); }
  if(row.record_type === "aggregate_flow"){ score -= 12; flags.push("aggregate_only_no_entities"); }
  if(row.exporter_entity || row.importer_entity || row.consignee){ score += 8; flags.push("entity_linked_record"); }
  if(/W|R|U/i.test(row.source_code || "")){ score += 12; flags.push("cites_source_code_review"); }
  if(/no matching cites|mismatch|launder|expo|wild|unknown source/i.test(row.limitations + " " + row.source_reference)){ score += 14; flags.push("manual_review_note"); }
  const sameHsRoute = peers.filter(p => String(p.hs_code).slice(0,6) === hs && normalizeCountry(p.exporter_country) === route[0] && normalizeCountry(p.importer_country) === route[1]);
  if(sameHsRoute.length >= 2){
    const values = sameHsRoute.map(p => Number(p.quantity || p.value_usd || 0)).filter(Boolean).sort((a,b)=>a-b);
    if(values.length > 1 && values.at(-1) > Math.max(1, values[0]) * 3){ score += 10; flags.push("possible_flow_spike"); }
  }
  return { risk_score: Math.max(0, Math.min(100, Math.round(score))), risk_flags:[...new Set(flags)] };
}
export function normalizeCountry(v){ return String(v || "").trim().toUpperCase(); }
export function riskLabel(score){ return score >= 75 ? ["High","riskHigh"] : score >= 50 ? ["Medium","riskMed"] : ["Low","riskLow"]; }
