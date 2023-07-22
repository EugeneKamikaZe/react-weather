import { Decorator } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from '../../i18n/i18n';

export const TranslationsDecorator: Decorator = (StoryComponent, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { locale } = context.globals;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <StoryComponent />
            </I18nextProvider>
        </Suspense>
    );
};
