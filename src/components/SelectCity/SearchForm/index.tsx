import React, { ChangeEvent, memo, SyntheticEvent, useState } from 'react';
import { useGeocode } from '../../../store/geocode';
import capitalCity from '../../../models/randomCity';

import cn from 'classnames';
import s from './style.module.scss';

import Input from '../../Input';

const SearchForm = () => {
    const [place, setPlace] = useState('');
    const [searchClicked, setSearchClicked] = useState(false);

    const fetch = useGeocode((state) => state.fetch);

    const randomCity = capitalCity();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchClicked(false);
        setPlace(e.target.value);
    };

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearchClicked(true);

        if (place.length === 0) {
            fetch(randomCity);
        }

        if (place.length > 0 && !searchClicked) {
            fetch(place);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <Input
                className='input'
                id='city'
                labelText='Select City:'
                placeholder={randomCity}
                handleChange={handleChange}
            />
            <button
                className={cn('btn btn-m btn-primary', s.searchBtn, {
                    ['disabled']: searchClicked,
                })}
                type='submit'
                disabled={searchClicked}
            >
                Search
            </button>
        </form>
    );
};

export default memo(SearchForm);
