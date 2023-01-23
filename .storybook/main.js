const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve?.alias,
      'react-modern-modal': path.resolve(__dirname, '../src/'),
    };
    return config;
  },
};
