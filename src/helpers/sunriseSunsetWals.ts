export function timeToValue(
    time: number,
    stamp: number = 0.08,
    color: number = 50,
    steps: number = 4,
) {
    const result = {
        opacity: 0,
        color: color
    }

    if (time < .5) {
        let min = 0
        let max = stamp

        for (let i = 0, tempVal = stamp, colorTemp = color; i < steps; i++) {
            if (time > min && time <= max) {
                result.color = (time * colorTemp) / tempVal

                if (i === 0) {
                    result.opacity = (time * .6) / max
                }

                if (i > 0 && i < 3) {
                    result.opacity = .6
                }

                if (i === 3) {
                    result.opacity = .6 - ((time - min) * .6) / (max - min)
                }
            }

            min = tempVal
            tempVal += stamp
            max = tempVal
            colorTemp += color
        }
    }

    if (time > .5) {
        let min = 0.68
        let max = min + stamp

        for (let i = 0, tempVal = stamp, colorTemp = color; i < steps; i++) {
            if (time > min && time <= max) {
                result.color = (time * colorTemp) / tempVal

                if (i === 0) {
                    result.opacity = (time * .6) / max
                }

                if (i > 0 && i < 3) {
                    result.opacity = .6
                }

                if (i === 3) {
                    result.opacity = .6 - ((time - min) * .6) / (max - min)
                }
            }

            min = tempVal
            tempVal += stamp
            max = tempVal
            colorTemp += color
        }
    }

    return result
}
