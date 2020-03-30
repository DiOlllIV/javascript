export const delay = interval =>
    new Promise((resolve) => {
        setTimeout(() => {
            console.log('Done');
        }, interval);
    });