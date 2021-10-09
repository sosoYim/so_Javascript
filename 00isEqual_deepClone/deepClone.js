function deepClone(obj) {
  // 배열이거나 일반객체인 경우
  if (
    Object.prototype.toString.call(obj) === '[object Object]' ||
    Array.isArray(obj)
  ) {
    const copiedObject = Array.isArray(obj) ? [] : {};

    Object.keys(obj).forEach(key => {
      copiedObject[key] = deepClone(obj[key]);
    });
    return copiedObject;
  }

  // 배열, 일반객체 제외 객체타입 혹은 원시타입인 경우
  return obj;
}

export default deepClone;
