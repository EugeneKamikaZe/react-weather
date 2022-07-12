import React, { useEffect } from 'react';
import Sun from '../assets/sun.png';
import { useSunrise } from '../store/sunrise-sunset';
import shallow from 'zustand/shallow';
import { sunMove } from '../models/sunWalk';
import { useCity } from '../store/geocode';

interface GeoProps {
    lat: number | null;
    lng: number | null;
}

const SunWalk: React.FC<GeoProps> = ({ lat, lng }) => {
    const { data, isLoading, isError, fetch } = useSunrise(
        (state) => ({
            data: state.data,
            isLoading: state.isLoading,
            isError: state.isError,
            fetch: state.fetch,
        }),
        shallow,
    );
    const { latitude, longitude } = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
        }),
        shallow,
    );

    useEffect(() => {
        if (lat != null && lng != null) {
            fetch(lat, lng);
        }
    }, [latitude, longitude]);

    let sunStyle
    if (data) {
        const sunWalkStatus = sunMove(
            data.results.sunrise,
            data.results.solar_noon,
            data.results.sunset,
            200,
        );
        sunStyle = {
            transform: `translateY(-${sunWalkStatus}%)`,
        };

        // setInterval(() => {
        //     sunMove(data.results.sunrise, data.results.solar_noon, data.results.sunset)
        // }, 60000);
    }

    return (
        <div className='weather'>
            <div className={'sun-wrapper'} style={sunStyle}>
                <img src={Sun} alt='sun' className={'sun'} />
            </div>
        </div>
    );
};

export default SunWalk;
