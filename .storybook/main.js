const path = require('path');
const { merge } = require('webpack-merge');

const getBaseDir = () => {
  const tsconfig = require('../tsconfig.json');
  return path.resolve(process.cwd(), tsconfig.compilerOptions.baseUrl);
};

module.exports = {
  // webpackFinal: async (config) => {
  //   return merge(config, {
  //     resolve: {
  //       modules: [getBaseDir()],
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