import React, { useEffect } from 'react';
import { Locale, Units, useDayForecast } from '../../store/weather';
import shallow from 'zustand/shallow';
import returnDate from '../../models/returnDate';

import s from './style.module.scss';

export interface WeatherProps {
    APIKey: string;
    lat: number;
    lng: number;
    units?: string;
    locale?: string;
}

const DayForecast: React.FC<WeatherProps> = ({
    APIKey,
    lat,
    lng,
    units = Units.Metric,
    locale = Locale.US,
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
            <div className='weather'>
                <div className={s.header}>
                    <div className={s.temperature}>{Math.round(data.main.temp)}</div>

                    <div>
                        <div className={s.day}>{returnDate(Locale.US)}</div>

                        <div className={s.condition}>
                            {data.weather.map((item: any) => (
                                <p key={item.id}>{item.main}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default DayForecast;
