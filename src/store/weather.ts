import create from 'zustand'
import axios from "axios";

interface WeatherProps {
    data: any,
    isLoading: boolean,
    isError: string,
    fetch: () => void
}

export enum Locale {
    RU = 'RU',
    US = 'US'
}

export const useStore = create<WeatherProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async () => {
        try {
            const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather'
            const weatherAPIKey = '46c7e8ffbbf9ba21fe33df6625f2ec10'
            const city = 'Moscow'
            const response = await axios.get(
                `${weatherAPI}?q=${city}&appid=${weatherAPIKey}&units=metric`
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

export default useStore

