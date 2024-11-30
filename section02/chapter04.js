// 1. Spread 연산자
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

let obj1 = {
    a: 1,
    b: 2,
};
let obj2 = {
    ...obj1,
    c: 1,
    d: 2,
};

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(one,...rest){
    console.log(rest);
}

funcB(...arr1)

let o1 = { name: "이정환"};
let o2 = o1;
let o3 = { ...o1 }; 

console.log(o1 === o2);
console.log(o1 === o3);

o1 === o2 
JSON.stringify(o1) === JSON.stringify(o2)