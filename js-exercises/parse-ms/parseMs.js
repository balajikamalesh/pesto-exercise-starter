const parseMs = ms => {
    if(!parseInt(ms)) {
        throw new TypeError('Expected an integer type');
    }
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    let secms = ms % (1000);
    let millisec = ms % 10;
    return {
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: sec,
            milliseconds: millisec,
            microseconds: 0,
            nanoseconds: 0
        };
};

export { parseMs };
