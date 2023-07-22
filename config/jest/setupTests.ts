// Такой файл вы могли наблюдать при create-react-app
import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';

jest.mock('react-i18next', () => ({
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => ({
        t: (str: string) => str,
        i18n: {
            changeLanguage: () => new Promise(() => {}),
        },
    }),
    // initReactI18next: {
    //     type: '3rdParty',
    //     init: jest.fn(),
    // },
}));
