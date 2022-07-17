import React, {memo, useEffect, useState} from 'react';

import s from './style.module.scss';

import SunWalk from './SunWalk/SunWalk';
import MountainsPng from '../assets/landscape/mountains.png';
import {useDayForecast} from '../store/weather';
import shallow from 'zustand/shallow';
import DayForecast from './DayForecast';
import SelectCity from './SelectCity';
import {useCity} from "../store/geocode";

interface MainWrapper {
    isSearch?: boolean;
}

const MainWrapper: React.FC<MainWrapper> = ({
                                                isSearch
                                            }
) => {

    const [showToggle, setShowToggle] = useState(true)
    const handleToggle = () => {
        setShowToggle(!showToggle)
    }

    console.log(showToggle)

    return (
        <div className='block'>
            <SunWalk/>
            <img src={MountainsPng} alt='' className='mountains'/>

            {!isSearch && <>
                <SelectCity onToggle={handleToggle} isToggle={showToggle}/>
                <DayForecast isToggle={showToggle}/>
            </>}
        </div>
    );
}

export default memo(MainWrapper);
