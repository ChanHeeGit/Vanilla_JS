const title = document.querySelector("#title");
//2020_0121_이찬희
const CLICK_CLASS = "clicked";

/* version_1
function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICK_CLASS){
        title.className = CLICK_CLASS;
    } else{
        title.className = "";
    }
}
*/

// version_2
function handleClick(){

    //title.classList.toggle(CLICK_CLASS); // 한번에 해결 가능 (2가지일경우)
    const hasClass = title.classList.contains(CLICK_CLASS);
    if(hasClass){
        title.classList.remove(CLICK_CLASS);
    }else{
        title.classList.add(CLICK_CLASS);
    }
}



function init(){
    title.addEventListener("click", handleClick);
    //mouseenter --> 마우스 올라갈때
}

init();




/* 
//글자 색깔 바꾸기
const BASE_COLOR ="red";
const OTHER_COLOR = "blue";

function handleClick(){
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
    console.log(title.style.color);
}
*/