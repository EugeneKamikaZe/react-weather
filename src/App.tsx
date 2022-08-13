import React from 'react';

import s from './App.module.scss';

import MainWrapper from './components/MainWrapper';
import config from './config.json';

import Statistic from './components/DevComponents/Statistic';
import TestContainer from './components/TestContainer';
import Stars from './components/SunWalk/Stars';
import DevWalk from './components/SunWalk/Walk/DevWalk';
import SunriseBg from './components/SunWalk/AnimatedBg/SunriseBg';
import { useControls } from 'leva';
import Walk from './components/SunWalk/Walk/Walk';

export const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
export const APP_CONFIG = config;

const App = () => {
    const { tBezier } = useControls('Sun', {
        tBezier: {
            value: 0,
            min: 0,
            max: 1,
            step: 0.005,
        },
    });

    return (
        <div className={s.wrapper}>
            {import.meta.env.DEV ? (
                <>
                    <Statistic />

                    <TestContainer>
                        <Stars />
                    </TestContainer>

                    <TestContainer className={s.visible}>
                        <DevWalk />
                    </TestContainer>

                    <TestContainer className={s.dayBg}>
                        <SunriseBg time={tBezier} />
                        <Walk time={tBezier} />
                    </TestContainer>
                </>
            ) : (
                <MainWrapper />
            )}
        </div>
    );
};

export default App;
