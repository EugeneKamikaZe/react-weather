import React, { useEffect } from 'react';
import { useDayForecast } from '../store/weather';
import shallow from 'zustand/shallow';

import MountainsPng from '../assets/landscape/mountains.png';

import DayForecast from './DayForecast';
import SunWalk from './SunWalk';
import SelectCity from './SelectCity';

interface WeatherProps {
    APIKey: string;
    lat: number | null;
    lng: number | null;
    units: string;
    locale: string;
    isSearch?: boolean;
}

const WeatherContainer: React.FC<WeatherProps> = ({
    APIKey,
    lat,
    lng,
    units,
    locale,
    isSearch,
}) => {
    const { data, isLoading, isError, fetch } = useDayForecast(
        (state) => ({
            data: state.data,
            isLoading: state.isLoading,
            isError: state.isError,
            fetch: state.fetch,
        }),
        shallow,
    );

    useEffect(() => {
        if (lat && lng) {
            fetch(APIKey, lat, lng, units);
        }
    }, [lat, lng]);

    return (
        data && (
            <div className='block'>
                {!isSearch && <DayForecast data={data} />}

                <SunWalk
                    lat={lat}
                    lng={lng}
                    sunrise={data.sys.sunrise}
                    sunset={data.sys.sunset}
                    timezone={data.timezone}
                />

                <img src={MountainsPng} alt='' className='mountains' />
            </div>
        )
    );
};

export default WeatherContainer;
