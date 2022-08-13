import React from 'react';
import {animated, useSpring} from 'react-spring';

import s from './style.module.scss';
import {useControls} from 'leva';
import {timeToValue} from "../../../helpers/sunriseSunsetWals";

const SunriseBg = ({time}: { time: number }) => {
    const result = timeToValue(time)

    // Sunset  ################################
    // if (time > 0.68 && time <= 0.76) {
    //     opacityValue = ((time - 0.68) * 0.6) / (0.76 - 0.68);
    //     redToYellow = 200;
    // } else if (time > 0.76 && time <= 0.84) {
    //     opacityValue = 0.6;
    //     redToYellow = 200 - ((time - 0.76) * 50) / (0.84 - 0.76);
    // } else if (time > 0.84 && time <= 0.92) {
    //     opacityValue = 0.6;
    //     redToYellow = 150 - ((time - 0.84) * 50) / (0.92 - 0.84);
    // } else if (time > 0.92 && time <= 1) {
    //     opacityValue = 0.6 - ((time - 0.92) * 0.6) / (1 - 0.92);
    //     redToYellow = 100 - ((time - 0.92) * 50) / (1 - 0.92);
    // }

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
        config: {mass: 1, tension: 2000, friction: 500},
    });

    return <animated.div className={s.sunriseSunsetBg} style={animatedProps}/>;
};

export default SunriseBg;
