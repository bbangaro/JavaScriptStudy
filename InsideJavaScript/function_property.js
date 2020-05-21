/* **** 함수 객체의 기본 프로퍼티 **** */

function add(x , y) {
    return x + y ;
}
    console.dir(add); // < 크롬 콘솔창에서 확인할 수 있다

// length 프로퍼티 (함수를 작성할 때 정의한 인자 개수)
function func0() {

}
function func1(x) {
    return x;
}
function func2(x, y) {
    return x + y;
}
function func3(x, y, z) {
    return x + y + z;
}
console.log('func0.length - ' + func0.length); // 출력값 0
console.log('func1.length - ' + func1.length); // 출력값 1
console.log('func2.length - ' + func2.length); // 출력값 2
console.log('func3.length - ' + func3.length); // 출력값 3

// 함수 객체와 프로토타입 객체와의 관계를 보여주는 코드

function myFunction() {
    return true;
}

console.dir(myFunction.prototype);
console.dir(myFunction.prototype.constructor); //프로토타입 객체와 매핑된 함수를 알아볼 수 있다.