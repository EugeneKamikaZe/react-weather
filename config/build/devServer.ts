export function devServer() {
    return {
        watch: {
            usePolling: true,
        },
        host: true,
        strictPort: true,
    };
}
