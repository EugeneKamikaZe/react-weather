import React from 'react';
import shallow from 'zustand/shallow';
import { Locale, Units } from './store/weather';
import { useCity } from './store/geocode';

import s from './App.module.scss';

import WeatherContainer from './components/WeatherContainer';
import SelectCity from './components/SelectCity';
import Statistic from './components/Statistic';
import Default from './components/Condition/Default';
import Rain from './components/Condition/Rain';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const App = () => {
    const { latitude, longitude } = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
        }),
        shallow,
    );
    return (
        <div className={s.wrapper}>
            <div className='block'>
                <SelectCity APIKey={API_KEY} />
                <WeatherContainer
                    APIKey={API_KEY}
                    lat={latitude}
                    lng={longitude}
                    units={Units.Metric}
                    locale={Locale.US}
                    isSearch
                />
            </div>

            {latitude && longitude && (
                <>
                    <WeatherContainer
                        APIKey={API_KEY}
                        lat={latitude}
                        lng={longitude}
                        units={Units.Metric}
                        locale={Locale.US}
                    />

                    <Default />

                    {import.meta.env.DEV && <Statistic />}
                </>
            )}
        </div>
    );
};

export default App;
