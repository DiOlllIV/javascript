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

const imgSrc = 'http://img10.joyreactor.c/pics/post/Anastasia-Savina-%D0%AD%D1%80%D0%BE%D1%82%D0%B8%D0%BA%D0%B0-%D0%BC%D0%B0%D0%BB%D0%B5%D0%BD%D1%8C%D0%BA%D0%B0%D1%8F-%D0%B3%D1%80%D1%83%D0%B4%D1%8C-%D1%81%D0%B8%D1%81%D1%8C%D0%BA%D0%B8-5810779.jpeg';
const promise = addImageWithPromise(imgSrc);

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