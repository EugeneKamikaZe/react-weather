import React from 'react';
import { sunMove } from '../../models/sunWalk';

import s from './style.module.scss';
import {useDayForecast} from "../../store/weather";

export interface GeoProps {
}

const SunWalk: React.FC<GeoProps> = () => {
    const data = useDayForecast(state => state.data);
    const sunWalkStatus = data && sunMove(data.sys.sunrise, data.sys.sunset, data.timezone, 180);

    let sunStyle = {
        transform: `translateY(-${sunWalkStatus}%)`,
    };

    // setInterval(() => {
    //     sunMove(data.results.sunrise, data.results.solar_noon, data.results.sunset)
    // }, 60000);

    return (
        <div className={s.wrapper}>
            <div className={'sun-wrapper'} style={sunStyle}>
                <div className='sun-shadow' />
                <div className='sun' />
            </div>
        </div>
    );
};

export default SunWalk;
