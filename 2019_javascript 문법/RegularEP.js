//정규표현식
//문법에 맞게 작성을 하면 해당되는 정보를 찾아준다.

var str = "a";
// 슬래시(/)안의 문자가 찾고자 하는 것
var pattern =/a/;
// 정규표현식 객체 생성, 'a'라는 문자를 찾는 것, 위랑 똑같으 뜻
var pattern = new RegExp('cded');
// a. -> a뒤에 아무 문자나 1개 와야 함

pattern.test('abcd');
// 검색의 대상이 되는 인자 abcd에 찾는 값이 있으면 true 없으면 false
var chanhee = "chanhee";
// chanhee 문자열 중 pattern에 해당하는 값을 A로 치환
chanhee.replace(pattern, 'A');

//정규표현식 옵션 i ,g

// i : 대소문자 구분 x 
var xi = /a/;
"Abcde".match(xi); // a로 인식되어 null

//  g 대소문자 구분 O


