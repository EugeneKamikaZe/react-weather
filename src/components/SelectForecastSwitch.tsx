import React, { useState } from 'react';
import SelectCity from './SelectCity';
import DayForecast from './DayForecast';

const SelectForecastSwitch = () => {
    const [showToggle, setShowToggle] = useState(true);
    const handleToggle = () => {
        setShowToggle(!showToggle);
    };

    return (
        <>
            <SelectCity onToggle={handleToggle} isToggle={showToggle} />
            <DayForecast isToggle={showToggle} />
        </>
    );
};

export default SelectForecastSwitch;
