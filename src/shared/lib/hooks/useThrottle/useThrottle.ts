import { useCallback, useRef } from 'react';

/**
 * Хук, который позволяет вызывать функцию после истечения delay
 * @param callback
 * @param delay - задержка в мс
 */
export function useThrottle(callback: (...args: any[]) => void, delay: number) {
    const throttleRef = useRef(false);

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                callback(...args);
                throttleRef.current = true;

                setTimeout(() => {
                    throttleRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
}
