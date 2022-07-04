import React, {useEffect} from 'react';
import useStore, {Locale} from "../store/weather";
import shallow from "zustand/shallow";

const WeatherContainer = () => {
    const {data, isLoading, isError, fetch} = useStore((state) => ({
        data: state.data,
        isLoading: state.isLoading,
        isError: state.isError,
        fetch: state.fetch
    }), shallow)

    useEffect(() => {
        fetch()
    }, [])

    if (isError) {
        console.log(isError)
    }

    function returnDate(locale: string, isShort: boolean) {
        const now = new Date()
        const US = {
            days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            monthShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jule', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        }
        const RU = {
            days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            month: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
            monthShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        }

        switch (locale) {
            case Locale.RU:
                if (isShort) {
                    return `${RU.daysShort[now.getDay()]} ${now.getDate()}  ${RU.monthShort[now.getMonth()]}`
                } else {
                    return `${RU.days[now.getDay()]} ${now.getDate()}  ${RU.month[now.getMonth()]}`
                }
            case Locale.US:
                if (isShort) {
                    return `${US.daysShort[now.getDay()]} ${now.getDate()}  ${US.monthShort[now.getMonth()]}`
                } else {
                    return `${US.days[now.getDay()]} ${now.getDate()}  ${US.month[now.getMonth()]}`
                }
        }
    }

    console.log(data)


    return (
        data &&
        <div className='weather'>
            <div className="header">
                <div className='temperature'>
                    {Math.round(data.main.temp)} <span className='degree'>c</span>
                </div>

                <div>
                    <div className='day'>
                        {returnDate(Locale.US, true)}
                    </div>

                    <div className='condition'>
                        {data.weather.map((item: any) => (
                            <p>{item.main}</p>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
};

export default WeatherContainer;
