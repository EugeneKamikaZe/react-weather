import { FC, ReactNode, useEffect, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';

interface indexProps {
    className?: string;
    children?: ReactNode;
    onDrag: (x: number, y: number) => void;
}

export const DragHeader: FC<indexProps> = ({ className, children, onDrag }) => {
    const [mouseDown, setMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const ratio = window.devicePixelRatio;

        const handleMouseMove = (e: MouseEvent) =>
            onDrag(e.movementX / ratio, e.movementY / ratio);

        if (mouseDown) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('mousemove', handleMouseMove);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseDown, onDrag]);

    const handleMouseDown = () => setMouseDown(true);

    return (
        <div
            className={cn(s.DrugHeader, className)}
            onMouseDown={handleMouseDown}
        >
            {children}
        </div>
    );
};
