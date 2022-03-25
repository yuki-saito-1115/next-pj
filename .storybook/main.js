module.exports = {
  webpackFinal: async (config, { configType }) => {
    config.output.publicPath = '/my-prefix/';
    return config;
  },
  managerWebpack: async (config) => {
    config.output.publicPath = '/my-prefix/';
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