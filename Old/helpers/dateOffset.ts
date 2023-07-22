export function dateWithTimeOffset(timestamp: Date, timezone: number) {
    const utc =
        new Date(timestamp.getTime()).getTime() +
        new Date().getTimezoneOffset() * 60000;
    const offsetTime = utc + 1000 * timezone;

    return new Date(offsetTime);
}
