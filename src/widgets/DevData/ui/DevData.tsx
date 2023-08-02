import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { getSelectedCity } from '~/features/SelectCity';
import { SELECTED_CITY_LOCALSTORAGE } from '~/shared/const/localstorage';
import { City } from '~/shared/types/city';

import s from './DevData.module.scss';

interface DevDataProps {
    className?: string;
}

export const DevData = ({ className }: DevDataProps) => {
    const { t } = useTranslation();
    const selectedCityLocal = localStorage.getItem(SELECTED_CITY_LOCALSTORAGE);
    const selectedCityStore = useSelector(getSelectedCity);

    const [city, setCity] = useState<City | null>(null);

    useEffect(() => {
        if (selectedCityLocal) {
            setCity(JSON.parse(selectedCityLocal));
        } else {
            setCity(selectedCityStore);
        }
    }, [selectedCityLocal, selectedCityStore]);

    return (
        city && (
            <div className={classNames(s.DevData, {}, [className])}>
                <p>{city.name}</p>
                <p>{city.state}</p>
                <p>{city.country}</p>
            </div>
        )
    );
};
