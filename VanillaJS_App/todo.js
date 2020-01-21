const toDoForm = document.querySelector(".js-toDoForm")
    ,toDoInput = toDoForm.querySelector("input")
    ,toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

function paintToDO(text){
    //create li tag
    const li = document.createElement("li");
    //create button tag
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn); // delBtn을 li에 넣음
    li.appendChild(span); //span을 li안에 넣고
    toDoList.appendChild(li); // 최종적으로 toDoList에 li를 넣음
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();