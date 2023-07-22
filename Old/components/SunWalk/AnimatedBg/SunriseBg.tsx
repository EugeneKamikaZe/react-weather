import React from 'react';
import { animated, useSpring } from 'react-spring';

import s from './style.module.scss';
import { timeToValue } from '../../../helpers/sunriseSunsetWals';

const SunriseBg = ({ time }: { time: number }) => {
    const result = timeToValue(time, 0.1);

    const animatedProps = useSpring({
        to: {
            backgroundImage: `linear-gradient(0deg, 
                            rgba(255, ${result.color}, 0, 100) 20%, 
                            rgba(255, 255, 255, 0) 100%)`,
            opacity: result.opacity,
        },
        from: {
            backgroundImage:
                'linear-gradient(0deg,  rgba(255, 50, 0, 100) 20%, rgba(255, 255, 255, 0) 100%)',
            opacity: 0,
        },
        config: { mass: 1, tension: 2000, friction: 500 },
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps} />;
};

export default SunriseBg;
