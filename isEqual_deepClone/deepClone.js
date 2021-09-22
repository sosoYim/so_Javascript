// 일반객체인지 확인
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]' || false;
}

function deepClone(obj) {
  // 배열이거나 일반객체인 경우
  if (isObject(obj) || Array.isArray(obj)) {
    // 식별자 초기화 (배열, 일반객체)
    const copiedObject = Array.isArray(obj) ? [] : {};

    // 각각의 값을 재귀로 다시 확인
    Object.keys(obj).forEach(key => {
      copiedObject[key] = deepClone(obj[key]);
    });
    return copiedObject;
  }
  // 원시값이거나 배열, 일반객체 제외 객체타입인경우 바로 반환
  return obj;
}

export default deepClone;
