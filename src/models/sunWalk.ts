import { dateWithTimeOffset } from './todayOffset';

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

function calculateWalk(now: Date, min: Date, max: Date, maxValue: number) {
    return Math.floor(
        ((now.getHours() * 60 + now.getMinutes() - (min.getHours() * 60 + min.getMinutes())) *
            maxValue) /
            (max.getHours() * 60 + max.getMinutes() - (min.getHours() * 60 + min.getMinutes())),
    );
}

export function sunMove(
    sunrise: number,
    sunset: number,
    timezone: number,
    maxValue: number,
): number | undefined {
    const sunriseTime = dateWithTimeOffset(new Date(sunrise * 1000), timezone);
    const sunsetTime = dateWithTimeOffset(new Date(sunset * 1000), timezone);
    let solarNoonTime = new Date((sunsetTime.getTime() + sunriseTime.getTime()) / 2);
    const nowInPlace = dateWithTimeOffset(new Date(), timezone);

    /*
    console.log('############################################')
    console.log('рассвет ####', sunriseTime.getHours(),':',sunriseTime.getMinutes())
    console.log('зенит ####', solarNoonTime.getHours(),':',solarNoonTime.getMinutes())
    console.log('закат ####', sunsetTime.getHours(),':',sunsetTime.getMinutes())
    console.log('############################################')
    console.log('рассвет ####', sunriseTime)
    console.log('зенит ####', solarNoonTime)
    console.log('закат ####', sunsetTime)
    console.log('############################################')
     */

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

        return calculateWalk(nowInPlace, sunriseTime, solarNoonTime, maxValue);
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

       return maxValue - calculateWalk(nowInPlace, solarNoonTime, sunsetTime, maxValue);
    }

    // Night
    if (nowInPlace > sunsetTime || nowInPlace < sunriseTime) {
        console.log('Night')

        return 0
    }
}
