import React from 'react';
import Forecast, {WeatherProps} from "./Forecast";

const WeatherContainer: React.FC<WeatherProps> = ({
                                                      APIKey,
                                                      lat,
                                                      lng,
                                                      units,
                                                      locale
                                                  }) => {

    return (
        <>
            <Forecast lat={lat} lng={lng} APIKey={APIKey}/>
        </>
    );
};

export default WeatherContainer;
