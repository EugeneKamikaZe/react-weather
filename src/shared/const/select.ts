// export interface SelectDefaultProps {
//     readonly value: string;
//     readonly label: string;
//     readonly isDisabled?: boolean;
// }

export interface SelectDefaultProps {
    value: string;
    label: string;
    isDisabled?: boolean;
}

export interface CountriesOption extends SelectDefaultProps {}

export type SelectType = CountriesOption;

export const countriesOptions: CountriesOption[] = [
    {
        value: 'ru',
        label: 'Russia',
    },
    {
        value: 'tr',
        label: 'Turkish',
    },
    {
        value: 'sp',
        label: 'Spain',
    },
    {
        value: 'kz',
        label: 'Kazahstan',
    },
    {
        value: 'ad',
        label: 'Andora',
    },
    {
        value: 've',
        label: 'Venezuela',
    },
    {
        value: 'mg',
        label: 'Madagascar',
    },
];

// export interface GroupedOption {
//     readonly label: string;
//     readonly options: readonly CountriesOption[];
// }
//
// export const groupedOptions: readonly GroupedOption[] = [
//     {
//         label: 'Countries',
//         options: countriesOptions,
//     },
// ];
