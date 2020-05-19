/* key : value 형태로 저장하는 객체 리터럴과는 달리
   배열 리터럴은 각 요소의 '값'만 포함한다. */

var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];

console.log(colorArr[0]);
console.log(colorArr[1]);

// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);

// 빈 배열의 원하는 위치에 값 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr); // 출력값 [ 100, <2 empty items>, 'eight', <3 empty items>, true ]
console.log(emptyArr.length); // 빈 칸은 undefined 되며 길이는 가장 큰 index번호 기준으로 생성 됨

// 자바스크립트 모든 배열에 존재하는 length 프로퍼티는 길이를 명시적으로 변경할 수 있다.
emptyArr.length = 10;
emptyArr.push('end'); // push로 들어간 값은 배열의 맨 마지막에 위치하며 배열의 길이 또한 달라지니 참고하도록 하자
console.log(emptyArr);
console.log(emptyArr.length);

// 배열의 길이가 100이라 하더라도 값이 들어있지 않은 인덱스는 실제로 메모리가 할당되지 않는다.
