// LoaclStorage API 시뮬레이션

// Storage는 이미 있는 API 이므로 다른 이름을 사용 (override하면 안되기 때문)
interface SStorage<T> {
  // key가 제한되지 않은 오브젝트를 정의한다.
  // 키가 얼마나 많은 지는 모르지만, 무슨 타입인지는 알 때.
  [key: string]: T; // 여기에 T가 있다고 알려준다.
}
// 제네릭은 클래스 이름에 들어오지만 이것을 인터페이스로 보낸다.
class LocalStorage<T> {
  // 인터페이스가 제네릭을 받고
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  // remove는 string 형식의 key를 받아서 이걸 로컬스토리지로부터 지운다.
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<number>();

stringsStorage.get("key");
stringsStorage.set("hello", 123);

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.get("dfdf");
booleansStorage.set("dfdf", true);
