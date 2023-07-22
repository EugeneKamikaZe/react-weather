// @ts-ignore
import type { BadgesConfig } from '@geometricpanda/storybook-addon-badges';

export const badgeConfig: BadgesConfig = {
    formik: {
        styles: {
            backgroundColor: '#FFF',
            borderColor: '#3B82F6',
            color: '#172B4D',
        },
        title: 'Formik',
        tooltip: {
            title: 'Formik',
            desc: 'Build forms in React, without the tears',
            links: [
                {
                    title: 'Read more',
                    href: 'https://formik.org/',
                },
            ],
        },
    },
};
