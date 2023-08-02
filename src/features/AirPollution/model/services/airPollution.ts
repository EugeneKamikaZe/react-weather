import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '~/app/providers/StoreProvider';
import { AIR_POLLUTION_LOCALSTORAGE } from '~/shared/const/localstorage';

import type { AirPollutionSchema } from '../types/airPollutionSchema';

interface FetchProps {
    latitude: number;
    longitude: number;
}

export const airPollution = createAsyncThunk<
    AirPollutionSchema,
    FetchProps,
    ThunkConfig<string>
>('weather/pollution', async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { latitude, longitude } = data;

    try {
        const response = await extra.api.get<AirPollutionSchema>(
            `/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${__API_KEY__}`,
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            AIR_POLLUTION_LOCALSTORAGE,
            JSON.stringify(response.data),
        );

        // if (__IS_DEV__) {
        //     console.log(response);
        // }

        return response.data;
    } catch (e) {
        // if (__IS_DEV__) {
        //     console.log(e.response);
        // }
        return rejectWithValue('error');
    }
});
