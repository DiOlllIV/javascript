export const addImage = (imgSrc, callback) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Picture');
    imgElem.src = imgSrc;

    const page = document.querySelector('.page');
    page.append(imgElem);

    const onImageLoaded = () => {
        const { width, height } = imgElem;
        callback(null, { width, height });
    };

    imgElem.addEventListener('load', onImageLoaded);
    imgElem.addEventListener('error', () =>
        callback('Image load failed'));
};

const onImageLoaded = (error, data) => {
    if (error) {
        return error;
    }

    const { width, height } = data;
    const sizeElem = document.querySelector('.image-size');
    sizeElem.textContent = `${width} x ${height}`;
};