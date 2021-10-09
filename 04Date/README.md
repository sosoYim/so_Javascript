# Date

## 주요 개념

- 자바스크립트 표준 빌트인 객체
- UTC 국제 표준시 기준
- KST(한국 표준시) = UTC + 9시간
- 1970년 1월 1일을 기점으로 (0000000000) 밀리세컨드 단위로 증가하는 **정수**
- Date 타입 객체가 정수를 가진다는 점을 이용해 두 날짜 사이의 일수, 특정 년월일의 말일 등을 구할 수 있다.

## 주요 메서드

- `new Date()` 생성자 함수
- `Date.prototype.getYear()`
- `Date.prototype.getDate()`
- `Date.prototype.getDay()`
  - 일~월 : 0 ~ 6
- `Date.prototype.getTime()`
- `Date.prototype.toISOString()`
