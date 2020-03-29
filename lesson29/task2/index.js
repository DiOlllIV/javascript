export const pinger = (num, interval) => {
    let i = num;
    console.log('ping');
    const loop = setInterval(() => {
        if (--i > 0)
            console.log('ping');
        else clearInterval(loop);
    }, interval);
};