import react from '@vitejs/plugin-react';
import visualizer from 'rollup-plugin-visualizer';
import { PluginOption } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import { BuildOptions } from './types/config';

export function plugins({ paths, visualize }: BuildOptions) {
    return [
        react(),
        chunkSplitPlugin(),
        visualizer({
            title: 'My1Ci Analyze',
            projectRoot: paths.root,
            filename: paths.analyze,
            open: true,
            template: visualize,
            gzipSize: true,
            brotliSize: true,
            sourcemap: false,
        }) as PluginOption,
    ];
}
