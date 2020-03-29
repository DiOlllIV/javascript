export const delay = (delay, callback, context, ...arg) => {
    setTimeout(() => {
        callback.aplly(context, arg);
    }, delay);
};