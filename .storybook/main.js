const path = require('path')

module.exports = {
  webpackFinal: async (baseConfig) => {
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]
    return baseConfig
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