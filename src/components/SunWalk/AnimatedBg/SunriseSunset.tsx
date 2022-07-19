import React from 'react';
import { animated, useSpring } from 'react-spring';

import s from './style.module.scss';

interface SunriseSunsetBgProps {
    value: number;
    max: number;
}

const SunriseSunsetBg: React.FC<SunriseSunsetBgProps> = ({ value, max }) => {
    const nowGradientValue = Math.floor((value * 60) / max)

    let opacityChanger = 0
    if (value < max / 2) {
        opacityChanger = Math.trunc((value / (max / 2)) * 100) / 100
    } else {
        opacityChanger = Math.trunc((1 - ((value - (max / 2)) / (max - (max / 2)))) * 100) / 100
    }



    const animatedProps = useSpring({
        to: {
            // backgroundImage: 'linear-gradient(#3881ff ' + nowGradientValue + '%, #ff3838 100%)',
            opacity: opacityChanger,
        },
        from: {
            backgroundImage: 'linear-gradient(#3881ff 0%, #ff3838 100%)',
            opacity: 0,
        },
        config: { mass: 1, tension: 2000, friction: 500 },
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps} />;
};

export default SunriseSunsetBg;
