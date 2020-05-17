/* 참조에 의한 호출방식
   값에 의한 호출 Call By Value (기본타입)
   참조에 의한 호출 Call By Reference (참조타입)
*/

var a = 100; // 변수
var objA = { value : 100 }; // 객체


/* 매개 변수 2개 받는 changeArg 함수 작성 후 각 200값 셋팅 */
function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num); // 출력 값 200
    console.log(obj); // 출력 값 200
}

/* changeArg 함수에 기본타입과 참조타입 으로 선언 했던 100과 200을 넣어 본다 */
changeArg(a, objA);


console.log(a); // 값을 복사 하는 방식인 기본타입은 기존 값이 변경되지 않는 100으로 출력
console.log(objA); // 참조 값을 복사 하는 경우 변경 된 위치 값인 200으로 출력되는 것을 볼 수 있다
