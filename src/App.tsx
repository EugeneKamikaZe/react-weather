import React, {useEffect} from "react";
import SunWalk from "./components/SunWalk";
import WeatherContainer from "./components/WeatherContainer";
import shallow from "zustand/shallow";
import {Locale, Units} from "./store/weather";
import {useGeocode} from "./store/geocode";

const App = () => {
    const initialPlace = 'Moscow'
    const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10'

    const {data, isLoading, isError, fetch} = useGeocode((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        fetch: state.fetch,
    }), shallow)

    const currentCity = data && data.filter((city: { lon: number; lat: number; name: string; state: string; }) => {
        return city.name === city.state
    })[0]

    useEffect(() => {
        fetch(APIKey, initialPlace)
    }, [])

    return (
        <>
            {/*<WeatherContainer APIKey={APIKey}*/}
            {/*                  lat={currentCity?.lat}*/}
            {/*                  lng={currentCity?.lon}*/}
            {/*                  units={Units.Metric}*/}
            {/*                  locale={Locale.US}/>*/}
            <SunWalk lat={currentCity?.lat}
                     lng={currentCity?.lon}/>
        </>
    );
};

export default App
