const form = document.querySelector(".js-form")
    ,input = form.querySelector("input")
    ,greeting = document.querySelector(".js-greetings");

//showing은 css에 추가된 것.. on/off를 위해 사용
const USER_LS = "currentUser"
    ,SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text); // 앞이 key, 뒤가 value
}

function handleSubmit(event){
    //기본적으로 form에서 Enter를 누르면 입력한 text가 사라지며 전송하려고한다
    //그것을 막기 위한 method
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    //form이 보이게..
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    //greeting을 추가하고 display:block속성 add
    greeting.classList.add(SHOWING_CN);
    //그 안에 아래의 텍스트 삽입
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}



init();