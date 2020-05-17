/* JavaScript의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.
                                       (부모 객체 = 프로토타입 객체)
                                       
   모든 객체의 프로토타입은 객체를 생성할 때 결정된다                                    
*/

// 리터럴 방식으로 생성된 객체의 경우 Object.prototype 객체가 프로토타입 객체가 된다
var foo = {
    name : 'foo',
    age : 30
}

// 이처럼 Object.prototype 객체의 메소드를 바로 사용해도 에러가 발생하지 않는다.
// 리터럴 방식의 foo 객체가 상속처럼 toString() 메소드를 사용한 것.
console.log(foo.toString());

// foo 객체에 대한 프로토타입 객체를 확인할 수 있음

// console.log는 요소를 HTML과 같은 트리 구조로 출력
// console.dir은 요소를 JSON과 같은 트리 구조로 출력
console.log(foo);
console.dir(foo);

console.log(document.body);
console.dir(document.body);