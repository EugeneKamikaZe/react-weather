import type { City } from '../../../../shared/types/city';

export interface GeocodeSchema {
    data: City[];
    isLoading: boolean;
    error?: string;
}
