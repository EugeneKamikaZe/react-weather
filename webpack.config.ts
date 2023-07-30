import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';

function getApiUrl(mode: BuildMode, apiUrl?: string) {
    if (apiUrl) {
        return apiUrl;
    }
    if (mode === 'production') {
        return '/api';
    }

    return 'https://api.openweathermap.org';
}

function getApiKey(mode: BuildMode, apiKey?: string) {
    if (apiKey) {
        return apiKey;
    }
    return '46c7e8ffbbf9ba21fe33df6625f2ec10';
}

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        src: path.resolve(__dirname, 'src'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'dist', 'locales'),
    };

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;
    const apiUrl = getApiUrl(mode, env?.apiUrl);
    const apiKey = getApiKey(mode, env?.apiKey);

    const isDev = mode === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        apiUrl,
        apiKey,
        port: PORT,
        project: 'frontend',
    });

    return config;
};
