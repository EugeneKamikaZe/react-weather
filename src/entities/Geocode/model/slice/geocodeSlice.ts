import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { City } from '~/shared/types/city';

import { geocode } from '../services/geocode';
import type { GeocodeSchema } from '../types/geocodeSchema';

const initialState: GeocodeSchema = {
    isLoading: false,
    error: '',
    data: [],
};

export const geocodeSlice = createSlice({
    name: 'geocode',
    initialState,
    reducers: {
        setGeocodeData: (state, action: PayloadAction<City[]>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(geocode.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(geocode.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(geocode.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

//  Action creators are generated for each case reducer function
export const { actions: geocodeActions } = geocodeSlice;
export const { reducer: geocodeReducer } = geocodeSlice;
