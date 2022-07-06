export  function sunMove(sunrise: string, solarNoon: string, sunset: string) {
    const sunriseTime = new Date(sunrise).getTime()
    const sunsetTime = new Date(sunset).getTime()
    const solarNoonTime = new Date(solarNoon).getTime()
    const now = new Date().getTime()

    if (now === sunriseTime) {
        console.log('sunrise start')
    }

    if (now === solarNoonTime) {
        console.log('sun is Up')
    }

    if (now === sunsetTime) {
        console.log('sunset start')
    }

    // const result = sunsetDate.getTime() - sunriseDate.getTime()
    // const hours = new Date(result).getHours()
    // const minutes = new Date(result).getMinutes()
}
