import { useEffect, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import { Direction } from '@/shared/ui/Resizer/helpers/Direction';

interface ResizerProps {
    onResize: (direction: Direction | string, x: number, y: number) => void;
}

export const Resizer = ({ onResize }: ResizerProps) => {
    const [direction, setDirection] = useState('');
    const [isMouseDown, setIsMouseDown] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!direction) return;

            onResize(direction, e.movementX, e.movementY);
        };

        if (isMouseDown) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMouseDown, direction, onResize]);

    useEffect(() => {
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    const handleMouseDown = (direction: string) => {
        setIsMouseDown(true);
        setDirection(direction);
    };

    const isDev = import.meta.env.DEV;

    return (
        <div className={cn({ [s.develop]: isDev })}>
            <div
                className={s.top}
                onMouseDown={() => handleMouseDown(Direction.TOP)}
            />
            <div
                className={s.topRight}
                onMouseDown={() => handleMouseDown(Direction.TOP_RIGHT)}
            />
            <div
                className={s.topLeft}
                onMouseDown={() => handleMouseDown(Direction.TOP_LEFT)}
            />

            <div
                className={s.right}
                onMouseDown={() => handleMouseDown(Direction.RIGHT)}
            />
            <div
                className={s.left}
                onMouseDown={() => handleMouseDown(Direction.LEFT)}
            />

            <div
                className={s.bottom}
                onMouseDown={() => handleMouseDown(Direction.BOTTOM)}
            />
            <div
                className={s.bottomRight}
                onMouseDown={() => handleMouseDown(Direction.BOTTOM_RIGHT)}
            />
            <div
                className={s.bottomLeft}
                onMouseDown={() => handleMouseDown(Direction.BOTTOM_LEFT)}
            />
        </div>
    );
};
