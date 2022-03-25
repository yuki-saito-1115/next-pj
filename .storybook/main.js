const path = require('path');

module.exports = {
  managerHead: (head) => {
    return `
      ${head}
      <link rel="shortcut icon" type="image/x-icon" href="${prefix}/favicon.ico">
      <script>
        window['PREVIEW_URL'] = '${prefix}/iframe.html';
      </script>
    `;
  },
  webpackFinal: async (config) => {
    return merge(config, {
      output: {
        publicPath: `${prefix}/`,
      },
    });
  },
  managerWebpack: async (config) => {
    return merge(config, {
      output: {
        publicPath: `${prefix}/`,
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