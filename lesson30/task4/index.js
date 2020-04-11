/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 typeof(failedPromise) === "object"
 */

const failedPromise = new Promise((resolve, reject) => {
    reject(new Error('Oops, error!'))
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
    console.log(error);
});