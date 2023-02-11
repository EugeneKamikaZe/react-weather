import create from 'zustand';
import axios from 'axios';
import { CityProps } from '../components/SelectCity';
import { API_KEY } from '../App';
import {devtools, persist} from "zustand/middleware";

interface GeocodeProps {
    data: null | CityProps[];
    isLoading: boolean;
    isError: string;
    fetch: (place: string, limit?: number) => void;
}

interface PositionProps {
    lat: number | null;
    lng: number | null;
    selectCity: (key: CityProps) => void;
}

export const useGeocode = create<GeocodeProps>()(
    devtools(
        persist(
            (set) => ({
                data: null,
                isLoading: true,
                isError: '',
                fetch: async (initialPlace, limit = 5) => {
                    try {
                        const weatherAPI = 'https://api.openweathermap.org/geo/1.0/direct';
                        const response = await axios.get(
                            `${weatherAPI}?q=${initialPlace}&appid=${API_KEY}&limit=${limit}`,
                        );

                        set(() => ({
                            data: response.data,
                            isLoading: false,
                        }));
                    } catch (error) {
                        set(() => ({
                            isError: error.message,
                            isLoading: false,
                        }));
                    }
                },
            }),
            {
                name: 'Geocode'
            }
        )
    )
);

export const useCity = create<PositionProps>()(
    devtools(
        persist(
            (set) => ({
                lat: null,
                lng: null,
                selectCity: (city) =>
                    set({
                        lat: city.lat,
                        lng: city.lon,
                    }),
            }),
            {
                name: 'City'
            }
        )
    )
);
