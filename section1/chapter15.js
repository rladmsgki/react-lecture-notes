// 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 객체 프로퍼티 
let person = {
    name: "이정환",
    age: 27,
    hobby: "테니스",
    job : "FE Developer",
    extra: {},
    10 : 20,
    "Like cat": true
};

// 특정 프로퍼티에 접근
let name = person.name;

let age = person["age"]

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 새로운 프로퍼티 추가
person.job = "fe developer"
person["favoriteFood"] = "떡볶이";

// 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 삭제
delete person.job
delete person["favoriteFood"];

//존재 유무 확인
let result1 = "name" in person;