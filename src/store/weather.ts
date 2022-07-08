import create from 'zustand'
import axios from "axios";

interface WeatherProps {
    data: null | any,
    isLoading: boolean,
    isError: string,
    fetch: (key: string,
            lat: number,
            lng: number,
            units?: string,
            days?: number) => void
}

export enum Locale {
    RU = 'RU',
    US = 'US'
}

export enum Units {
    Metric = 'metric',
    Imperial = 'imperial'
}

export const useSingle = create<WeatherProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async (APIKey, lat, lng, units = 'metric') => {
        try {
            const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather'
            const response = await axios.get(
                `${weatherAPI}?lat=${lat}&lon=${lng}&appid=${APIKey}&units=${units}`
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

export const useMultiple = create<WeatherProps>((set) => ({
    data: [],
    isLoading: true,
    isError: '',
    fetch: async (APIKey, lat, lng, units = 'metric', days = 7) => {
        try {
            const weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast'
            const response = await axios.get(
                `${weatherAPI}?q=${lat}&lon=${lng}&cnt=${days}&appid=${APIKey}&units=${units}`
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


