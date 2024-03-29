import React, { memo, SyntheticEvent, useState } from 'react';
import cn from 'classnames';
import s from './style.module.scss';
import { CityProps } from './index';

import Toggle from '@/shared/assets/icons/toggle.svg';
import SpringSlide from './SpringSlide';

interface SelectProps {
    item: CityProps;
    onSelect: (item: CityProps) => void;
    className?: string;
    currentLat: number;
}

const SelectItem: React.FC<SelectProps> = ({ item, onSelect, currentLat }) => {
    const [isShow, setIsShow] = useState(false);

    const handleShow = () => {
        setIsShow(!isShow);
    };

    const handleSelect = (item: CityProps) => {
        onSelect(item);
    };
    const isCurrentLat = currentLat === item.lat;

    return (
        <div
            className={cn(s.resultItem, { [s.selected]: isCurrentLat })}
            key={item.lat}
            onClick={handleShow}
        >
            <div className={s.resultItem_info}>
                <p className={s.textWToggle}>
                    {item.name} ({item.country})
                    <img
                        className={cn({ [s.show]: isShow })}
                        src={Toggle}
                        alt="toggle"
                    />
                </p>
                <button
                    className={cn('btn btn-xs btn-primary', {
                        disabled: isCurrentLat,
                    })}
                    disabled={currentLat === item.lat}
                    onClick={(e: SyntheticEvent) => {
                        e.stopPropagation();
                        handleSelect(item);
                    }}
                >
                    {isCurrentLat ? 'Selected' : 'Select'}
                </button>
            </div>

            <SpringSlide state={isShow}>
                {item.state && (
                    <p>
                        <span>State:</span> {item.state}
                    </p>
                )}
                <p>
                    <span>Latitude:</span> {item.lat}
                </p>
                <p>
                    <span>Longitude:</span> {item.lon}
                </p>
            </SpringSlide>
        </div>
    );
};

export default memo(SelectItem);
