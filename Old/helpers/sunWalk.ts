import moment from 'moment';
import { dateWithTimeOffset } from './dateOffset';

function nowT(now: Date, min: Date, max: Date) {
    return (
        (now.getHours() * 60 +
            now.getMinutes() -
            (min.getHours() * 60 + min.getMinutes())) /
        (max.getHours() * 60 +
            max.getMinutes() -
            (min.getHours() * 60 + min.getMinutes()))
    );
}

enum DayPeriod {
    night = 'Night',
    sunrise = 'Sunrise',
    sunset = 'Sunset',
}

export function sunMove(
    sunrise: number,
    sunset: number,
    timezone: number,
): { timesOfDay: string; value: number } {
    const sunriseTime = dateWithTimeOffset(new Date(sunrise * 1000), timezone);
    const sunsetTime = dateWithTimeOffset(new Date(sunset * 1000), timezone);
    const solarNoonTime = new Date(
        (sunsetTime.getTime() + sunriseTime.getTime()) / 2,
    );
    const nowInPlace = dateWithTimeOffset(new Date(), timezone);

    // #############################

    const timeInPlace = moment().utcOffset(timezone / 60);
    const sunriseUnix = moment.unix(sunrise).utcOffset(timezone / 60);
    const sunsetUnix = moment.unix(sunset).utcOffset(timezone / 60);
    const solarNoon = moment(
        (sunsetUnix.valueOf() + sunriseUnix.valueOf()) / 2,
    );

    console.log(' ');
    console.log('### ### ### ### ###');
    console.log(
        '               --- TIME IN PLACE ---',
        timeInPlace.format('HH:mm:ss'),
    );
    console.log('                   sunRise', sunriseUnix.format('HH:mm:ss'));
    console.log('                   Sunset', sunsetUnix.format('HH:mm:ss'));
    console.log('### ### ### ### ###');

    const isAfterSunrise = timeInPlace.isAfter(sunriseUnix);
    const isBeforeSunset = timeInPlace.isBefore(sunsetUnix);

    // #############################

    const result = {
        timesOfDay: '',
        value: 0,
    };

    // Day
    if (isAfterSunrise && isBeforeSunset) {
        // TODO Переделать говно
        result.value = nowT(nowInPlace, sunriseTime, sunsetTime);
    }

    // Sunrise
    if (isAfterSunrise && timeInPlace.isSameOrBefore(solarNoon)) {
        const timeToEnd = moment.utc(solarNoon.diff(timeInPlace));

        console.log(
            'Солнце взойдет в зенит через',
            timeToEnd.format('HH:mm:ss'),
        );

        result.timesOfDay = DayPeriod.sunrise;
    }

    // Sunset
    if (timeInPlace.isAfter(solarNoon) && isBeforeSunset) {
        const timeToEnd = moment.utc(sunsetUnix.diff(timeInPlace));

        console.log('Солнце зайдет через', timeToEnd.format('HH:mm:ss'));

        result.timesOfDay = DayPeriod.sunset;
    }

    // TODO проверка на полночь
    if (timeInPlace.isAfter(sunsetUnix) || timeInPlace.isBefore(sunriseUnix)) {
        const nightLength = moment.utc(
            sunriseUnix.add(1, 'day').diff(sunsetUnix),
        );

        const timeToSunrise = moment.utc(sunriseUnix.diff(timeInPlace));
        const timeAfterSunset = moment.utc(timeInPlace.diff(sunsetUnix));

        console.log('Длина Ночи', nightLength.format('HH:mm:ss'));

        if (timeInPlace.isBefore(sunriseUnix)) {
            console.log('До рассвета', timeToSunrise.format('HH:mm:ss'));
        }

        if (timeInPlace.isAfter(sunsetUnix)) {
            console.log(
                'Прошло после захода',
                timeAfterSunset.format('HH:mm:ss'),
            );
        }

        result.timesOfDay = DayPeriod.night;
    }

    return result;
}
