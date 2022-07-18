import React, { memo, useEffect } from 'react';
import { Locale, useDayForecast } from '../../store/weather';
import returnDate from '../../models/returnDate';

import s from './style.module.scss';

import shallow from 'zustand/shallow';
import { useCity } from '../../store/geocode';
import cn from 'classnames';
import { dateWithTimeOffset } from '../../models/dateOffset';

const DayForecast = ({ isToggle }: { isToggle: boolean }) => {
    const { data, isLoading, isError, fetch } = useDayForecast(
        (state) => ({
            data: state.data,
            isLoading: state.isLoading,
            isError: state.isError,
            fetch: state.fetch,
        }),
        shallow,
    );

    const { latitude, longitude } = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
        }),
        shallow,
    );

    useEffect(() => {
        if (latitude && longitude) {
            fetch(latitude, longitude);
        }
    }, [latitude, longitude]);

    return (
        data && (
            <div className={cn(s.weather, { [s.hide]: isToggle })}>
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
                <p>
                    {dateWithTimeOffset(new Date(), data.timezone).getHours() +
                        ':' +
                        dateWithTimeOffset(new Date(), data.timezone).getMinutes()}
                </p>
            </div>
        )
    );
};

export default memo(DayForecast);
