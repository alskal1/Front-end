let a = [];
let x = 1;
let y = 100;

for(let n=0; n<100; ++n) {
    a[n] = Math.floor(Math.random() * (x-y +1) + y);
}

for(let n=0; n<100; ++n) {
    if(a[n] % 2 == 0 ) {
        a.splice(n,1);
        n--;
     }
}

console.log(a);

