import React, { memo, useEffect } from 'react';
import { useDayForecast } from '../../store/weather';

import s from './style.module.scss';
import cn from 'classnames';
import shallow from 'zustand/shallow';

import { useCity } from '../../store/geocode';

import moment from "moment";
import 'moment-timezone';

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
                        <div className={s.day}>
                            {
                                moment().utcOffset(data.timezone / 60).format('dddd')
                            }
                            <br/>
                            {
                                moment().utcOffset(data.timezone / 60).format('DD MMMM')
                            }
                        </div>

                        <div className={s.condition}>
                            {data.weather.map((item: any) => (
                                <p key={item.id}>{item.main}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <p>
                    {
                        moment().utcOffset(data.timezone / 60).format('HH:mm:ss')
                    }
                </p>
            </div>
        )
    );
};

export default memo(DayForecast);
