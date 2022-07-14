import React from 'react';
import { Locale } from '../../store/weather';
import returnDate from '../../models/returnDate';

import s from './style.module.scss';
import { dateWithTimeOffset } from '../../models/dateOffset';

const DayForecast = ({ data }: { data: any }) => {
    return (
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
            <p>
                {dateWithTimeOffset(new Date(), data.timezone).getHours() +
                    ':' +
                    dateWithTimeOffset(new Date(), data.timezone).getMinutes()}
            </p>
        </div>
    );
};

export default DayForecast;
