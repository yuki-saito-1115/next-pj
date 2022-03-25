module.exports = {
  webpackFinal: async (baseConfig) => {
    // @see https://github.com/storybookjs/storybook/issues/3916#issuecomment-407681239
    baseConfig.resolve.modules = [
      ...(baseConfig.resolve.modules || []),
      path.resolve('./'),
    ]
  },
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
  }
}