//지역변수 선언시 var 안붙이면 전역변수로 인식함

function a(){
    var i=0;
}
for(var i=0; i<5; i++){
    a();
    document.write(i);
}