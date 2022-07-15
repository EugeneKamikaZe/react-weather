interface ImportMetaEnv {
    PROD: JSX.Element;
    DEV: JSX.Element;
    readonly VITE_WEATHER_API_KEY: string
}
interface ImportMeta {
    readonly env: ImportMetaEnv
}
