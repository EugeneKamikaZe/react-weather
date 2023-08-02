import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { airPollution } from '../services/airPollution';
import type { AirPollutionSchema } from '../types/airPollutionSchema';

const initialState: AirPollutionSchema = {
    isLoading: false,
    error: '',
    data: null,
};

export const airPollutionSlice = createSlice({
    name: 'air-pollution',
    initialState,
    reducers: {
        setAirPollutionData: (
            state,
            action: PayloadAction<AirPollutionSchema>,
        ) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(airPollution.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(airPollution.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(airPollution.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

//  Action creators are generated for each case reducer function
export const { actions: airPollutionActions } = airPollutionSlice;
export const { reducer: airPollutionReducer } = airPollutionSlice;
