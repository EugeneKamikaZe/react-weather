import React, { memo, useState } from 'react';

import SunWalk from './SunWalk/SunWalk';
import DayForecast from './DayForecast';
import SelectCity from './SelectCity';

const MainWrapper = () => {
    const [showToggle, setShowToggle] = useState(true);

    const handleToggle = () => {
        setShowToggle(!showToggle);
    };

    return (
        <div className="block">
            <SunWalk />

            <SelectCity onToggle={handleToggle} isToggle={showToggle} />
            <DayForecast isToggle={showToggle} />
        </div>
    );
};

export default memo(MainWrapper);
