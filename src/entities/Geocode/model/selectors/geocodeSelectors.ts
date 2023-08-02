import { StateSchema } from '~/app/providers/StoreProvider';

export const getGeocodeError = (state: StateSchema) => state?.geocode?.error;
export const getGeocodeIsLoading = (state: StateSchema) =>
    state?.geocode?.isLoading || false;
export const getGeocodeData = (state: StateSchema) => state?.geocode?.data;
