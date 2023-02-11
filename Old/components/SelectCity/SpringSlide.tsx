import React, { memo, ReactNode, useEffect, useRef, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import cn from 'classnames';
import s from './style.module.scss';

interface SlideProps {
    children?: ReactNode;
    state?: boolean;
}

const SpringSlide: React.FC<SlideProps> = ({ children, state }) => {
    const [height, setHeight] = useState(0);
    const slideItem = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setHeight(slideItem.current!.clientHeight);
    }, [slideItem]);

    const animatedProps = useSpring({
        to: { height: state ? height : 0 },
        from: { height: 0, overflow: 'hidden' },
        reverse: !state,
        config: { mass: 1, tension: 2000, friction: 100 },
    });

    return (
        <animated.div style={animatedProps}>
            <div className={cn(s.resultItem_additional)} ref={slideItem}>
                {children}
            </div>
        </animated.div>
    );
};

export default memo(SpringSlide);
