import { BuildOptions } from './types/config';
import { resolves } from './resolves';
import { plugins } from './plugins';
import { devServer } from './devServer';

export function viteBuild(options: BuildOptions) {
    return {
        base: './',
        resolve: resolves(options),
        server: devServer(),
        plugins: plugins(options),
        css: {
            devSourcemap: true,
        },
        build: {
            outDir: options.paths.build,
            chunkSizeWarningLimit: 500,
        },
    };
}
