import React, {useState} from 'react';
// import {Locale, Units, useHourlyForecast} from "../store/weather";
// import cn from "classnames";
// import shallow from "zustand/shallow";
// import {WeatherProps} from "./Forecast";
//
// const ForecastHourly: React.FC<WeatherProps> = ({
//                                                     APIKey,
//                                                     lat,
//                                                     lng,
//                                                     units = Units.Metric,
//                                                     locale = Locale.US
//                                                 }) => {
//     const {data, isLoading, isError, fetch} = useHourlyForecast((state) => ({
//         data: state.data,
//         isLoading: state.isLoading,
//         isError: state.isError,
//         fetch: state.fetch,
//     }), shallow)
//
//
//     function timeStamp(date: string) {
//         const array = date.split(' ')
//         const day = array[0].split('-')
//         const hours = array[1].split(':')[0]
//
//         return `${day[2]}.${day[1]}  ${hours.split('')[0] === '0' ? hours.split('')[1] : hours}h`
//     }
//
//     // console.log(data)
//     // console.log(severalDays)
//
//     const [showDays, setShowDays] = useState(false)
//     const handleFetchDays = () => {
//         if (data.length === 0) {
//             fetch(APIKey, lat, lng, units, 5)
//         }
//
//         setShowDays(!showDays)
//     }
//
//     return (
//         <div className='weather'>
//
//
//             <div onClick={handleFetchDays}
//                  className={cn('toggler', {['toggle']: showDays})}>
//                 <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMfiUfLmdh-V_Ecl-zpTijsoBZyz4zT9Ufg&usqp=CAU"
//                     alt=""/>
//             </div>
//             {
//                 <div className={cn('additional', {['show']: showDays})}>
//                     {data.list?.map((day: any) => (
//                         <div key={day.dt}
//                              className='additional-day'>
//                             <p className='temperature'>{Math.round(day.main.temp)}</p>
//                             <p className='description'>{day.weather[0].main}</p>
//                             <p className='test'>
//                                 {timeStamp(day.dt_txt)}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             }
//         </div>
//     );
// };
//
// export default ForecastHourly;
