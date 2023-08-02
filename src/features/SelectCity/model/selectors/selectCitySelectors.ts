import { StateSchema } from '~/app/providers/StoreProvider';

export const getSelectedCity = (state: StateSchema) =>
    state?.selectCity?.selectedCity;
