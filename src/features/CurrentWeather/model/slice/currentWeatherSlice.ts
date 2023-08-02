import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { currentWeather } from '../services/currentWeather';
import { CurrentWeatherSchema } from '../types/currentWeatherScheme';

const initialState: CurrentWeatherSchema = {
    isLoading: false,
    error: '',
    data: {},
};

export const currentWeatherSlice = createSlice({
    name: 'weather-current',
    initialState,
    reducers: {
        setWeatherData: (
            state,
            action: PayloadAction<CurrentWeatherSchema>,
        ) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(currentWeather.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(currentWeather.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(currentWeather.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

//  Action creators are generated for each case reducer function
export const { actions: currentWeatherActions } = currentWeatherSlice;
export const { reducer: currentWeatherReducer } = currentWeatherSlice;
