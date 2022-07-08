enum timeFormat {
    days = 'days',
    hours = 'hours',
    minutes = 'minutes',
    seconds = 'seconds',
}

function getHumanTime(time: number, format: timeFormat) {
    switch (format) {
        case timeFormat.days:
            return Math.floor((time / 1000 / 60 / 60 / 24))
        case timeFormat.hours:
            return Math.floor((time / 1000 / 60 / 60) % 24)
        case timeFormat.minutes:
            return Math.floor((time / 1000 / 60) % 60)
        case timeFormat.seconds:
            return Math.floor((time / 1000) % 60)
    }
}

function calculateWalk(now: Date, min: Date, max: Date, maxValue: number) {
    return Math.floor(
        ((now.getHours() * 60 + now.getMinutes()) - (min.getHours() * 60 + min.getMinutes())) * maxValue /
        ((max.getHours() * 60 + max.getMinutes()) - (min.getHours() * 60 + min.getMinutes()))
    )
}

export function sunMove(sunrise: string, solarNoon: string, sunset: string, maxValue: number): number {
    const sunriseTime = new Date(sunrise)
    const sunsetTime = new Date(sunset)
    const solarNoonTime = new Date(solarNoon)
    const now = new Date()

    let result = 0

    // Sunrise
    if (now > sunriseTime && now <= solarNoonTime) {
        const timeToEnd = solarNoonTime.getTime() - now.getTime()
        console.log('Солнце взойдет в зенит через', getHumanTime(timeToEnd, timeFormat.hours), 'часa(/ов)', getHumanTime(timeToEnd, timeFormat.minutes), 'минут', `(${now.getHours()}:${now.getMinutes()})`)

        result = calculateWalk(now, sunriseTime, solarNoonTime, maxValue)
    }

    // Sunset
    if (now > solarNoonTime && now < sunsetTime) {
        const timeToEnd = sunsetTime.getTime() - now.getTime()
        console.log('Солнце зайдет через', getHumanTime(timeToEnd, timeFormat.hours), 'часa(/ов)', getHumanTime(timeToEnd, timeFormat.minutes), 'минут', `(${now.getHours()}:${now.getMinutes()})`)

        result = maxValue - calculateWalk(now, solarNoonTime, sunsetTime, maxValue)
    }

    // if (now > sunsetTime && now < sunriseTime) {
    //     console.log('Вечер')
    // }

    return result
}
