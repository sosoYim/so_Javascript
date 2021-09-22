# isEqual, deepClone

> 좋은 코드를 구현하도록 주의하면서 isEqual, deepClone을 구현하고 jest를 이용해 테스트 통과하기

## isEqual 기능 구현 설명

### isEqual(obj1, obj2)

- 두 인자를 비교하여 같은 값을 가졌는지 확인
  1. 매개변수의 길이가 두개 이상인지 확인
  2. 비교하려는 두 객체의 타입이 다르면 `return false`
  3. 원시타입일 때 (주의 : typeof 로 null의 값을 평가하면 object가 나온다)
     a. Object.is로 비교한 값 `return`
  4. 열거하여 비교해야할 요소들 (일반객체, 배열)
     a. 배열이면 정렬해준다.
     b. 길이가 다른 경우 `return false`
     c. Object.entries를 이용해 값 비교 - object면 isEqual 재귀함수 호출 - NaN이 아니면서 obj2에 해당 키값이 겂을 경우 혹은 Object.is 비교시 false일 경우 `return false`
     false 체크에 걸리지 않은 경우 `return true`
  5. 이외의 객체타입 동치비교 `return`

### isMinArgumentLenghtCorrect(functionToCompare, argLength)

- 매개변수의 수 이상의 인자가 들어오면 true 아니면 false 0. 함수 선언문 (채택)
  다른 곳에서도 매개변수 갯수체크가 가능하도록 함수 분리. 이때 arguments 프로퍼티가 아닌 내부에서 객체로 사용하는 것이 권장되기 때문에 함수를 호출하면서 인자로 넣어주게 설계했다.
  1. 함수 분리 없이 ...args로 체크
     ...args 하면 체크는 되는데 함수에 두개의 매개변수가 필요하다는 정보를 직관적으로 볼 수 없어 가독성이 떨어짐
  2. 즉시실행함수
     즉시 실행함수로 매개변수 길이 관련 식별자들은 생명주기를 짧게 준다
     isEqual.arguments.length 혹은 즉시 실행함수의 매개변수 ??

### isObject(obj)

- 일반 객체인지 확인
  constructor가 Object가 아닌 일반 객체도 포함시키기 위해 `Object.prototype.toString.call(obj)` 를 이용했다.
  call을 통해 받은 객체의 프로토타입을 출력해주는 값 (`[object Object]`)과 비교하였는데, 값을 직접 하드코딩하여 비교한 점이 불편하지만 아직 다른 방법을 찾지 못하였다.

### isSameType(obj1, obj2)

- 두 인자가 같은 타입인지 확인
  - 위에서 생성한 `isMinArgumentLengthCorrect` 함수를 사용해 매개변수 만큼의 인자를 받도록 했다.

## deepClone 기능 구현 설명

> 배열 혹은 일반객체일 경우 dept에 상관 없이 deepcopy 한다.

### deepClone(obj)

- 인자를 deepCopy하는 함수
  1. 배열이거나 일반 객체인 경우 -> 돌면서 재귀
     a. 반환할 값을 빈 객체 혹은 빈 배열로 초기화
     b. forEach로 돌며 각각의 값을 재귀 호출하여 반환할 값이 나올 때 까지 확인한다.
  2. 나머지 경우 -> 값을 그대로 반환한다.

### isObject(obj)

- 일반 객체인지 확인
  isEqual에서 사용한 함수를 재사용했다.

## 고민 포인트

### isEqual 고민 포인트

- `return` 사용 개수
  return 개수 최소화, 코드의 가독성, 불필요한 코드실행 차단, 의도치 않은 값 개입 최소화 등의 관점에서 고민이 많았다. 처음 설계할 때는 `result` 식별자에 값을 담은 후 최종적으로 return 해주려했으나 효율성 및 안정성 측면에서 문제가 많은 것 같아 수정하였다.

- `if (!isSameType(obj1, obj2)) return false;`
  상단에서 두 인자의 타입이 다르다면 return false를 해주었다.
  선두에서 끊어주어 효율성을 올려줄 수 있을 뿐 아니라 하단에서 하나의 인자 타입만 확인할 수 있어 비교 구문도 깔끔해질 수 있다고 생각했기 때문이다.

- `if (obj1KeyLength === obj2KeyLength && obj1KeyLength === 0) return true;`
  가독성을 고려해 추가하지 말고 깔끔한 코드를 작성할지, 성능을 위해 끊어줄지 고민하다 포함시키지 않은 코드다.
  열거가능한 객체의 길이가 0인것을 확인하고 반복문 전에 잘라주려던 것인데 반복문 한번 돌리는 것이 성능에 큰 영향을 끼치지 않을 것 같아 포함하지 않았다.

- 오버엔지니어링의 기준
  변수, 오류상황 등 고려해야하는 적정한 기준이 어디까지인지 확신할 수 없었다.
