import React, {useEffect, useState} from 'react';
import {Locale, Units, useMultiple, useSingle} from "../store/weather";
import shallow from "zustand/shallow";
import cn from 'classnames'

interface WeatherProps {
    initialPlace: string,
    APIKey: string,
    units?: string,
    locale?: string
}

const WeatherContainer: React.FC<WeatherProps> = ({
                                                      initialPlace,
                                                      APIKey,
                                                      units = Units.Metric,
                                                      locale = Locale.US
                                                  }) => {
    const {singleDay, isLoadingDay, isErrorDay, fetchDay} = useSingle((state) => ({
        singleDay: state.data,
        isLoadingDay: state.isLoading,
        isErrorDay: state.isError,
        fetchDay: state.fetch,
    }), shallow)
    const {severalDays, isLoadingDays, isErrorDays, fetchDays} = useMultiple((state) => ({
        severalDays: state.data,
        isLoadingDays: state.isLoading,
        isErrorDays: state.isError,
        fetchDays: state.fetch,
    }), shallow)

    useEffect(() => {
        fetchDay(APIKey, initialPlace, units)
    }, [])

    function returnDate(locale: string, isShort?: boolean) {
        const now = new Date()
        const US = {
            days: isShort
                ? ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
                : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            month: isShort
                ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        }
        const RU = {
            days: isShort
                ? ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
                : ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            month: isShort
                ? ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
                : ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        }

        switch (locale) {
            case Locale.RU:
                return `${RU.days[now.getDay()]} ${now.getDate()} ${RU.month[now.getMonth()]}`
            case Locale.US:
                return `${US.days[now.getDay()]} ${now.getDate()} ${US.month[now.getMonth()]}`
        }
    }

    function timeStamp(date: string) {
        const array = date.split(' ')
        const day = array[0].split('-')
        const hours = array[1].split(':')[0]

        return `${day[2]}.${day[1]}  ${hours.split('')[0] === '0' ? hours.split('')[1] : hours}h`
    }

    // console.log(data)
    // console.log(severalDays)

    const [showDays, setShowDays] = useState(false)
    const handleFetchDays = () => {
        if (severalDays.length === 0) {
            fetchDays(APIKey, initialPlace, units, 5)
        }

        setShowDays(!showDays)
    }

    return (
        singleDay &&
        <div className='weather'>
            <div className="header">
                <div className='temperature'>
                    {Math.round(singleDay.main.temp)}
                </div>

                <div>
                    <div className='day'>
                        {returnDate(Locale.US)}
                    </div>

                    <div className='condition'>
                        {singleDay.weather.map((item: any) => (
                            <p key={item.id}>{item.main}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div onClick={handleFetchDays}
                 className={cn('toggler', {['toggle']: showDays})}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMfiUfLmdh-V_Ecl-zpTijsoBZyz4zT9Ufg&usqp=CAU"
                    alt=""/>
            </div>
            {
                severalDays &&
                <div className={cn('additional', {['show']: showDays})}>
                    {severalDays.list?.map((day: any) => (
                        <div key={day.dt}
                             className='additional-day'>
                            <p className='temperature'>{Math.round(day.main.temp)}</p>
                            <p className='description'>{day.weather[0].main}</p>
                            <p className='test'>
                                {timeStamp(day.dt_txt)}
                            </p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default WeatherContainer;
