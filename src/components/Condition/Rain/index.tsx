import React, {useEffect, useRef, useState} from 'react';
import {animated, config, useSpring} from "react-spring";

import s from './style.module.scss';

const RainTypesEnum = [
    {
        id: 500,
        main: 'Rain',
        description: 'light rain',
        isDefault: true,
    },
    {
        id: 501,
        main: 'Rain',
        description: 'moderate rain',
    },
    {
        id: 502,
        main: 'Rain',
        description: 'heavy intensity rain',
    },
    {
        id: 503,
        main: 'Rain',
        description: 'very heavy rain',
    },
    {
        id: 504,
        main: 'Rain',
        description: 'extreme rain',
    },
    {
        id: 511,
        main: 'Rain',
        description: 'freezing rain',
    },
    {
        id: 520,
        main: 'Rain',
        description: 'light intensity shower rain',
    },
    {
        id: 521,
        main: 'Rain',
        description: 'shower rain',
    },
    {
        id: 522,
        main: 'Rain',
        description: 'heavy intensity shower rain',
    },
    {
        id: 531,
        main: 'Rain',
        description: 'ragged shower rain',
    },
];

const Rain = () => {
    const [isTrue, setIsTrue] = useState(false)
    const handleClick = () => {
        setIsTrue(!isTrue)
    }


    function Text() {
        const [flip, setFlip] = useState(false)
        const props = useSpring({
            to: { opacity: 1 },
            from: { opacity: 0 },
            reset: true,
            reverse: flip,
            delay: 200,
            config: config.molasses,
            onRest: () => setFlip(!flip),
        })

        return <animated.h1 style={props}>hello</animated.h1>
    }

    const AnimatedText = animated(Text)

    return (
        <div>
        </div>
    )
};

export default Rain;
