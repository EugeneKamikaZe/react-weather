import { Suspense } from 'react';

import { AirPollution } from '~/features/AirPollution';
import { CurrentWeather } from '~/features/CurrentWeather';
import { RequestForm } from '~/features/RequestForm';
import { useTheme } from '~/shared/lib/hooks/useTheme/useTheme';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div data-theme={theme}>
                <CurrentWeather />
                <AirPollution />

                <RequestForm />
            </div>
        </Suspense>
    );
};

export default App;
