// if
let num = 9;

if (num >= 10) {
    console.log("num은 10 이상입니다");
    console.log("조건이 참 입니다");
}
else if (num >= 5){
    console.log("num은 5 이상입니다");
}
else{
    console.log("조건이 거짓 입니다");
}

// switch 
let animal = "cat";

switch (animal){
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("강아지");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다");
    }
}    