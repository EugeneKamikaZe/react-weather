import React from 'react';
import { sunMove } from '../models/sunWalk';

export interface GeoProps {
    sunrise: number;
    sunset: number;
    timezone: number;
}

const SunWalk: React.FC<GeoProps> = ({ sunrise, sunset, timezone }) => {
    const sunWalkStatus = sunMove(sunrise, sunset, timezone, 180);
    let sunStyle = {
        transform: `translateY(-${sunWalkStatus}%)`,
    };

    // setInterval(() => {
    //     sunMove(data.results.sunrise, data.results.solar_noon, data.results.sunset)
    // }, 60000);

    return (
        <div className={'sun-wrapper'} style={sunStyle}>
            <div className='sun' />
        </div>
    );
};

export default SunWalk;
