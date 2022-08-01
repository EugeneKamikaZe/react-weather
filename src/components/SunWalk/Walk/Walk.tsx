import React from 'react';
import s from './style.module.scss';
import { Bezier } from '../../../models/bezier';
import { APP_CONFIG } from '../../../App';

const Walk = ({ time }: { time: number }) => {
    const sunStyle = APP_CONFIG.sunStyles;
    const sunBezierPath = APP_CONFIG.initialSun;

    const mx = Bezier(sunBezierPath.x1, sunBezierPath.x2, sunBezierPath.x3, time);
    const my = Bezier(sunBezierPath.y1, sunBezierPath.y2, sunBezierPath.y3, time);

    return (
        <div className={s.wrapper}>
            <svg className={s.sunWalk} width='200' height='100' xmlns='http://www.w3.org/2000/svg'>
                <circle
                    cx={mx}
                    cy={my}
                    r={sunStyle.radius}
                    fill={sunStyle.fill}
                    className={s.sun}
                />
            </svg>
        </div>
    );
};

export default Walk;
