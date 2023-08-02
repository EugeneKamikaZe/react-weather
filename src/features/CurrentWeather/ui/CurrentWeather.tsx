import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    DynamicModuleLoader,
    ReducersList,
} from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '~/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '~/shared/ui/Button/Button';

import {
    getWeatherCurrentData,
    getWeatherCurrentError,
    getWeatherCurrentIsLoading,
} from '../model/selectors/currentWeatherSelectors';
import { currentWeather } from '../model/services/currentWeather';
import { currentWeatherReducer } from '../model/slice/currentWeatherSlice';

const initialReducer: ReducersList = {
    weatherCurrent: currentWeatherReducer,
};

export const CurrentWeather = () => {
    const { t } = useTranslation();

    const weatherCurrent = useSelector(getWeatherCurrentData);
    const weatherCurrentIsLoading = useSelector(getWeatherCurrentIsLoading);
    const weatherCurrentError = useSelector(getWeatherCurrentError);

    const dispatch = useAppDispatch();
    const handleGet = async () => {
        const weatherProps = {
            latitude: 44.34,
            longitude: 10.99,
            units: 'metric',
        };
        const result = await dispatch(currentWeather(weatherProps));

        // if (result.meta.requestStatus === 'fulfilled') {
        //     dispatch(currentWeatherActions.setWeatherData(result.payload));
        //     console.log(result.payload);
        // }

        console.log(result);
    };

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleGet}>Get weather</Button>
        </DynamicModuleLoader>
    );
};
