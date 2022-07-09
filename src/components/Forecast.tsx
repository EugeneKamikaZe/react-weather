import React, {useEffect} from 'react';
import {Locale, Units, useDayForecast} from "../store/weather";
import shallow from "zustand/shallow";
import returnDate from "../models/returnDate";

export interface WeatherProps {
    APIKey: string,
    lat: string,
    lng: string,
    units?: string,
    locale?: string
}

const Forecast: React.FC<WeatherProps> = ({
                                              APIKey,
                                              lat,
                                              lng,
                                              units = Units.Metric,
                                              locale = Locale.US
                                          }) => {
    const {data, isLoading, isError, fetch} = useDayForecast((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        fetch: state.fetch,
    }), shallow)

    useEffect(() => {
        if (lat && lng) {
            fetch(APIKey, lat, lng, units)
        }
    }, [lat])


    // console.log(data)

    return data && (
        <div className='weather'>
            <div className="header">
                <div className='temperature'>
                    {Math.round(data.main.temp)}
                </div>

                <div>
                    <div className='day'>
                        {returnDate(Locale.US)}
                    </div>

                    <div className='condition'>
                        {data.weather.map((item: any) => (
                            <p key={item.id}>{item.main}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forecast;
