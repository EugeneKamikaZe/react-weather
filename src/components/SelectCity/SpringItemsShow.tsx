import React, { memo, ReactNode } from 'react';
import { animated, config, useSpring } from 'react-spring';

export interface SimpleSpringProps {
    children?: ReactNode;
    state?: boolean;
}

const SpringResultShow: React.FC<SimpleSpringProps> = ({ children, state }) => {
    const animatedProps = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        reverse: state,
        config: config.molasses,
    });

    return <animated.div style={animatedProps}>{children}</animated.div>;
};

export default memo(SpringResultShow);
