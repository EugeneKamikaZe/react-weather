import React from 'react';
import { animated, useSpring } from 'react-spring';

import s from './style.module.scss';

interface AnimatedBgProps {
    nowValue: number;
}

const DayNightBg: React.FC<AnimatedBgProps> = ({ nowValue }) => {
    const animatedProps = useSpring({
        to: {
            backgroundImage: 'linear-gradient(to top, #4160ff ' + nowValue + '%, #07004e 100%)',
        },
        from: {
            backgroundImage: 'linear-gradient(to top, #4160ff 0%, #07004e 100%)',
        },
        config: { mass: 1, tension: 2000, friction: 100 },
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps} />;
};

export default DayNightBg;
