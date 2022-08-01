import React from 'react';
import { useDayForecast } from '../../store/weather';
import { sunMove } from '../../models/sunWalk';
import { useControls } from 'leva';

import s from './style.module.scss';

import Walk from './Walk/Walk';
import DayNightBg from './AnimatedBg/DayNightBg';

const SunWalk = () => {
    const data = useDayForecast((state) => state.data);
    const sunWalkResult = data && sunMove(data.sys.sunrise, data.sys.sunset, data.timezone);
    const timeNow = sunWalkResult ? sunWalkResult.value : 0;

    // t = [0, ... timeNow, ... 1]

    const { tBezier } = useControls('Sun', {
        tBezier: {
            value: 0,
            min: 0,
            max: 1,
            step: 0.005,
        },
    });

    return (
        <div className={s.sunContainer}>
            <DayNightBg time={tBezier} />

            {/*<SunriseBg time={tBezier}/>*/}
            <Walk time={timeNow} />
        </div>
    );
};

export default SunWalk;
