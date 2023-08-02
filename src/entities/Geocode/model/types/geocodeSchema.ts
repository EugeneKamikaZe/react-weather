import type { City } from './city';

export interface GeocodeSchema {
    data: City[];
    isLoading: boolean;
    error?: string;
}
