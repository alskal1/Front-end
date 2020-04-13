let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for(let i=0; i<str.length; i++) {
    if(str[i] == 'a' || str[i] =='e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
        console.log("모음"+str[i]+"의 위치는"+i);
    }
}

