import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getGeocodeData, getGeocodeIsLoading } from '~/entities/Geocode';
import {
    GEOCODE_LOCALSTORAGE,
    SELECTED_CITY_LOCALSTORAGE,
} from '~/shared/const/localstorage';
import { useAppDispatch } from '~/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { City } from '~/shared/types/city';

import { selectCityActions } from '..';
import s from './SelectCity.module.scss';

interface SelectCityProps {
    className?: string;
}

export const SelectCity = ({ className }: SelectCityProps) => {
    const { t } = useTranslation();
    const isLoading = useSelector(getGeocodeIsLoading);
    const geocodeData = useSelector(getGeocodeData);

    const [data, setData] = useState<City[] | null>(null);
    const localData = localStorage.getItem(GEOCODE_LOCALSTORAGE);

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localData) {
            setData(JSON.parse(localData));
        }
    }, [localData]);

    const handleSelect = (city: City) => () => {
        // eslint-disable-next-line camelcase
        const { local_names, ...rest } = city;

        dispatch(selectCityActions.setSelectedCity(rest));
        localStorage.setItem(SELECTED_CITY_LOCALSTORAGE, JSON.stringify(rest));
    };

    return (
        data && (
            <div className={classnames(s.SelectCity, {}, [className])}>
                {data.map((city) => (
                    <div className={s.city} key={city.lon || city.lat}>
                        <p>{city.name}</p>
                        <p>{city.country}</p>
                        <p>{city.state}</p>

                        <button type="button" onClick={handleSelect(city)}>
                            Select
                        </button>
                    </div>
                ))}
            </div>
        )
    );
};
