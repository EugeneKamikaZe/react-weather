import React from 'react';
import DayForecast, {WeatherProps} from "./DayForecast";

const WeatherContainer: React.FC<WeatherProps> = ({
                                                      APIKey,
                                                      lat,
                                                      lng,
                                                      units,
                                                      locale
                                                  }) => {

    return (
        <>
            <DayForecast lat={lat} lng={lng} APIKey={APIKey}/>
        </>
    );
};

export default WeatherContainer;
