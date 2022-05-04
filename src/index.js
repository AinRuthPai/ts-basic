"use strict";
// 타입 추론
// 명시적으로 지정하지 않아도 ts가 자동으로 타입을 추론한다.
let a = "hello";
let b = false;
// 정적 타이핑 (명시적 타입)
// 직접적으로 타입을 지정해준다.
let c = [];
c.push(1);
// name은 필수, age는 옵션인 객체
const player = {
    name: "nico",
};
console.log("hi");
