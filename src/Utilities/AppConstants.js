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


export const TIMEOUT_MS = 1000 * 60 * 14; // 14 min
export const KEEP_ALIVE_REFRESH = 5 * 60 * 1000; // 5 min

// Default Value is Session and it will store the data into session
// Change the value to STATEAPI if you want to store the data into State API.
export const StatePersistentType = "SESSION";
