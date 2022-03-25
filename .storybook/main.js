const path = require('path');

module.exports = {
  webpackFinal(config) {
    config.output = {
      path: `${__dirname}/_mlc/storybook`,
    },
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname)
    ]

    return config;
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