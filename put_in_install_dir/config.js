// skip 1st line

// Force enable userChrome.css
lockPref('toolkit.legacyUserProfileCustomizations.stylesheets', true);

// Allow unsigned extensions to be installed (even in normal release/non dev edition firefox)
try {
  const objRef = ChromeUtils.importESModule('resource://gre/modules/addons/XPIDatabase.sys.mjs');
  objRef.XPIDatabase.SIGNED_TYPES.delete('extension');
} catch (error) {}
