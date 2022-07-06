import create from 'zustand'
import axios from "axios";

interface SunriseProps {
    data: null | any,
    isLoading: boolean,
    isError: string,
    fetch: (lat: string, lng: string, date?: string, formatted?: boolean) => void
}

export const useSunrise = create<SunriseProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async (lat, lng, date, formatted= true) => {
        try {
            const sunriseSunsetAPI = 'https://api.sunrise-sunset.org/json'
            const response = await axios.get(
                `${sunriseSunsetAPI}?lat=${lat}&lng=${lng}
                ${date ? '&date=' + date : '&date=today'}
                ${formatted ? '&formatted=0': '&formatted=1'}`)

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


