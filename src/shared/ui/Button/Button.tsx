import classnames from 'classnames';
import React, { ButtonHTMLAttributes, memo, ReactNode } from 'react';

import s from './Button.module.scss';

export type Mods = Record<string, boolean | string | undefined>;

/* eslint-disable */
export enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    BORDERED = 'bordered',
    CLEAR = 'clear',
    LINK = 'link',
    LINK_MENU = 'linkMenu',
    LINK_DASHED = 'linkDashed',
}

export enum ButtonSize {
    EXTRA_SMALL = 'extra-small',
    SMALL = 'small',
    MEDIUM = 'medium',
}

export enum ButtonIconPosition {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
}
/* eslint-enable */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    iconPosition?: ButtonIconPosition;
    theme?: ButtonTheme;
    size?: ButtonSize;
    isDisabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        children,
        iconPosition = ButtonIconPosition.RIGHT,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.SMALL,
        isDisabled,
        ...otherProps
    } = props;

    const mods: Mods = {
        [s[theme]]: true,
        [s[size]]: true,
        [s[iconPosition]]: true,
        [s.disabled]: isDisabled,
    };

    return (
        <button
            type="button"
            className={classnames(s.wrapper, mods, className)}
            disabled={isDisabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
