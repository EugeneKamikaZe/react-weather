import React, {ChangeEvent, SyntheticEvent, useEffect, useState} from 'react';
import {useCity, useGeocode} from "../../store/geocode";
import shallow from "zustand/shallow";
import Input from "../Input";

import s from './style.module.scss'
import SelectItem from "./SelectItem";
import cn from "classnames";
import capitalCity from "../../models/randomCity";

interface SelectProps {
    APIKey: string,
}

export interface CityProps {
    country: string,
    lat: string | undefined,
    lon: string | undefined,
    name: string,
    state: string,
    local_names: { [key: string]: string }
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
    const handleSelect = (city: CityProps) => {
        selectCity(city)
        // setHide(true)
    }

    // useEffect(() => {
    //     randomCity()
    // }, [])

    if (data) {
        console.log(data)
    }

    return (
        <div className={s.select}>
            <form onSubmit={handleSubmit}>
                <Input className='input'
                       id='city'
                       labelText='Select City:'
                       placeholder={capitalCity()}
                       handleChange={handleChange}/>

                <input className={cn('btn', 'btn-primary', s.btnSubmit)}
                       type="submit"
                       value="Search"/>
            </form>

            {
                data?.length === 0 && <p className={s.emptyResult}>Nothing Found</p>
            }

            {
                data && data.length > 0 && !hide && <div className={s.result}>
                    {
                        data.map((item: CityProps) => <SelectItem item={item}
                                                                  onSelect={handleSelect}
                                                                  key={item.lat}/>)
                    }
                </div>
            }
        </div>
    )
}

export default SelectCity
