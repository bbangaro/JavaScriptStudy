/* key : value 형태로 저장하는 객체 리터럴과는 달리
   배열 리터럴은 각 요소의 '값'만 포함한다. */

var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];

console.log(colorArr[0]);
console.log(colorArr[1]);
console.log(colorArr[4]);


// 빈 배열
var emptyArr = [];
console.log(emptyArr[0]);

// 빈 배열의 원하는 위치에 값 동적 생성
emptyArr[0] = 100;
emptyArr[3] = 'eight';
emptyArr[7] = true;
console.log(emptyArr); // 출력값 [ 100, <2 empty items>, 'eight', <3 empty items>, true ]
console.log(emptyArr.length); // 빈 칸은 undefined 되며 길이는 가장 큰 index번호 기준으로 생성 됨

