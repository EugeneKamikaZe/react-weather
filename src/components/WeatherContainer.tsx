import React, {useEffect, useState} from 'react';
import {Locale, Units, useMultiple, useSingle} from "../store/weather";
import shallow from "zustand/shallow";
import cn from 'classnames'
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
