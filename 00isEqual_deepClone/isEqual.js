// 인자의 수가 매개변수 수보다 적으면 에러 반환
const errorLackArgument = (functionToCompare, argumentsLength) => {
  if (argumentsLength < functionToCompare.length) {
    throw new Error(
      `${functionToCompare.name} requires at least ${functionToCompare.length} argument, but only ${argumentsLength} were passed`
    );
  }
};

function isEqual(obj1, obj2) {
  errorLackArgument(isEqual, arguments.length);

  if (
    Object.prototype.toString.call(obj1) !==
    Object.prototype.toString.call(obj2)
  )
    return false;

  // 원시타입인 경우
  if (obj1 === null || typeof obj1 !== 'object') {
    return Object.is(obj1, obj2);
  }

  // Object, Array인 경우
  if (
    Object.prototype.toString.call(obj1) === '[object Object]' ||
    Array.isArray(obj1)
  ) {
    const [obj1KeyLength, obj2KeyLength] = [
      Object.keys(obj1),
      Object.keys(obj2)
    ];

    if (obj1KeyLength.length !== obj2KeyLength.length) return false;

    Array.isArray(obj1) && obj1.sort((a, b) => a - b);
    Array.isArray(obj2) && obj2.sort((a, b) => a - b);

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

  // 일반객체, 배열을 제외한 객체인 경우
  return obj1 === obj2;
}

export default isEqual;
