{
  "manifest_version": 2,

  "name": "Time Tracker",
  "description": "How long have I been on this page?",
  "version": "1.7",
  "author": "Nikitha",

  "permissions": [
    "tabs"
  ],
  "icons": {
    "16": "clock16.png",
    "48": "clock48.png",
    "128": "clock128.png"
  },
  "browser_action": {
    "default_icon": {
      "19": "browser-action-19.png",
      "38": "browser-action-38.png"
    }
  },
  "background": {
    "scripts": [
      "common.js",
      "background.js"
      ],
    "persistent": true
  },
  "options_page": "options.html"
}
