import React, {useEffect} from 'react';
import {Locale, Units, useMultiple, useSingle} from "../store/weather";
import shallow from "zustand/shallow";

interface WeatherProps {
    initialPlace: string,
    APIKey: string,
    units: string
}

const WeatherContainer: React.FC<WeatherProps> = ({initialPlace, APIKey, units}) => {
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
        fetchDays(APIKey, initialPlace, units, 5)
    }, [])

    function returnDate(locale: string, isShort: boolean) {
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
                return `${RU.days[now.getDay()]} ${now.getDate()}  ${RU.month[now.getMonth()]}`
            case Locale.US:
                return `${US.days[now.getDay()]} ${now.getDate()}  ${US.month[now.getMonth()]}`
            default:
                console.log('Locale not found')
                break
        }
    }

    // console.log(data)
    console.log(severalDays)

    return (
        singleDay &&
        <div className='weather'>
            <div className="header">
                <div className='temperature'>
                    {Math.round(singleDay.main.temp)}
                </div>

                <div>
                    <div className='day'>
                        {returnDate(Locale.US, false)}
                    </div>

                    <div className='condition'>
                        {singleDay.weather.map((item: any) => (
                            <p key={item.id}>{item.main}</p>
                        ))}
                    </div>
                </div>
            </div>

            {
                severalDays &&
                <div className="additional">
                    {severalDays.list?.map((day: any) => (
                        <div key={day.dt}
                             className='additional-day'>
                            <p className='temperature'>{Math.round(day.main.temp)}</p>
                            <p className='description'>{day.weather[0].main}</p>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
};

export default WeatherContainer;
