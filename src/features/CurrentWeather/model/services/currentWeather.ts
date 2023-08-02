import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '~/app/providers/StoreProvider';
import { WEATHER_CURRENT_LOCALSTORAGE } from '~/shared/const/localstorage';

import type { CurrentWeatherSchema } from '../types/currentWeatherScheme';

interface FetchProps {
    latitude: number;
    longitude: number;
    units: string;
}

export const currentWeather = createAsyncThunk<
    CurrentWeatherSchema,
    FetchProps,
    ThunkConfig<string>
>('weather/current', async (data, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;
    const { latitude, longitude, units } = data;

    try {
        const response = await extra.api.get<CurrentWeatherSchema>(
            `/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${__API_KEY__}&units=${units}`,
        );

        if (!response.data) {
            throw new Error();
        }

        localStorage.setItem(
            WEATHER_CURRENT_LOCALSTORAGE,
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
        return rejectWithValue('fetch_current_weather_error');
    }
});
