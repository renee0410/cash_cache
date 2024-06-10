import React, { Suspense, useEffect } from 'react';
import type { Preview } from '@storybook/react';
import i18n from '../src/i18n';
import { I18nextProvider } from 'react-i18next';

import '../src/style/index.scss';

export const decorators = [
    (Story, context) => {
        const { locale } = context.globals;
        useEffect(() => {
            i18n.changeLanguage(locale);
        }, [locale]);

        return (
            <I18nextProvider i18n={i18n}>
                <div className='w-100 p-6 border dark:bg-slate-800'>
                    <Story />
                </div>
            </I18nextProvider>
        );
    },
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'zhTw', title: '繁中' },
            ],
            showName: true,
        },
    },
},
};

export default preview;
