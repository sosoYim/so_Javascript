// 함수의 매개변수와 인자의 갯수를 비교하여 최소 갯수(매개변수 갯수)를 충족하는지 확인
const isMinArgumentLenghtCorrect = (functionToCompare, argumentsLength) => {
  const parameterLength = functionToCompare.length;
  const functionName = functionToCompare.name;
  if (argumentsLength < parameterLength) {
    throw new Error(
      `${functionName} requires at least ${parameterLength} argument, but only ${argumentsLength} were passed`
    );
  }
};

// 일반객체인지 확인
function isNormalObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

// 같은 타입인지(객체타입 끼리도) 확인
function isSameType(obj1, obj2) {
  isMinArgumentLenghtCorrect(isSameType, arguments.length);
  return (
    Object.prototype.toString.call(obj1) ===
    Object.prototype.toString.call(obj2)
  );
}

// 두 인자의 값이 같은지 확인 ========================================
function isEqual(obj1, obj2) {
  // 인자 갯수 체크 => 에러 반환
  isMinArgumentLenghtCorrect(isEqual, arguments.length);

  // 비교 하려는 두 객체의 타입이 다르면 false
  if (!isSameType(obj1, obj2)) return false;

  // 원시타입일 때
  if (obj1 === null || typeof obj1 !== 'object') {
    return Object.is(obj1, obj2);
  }

  // 열거하여 비교해야할 요소들 (Object, Array)
  if (isNormalObject(obj1) || Array.isArray(obj1)) {
    Array.isArray(obj1) && obj1.sort((a, b) => a - b);
    Array.isArray(obj2) && obj2.sort((a, b) => a - b);

    // 길이가 다른 경우 return false
    const obj1KeyLength = obj1.length || Object.keys(obj1).length;
    const obj2KeyLength = obj2.length || Object.keys(obj2).length;
    if (obj1KeyLength !== obj2KeyLength) return false;

    // 객체 안에 객체가 있다면 재귀 돌리기
    // 키값과 같지 않거나 없을 경우 false
    for (const [key, value] of Object.entries(obj1)) {
      if (typeof value === 'object') return isEqual(obj1[key], obj2[key]);
      if (
        (!Number.isNaN(obj2[key]) && !obj2[key]) ||
        !Object.is(obj1[key], obj2[key])
      )
        return false;
    }
    return true;
  }

  // 일반객체, 배열을 제외한 객체(Date, Function...)일 때
  return obj1 === obj2 || false;
}

export default isEqual;
