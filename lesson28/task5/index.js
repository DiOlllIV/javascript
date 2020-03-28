export const shmoment = date => {
    let res = new Date(date);

    const calc = {
        add(unit, value) {
            switch (unit) {
                case 'years':
                    res.setFullYear(res.getFullYear() + value);
                    return this;
                case 'months':
                    res.setMonth(res.getMonth() + value);
                    return this;
                case 'days':
                    res.setDate(res.getDate() + value);
                    return this;
                case 'hours':
                    res.setHours(res.getHours() + value);
                    return this;
                case 'minutes':
                    res.setMinutes(res.getMinutes() + value);
                    return this;
                case 'seconds':
                    res.setSeconds(res.getSeconds() + value);
                    return this;
                case 'milliseconds':
                    res.setMilliseconds(res.getMilliseconds() + value);
                    return this;
                default:
                    return `Incorect unit of time`;
            }
        },
        subtract(unit, value) {
            if (unit === 'years') {
                res.setFullYear(res.getFullYear() - value);
                return this;
            }
            if (unit === 'months') {
                res.setMonth(res.getMonth() - value);
                return this;
            }
            if (unit === 'days') {
                res.setDate(res.getDate() - value);
                return this;
            }
            if (unit === 'hours') {
                res.setHours(res.getHours() - value);
                return this;
            }
            if (unit === 'minutes') {
                res.setMinutes(res.getMinutes() - value);
                return this;
            }
            if (unit === 'seconds') {
                res.setSeconds(res.getSeconds() - value);
                return this;
            }
            if (unit === 'milliseconds') {
                res.setMilliseconds(res.getMilliseconds() - value);
                return this;
            } else
                return `Incorect unit of time`;

        },
        result() {
            return new Date(res);
        },
    };

    return calc;
};

/* shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); */