import React, { useEffect, useRef, useState } from 'react';
import { useControls } from 'leva';
import cn from 'classnames';
import { Bezier } from '../../../helpers/bezier';

import s from './style.module.scss';

const DevWalk = () => {
    const c1 = useRef(null);
    const c2 = useRef(null);
    const c3 = useRef(null);
    let drag: any;

    const { tBezier, sunRadius, sunColor } = useControls('Sun', {
        tBezier: {
            value: 0.5,
            min: 0,
            max: 1,
            step: 0.005,
        },
        P1: {
            value: { x: -25, y: 540 },
            min: -1000,
            max: 1000,
            step: 10,
            onChange: (value) => {
                setD((prev) => ({
                    ...prev,
                    x1: value.x,
                    y1: value.y,
                }));
            },
        },
        P2: {
            value: { x: 150, y: -420 },
            min: -1000,
            max: 1000,
            step: 10,
            onChange: (value) => {
                setD((prev) => ({
                    ...prev,
                    x2: value.x,
                    y2: value.y,
                }));
            },
        },
        P3: {
            value: { x: 325, y: 540 },
            min: -1000,
            max: 1000,
            step: 10,
            onChange: (value) => {
                setD((prev) => ({
                    ...prev,
                    x3: value.x,
                    y3: value.y,
                }));
            },
        },
        sunRadius: {
            value: 0,
            min: 10,
            max: 100,
            step: 1,
        },
        sunColor: '#ffc025',
    });

    const [d, setD] = useState(() => ({
        x1: 0,
        y1: 400,
        x2: 150,
        y2: 0,
        x3: 300,
        y3: 400,
    }));

    function mdHandler(e: MouseEvent) {
        if (e.target instanceof SVGCircleElement) {
            drag = e.target;
            drag.x = e.target.getAttribute('cx');
            drag.y = e.target.getAttribute('cy');
            drag.clientX = e.clientX;
            drag.clientY = e.clientY;

            window.addEventListener('mousemove', mmHandler);
            window.addEventListener('mouseup', muHandler);
        }
    }

    function mmHandler(e: MouseEvent) {
        drag.setAttribute('cx', String(e.clientX - (drag.clientX - drag.x)));
        drag.setAttribute('cy', String(e.clientY - (drag.clientY - drag.y)));

        switch (drag) {
            case c1.current:
                setD((prev) => ({
                    ...prev,
                    x1: drag.getAttribute('cx'),
                    y1: drag.getAttribute('cy'),
                }));
                break;
            case c2.current:
                setD((prev) => ({
                    ...prev,
                    x2: drag.getAttribute('cx'),
                    y2: drag.getAttribute('cy'),
                }));
                break;
            case c3.current:
                setD((prev) => ({
                    ...prev,
                    x3: drag.getAttribute('cx'),
                    y3: drag.getAttribute('cy'),
                }));
                break;
        }
    }

    function muHandler(e: MouseEvent) {
        window.removeEventListener('mousemove', mmHandler);
        window.removeEventListener('mouseup', muHandler);
    }

    useEffect(() => {
        window.addEventListener('mousedown', mdHandler);

        // return window.removeEventListener('mousedown', mdHandler)
    }, []);

    const mx = Bezier(d.x1, d.x2, d.x3, tBezier);
    const my = Bezier(d.y1, d.y2, d.y3, tBezier);

    return (
        <div className={s.devWrapper}>
            <svg className={s.devSunWalk} xmlns="http://www.w3.org/2000/svg">
                <path
                    d={`M${d.x1} ${d.y1} Q ${d.x2} ${d.y2} ${d.x3} ${d.y3}`}
                    stroke="#091e42"
                    fill="transparent"
                    strokeWidth="2"
                />

                <circle
                    cx={d.x1}
                    cy={d.y1}
                    r="5"
                    stroke="transparent"
                    fill="#ffd80a"
                    strokeWidth="2"
                    ref={c1}
                />
                <circle
                    cx={d.x2}
                    cy={d.y2}
                    r="5"
                    stroke="transparent"
                    fill="#ffd80a"
                    strokeWidth="2"
                    ref={c2}
                />
                <circle
                    cx={d.x3}
                    cy={d.y3}
                    r="5"
                    stroke="transparent"
                    fill="#ffd80a"
                    strokeWidth="2"
                    ref={c3}
                />

                <circle
                    cx={mx}
                    cy={my}
                    r={sunRadius}
                    stroke="transparent"
                    fill={sunColor}
                    strokeWidth="2"
                />
            </svg>

            <button className={cn(s.apply, 'btn btn-xs btn-primary')}>
                Apply
            </button>
        </div>
    );
};

export default DevWalk;
