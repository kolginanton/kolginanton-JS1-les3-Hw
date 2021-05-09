let i = 2;
let arr = [];

while (i < 100) {
    let a = 2;
    let different = true;
    while (i > a) {
        if (i % a === 0) { // это число не простое, т.к. остается осток от деления
            different = false;
        }
        a++;
    }
    if (different === true) { // число простое добавляем в массив
        arr.push(i);
    }
    i++;
}
alert(arr);
console.log(arr);

