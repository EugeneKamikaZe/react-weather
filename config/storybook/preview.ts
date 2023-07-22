import '~/app/styles/index.scss';

import { Preview } from '@storybook/react';

import { RouterDecorator } from '~/shared/config/storybook/RouterDecorator/RouterDecorator';
import { StoreDecorator } from '~/shared/config/storybook/StoreDecorator/StoreDecorator';
import { SuspenseDecorator } from '~/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';
import { TranslationsDecorator } from '~/shared/config/storybook/TranslationsDecorator/TranslationsDecorator';

import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { argsConfig } from './config/argsConfig';
import { backgroundConfig } from './config/backgroundConfig';
import { badgeConfig } from './config/bageConfig';
import { htmlConfig } from './config/htmlConfig';
import { localeConfig } from './config/localeConfig';

const preview: Preview = {
    globalTypes: localeConfig,
    parameters: {
        html: htmlConfig,
        backgrounds: backgroundConfig,
        actions: {
            disable: true,
            argTypesRegex: '^on[A-Z].*',
        },
        layout: 'fullscreen',
        controls: {
            disable: true,
            expanded: true,
        },
        badgesConfig: badgeConfig,
        docs: { toc: true },
        design: {
            disable: true,
        },
        formik: {
            disable: true,
        },
    },
    argTypes: argsConfig,
    decorators: [
        StyleDecorator(true),
        RouterDecorator,
        SuspenseDecorator,
        StoreDecorator({}),
        TranslationsDecorator,
    ],
};

export default preview;
