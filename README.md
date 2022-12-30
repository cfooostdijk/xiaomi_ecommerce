<center>
  <p align="center"><img src="./favicon.png" /></p>
  <h1 align="center">Xiaomi Ecommerce</h1>
</center>

Creates a link next to edited and deleted Reddit comments and submissions to show the original post from before it was edited/removed.

The unedited comment will be displayed inline, right below the current comment or submission's text.

This script is compatible with both Reddit's Redesign and Old Reddit.

The [Pushshift Reddit API](https://github.com/pushshift/api) is used for fetching the comments as they will be archived soon after they have been posted.

## How to use

![instructions](https://user-images.githubusercontent.com/20955511/172483035-90eff88d-4b7d-416a-951d-001c96299476.png)

## Installation

[![Install with Greasy Fork](https://user-images.githubusercontent.com/20955511/201193167-934b9e7b-66b2-4b6b-84e3-d8a677c66da4.png)](https://greasyfork.org/en/scripts/407466-unedit-and-undelete-for-reddit)
[![Available in the Chrome Web Store](https://user-images.githubusercontent.com/20955511/201192698-df2474d7-83e8-429f-a4a5-d590ff1bfb5b.png)](https://chrome.google.com/webstore/detail/unedit-and-undelete-for-r/cnpmnmpafbfojcoofaobmhmafiflgmka)
[![Firefox Get the Add-on](https://user-images.githubusercontent.com/20955511/172904059-eb121557-ef91-43a6-a5f6-f4be5e20a5dc.png)](https://addons.mozilla.org/en-US/firefox/addon/unedit-for-reddit/)

### As a Userscript

This script can be installed on most browsers using userscript browser extensions such as [Violentmonkey](https://violentmonkey.github.io/), [Tampermonkey](https://www.tampermonkey.net/), among others using the green button on [Greasy Fork](https://greasyfork.org/en/scripts/407466-unedit-and-undelete-for-reddit).

Alternatively, you may copy the contents of [`script.js`](https://github.com/DenverCoder1/Unedit-for-Reddit/blob/master/script.js) into a new script using any userscript browser extension.

### As a Chrome Extension

Install from the [Chrome Web Store](https://chrome.google.com/webstore/detail/unedit-and-undelete-for-r/cnpmnmpafbfojcoofaobmhmafiflgmka), or alternatively, download or clone this repository, enable "Developer mode" at <chrome://extensions/>, and load the folder unpacked.

### As a Firefox Addon

Install from [Mozilla Add-ons](https://addons.mozilla.org/en-US/firefox/addon/unedit-for-reddit/), or alternatively, follow these steps to build and install from the source:

To sign the extension for use in Firefox, you will need credentials from https://addons.mozilla.org/en-US/developers/addon/api/key/. Create a copy of `.env.example` named `.env` and replace the placeholders with your API key and secret. Install `web-ext` with `npm install -g web-ext` and sign the extension with `make sign-firefox`. The generated extension will appear as a `.xpi` file in `./web-ext-artifacts`. This file can be opened in Firefox to install the add-on.

## Known issues

The following are known limitations that cannot be fixed:

-   The fetched comment may occasionally be the edited version instead of the original. This is because the Pushshift archive may take more time to archive the comment than it took the user to edit the comment, therefore causing Pushshift to archive the edited version and not the original. Additionally, comments that are several years old may also show the edited version since the original versions of comments edited before the first archival will not appear in Pushshift.
-   Comments that were posted within the past few minutes may occasionally show "not found" since Pushshift can take some time to archive all comments.
-   Comments in private subreddits will show "not found" as they are not able to be archived by Pushshift.
-   Comments deleted by Reddit's spam filter will show "not found" as the text is never available for Pushshift to archive.
-   Comments and posts by users who have requested the deletion of the data from Pushshift will show as "not found".
-   If the Pushshift API is temporarily down or partially down, the message "fetch failed" may appear.

## Changelog

### Changes in 3.16.1

-   Removed sort order parameters due to recent breaking changes in the Pushshift API
-   Added title text to show original links and error links to show additional information when hovering over them

### Changes in 3.16.0

-   Support for .compact Reddit layout
-   Show original links will not be shown if the post ID could not be determined

