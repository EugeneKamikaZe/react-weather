import {defineConfig} from 'vite'
import {resolve} from "path";
import {BuildPath, VisualizerType} from "./config/build/types/config";
import {viteBuild} from "./config/build/viteBuild";

const paths: BuildPath = {
    root: resolve(__dirname, 'src', 'main.tsx'),
    analyze: resolve(__dirname, 'dist', 'analyze.html'),
    src: resolve(__dirname, 'src'),
};

const visualize = VisualizerType.TREE;

export default defineConfig(
    viteBuild({
        paths,
        visualize,
    }),
)
