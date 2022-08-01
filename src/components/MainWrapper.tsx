import React, { memo, useState } from 'react';

import SunWalk from './SunWalk/SunWalk';
import MountainsPng from '../assets/landscape/mountains.png';
import DayForecast from './DayForecast';
import SelectCity from './SelectCity';
import SelectForecastSwitch from './SelectForecastSwitch';

const MainWrapper = () => {
    const [showToggle, setShowToggle] = useState(true);
    const handleToggle = () => {
        setShowToggle(!showToggle);
    };

    return (
        <div className='block'>
            <SunWalk />
            {/*<img src={MountainsPng} alt='' className='mountains'/>*/}

            <SelectForecastSwitch />
        </div>
    );
};

export default memo(MainWrapper);
