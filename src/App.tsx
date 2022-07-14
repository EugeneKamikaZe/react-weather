import React, {useEffect} from 'react';
import shallow from 'zustand/shallow';
import {Locale, Units, useDayForecast} from './store/weather';
import { useCity } from './store/geocode';

import s from './App.module.scss';

import SunWalk from './components/SunWalk';
import WeatherContainer from './components/WeatherContainer';

import SelectCity from './components/SelectCity';
import MountainsPng from './assets/landscape/mountains.png';

const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10';

const App = () => {
    const { latitude, longitude } = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
        }),
        shallow,
    );

    // Убрать после
    const data = useDayForecast(state => state.data);

    return (
        <div className={s.wrapper}>
            <div className='block'>
                {
                    data && <SunWalk lat={latitude} lng={longitude}  sunrise={data.sys.sunrise}
                                    sunset={data.sys.sunset}
                                    timezone={data.timezone}/>
                }

                <SelectCity APIKey={APIKey} />

                <img src={MountainsPng} alt='' className='mountains' />
            </div>

            {latitude && longitude && (
                <WeatherContainer
                    APIKey={APIKey}
                    lat={latitude}
                    lng={longitude}
                    units={Units.Metric}
                    locale={Locale.US}
                />
            )}
        </div>
    );
};

export default App;
