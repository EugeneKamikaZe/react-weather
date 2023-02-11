import cn from "classnames";

interface LoaderProps {
    className?: string,
}

export const Loader = ({className}: LoaderProps) => (
    <div className={cn('lds-roller', className)}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
);
