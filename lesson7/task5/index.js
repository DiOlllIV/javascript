    export const squareArray = (square) => {

        if (!Array.isArray(square))
            return null;

        return square.map(element =>
            (element * element));
    };

    /* const arr = [1, 2, 3, 4, 7, 99];
    console.log(squareArray(arr)); */