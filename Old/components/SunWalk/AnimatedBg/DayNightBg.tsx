import React from 'react';
import { animated, useSpring } from 'react-spring';

import { useControls } from 'leva';
import s from './style.module.scss';

interface SunriseSunsetBgProps {
    time: number;
}

const DayNightBg: React.FC<SunriseSunsetBgProps> = ({ time }) => {
    // const nowGradientValue = Math.floor((value * 60) / max)
    //
    // if (time < max / 2) {
    //     opacityChanger = Math.trunc((value / (max / 2)) * 100) / 100
    // } else {
    //     opacityChanger = Math.trunc((1 - ((value - (max / 2)) / (max - (max / 2)))) * 100) / 100
    // }
    const solarNoonSky = {
        R: 50,
        G: 100,
        B: 250,
    };
    const nightSky = {
        R: 0,
        G: 0,
        B: 50,
    };

    let opacityChanger = 0;
    let gradientPercent = 0;
    const maxPercent = 25;

    // Sunrise ################################
    if (time > 0 && time < 0.5) {
    }

    const sunriseHalf = 0.25;

    if (time < sunriseHalf) {
        opacityChanger = time / sunriseHalf;
        gradientPercent = (time * maxPercent) / sunriseHalf;
    } else if (time >= sunriseHalf && time < sunriseHalf * 2) {
        opacityChanger = 1 - (time - sunriseHalf) / sunriseHalf;
    }

    if (time === 0.5) {
        // SolarNoon ##############################
    }

    // Sunset  ################################
    const sunsetHalf = 0.25;

    if (time > sunsetHalf * 2 && time < sunsetHalf * 2 + sunsetHalf) {
        opacityChanger = (time - sunsetHalf * 2) / sunsetHalf;
    } else if (time >= sunsetHalf * 2 + sunsetHalf) {
        opacityChanger =
            1 - (time - (sunsetHalf * 2 + sunsetHalf)) / sunsetHalf;
    }

    const { R, B, G } = useControls('Sun', {
        R: {
            value: 0,
            min: 0,
            max: 250,
            step: 1,
        },
        G: {
            value: 0,
            min: 0,
            max: 250,
            step: 1,
        },
        B: {
            value: 50,
            min: 0,
            max: 250,
            step: 1,
        },
    });

    const animatedProps = useSpring({
        to: {
            backgroundImage: `linear-gradient(0deg, rgba(50,100,250,1) 0%, rgba(${R}, ${G}, ${B},1) 100%)`,
            // opacity: opacityChanger,
        },
        from: {
            backgroundImage: `linear-gradient(0deg, 
                                rgba(${solarNoonSky.R}, ${solarNoonSky.G}, ${solarNoonSky.B}, 1) 0%, 
                                rgba(${nightSky.R}, ${nightSky.G}, ${nightSky.B}, 1) 100%)`,
            // opacity: 0,
        },
        config: { mass: 1, tension: 2000, friction: 500 },
    });

    return <animated.div className={s.bg} style={animatedProps} />;
};

export default DayNightBg;
