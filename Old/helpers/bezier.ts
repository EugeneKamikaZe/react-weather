export function Bezier(p1: number, p2: number, p3: number, t: number) {
    return (1 - t) ** 2 * p1 + 2 * (1 - t) * t * p2 + t ** 2 * p3;
}
