import React from 'react';
import {useDayForecast} from "../../store/weather";
import {sunMove} from '../../models/sunWalk';

import s from './style.module.scss';
import AnimatedNightBg from "./AnimatedBg";
import {useControls} from "leva";
import SunriseSunsetBg from "./AnimatedBg/SunriseSunset";

export interface GeoProps {
}

const SunWalk: React.FC<GeoProps> = () => {
    const data = useDayForecast(state => state.data);
    const max = 180
    const sunWalkStep = data && sunMove(data.sys.sunrise, data.sys.sunset, data.timezone, max);

    // const {devNumber, night} = useControls({
    //     devNumber: {
    //         value: 0,
    //         min: 0,
    //         max: max,
    //         step: 5
    //     },
    //     night: false
    // })

    const sunStyle = {
        transform: `translateY(-${sunWalkStep ? sunWalkStep : 1}%)`,
    };


    const nowInRange = Math.floor(((sunWalkStep ? sunWalkStep : 1) * 60) / max)
    // const sunriseStyle = {
    //     backgroundImage: `linear-gradient(#3881ff ${nowInRange}%, #ff3838 100%)`,
    //     opacity: Math.trunc((1 - sunWalkStep / max ) * 100) / 100,
    // }
    console.log(nowInRange)

    return (
        <div className={s.sunContainer}>
            {/*<div className={s.sunriseSunsetBg} style={sunriseStyle}/>*/}
            <SunriseSunsetBg nowValue={nowInRange} max={max} />

            <div className={s.sun} style={sunStyle}>
                <div className={s.sunShadow}/>
                <div className={s.sunCircle}/>
            </div>
        </div>
    );
};

export default SunWalk;
