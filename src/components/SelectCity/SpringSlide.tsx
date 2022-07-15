import React, { memo } from 'react';
import { animated, useSpring } from 'react-spring';
import { SimpleSpringProps } from './SpringItemsShow';

interface SlideProps extends SimpleSpringProps {
    maxHeight: number;
}

const SpringSlide: React.FC<SlideProps> = ({ children, state, maxHeight }) => {
    const animatedProps = useSpring({
        to: { height: state ? maxHeight : 0 },
        from: { height: 0 },
        reverse: !state,
        config: { mass: 1 },
    });

    return <animated.div style={animatedProps}>{children}</animated.div>;
};

export default memo(SpringSlide);
