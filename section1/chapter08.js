// 1. null 병합 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

// typeof 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
console.log(t1);

// 삼항 연산자
let var8 = 10;

// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";


//? 기준으로 왼쪽 항에 조건식, ?과 : 사이에 참일 때 반환값 : 뒤에 거짓일 때 반환 값