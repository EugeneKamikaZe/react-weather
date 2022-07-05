import React from "react";
import WeatherContainer from "./components/WeatherContainer";
import {Units} from "./store/weather";

const App = () => {
    const initialPlace = 'Moscow'
    const APIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10'

    return (
        <>
            <WeatherContainer  APIKey={APIKey} initialPlace={initialPlace} units={Units.Metric}/>
        </>
    );
};

export default App
