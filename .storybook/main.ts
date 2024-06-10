import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
    'stories': ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    'addons': [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        'storybook-tailwind-dark-mode',
    ],
    'framework': '@storybook/react-vite',
    'docs': {
        'autodocs': true,
    },
};
export default config;
