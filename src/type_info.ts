// 타입 추론
// 명시적으로 지정하지 않아도 ts가 자동으로 타입을 추론한다.
let a = "hello";
let b = false;

// 정적 타이핑 (명시적 타입)
// 직접적으로 타입을 지정해준다.
let c: number[] = [];
c.push(1);

// name은 필수, age는 옵션인 객체
// 별칭 타입 생성 (첫 글자는 대문자이다)
type Player = {
  // 읽기 전용 속성 (수정 불가)
  readonly name: string;
  age?: number;
};

// player의 객체를 만들고 그 결과로 player를 반환하는 함수
// return에 Player 타입 지정
function playerMaker(name: string): Player {
  return {
    name: name,
  };
}

// 화살표 함수 형태로 작성
// const playerMaker = (name: string): Player => ({ name });

const nico = playerMaker("nico");
// Player 타입이 지정되었기 때문에 age 추가가 가능해졌다.
nico.age = 12;
console.log(nico);

const numbers: readonly number[] = [1, 2, 3, 4, 5];
// numbers.push(6);  :  error! 읽기 전용 속성이다.

// Tuple : 배열을 생성하는데 최소한의 길이를 가지고 특정 위치에 특정 타입이 있어야 한다.
const player2: [string, number, boolean] = ["nico", 12, false];

// any 타입을 쓰게 되면 타입스크립트로부터 벗어난다. 보통 사용하지 않는다.
const x: any[] = [1, 2, 3, 4];
const y: any = true;
console.log(x + y);

// unknown : 어떤 타입인지 모를 때  ex) API 응답 시 타입을 모름
let n: unknown;

// unknown 타입이기 때문에 number 타입을 확인하고 더해준다.
if (typeof n === "number") {
  let m = n + 1;
}
// 마찬가지로 string 타입을 확인한 뒤 대문자로 변환한다.
if (typeof n === "string") {
  let m = n.toUpperCase;
}

// void : 아무것도 return하지 않는 함수. 보통 void를 따로 지정해주지는 않는다.
// 아래의 hello() 함수는 자동으로 void로 인식되었다.
function hello() {
  console.log("hello");
}

// never : 함수가 절대 return하지 않을 때 발생한다. ex) 함수에서 예외가 발생할 때
// return하지 않고 오류를 발생시키는 함수
function error(): never {
  throw new Error("XXX");
}

function hi(name: string | number) {
  if (typeof name === "string") {
    console.log(name); // string
  } else if (typeof name === "number") {
    console.log(name); // number
  } else {
    // 타입이 정상적으로 들어온다면 이 코드는 실행되지 않아야 한다.
    console.log(name); // never : 자동으로 할당된다
  }
}
