import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        svgr({ exportAsDefault: true }),
        react(),
        basicSsl(),
        visualizer({
            template: 'treemap', // or sunburst, treemap, network, raw-data
            // open: true,
            gzipSize: true,
            brotliSize: true,
            sourcemap: true,
            filename: 'reports/analyse/vite.html', // will be saved in project's root
        }),
    ],
    resolve: {
        alias: [{ find: '~', replacement: '/src' }],
    },
    server: {
        host: true,
        https: true,
        open: true,
        watch: {
            usePolling: true,
        },
    },
    build: {
        outDir: 'dist',
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',

                assetFileNames: ({ name }) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
                        return 'assets/images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('https://api.openweathermap.org'),
        __API_KEY__: JSON.stringify('46c7e8ffbbf9ba21fe33df6625f2ec10'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
