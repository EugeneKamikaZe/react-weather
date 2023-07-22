export const localeConfig = {
    locale: {
        description: 'Internationalization locale',
        defaultValue: 'en',
        toolbar: {
            icon: 'globe',
            items: [
                {
                    value: 'en',
                    right: '🇺🇸',
                    title: 'English',
                },
                {
                    value: 'tr',
                    right: '🇹🇷',
                    title: 'Türkçe',
                },
                {
                    value: 'es',
                    right: '🇪🇸',
                    title: 'Español',
                },
            ],
            showName: true,
        },
    },
};
