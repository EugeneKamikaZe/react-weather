import { StateSchema } from '~/app/providers/StoreProvider';

export const getWeatherCurrentError = (state: StateSchema) =>
    state?.weatherCurrent?.error;
export const getWeatherCurrentIsLoading = (state: StateSchema) =>
    state?.weatherCurrent?.isLoading || false;
export const getWeatherCurrentData = (state: StateSchema) =>
    state?.weatherCurrent?.data;
