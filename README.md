# typescript

- 사용 목적 :

  - 타입을 강제로 부여하여 예상치 못한 실행 결과나 에러를 막아주기 위해 사용한다. (강타입 언어 / strongly typed)

```javascript
function divide(a, b) {
  return a / b;
}
divide(2, 3); // 0.6666666666666

// 의도와는 다르게 문자열을 나누고 인수를 하나만 전달하였지만 자바스크립트는 에러를 발생하지 않는다.
divide("xxxxxx"); // NaN

// 배열과 boolean이 더해지면서 모든 것이 문자열로 취급되어 더해져 버렸다.
// 이는 명백히 개발자의 실수이지만, 자바스크립트는 이것을 에러로 표시하지 않는다.
[1] + true; // "1true"
```

- 가장 피해야 할 에러는 런타임 에러인데, 프로그램 실행 중 발생한 오류이다. (런타임 에러는 실제 유저가 마주하게 될 것이므로 심각하다.)

```javascript
const nico = {
  name: "nico",
};
nico.hello(); // error!
```

- nico라는 객체를 생성하고, nico 객체에서 hello() 함수를 불러왔다. 하지만 hello 함수는 존재하지 않기 때문에 에러가 발생했다.

- 하지만 자바스크립트는 이게 에러가 발생할 지 모르고 유저의 컴퓨터에서 코드를 일단 실행한 뒤, 에러를 발생시켰다.

- 이상적으로는 코드가 실행 되기 전에 언어가 자체적으로 nico 객체에는 hello라는 함수가 없다는 것을 알려주는 것이 가장 좋다.

  - Rust, Go같은 언어에서는 컴파일 자체를 실패해버린다.

- 브라우저는 ts를 이해하지 못하고 js만 이해한다. (Node.js는 양쪽 다 가능하다)

- ts는 js로 변환된 뒤에 실행되는데, ts 코드에 에러가 있다면 js 코드로 컴파일되지 않는다.
