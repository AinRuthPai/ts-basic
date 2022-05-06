// call signature : const add = (a: number, b: number) => number
const add = (a: number, b: number) => a + b;

// call signature 선언 방법
type Add = (a: number, b: number) => number;

const add2: Add = (a, b) => a + b;

// overloading
// Next.js에서 Router를 이용하여 페이지를 변경할 때
// string이나 객체로 경로를 보내는 예시

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// 파라미터의 개수가 다를 경우
type Plus = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const plus: Plus = (a, b, c?: number) => {
  if (c) {
    return a + b + c;
  }
  return a + b;
};
plus(1, 2);
plus(1, 2, 3);

// 제네릭
type SuperPrint = {
  // <> 안에 이름은 마음대로 작명 가능하다.
  <TypePlaceholder>(arr: TypePlaceholder[]): TypePlaceholder;
};

const superPrint: SuperPrint = (arr) => arr[0];
// 제네릭을 이용하니 모두 정상적으로 작동한다.
const z = superPrint([1, 2, 3, 4]);
const l = superPrint([true, false, true]);
const o = superPrint(["a", "b", "c"]);
const w = superPrint([1, 2, true, "d"]);
