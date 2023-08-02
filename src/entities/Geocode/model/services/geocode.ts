import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '~/app/providers/StoreProvider';
import { GEOCODE_LOCALSTORAGE } from '~/shared/const/localstorage';
import { City } from '~/shared/types/city';
import type { GeocodeRequest } from '~/shared/types/request';

export const geocode = createAsyncThunk<
    City[],
    GeocodeRequest,
    ThunkConfig<string>
>('geocode', async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { cityName, limit = 5 } = data;

    try {
        const response = await extra.api.get<City[]>(
            `/geo/1.0/direct?q=${cityName}&limit=${limit}&appid=${__API_KEY__}`,
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            GEOCODE_LOCALSTORAGE,
            JSON.stringify(response.data),
        );

        if (__IS_DEV__) {
            console.log('geocode: ', response.data);
        }

        return response.data;
    } catch (e) {
        if (__IS_DEV__) {
            console.log('geocode error: ', e.response);
        }
        return rejectWithValue('error');
    }
});
