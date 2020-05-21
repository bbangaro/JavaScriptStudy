
/* **** 함수 선언문 .. add() 함수 생성 **** */
//  - 함수 끝에 세미콜론 안 붙임

console.log(add(3,4)); // 출력값 7
// --> 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작한다(호이스팅). 그러므로 함수 표현식 사용을 권장한다

function add(x,y) {
    return x + y;
}
console.log(add(3,4)); // 출력값 7



/* **** 함수 표현식(익명 함수) .. add() 함수 생성 **** */
//  - 함수 끝에 세미콜론 붙임 (하나의 관습)

// console.log(addd(3,4));
// --> 함수 표현식으로 선언했기 때문에 호이스팅 되지 않는다.

var addd = function (x, y) {
    return x + y;
}; // 여기서 add는 함수를 참조하고 있는 '힘수 변수'이지 함수의 이름이 아니다.

var plus = addd;

console.log(addd(3,4)); // 출력값 7
console.log(plus(3,4)); // 출력값 7

// 함수 표현식에서 이름을 사용할 경우 해당 이름을 외부코드에서 접근할 수 없다
var add2 = function sum(x, y) {
    return x + y;
};

console.log(add2(3,4)); // 출력값 7
// console.log(sum(3,4)); // 출력값 sum is not defined (변수 안에서 생성된 함수명은 외부에서 접근이 불가능)

///////////////////////////////////////////////////////////////////////////////////////////////

/* **** 함수도 객체처럼 프로퍼티를 가질 수 있다 **** */
function add3(x, y) {
    return x+y;
}

// add3() 함수 객체에 result, status 프로퍼티 추가
add3.result = add(2,3);
add3.status = 'OK';

console.log('함수에 프로퍼티 추가 : ' + add3.result);
console.log('함수에 프로퍼티 추가 : ' + add3.status);

/* **** 자바스크립트에서 함수는 값으로 취급된다 **** */

// 변수에 함수 할당
var bar = function () { return 100; };
console.log('변수에 함수 할당 : ' + bar()); // 출력값 100

// 프로퍼티에 함수 할당
var obj = {};
obj.baz = function () { return 200; }
console.log('프로퍼티에 함수 할당 : ' + obj.baz());

// 함수를 다른 함수의 인자로 넘긴 코드
var foo = function (func) {
    func(); //인자로 받은 add3 함수 호출
}
    
    // foo 함수 실행
    foo(function () {
       console.log('인자로 받은 함수 호출하기');
    });

// 리턴값으로 활용
var test = function () {
    return function () {
        console.log("익명함수에서 리턴값을 함수로 넣었다!")
    }
}
    var test2 = test();
    test2();