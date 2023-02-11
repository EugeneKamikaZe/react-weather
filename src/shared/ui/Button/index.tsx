import s from './index.module.scss'
import cn from "classnames";
import {ButtonHTMLAttributes, FC} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={cn(s.Button, className)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
