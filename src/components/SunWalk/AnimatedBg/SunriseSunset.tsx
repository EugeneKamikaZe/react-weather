import React from 'react';
import { animated, useSpring } from 'react-spring';

import s from './style.module.scss';

interface SunriseSunsetBgProps {
    nowValue: number;
    max: number;
}

const SunriseSunsetBg: React.FC<SunriseSunsetBgProps> = ({ nowValue, max }) => {
    const animatedProps = useSpring({
        to: {
            backgroundImage: 'linear-gradient(#3881ff ' + nowValue + '%, #ff3838 100%)',
            opacity: Math.trunc((1 - nowValue / max) * 100) / 100,
        },
        from: {
            backgroundImage: 'linear-gradient(#3881ff 0%, #ff3838 100%)',
            opacity: 1,
        },
        config: { mass: 1, tension: 2000, friction: 100 },
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps} />;
};

export default SunriseSunsetBg;
