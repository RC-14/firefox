# Stuff for my Firefox config

This is only some niche stuff I like to have in my firefox and that isn't configurable through the normal UIs.

## Explanation

Explanations for the files in the top level directory of this repo:

- [prefs.js](#prefsjs)
- [put_in_profile_dir](#put_in_profile_dir)
- [put_in_install_dir](#put_in_install_dir)

For information about individual files open them with a text editor.

### prefs.js

Contains some `about:config` preferences in the format of a prefs.js file.

Not actually a prefs.js file! Don't put it as is in your Firefox profile.

### put_in_profile_dir

The contents of this folder need to be placed in the root directory of the profile you want to modify.

You can get a list of all profiles with buttons to open their directories on this page: `about:profiles`

### put_in_install_dir

The contents of this folder need to be placed in the directory where Firefox is installed.
On Mac this is not `Firefox.app` itself but the `Contents/Resources` subdirectory.

To make sure the config gets applied go to `about:support` and use `Clear startup cache...` to restart Firefox.

<details>
  <summary>Installing unsigned extensions</summary>
  All extensions need a unique ID, so to install an unsigned extension you'll need to add one to the manifest yourself.

  Example:
  ```JSON
    {
      "browser_specific_settings": {
        "gecko": {
          "id": "{aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa}"
        }
      },
      //...
    }
  ```
</details>

Some useful links:

- [Official Mozilla page (rough basics)](https://support.mozilla.org/en-US/kb/customizing-firefox-using-autoconfig)
- [3rd party side giving a bit more info than Mozilla and some direction where to look next](https://www.userchrome.org/what-is-userchrome-js.html)
- [The GitHub repo where I first discovered this trick](https://github.com/xiaoxiaoflood/firefox-scripts)
