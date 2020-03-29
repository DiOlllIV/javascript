export const delay = (delay, callback, context, ...arg) => {
    setTimeout(callback(context, arg), delay);
};