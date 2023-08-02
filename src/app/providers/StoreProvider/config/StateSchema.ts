import type {
    AnyAction,
    CombinedState,
    EnhancedStore,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';

import type { GeocodeSchema } from '~/entities/Geocode';
import type { AirPollutionSchema } from '~/features/AirPollution';
import type { CurrentWeatherSchema } from '~/features/CurrentWeather';
import type { SelectCitySchema } from '~/features/SelectCity';
import { rtkApi } from '~/shared/api/rtkApi';

export interface StateSchema {
    selectCity: SelectCitySchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    //  Асинхронные редюсеры
    weatherCurrent?: CurrentWeatherSchema;
    airPollution?: AirPollutionSchema;
    geocode?: GeocodeSchema;
}

export type StateSchemaKey = keyof StateSchema;
// eslint-disable-next-line no-undef
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction,
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    //  true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
