import React, { memo, useEffect, useState } from 'react';
import { useCity, useGeocode } from '../../store/geocode';

import s from './style.module.scss';

import SelectItem from './SelectItem';
import SearchForm from './SearchForm';
import SpringTrail from './SpringTrail';
import SearchBtn from '../SearchBtn';
import cn from 'classnames';
import shallow from 'zustand/shallow';

export interface CityProps {
    country: string;
    lat: number;
    lon: number;
    name: string;
    state: string;
    local_names: { [key: string]: string };
}

interface ToggleProps {
    onToggle: () => void;
    isToggle: boolean;
}

const SelectCity: React.FC<ToggleProps> = ({ onToggle, isToggle }) => {
    const { data, isLoading } = useGeocode((state) => ({
        data: state.data,
        isLoading: state.isLoading,
    }));

    const { latitude, longitude, selectCity } = useCity(
        (state) => ({
            latitude: state.lat,
            longitude: state.lng,
            selectCity: state.selectCity,
        }),
        shallow,
    );

    const [selected, setSelected] = useState(0);
    const handleSelect = (city: CityProps) => {
        selectCity(city);
        setSelected(city.lat);
    };

    return (
        <>
            {data && (latitude || longitude) && (
                <SearchBtn onClose={onToggle} switchIcon={isToggle} />
            )}

            <div className={cn(s.select, { [s.show]: isToggle })}>
                <SearchForm />

                {data?.length === 0 && <p className={s.emptyResult}>Nothing Found</p>}

                {data && data.length > 0 && (
                    <div className={s.autoHeight}>
                        <div className={s.result}>
                            <SpringTrail open={!isLoading}>
                                {data.map((item: CityProps, index: number) => (
                                    <SelectItem
                                        item={item}
                                        onSelect={handleSelect}
                                        currentLat={selected}
                                        key={index}
                                    />
                                ))}
                            </SpringTrail>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default memo(SelectCity);
