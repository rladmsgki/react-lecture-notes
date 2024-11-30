// 콜백 함수
function main(value){
    console.log(value);
}

function sub(){
    console.log("i am sub");
}

main(1);

// 콜백 함수의 활용

function repeat(conut){
    for(let idx = 1; idx <= conut; idx++){
        console.log(idx);
    }
}

function repeatDouble(conut){
    for(let idx = 1; idx <= conut; idx++){
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);

function repeat(conu, callback){
    for(let idx = 1; idx <= conut; idx++){
        callback(idx);
    }
}

repeat(5,function(idx){
    console.log(idx);
});

repeat(5,function(idx){
    console.log(idx * 2);
});