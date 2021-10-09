// const isPrimitive

// const getType = Object.prototype.toString.call();

// 타입이 다르면 다른 값 (덩치 큰 조건부터 쳐주자)
// Object.is(0,-0) => false
// Object.is(NaN, NaN) => true
// 함수 호출은 늘 메모리 소모가 더 심하기 때문에 필요한 경우만 Object.is해준다.
// value === 0 || Number.isNaN(value) 일 때만 Object.is(value, other);

// 일만객체와 배열을 제외한 객체거나 원시값이면
// value === value

// 프로퍼티 갯수가 다르면 다른 객체다

// 재귀돌며 확인

// return true : 빈 객체거나 빈 배열
