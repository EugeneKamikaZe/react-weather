import React, {useEffect} from "react";
import SunWalk from "./components/SunWalk";
import WeatherContainer from "./components/WeatherContainer";
import shallow from "zustand/shallow";
import {Locale, Units, useDayForecast} from "./store/weather";
import {useCity, useGeocode} from "./store/geocode";

import s from './App.module.scss'
import SelectCity from "./components/SelectCity";

const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10'

const App = () => {
    const {latitude, longitude} = useCity((state) => ({
        latitude: state.lat,
        longitude: state.lng,
    }), shallow)

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <SelectCity APIKey={APIKey}/>
            </div>

            {
                latitude && longitude &&
                    <>
                        <div className={s.block}>
                            <WeatherContainer APIKey={APIKey}
                                              lat={latitude}
                                              lng={longitude}
                                              units={Units.Metric}
                                              locale={Locale.US}/>
                        </div>

                        <div className={s.block}>
                            <SunWalk lat={latitude}
                                     lng={longitude}/>
                        </div>
                    </>
            }
        </div>
    );
};

export default App
