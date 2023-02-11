import React from 'react';
import { useDayForecast } from '../../store/weather';

import s from './style.module.scss';

const Statistic = () => {
    const data = useDayForecast((state) => state.data);

    return (
        data && (
            <div className={s.block}>
                <p>
                    <b>Weather:</b>{' '}
                    {data.weather.map((item: any) => `${item.main} (id: ${item.id})`)}
                </p>
                <p>
                    <b>Pressure (давление):</b> {data.main.pressure}hPa
                </p>
                <p>
                    <b>humidity (влажность):</b> {data.main.humidity}%
                </p>
                <p>
                    <b>Clouds:</b> {data.clouds.all}%
                </p>
                <p>
                    <b>Visibility:</b> {data.visibility} (max: 10km)
                </p>
                <p>
                    <b>Wind:</b> {data.wind.speed}m/s | {data.wind.deg}deg;
                    {data.wind.gust && ' | Gust:' + data.wind.gust + 'm/s'}
                </p>
                {data.rain && (
                    <p>
                        <b>Rain:</b> {data.rain['1h']}(1h) {data.rain['3h']}(3h)
                    </p>
                )}
                {data.snow && (
                    <p>
                        <b>Snow:</b> {data.snow['1h']}(1h) {data.snow['3h']}(3h)
                    </p>
                )}
            </div>
        )
    );
};

export default Statistic;
