import React, { ReactNode } from 'react';
import cn from 'classnames';

const TestContainer = ({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) => <div className={cn('block', className)}>{children}</div>;

export default TestContainer;
