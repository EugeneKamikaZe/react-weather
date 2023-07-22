import React from 'react';

import shallow from 'zustand/shallow';
import s from './style.module.scss';
import DayForecast from '../../DayForecast';
// import SunWalk, { GeoProps } from '../../SunWalk';
import MountainsPng from '../../../assets/landscape/mountains.png';
import { useDayForecast } from '../../../store/weather';
import SunWalk from '../../SunWalk/SunWalk';

const DefaultTypesEnum = [
    {
        id: 800,
        main: 'Clear',
        description: 'clear sky',
    },
];

const Default = () => {
    const { data, isLoading, isError, fetch } = useDayForecast(
        (state) => ({
            data: state.data,
            isLoading: state.isLoading,
            isError: state.isError,
            fetch: state.fetch,
        }),
        shallow,
    );

    return data && <div className={s.default} />;
};

export default Default;
