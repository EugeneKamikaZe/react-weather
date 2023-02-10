import { BuildOptions } from './types/config';
import { resolves } from './resolves';
import { plugins } from './plugins';
import { devServer } from './devServer';

export function viteBuild(options: BuildOptions) {
    return {
        resolve: resolves(options),
        server: devServer(),
        plugins: plugins(options),
        css: {
            devSourcemap: true,
        },
        build: {
            chunkSizeWarningLimit: 500,
        },
    };
}
