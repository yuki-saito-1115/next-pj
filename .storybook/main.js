const path = require('path');
const { merge } = require('webpack-merge');

module.exports = {
  // managerHead: (head) => {
  //   return `
  //     ${head}
  //     <link rel="shortcut icon" type="image/x-icon" href="_mlc/storybook/favicon.ico">
  //     <script>
  //       window['PREVIEW_URL'] = '_mlc/storybook/iframe.html';
  //     </script>
  //   `;
  // },
  webpackFinal: async (config) => {
    return merge(config, {
      output: {
        publicPath: `_mlc/storybook/`,
      },
    });
  },
  // managerWebpack: async (config) => {
  //   return merge(config, {
  //     output: {
  //       publicPath: `_mlc/storybook/`,
  //     },
  //   });
  // },

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