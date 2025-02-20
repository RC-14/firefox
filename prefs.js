// The about:config options I set, that aren't accessible through any other GUI.
// Not actually a prefs.js file.

/*
 * Don't exit Firefox fullscreen when pressing Esc.
 *
 * Doesn't affect Videos!
 *
 * Fullscreen can still be disabled with whatever
 * the shortcut was you used to enable it. (F11/Ctrl+Cmd+F/...)
 *
 * Primarily useful to toggle the JS console in the dev tools. (at least for me)
 */
user_pref('browser.fullscreen.exit_on_escape', false);

/*
 * Enable loading userChrome.css
 *
 * Required for userChrome.css files!
 *
 * Already set if you use the install dir mod.
 *
 * No effect without a userChrome.css file.
 */
user_pref('toolkit.legacyUserProfileCustomizations.stylesheets', true);
