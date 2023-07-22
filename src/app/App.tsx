import { Suspense } from 'react';

import { useTheme } from '~/shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/router/index';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div data-theme={theme}>
                <AppRouter />
            </div>
        </Suspense>
    );
};

export default App;
