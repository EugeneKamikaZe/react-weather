import React from 'react';

import s from './style.module.scss';

const AtmosphereTypesEnum = [
    {
        id: 701,
        main: 'Mist',
        description: 'mist',
    },
    {
        id: 711,
        main: 'Smoke',
        description: 'Smoke',
        isDefault: true,
    },
    {
        id: 721,
        main: 'Haze',
        description: 'Haze',
    },
    {
        id: 731,
        main: 'Dust',
        description: 'sand/ dust whirls',
    },
    {
        id: 741,
        main: 'Fog',
        description: 'fog',
    },
    {
        id: 751,
        main: 'Drizzle',
        description: 'sand',
    },
    {
        id: 761,
        main: 'Dust',
        description: 'dust',
    },
    {
        id: 762,
        main: 'Ash',
        description: 'volcanic ash',
    },
    {
        id: 771,
        main: 'Squall',
        description: 'squalls',
    },
    {
        id: 781,
        main: 'Tornado',
        description: 'tornado',
    },
];

const Atmosphere = () => <div />;

export default Atmosphere;
