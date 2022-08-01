import { dateWithTimeOffset } from './dateOffset';

enum timeFormat {
    days = 'days',
    hours = 'hours',
    minutes = 'minutes',
    seconds = 'seconds',
}

function getHumanTime(time: number, format: timeFormat) {
    switch (format) {
        case timeFormat.days:
            return Math.floor(time / 1000 / 60 / 60 / 24);
        case timeFormat.hours:
            return Math.floor((time / 1000 / 60 / 60) % 24);
        case timeFormat.minutes:
            return Math.floor((time / 1000 / 60) % 60);
        case timeFormat.seconds:
            return Math.floor((time / 1000) % 60);
    }
}

function nowT(now: Date, min: Date, max: Date) {
    return (
        (now.getHours() * 60 + now.getMinutes() - (min.getHours() * 60 + min.getMinutes())) /
        (max.getHours() * 60 + max.getMinutes() - (min.getHours() * 60 + min.getMinutes()))
    );
}

export function sunMove(
    sunrise: number,
    sunset: number,
    timezone: number,
): { timesOfDay: string; value: number } {
    const sunriseTime = dateWithTimeOffset(new Date(sunrise * 1000), timezone);
    const sunsetTime = dateWithTimeOffset(new Date(sunset * 1000), timezone);
    let solarNoonTime = new Date((sunsetTime.getTime() + sunriseTime.getTime()) / 2);
    const nowInPlace = dateWithTimeOffset(new Date(), timezone);

    const result = {
        timesOfDay: '',
        value: 0,
    };

    //Day
    if (nowInPlace > sunriseTime && nowInPlace < sunsetTime) {
        result.value = nowT(nowInPlace, sunriseTime, sunsetTime);
    }

    if (import.meta.env.VITE_WEATHER_API_KEY) {
        // Sunrise
        if (nowInPlace > sunriseTime && nowInPlace <= solarNoonTime) {
            const timeToEnd = solarNoonTime.getTime() - nowInPlace.getTime();

            console.log(
                'Солнце взойдет в зенит через',
                getHumanTime(timeToEnd, timeFormat.hours),
                'часa(/ов)',
                getHumanTime(timeToEnd, timeFormat.minutes),
                'минут',
                `(${nowInPlace.getHours()}:${nowInPlace.getMinutes()})`,
            );

            result.timesOfDay = 'Sunrise';
        }

        // Sunset
        if (nowInPlace > solarNoonTime && nowInPlace < sunsetTime) {
            const timeToEnd = sunsetTime.getTime() - nowInPlace.getTime();

            console.log(
                'Солнце зайдет через',
                getHumanTime(timeToEnd, timeFormat.hours),
                'часa(/ов)',
                getHumanTime(timeToEnd, timeFormat.minutes),
                'минут',
                `(${nowInPlace.getHours()}:${nowInPlace.getMinutes()})`,
            );
        }
    }

    // Night
    if (nowInPlace > sunsetTime || nowInPlace < sunriseTime) {
        const timeToSunrise = sunriseTime.setDate(sunriseTime.getDate() + 1) - nowInPlace.getTime();
        const nightLength = sunriseTime.setDate(sunriseTime.getDate() + 1) - sunsetTime.getTime();

        console.log(
            'Длина Ночи',
            getHumanTime(nightLength, timeFormat.hours),
            'часa(/ов)',
            getHumanTime(nightLength, timeFormat.minutes),
            'минут',
            `(${nowInPlace.getHours()}:${nowInPlace.getMinutes()})`,
        );

        console.log('Night in place');

        if (timeToSunrise > 0) {
            console.log(
                'До рассвета',
                getHumanTime(timeToSunrise, timeFormat.hours),
                'часa(/ов)',
                getHumanTime(timeToSunrise, timeFormat.minutes),
                'минут',
                `(${nowInPlace.getHours()}:${nowInPlace.getMinutes()})`,
            );

            // result.value
        }

        if (nowInPlace > sunsetTime) {
            const timeAfterSunset = nowInPlace.getTime() - sunsetTime.getTime();

            console.log(
                'Прошло после захода',
                getHumanTime(timeAfterSunset, timeFormat.hours),
                'часa(/ов)',
                getHumanTime(timeAfterSunset, timeFormat.minutes),
                'минут',
                `(${nowInPlace.getHours()}:${nowInPlace.getMinutes()})`,
            );
        }

        result.timesOfDay = 'Night';
    }

    return result;
}
