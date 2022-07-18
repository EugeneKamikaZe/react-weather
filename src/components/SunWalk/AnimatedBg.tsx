import React, {ReactNode, useEffect} from 'react';
import {animated, useSpring} from "react-spring";

import s from './style.module.scss';

type Color = { [key: string]: number | string }

interface AnimatedBgProps {
    from?: Color,
    to?: Color,
    state: boolean,
    number?: number
}

const AnimatedNightBg: React.FC<AnimatedBgProps> = ({state, number}) => {
    const animatedProps = useSpring({
        to: {
            backgroundImage: 'linear-gradient(to top, #fff 0%, #6dc0ff 50%, #1300ff 100%)',
            opacity: .5
        },
        from: {
            backgroundImage: 'linear-gradient(to top, #fff 0%, #6dc0ff ' + number + '%, #1300ff 100%)',
            opacity: 1
        },
        reverse: !state,
        config: {mass: 1, tension: 2000, friction: 100},
    });

    // useEffect(() => {
    //
    // }, [firstColor, secondColor, thirdColor])

    return (
        <animated.div className={s.nightBg} style={animatedProps}/>
    );
};

export default AnimatedNightBg;
