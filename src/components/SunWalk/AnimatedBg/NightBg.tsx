import React from 'react';
import { animated, useSpring } from 'react-spring';

import s from './style.module.scss';

interface AnimatedBgProps {
    value: number;
    max: number;
}

const DayNightBg: React.FC<AnimatedBgProps> = ({ value, max }) => {
    // const nowGradientValue = Math.floor((value * 60) / max)
    let opacityChanger = 0;

    if (value < max / 2) {
        opacityChanger = Math.trunc((value / (max / 2)) * 100) / 100;
    }

    const animatedProps = useSpring({
        to: {
            // backgroundImage: 'linear-gradient(to top, #4160ff ' + nowValue + '%, #07004e 100%)',
            opacity: opacityChanger,
        },
        from: {
            backgroundImage: 'linear-gradient(to top, #4160ff 0%, #07004e 100%)',
            opacity: 0,
        },
        config: { mass: 1, tension: 2000, friction: 500 },
    });

    return <animated.div className={s.dayNightBg} style={animatedProps} />;
};

export default DayNightBg;
