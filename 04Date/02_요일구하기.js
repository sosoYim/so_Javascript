/*
2. 요일 구하기
*/

const getDay = strDay => {
  const DAYS = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일'
  ];
  return DAYS[new Date(strDay).getDay()];
};

console.log(getDay('2021-07-24'));
