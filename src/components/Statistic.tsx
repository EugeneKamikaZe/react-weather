import React from 'react';
import { useDayForecast } from '../store/weather';

const Statistic = () => {
    const data = useDayForecast((state) => state.data);

    console.log(data);

    return (
        data && (
            <div>
                <p>
                    <b>Weather:</b> {data.weather.map((item: any) => `${item.main} (${item.id})`)}
                </p>
                <p>
                    <b>Pressure (давление):</b> {data.main.pressure}(hPa)
                </p>
                <p>
                    <b>humidity (влажность):</b> {data.main.humidity}(%)
                </p>
                <p>
                    <b>Clouds:</b> {data.clouds.all}(%)
                </p>
                <p>
                    <b>Visibility:</b> {data.visibility}(max 10km)
                </p>
                <p>
                    <b>Wind:</b> {data.wind.speed}(meter/sec) {data.wind.deg}(deg) | Gust:
                    {data.wind.gust}(meter/sec)
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
