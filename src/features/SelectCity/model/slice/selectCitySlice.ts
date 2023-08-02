import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { City } from '~/shared/types/city';

import { SelectCitySchema } from '../types/selectCitySchema';

const initialState: SelectCitySchema = {
    selectedCity: null,
};

export const selectCitySlice = createSlice({
    name: 'geocode',
    initialState,
    reducers: {
        setSelectedCity: (state, action: PayloadAction<City>) => {
            state.selectedCity = action.payload;
        },
    },
});

//  Action creators are generated for each case reducer function
export const { actions: selectCityActions } = selectCitySlice;
export const { reducer: selectCityReducer } = selectCitySlice;
