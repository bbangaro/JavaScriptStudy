/* 기본 타입과 표준 메서드
    - 기본타입을 위해 정의된 메소드들에 의해 객체처럼 호출이 가능하다.
 */

// 숫자 메서드 호출
var num = 0.5;
console.log(num.toExponential(1)); // 5.0e-1 > 소수점 아래 몇 번째를 지수 형태의 문자열로 반환

// 문자열 메서드 호출
console.log(("test".charAt(2))); // s > 인자로 받은 위치의 문자를 반환



/* 자바스크립트의 연산자
    - '+'연산자의 경우 숫자끼리만 더하기 연산이 수행되며, 문자열이 섞일 경우 문자열 연산이 수행된다
 */

var add = 1 + 2;
var add2 = 'my' + 'string';
var add3 = 1 + 'string';
var add4 = 'string' + 2;

console.log(add);
console.log(add2);
console.log(add3);
console.log(add4);

/* typeof 연산자
   기본 타입 : 숫자(number), 문자열(string), 불린값(boolean), null(object), undefined(undefined)
   참조 타입 : 객체(object), 배열(object), 함수(function)
 */


/* 동등 연산자(==) 와 일치 연산자 (===)
    동등 연산자(==)는 타입변환을 거친 후 비교
    일치 연산자(===)는 타입변환을 거친 후 비교
     - 타입 변환에 따른 잘못된 결과를 얻을 수 있으므로 일치 연산자(===) 사용을 권한다
 */
console.log( 1 == '1'); // true > 타입 변환 후 두 값이 같다고 판단
console.log( 1 === '1'); // false > 타입 변환을 하지 않았기 때문에 false 처리

/* !! 연산자
    - 피연산자를 불린값으로 변환하는건데 이건 좀 이해가 안된다
    - 객체가 비어 있어도 true로 반환되니 주의 하라는데..
 */
console.log(!!0); //false
console.log(!!1); //true
console.log(!!'string'); // true
console.log(!!''); // false
console.log(!!true); // true
console.log(!!false); // false
console.log(!!null); // false
console.log(!!undefined); // false
console.log(!!{}); // true
