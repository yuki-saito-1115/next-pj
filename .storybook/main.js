const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  managerHead: (head) => {
    return `
      ${head}
      <link rel="shortcut icon" type="image/x-icon" href="storybook/favicon.ico">
      <script>
        window['PREVIEW_URL'] = 'storybook/iframe.html';
      </script>
    `;
  },
  webpackFinal: async (config) => {
    return merge(config, {
      output: {
        publicPath: `storybook/`,
      },
    });
  },
  managerWebpack: async (config) => {
    return merge(config, {
      output: {
        publicPath: `storybook/`,
      },
    });
  },

  'typescript': {
    reactDocgen: false
  },
  'stories': [
    '../components/**/*.stories.@(tsx|mdx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': 'webpack5'
  }
}