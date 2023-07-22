import classnames from 'classnames';
import React, { memo } from 'react';

import s from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return <Svg className={classnames(s.wrapper, 'icon', className)} />;
});
