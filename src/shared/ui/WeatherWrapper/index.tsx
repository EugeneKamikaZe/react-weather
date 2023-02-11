import s from './index.module.scss'
import {FC, ReactNode, Ref, useRef} from 'react';
import cn from "classnames";
import {Resizer} from "@/shared/ui/Resizer";
import {Direction} from "@/shared/ui/Resizer/helpers/Direction";
import {DragHeader} from "@/shared/ui/DragHeader";

interface WrapperProps {
    className?: string,
    children: ReactNode
}

export const WeatherWrapper: FC<WrapperProps> = (props) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const panelRef = useRef<HTMLDivElement>(null);

    const handleDrag = (movementX: number, movementY: number) => {
        const panel = panelRef.current;
        if (!panel) return;

        const {x, y, top, right, bottom, left} = panel.getBoundingClientRect();

        // if (top !== 0 && right !== 0 && bottom !== 0 && left !== 0) {
            panel.style.left = `${x + movementX}px`;
            panel.style.top = `${y + movementY}px`;
        // }

        console.log(panel.getBoundingClientRect())
    };

    const handleResize = (direction: string, movementX: number, movementY: number) => {
        const panel = panelRef.current;
        if (!panel) return;

        const {width, height, x, y} = panel.getBoundingClientRect();

        const resizeTop = () => {
            panel.style.height = `${height - movementY}px`;
            // panel.style.top = `${y + movementY}px`;
        };

        const resizeRight = () => {
            panel.style.width = `${width + movementX}px`;
        };

        const resizeBottom = () => {
            panel.style.height = `${height + movementY}px`;
        };

        const resizeLeft = () => {
            panel.style.width = `${width - movementX}px`;
            // panel.style.left = `${x + movementX}px`;
        };

        switch (direction) {
            case Direction.TOP_LEFT:
                resizeTop();
                resizeLeft();
                break;

            case Direction.TOP:
                resizeTop();
                break;

            case Direction.TOP_RIGHT:
                resizeTop();
                resizeRight();
                break;

            case Direction.RIGHT:
                resizeRight();
                break;

            case Direction.BOTTOM_RIGHT:
                resizeBottom();
                resizeRight();
                break;

            case Direction.BOTTOM:
                resizeBottom();
                break;

            case Direction.BOTTOM_LEFT:
                resizeBottom();
                resizeLeft();
                break;

            case Direction.LEFT:
                resizeLeft();
                break;

            default:
                break;
        }
    };

    return (
        <div className={cn(s.WeatherWrapper, className)}
             ref={panelRef}
             {...otherProps}
        >
            <DragHeader onDrag={handleDrag}>
                asd
            </DragHeader>

            <Resizer onResize={handleResize}/>

            <div>
                {children}
            </div>
        </div>
    );
};
