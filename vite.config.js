import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import visualizer from 'rollup-plugin-visualizer'

export default defineConfig({
    base: './',
    plugins: [
        react(),
        visualizer({
            filename: 'analyze.html',
            open: true,
            template: 'treemap',
            gzipSize: true,
            brotliSize : true,
            sourcemap: false
        })
    ]
})
