import React, { memo, ReactNode } from 'react';
import { animated, useTrail } from 'react-spring';
import SpringSlide from './SpringSlide';

interface TrailProps {
    open: boolean;
    children?: ReactNode;
}

const SpringTrail: React.FC<TrailProps> = ({ open, children }) => {
    const items = React.Children.toArray(children);
    const trail = useTrail(items.length, {
        config: { mass: 1, tension: 2000, friction: 100 },
        to: {
            opacity: open ? 1 : 0,
            x: open ? 0 : 20,
            transform: `translateX(${open ? 0 : -100}%)`,
        },
        from: {
            opacity: 0,
            x: 100,
            transform: 'translateX(0)',
        },
    });

    return (
        <>
            {trail.map(({ transform, ...style }, index) => (
                <animated.div key={index} style={style}>
                    {items[index]}
                </animated.div>
            ))}
        </>
    );
};

export default memo(SpringTrail);
