/* key : value 형태로 저장하는 객체 리터럴과는 달리
   배열 리터럴은 각 요소의 '값'만 포함한다. */

/*
   배열과 객체의 차이
   객체 : 객체 > Object.prototype
   배열 : 배열 > Array.prototype > Object.prototype

   위에서 알 수 있듯이 배열은 Object 타입의 메서드를 사용할 수 있지만
   객체는 Array 타입의 메서드는 사용할 수 없다 (push(), pop(), length() 등....)
   (객체 같은 유사 배열 객체도 apply()를 활용한다면 배열 메소드 호출이 가능하니 알고있자)
*/

// 생성자를 통한 배열 생성도 있는데 간단하게 알아만 두자
var foo = new Array(3); // 인자가 1개이고, 숫자일 경우 길이로 인식
var bar = new Array(1, 2, 3); // 그 외의 경우 인자요소로 인식하여 배열 생성

// 아래가 일반적인 간단한 배열 생성
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

/* 배열의 동적 프로퍼티 생성 */
var arr = ['zero', 'one', 'two'];
console.log(arr.length); // arr.length = 3

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length) // arr.length = 3 > 길이 변화 없음

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length) // arr.length = 4 > 배열은 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.
console.dir(arr) // 배열또한 객체와 같이 key:value 형태로 배열 원소 및 프로퍼티가 존재하긴 함.

// 배열 요소 삭제 (배열 또한 객체이므로 delete 연산자 사용 가능)
delete arr[0]; // undefined
// 배열 원소 삭제
arr.splice(0, 1) // 완전 삭제 splice(시작점, 시작점에서의 갯수, 추가 요소(선택))

// 배열의 프로퍼티 열거

for (var prop in arr){
    console.log('for in: ' + prop, arr[prop]);
} // for in문은 프로퍼티와 배열 요소 전부 출력 (undefined 요소는 출력 안됨 > 있는 것'만' 다 꺼냄)

for (var i=0 ; i<arr.length ; i++) {
    console.log('일반 for: ' + i, arr[i]);
} // 일반적인 for문은 프로퍼티를 제외한 배열 요소만을 나타낸다