import { BuildOptions } from './types/config';

export function resolves({ paths }: BuildOptions) {
    return {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.svg'],
        alias: [{ find: '@', replacement: paths.src }],
    };
}
