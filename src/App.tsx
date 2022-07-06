import React, {useEffect} from "react";
import WeatherContainer from "./components/WeatherContainer";
import shallow from "zustand/shallow";
import {useSunrise} from "./store/sunrise-sunset";

import Sun from './assets/sun.png'
import {sunMove} from "./functions/sunrise";

const App = () => {
    const initialPlace = 'Moscow'
    const lat = '55.751244'
    const lng = '37.618423'
    const date = '2022-08-22'
    const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10'

    const {data, isLoading, isError, fetch} = useSunrise((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        fetch: state.fetch,
    }), shallow)

    useEffect(() => {
        fetch(lat, lng, date)
    }, [])

    // console.log(data)
    data && sunMove(data.results.sunrise, data.results.solar_noon, data.results.sunset)

    return (
        <>
            {/*<WeatherContainer  APIKey={APIKey} initialPlace={initialPlace} units={Units.Metric} locale={Locale.US}/>*/}
            <div className='weather'>
                <img src={Sun} alt="" className={'sun'}/>
            </div>
        </>
    );
};

export default App
