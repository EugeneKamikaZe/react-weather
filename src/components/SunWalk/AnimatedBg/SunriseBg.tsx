import React from 'react';
import {animated, useSpring} from 'react-spring';

import s from './style.module.scss';
import {useControls} from 'leva';

interface SunriseSunsetBgProps {
    time: number;
}

function timeToValue(stamp: number = .08, steps: number = 4, isReverse: boolean) {
    for (let i = 0; i < steps; i++) {

    }
}

const SunriseBg: React.FC<SunriseSunsetBgProps> = ({time}) => {
    let opacityValue = 0;
    let redToYellow = 50;


    // Sunrise ################################
    // [0, .18, .16, .24, .32]
    // [50, 100, 150, 200]
    if (time > 0 && time <= .08) {
        opacityValue = (time * .6) / .08
    } else if (time > .08 && time <= .16) {
        opacityValue = .6
        redToYellow = (time * 100) / .16
    } else if (time > .16 && time <= .24) {
        opacityValue = .6
        redToYellow = (time * 150) / .24
    } else if (time > .24 && time <= .32) {
        opacityValue = .6 - ((time - .24) * .6) / (.32 - .24)
        redToYellow = (time * 200) / .32
    }

    // Sunset  ################################
    if (time > .68 && time <= .76) {
        opacityValue = ((time - .68) * .6) / (.76 - .68)
        redToYellow = 200
    } else if (time > .76 && time <= .84) {
        opacityValue = .6
        redToYellow = 200 - ((time - .76) * 50) / (.84 - .76)
    } else if (time > .84 && time <= .92) {
        opacityValue = .6
        redToYellow = 150 - ((time - .84) * 50) / (.92 - .84)
    } else if (time > .92 && time <= 1) {
        opacityValue = .6 - ((time - .92) * .6) / (1 - .92)
        redToYellow = 100 - ((time - .92) * 50) / (1 - .92)
    }

    const animatedProps = useSpring({
        to: {
            backgroundImage: `linear-gradient(0deg, rgba(255, ${redToYellow}, 0, 100) 20%, rgba(255, 255, 255, 0) 100%)`,
            opacity: opacityValue,
        },
        from: {
            backgroundImage: 'linear-gradient(0deg,  rgba(255, 50, 0, 100) 20%, rgba(255, 255, 255, 0) 100%)',
            opacity: 0,
        },
        config: {mass: 1, tension: 2000, friction: 500},
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps}/>;
};

export default SunriseBg;
