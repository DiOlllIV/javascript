let i = 1;
let j = 0;
let result = 0;

for (i = 1; i <= 5; i++) {
    console.log("=> " + i + " <=")
    for (j = 1; j <= 10; j++) {
        result = i * j;
        console.log(i + " x " + j + " = " + result);
    }
}