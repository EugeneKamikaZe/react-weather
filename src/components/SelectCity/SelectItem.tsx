import React, {SyntheticEvent, useRef, useState} from 'react';
import s from "./style.module.scss";
import {CityProps} from "./index";

import Toggle from '../../assets/icons/toggle.svg'
import cn from "classnames";

interface SelectProps {
    item: CityProps,
    onSelect: (item: CityProps) => void
}

const SelectItem: React.FC<SelectProps> = ({item, onSelect}) => {
    const [isShow, setIsShow] = useState(false)
    const [isSelected, setIsSelected] = useState(false)
    const resultItem = useRef(null)

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const handleSelect = (e: SyntheticEvent) => {
        e.stopPropagation()
        // setIsSelected(!isSelected)
        onSelect(item)
    }

    return (
        <>
            <div className={cn(s.resultItem, {[s.selected]: isSelected})}
                 key={item.lat}
                 onClick={handleShow}>
                <div className={s.resultItem_info}>
                    <p className={s.textWToggle}>{item.name} ({item.country})
                        <img className={cn({[s.show]: isShow})}
                             src={Toggle}
                             alt="toggle"/>
                    </p>
                    <button className='btn btn-xs'
                            onClick={handleSelect}>Select
                    </button>
                </div>

                <div className={cn({[s.show]: isShow}, s.resultItem_additional)}>
                    <p>State: {item.state}</p>
                    <p>Latitude: {item.lat}</p>
                    <p>Longitude: {item.lon}</p>
                </div>
            </div>
        </>
    );
}

export default SelectItem;
