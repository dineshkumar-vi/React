/**
 * Application constant 
 */


export const NavigationUrl = {
  LOGIN : "/login",
  DEFAULT : "/login"
};

export const LANGS = {
  EN: "en",
  FR: "fr",
};

export const ENVS = {
  LOCAL: "local",
  DEVELOPMENT: "development",
  QA: "qa",
  UAT: "uat",
  PROD: "production",
};

export const VIEWPORTS = {
  XS: 480,
  SM: 768,
  MD: 992,
  LG: 1200,
  XL: 1900,
};

export const BREAKPOINTS = {
  PHONE_PORTRAIT_SM: 320,
  PHONE_PORTRAIT_LG: 576,
  TABLET_PORTRAIT: 768,
  DESKTOP: 1024,
  DESKTOP_HD: 1200,
};

export const PROVINCES = 
["", "AB", "BC", "MB", "NB", "NL", "NS", "NT", "NU", "ON", "PE", "QC", "SK", "YT"];
export const PROVINCES_OBJ = PROVINCES.reduce((obj, item) => (obj[item] = item, obj), {});
export const STATES = ["", "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
export const STATES_OBJ = STATES.reduce((obj, item) => (obj[item] = item, obj), {});

// ISO 3166-1 alpha-2
export const COUNTRY_ALPHA2 = {
  CA: "CA",
  US: "US",
};
export const COUNTRY_FULL = {
  CA: "Canada",
  US: "United States",
};

export const TIMEOUT_MS = 1000 * 60 * 14; // 14 min
export const KEEP_ALIVE_REFRESH = 5 * 60 * 1000; // 5 min

// Default Value is Session and it will store the data into session
// Change the value to STATEAPI if you want to store the data into State API.
export const StatePersistentType = "SESSION";
