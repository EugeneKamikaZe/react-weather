import react from '@vitejs/plugin-react'
import {defineConfig, type PluginOption} from 'vite'
import {visualizer} from 'rollup-plugin-visualizer'

enum VisualizerTemplate {
    treemap = 'treemap',
    sunburst = 'sunburst',
    network = 'network'
}

export default defineConfig({
    base: './',
    plugins: [
        react(),
        visualizer({
            filename: 'dist/analyze.html',
            open: true,
            template: VisualizerTemplate.treemap,
            gzipSize: true,
            brotliSize : true,
            sourcemap: false
        }) as PluginOption
    ]
})
