function sum(){ // 매개변수 없음
    //매개변수 : 
    //인자 : 
    var i, _sum=0;
    for(i=0; i<arguments.length; i++){
        document.write(i+ " : " +arguments[i] + "<br />");
        //argument.lengt는 sum함수로 전달된 인자가 몇개인지 알 수 있음
        // 여기서는 4개임
        _sum = _sum + arguments[i];
    }
    return _sum;
}
document.write('result : ' + sum(1,2,3,4));
// 매개변수와 인자랑 달라도 위처럼 넣을 수 있음 

// 매개변수 인자 차이점
// sum(i) : 여기서 i는 매개변수, parameter
// sum(23) : 여기서 23은 인자, argument