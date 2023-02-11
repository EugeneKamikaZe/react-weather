import { TemplateType } from 'rollup-plugin-visualizer/dist/plugin/template-types';

export enum VisualizerType {
    TREE = 'treemap',
    SUN = 'sunburst',
    NET = 'network',
    RAW = 'raw-data',
    LIST = 'list'
}

export interface BuildPath {
    root: string,
    build: string,
    analyze: string,
    src: string,
}

export interface BuildOptions {
    paths: BuildPath,
    visualize: TemplateType | undefined
}
