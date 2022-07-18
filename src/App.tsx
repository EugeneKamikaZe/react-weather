import React from 'react';
import shallow from 'zustand/shallow';
import {useCity} from './store/geocode';

import s from './App.module.scss';

import Statistic from './components/DevComponents/Statistic';
import MainWrapper from './components/MainWrapper';

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
    const {latitude, longitude} = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
        }),
        shallow,
    );

    return (
        <div className={s.wrapper}>
            <MainWrapper/>

            <>
                <MainWrapper
                    isSearch
                />

                {import.meta.env.DEV && <Statistic/>}
            </>
        </div>
    );
};

export default App;
