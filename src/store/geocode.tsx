import create from 'zustand'
import axios from "axios";
import {CityProps} from "../components/SelectCity";

interface GeocodeProps {
    data: null | CityProps[],
    isLoading: boolean,
    isError: string,
    fetch: (key: string, place: string, limit?: number) => void
}

interface PositionProps {
    lat: number | null,
    lng: number | null,
    selectCity: (key: CityProps) => void
}

export const useGeocode = create<GeocodeProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async (APIKey, initialPlace, limit = 5) => {
        try {
            const weatherAPI = 'https://api.openweathermap.org/geo/1.0/direct'
            const response = await axios.get(
                `${weatherAPI}?q=${initialPlace}&appid=${APIKey}&limit=${limit}`
            )

            set(() => ({
                data: response.data,
                isLoading: false,
            }))
        } catch (error) {
            set(() => ({
                isError: error.message,
                isLoading: false
            }))
        }
    },
}))

export const useCity = create<PositionProps>((set) => ({
    lat: null,
    lng: null,
    selectCity: (city) => set({
        lat: city.lat,
        lng: city.lon,
    })
}))
