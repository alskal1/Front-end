let count = 0;

let time = setInterval(function(msg){
    console.log(msg, new Date());
    count++;
    if(count==10){
        clearInterval(time);
    }
}, 1000, "현재 시각");