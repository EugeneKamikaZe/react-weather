import { Suspense } from 'react';

import { AirPollution } from '~/entities/AirPollution';
import { CurrentWeather } from '~/entities/CurrentWeather';
import { useTheme } from '~/shared/lib/hooks/useTheme/useTheme';

import { AppRouter } from './providers/router/index';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div data-theme={theme}>
                <CurrentWeather />
                <AirPollution />

                <AppRouter />
            </div>
        </Suspense>
    );
};

export default App;
