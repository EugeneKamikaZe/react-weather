import { StateSchema } from '~/app/providers/StoreProvider';

export const getAirPollutionError = (state: StateSchema) =>
    state?.airPollution?.error;
export const getAirPollutionIsLoading = (state: StateSchema) =>
    state?.airPollution?.isLoading || false;
export const getAirPollutionData = (state: StateSchema) =>
    state?.airPollution?.data;
