import create from 'zustand';
import axios from 'axios';
import { API_KEY } from '../App';

type SimpleObj = { [key: string]: number };

type WeatherResultProps = {
    base: string;
    clouds: SimpleObj;
    dt: number;
    id: number;
    main: SimpleObj;
    visibility: number;
    weather: [SimpleObj];
    wind: SimpleObj;
    rain: any;
    snow: any;
    timezone: number;
    sys: SimpleObj;
};

interface WeatherProps {
    data: null | WeatherResultProps;
    isLoading: boolean;
    isError: string;
    fetch: (lat: number, lng: number, units?: string, days?: number) => void;
}

export enum Locale {
    RU = 'RU',
    US = 'US',
}

export enum Units {
    Metric = 'metric',
    Imperial = 'imperial',
}

export const useDayForecast = create<WeatherProps>((set) => ({
    data: null,
    isLoading: true,
    isError: '',
    fetch: async (lat, lng, units = 'metric') => {
        try {
            const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
            const response = await axios.get(
                `${weatherAPI}?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=${units}`,
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
}));

// export const useHourlyForecast = create<WeatherProps>((set) => ({
//     data: [],
//     isLoading: true,
//     isError: '',
//     fetch: async (APIKey, lat, lng, units = 'metric', days = 7) => {
//         try {
//             const weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast'
//             const response = await axios.get(
//                 `${weatherAPI}?lat=${lat}&lon=${lng}&cnt=${days}&appid=${APIKey}&units=${units}`
//             )
//
//             set(() => ({
//                 data: response.data,
//                 isLoading: false,
//             }))
//         } catch (error) {
//             set(() => ({
//                 isError: error.message,
//                 isLoading: false
//             }))
//         }
//     },
// }))
