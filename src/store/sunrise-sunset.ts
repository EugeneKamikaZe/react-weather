import create from 'zustand';
import axios from 'axios';

type SunriseResultProps = {
  [key: string]: string;
};

interface SunriseProps {
  data: null | { [key: string]: SunriseResultProps };
  isLoading: boolean;
  isError: string;
  fetch: (lat: number, lng: number, date?: string) => void;
}

export const useSunrise = create<SunriseProps>((set) => ({
  data: null,
  isLoading: true,
  isError: '',
  fetch: async (lat, lng, date = 'today') => {
    try {
      const sunriseSunsetAPI = 'https://api.sunrise-sunset.org/json';
      const response = await axios.get(
        `${sunriseSunsetAPI}?lat=${lat}&lng=${lng}
                ${date ? '&date=' + date : '&date=today'}
                &formatted=0`,
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
