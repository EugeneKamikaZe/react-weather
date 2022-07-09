import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {useCity, useGeocode} from "../../store/geocode";
import shallow from "zustand/shallow";

import s from './style.module.scss'
import Input from "../Input";

interface SelectProps {
    APIKey: string,
}

const SelectCity: React.FC<SelectProps> = ({APIKey}) => {
    const {data, isLoading, isError, fetch} = useGeocode((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        fetch: state.fetch,
    }), shallow)
    const selectCity = useCity((state) => state.selectCity)

    const [place, setPlace] = useState(() => {
        return {
            city: '',
            lat: '',
            lng: ''
        }
    })
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPlace(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        fetch(APIKey, place.city)
        setHide(false)
    }

    const [hide, setHide] = useState(false)
    // TODO change props
    const handleSelect = (city: any) => {
        selectCity(city)
        setHide(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}
                  className={s.select}>
                <Input className={s.input} id='city' labelText='City:' handleChange={handleChange}/>

                <span className={s.divider}>Or</span>

                <Input className={s.input} id='lat' labelText='Latitude:' handleChange={handleChange}/>
                <Input className={s.input} id='lng' labelText='Longitude:' handleChange={handleChange}/>

                <input className={s.submit} type="submit" value="Submit"/>
            </form>

            {
                data && !hide && <div className={s.result}>
                    {
                        // TODO дописать интерфейс
                        data.map((item: any) => (
                            <div className={s.resultItem}
                                 key={item.lat}>
                                <p>Country: {item.country}</p>
                                <p>City: {item.name}</p>
                                <p>State: {item.state}</p>

                                <div>
                                    <p>Latitude: {item.lat}</p>
                                    <p>Longitude: {item.lon}</p>
                                </div>

                                <button onClick={() => handleSelect(item)}>Select</button>
                            </div>
                        ))
                    }
                </div>
            }
        </>
    );
};

export default SelectCity;
