
// 함수 선언문 .. add() 함수 생성
//  - 함수 끝에 세미콜론 안 붙임
function add(x,y) {
    return x + y;
}
console.log(add(3,4)); // 출력값 7



// 함수 표현식(익명 함수) .. add() 함수 생성
//  - 함수 끝에 세미콜론 붙임 (하나의 관습)

var add = function (x, y) {
    return x + y;
}; // 여기서 add는 함수를 참조하고 있는 '힘수 변수'이지 함수의 이름이 아니다.

var plus = add;

console.log(add(3,4)); // 출력값 7
console.log(plus(3,4)); // 출력값 7

// 함수 표현식에서 이름을 사용할 경우 해당 이름을 외부코드에서 접근할 수 없다
var add2 = function sum(x, y) {
    return x + y;
};

console.log(add2(3,4)); // 출력값 7
// console.log(sum(3,4)); // 출력값 sum is not defined (변수 안에서 생성된 함수명은 외부에서 접근이 불가능)

///////////////////////////////////////////////////////////////////////////////////////////////

