const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
] as const;

const STORAGE_KEY = "bw_utms";

export type UtmData = Record<string, string>;

/** Captures UTMs from the current URL (first touch wins) and persists them for the session. */
export function captureUtms(): UtmData {
  if (typeof window === "undefined") return {};

  let stored: UtmData = {};
  try {
    stored = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? "{}") as UtmData;
  } catch {
    stored = {};
  }

  const params = new URLSearchParams(window.location.search);
  const fresh: UtmData = {};
  for (const key of UTM_KEYS) {
    const value = params.get(key);
    if (value) fresh[key] = value;
  }

  const merged = Object.keys(fresh).length > 0 ? { ...stored, ...fresh } : stored;

  if (Object.keys(merged).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      /* ignore */
    }
  }

  if (!merged.page_referrer && document.referrer) {
    merged.page_referrer = document.referrer;
  }

  return merged;
}

export function getUtms(): UtmData {
  return captureUtms();
}
