const { merge } = require('webpack-merge');

const prefix = process.env.STORYBOOK_PREFIX ? `/${process.env.STORYBOOK_PREFIX}` : '';

module.exports = {
  "staticDirs": [
    '../public'
  ],
  'typescript' : {
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
  },

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
}