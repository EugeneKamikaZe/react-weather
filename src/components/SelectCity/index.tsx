import React, { memo, useState } from 'react';
import { useCity, useGeocode } from '../../store/geocode';

import s from './style.module.scss';

import SelectItem from './SelectItem';
import SearchForm from './SearchForm';

interface SelectProps {
    APIKey: string;
}

export interface CityProps {
    country: string;
    lat: number;
    lon: number;
    name: string;
    state: string;
    local_names: { [key: string]: string };
}

const SelectCity: React.FC<SelectProps> = ({ APIKey }) => {
    const data = useGeocode((state) => state.data);
    const selectCity = useCity((state) => state.selectCity);

    const [selected, setSelected] = useState(0);
    const handleSelect = (city: CityProps) => {
        selectCity(city);
        setSelected(city.lat);
    };

    return (
        <div className={s.select}>
            <SearchForm APIKey={APIKey} />

            {data?.length === 0 && <p className={s.emptyResult}>Nothing Found</p>}

            {data && data.length > 0 && (
                <div className={s.autoHeight}>
                    <div className={s.result}>
                        {data.map((item: CityProps, index: number) => (
                            <SelectItem
                                item={item}
                                onSelect={handleSelect}
                                currentLat={selected}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default memo(SelectCity);
