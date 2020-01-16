const title = document.querySelector("#title");


function handleResize(){
    console.log("ffff");
};

function handleClick() {
    if(title.style.color=="blue") title.style.color="white";
    else title.style.color="blue";
    
}

// 내가 원하는 시점에 handleResize method 호출
window.addEventListener("resize", handleResize);

// 지금 바로 handleResize method 호출
//window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick);

const age = prompt("how old are you");

if(age>20){
    console.log("drinking");
}
else{
    console.log('no');
}
