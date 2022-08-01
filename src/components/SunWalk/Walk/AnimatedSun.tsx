import React, { useEffect } from 'react';
import { animated, SpringValue, useSpring } from 'react-spring';
import { APP_CONFIG } from '../../../App';

import s from './style.module.scss';
import { Bezier } from '../../../models/bezier';

const AnimatedSun = ({ t }: { t: number }) => {
    const sunStyle = APP_CONFIG.sunStyles;
    const sunBezierPath = APP_CONFIG.initialSun;

    const { cx, cy } = useSpring({
        to: {
            cx: Bezier(sunBezierPath.x1, sunBezierPath.x2, sunBezierPath.x3, t),
            cy: Bezier(sunBezierPath.y1, sunBezierPath.y2, sunBezierPath.y3, t),
        },
        from: { cx: 0, cy: sunBezierPath },
        delay: 200,
        config: { mass: 1, tension: 2000, friction: 100 },
    });

    return (
        <animated.circle
            r={sunStyle.radius}
            fill={sunStyle.fill}
            cx={cx}
            cy={cy}
            className={s.sun}
        />
    );
};

export default AnimatedSun;
