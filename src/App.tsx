import React from 'react';
import SunWalk from './components/SunWalk';
import WeatherContainer from './components/WeatherContainer';
import shallow from 'zustand/shallow';
import { Locale, Units } from './store/weather';
import { useCity } from './store/geocode';

import s from './App.module.scss';
import SelectCity from './components/SelectCity';
import cn from 'classnames';
import MountainsPng from "./assets/landscape/mountains.png";

const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10';

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
            <div className={s.block}>
                <SunWalk lat={latitude} lng={longitude} />

                <SelectCity APIKey={APIKey} />

                <img src={MountainsPng} alt="" className={s.mountains}/>
            </div>

            {latitude && longitude && (
                <>
                    <div className={s.block}>
                        <WeatherContainer
                            APIKey={APIKey}
                            lat={latitude}
                            lng={longitude}
                            units={Units.Metric}
                            locale={Locale.US}
                        />

                        <img src={MountainsPng} alt="" className={s.mountains}/>
                    </div>

                    <div className={s.block}>
                        <SunWalk lat={latitude} lng={longitude} />

                        <img src={MountainsPng} alt="" className={s.mountains}/>
                    </div>
                </>
            )}
        </div>
    );
};

export default App;
