const path = require("path");

module.exports = {
  "typescript" : {
    reactDocgen: false
  },
  "staticDirs": [
    "../public"
  ],
  stories: [
    '../components/**/*.stories.@(tsx|mdx)',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}