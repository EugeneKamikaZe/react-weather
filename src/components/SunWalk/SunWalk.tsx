import React from 'react';
import { useDayForecast } from '../../store/weather';
import { sunMove } from '../../models/sunWalk';

import s from './style.module.scss';
import { useControls } from 'leva';
import SunriseSunsetBg from './AnimatedBg/SunriseSunset';
import {dateWithTimeOffset} from "../../models/dateOffset";
import DayNightBg from "./AnimatedBg/NightBg";

export interface GeoProps {}

const SunWalk: React.FC<GeoProps> = () => {
    const data = useDayForecast((state) => state.data);
    const max = 226;
    const sunWalkResult = data && sunMove(data.sys.sunrise, data.sys.sunset, data.timezone, max);

    if (data) {
        console.log(data)
        console.log(sunWalkResult)
        console.log('Sunrise', dateWithTimeOffset(new Date(data.sys.sunrise * 1000), data.timezone))
        console.log('Sunset', dateWithTimeOffset(new Date(data.sys.sunset * 1000), data.timezone))
    }
    // const {devNumber, night} = useControls({
    //     devNumber: {
    //         value: 0,
    //         min: 0,
    //         max: max,
    //         step: 10
    //     },
    //     night: false
    // })
    // const sunStyle = {
    //     transform: `translateY(-${devNumber}%)`,
    // };

    const sunStyle = {
        transform: `translateY(-${sunWalkResult ? sunWalkResult.value : 1}%)`,
    };

    return (
        <div className={s.sunContainer}>
            <SunriseSunsetBg value={sunWalkResult ? sunWalkResult.value : 1} max={max} />
            {/*<DayNightBg nowValue={devNumber} />*/}

            <div className={s.sun} style={sunStyle}>
                <div className={s.sunShadow} />
                <div className={s.sunCircle} />
            </div>
        </div>
    );
};

export default SunWalk;
