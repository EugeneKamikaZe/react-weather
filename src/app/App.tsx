import { Suspense } from 'react';

import { RequestForm } from '~/features/RequestForm';
import { SelectCity } from '~/features/SelectCity';
import { useTheme } from '~/shared/lib/hooks/useTheme/useTheme';
import { DevData } from '~/widgets/DevData';

const App = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div data-theme={theme}>
                {/* <CurrentWeather /> */}
                {/* <AirPollution /> */}

                {__IS_DEV__ && <DevData />}

                <RequestForm />
                <SelectCity />
            </div>
        </Suspense>
    );
};

export default App;
