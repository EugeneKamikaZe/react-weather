import create from 'zustand'
import axios from "axios";

interface GeocodeProps {
    data: null | any,
    isLoading: boolean,
    isError: string,
    fetch: (key: string, place: string, limit?: number) => void
}

export const useGeocode = create<GeocodeProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async (APIKey, initialPlace, limit = 5) => {
        try {
            const weatherAPI = 'http://api.openweathermap.org/geo/1.0/direct'
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
