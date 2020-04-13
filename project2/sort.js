let a = [];
let x = 1;
let y = 100;

for(let n=0; n<100; ++n) {
    a[n] = Math.floor(Math.random() * (x-y +1) + y);
}

    a.sort(compareNumber);
    console.log(a);

    function compareNumber(i, j) {
        return i - j;
    }
