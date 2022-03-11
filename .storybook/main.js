module.exports = {
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        });

        return config;
    },

    core: {
        builder: 'webpack5',
    },

    stories: [
        '../components/modules/**/*.stories.@(tsx|mdx)',
    ],

    addons: [
        '@storybook/addon-links',
        // '@storybook/addon-actions',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        // '@storybook/addon-a11y',
        // '@storybook/addon-knobs',
        // '@storybook/addon-docs',
        // '@storybook/preset-scss',
        // '@storybook/addon-backgrounds',
    ],
}
