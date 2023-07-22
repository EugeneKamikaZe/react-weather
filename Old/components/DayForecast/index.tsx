import React, { memo, useEffect, useState } from 'react';
import cn from 'classnames';
import shallow from 'zustand/shallow';
import moment from 'moment';
import { useDayForecast, WeatherResultProps } from '../../store/weather';

import s from './style.module.scss';

import { useCity } from '../../store/geocode';

const DayForecast = ({ isToggle }: { isToggle: boolean }) => {
    const [myData, setMyData] = useState<null | WeatherResultProps>(null);

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

    useEffect(() => {
        data && setMyData(data);
    });

    return (
        data && (
            <div className={cn(s.weather, { [s.hide]: isToggle })}>
                <div className={s.header}>
                    <div className={s.temperature}>
                        {Math.round(data.main.temp)}
                    </div>

                    <div>
                        <div className={s.day}>
                            {moment()
                                .utcOffset(data.timezone / 60)
                                .format('dddd')}
                            <br />
                            {moment()
                                .utcOffset(data.timezone / 60)
                                .format('DD MMMM')}
                        </div>

                        <div className={s.condition}>
                            {data.weather.map((item: any) => (
                                <p key={item.id}>{item.main}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <p>
                    {moment()
                        .utcOffset(data.timezone / 60)
                        .format('HH:mm:ss')}
                </p>
            </div>
        )
    );
};

export default memo(DayForecast);
