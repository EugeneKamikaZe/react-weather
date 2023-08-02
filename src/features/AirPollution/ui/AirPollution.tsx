import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    DynamicModuleLoader,
    ReducersList,
} from '~/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '~/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '~/shared/ui/Button/Button';

import {
    getAirPollutionData,
    getAirPollutionError,
    getAirPollutionIsLoading,
} from '../model/selectors/airPollutionSelectors';
import { airPollution } from '../model/services/airPollution';
import { airPollutionReducer } from '../model/slice/airPollutionSlice';

const initialReducer: ReducersList = {
    airPollution: airPollutionReducer,
};

export const AirPollution = () => {
    const { t } = useTranslation();

    const airPollutionData = useSelector(getAirPollutionData);
    const airPollutionIsLoading = useSelector(getAirPollutionIsLoading);
    const airPollutionError = useSelector(getAirPollutionError);

    const dispatch = useAppDispatch();
    const handleGet = async () => {
        const weatherProps = {
            latitude: 44.34,
            longitude: 10.99,
        };
        const result = await dispatch(airPollution(weatherProps));

        console.log(result);

        // if (result.meta.requestStatus === 'fulfilled') {
        //     dispatch(airPollutionActions.setAirPollutionData(result.payload));
        //     console.log(result);
        // }
    };

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducer}>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Button onClick={handleGet}>Get pollution</Button>
        </DynamicModuleLoader>
    );
};
