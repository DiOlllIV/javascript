export const addImage = imgSrc => {
    const p = new Promise((resolve, reject) => {
        const imgEl = document.createElement('img');
        imgEl.setAttribute('alt', 'Picture');
        imgEl.src = imgSrc;

        const page = document.querySelector('.page');
        page.append(imgEl);

        const onImageLoaded = () => {
            const { width, height } = imgEl;
            resolve({ width, height });
        };
        imgEl.addEventListener('load', onImageLoaded);

        imgEl.addEventListener('error', () =>
            reject(new Error('Image load failed')));
    });

    return p;
};

const ifReject = error => {
    console.log(error);
    return;
}

const ifResolve = data => {
    const { width, height } = data;
    const sizeEl = document.querySelector('.image-size');
    sizeEl.textContent = `${width} x ${height}`;
}

promise.then(ifResolve, ifReject);