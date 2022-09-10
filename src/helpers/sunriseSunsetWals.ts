export function timeToValue(
    time: number,
    stamp: number = 0.08,
    steps: number = 4,
) {
    const result = {
        opacity: 0,
        color: 255
    }

    if (time < .5) {
        let min = 0
        let max = stamp
        let colorTemp = 50

        for (let i = 0, tempVal = stamp; i < steps; i++) {
            if (time >= min && time < max) {
                result.color = (time * colorTemp) / tempVal

                if (i === 0) {
                    result.opacity = (time * .6) / max
                }

                if (i > 0 && i < 3) {
                    result.opacity = .6
                }

                if (i === 3) {
                    result.opacity = .6 - ((time - min) * .6) / stamp
                }
            }

            min = tempVal
            tempVal += stamp
            max = tempVal
            colorTemp += 50
        }
    }

    if (time > .5) {
        let max = 1
        let min = max - stamp
        let colorTemp = 100

        for (let i = 0, tempVal = stamp; i < steps; i++) {
            if (time >= min && time < max) {
                result.color = colorTemp - ((time - min) * 50) / stamp

                if (i === 3) {
                    result.opacity = ((time - min) * .6) / stamp
                }

                if (i > 0 && i < 3) {
                    result.opacity = .6
                }

                if (i === 0) {
                    result.opacity = .6 - ((time - min) * .6) / stamp
                }
            }

            max = min
            min -= stamp
            tempVal += stamp
            colorTemp += 50
        }
    }

    return result
}
