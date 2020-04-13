let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";
let a = str.split(/[\t ,]+/);

for (let i = 0; i < a.length; ++i)
    console.log(a[i]);