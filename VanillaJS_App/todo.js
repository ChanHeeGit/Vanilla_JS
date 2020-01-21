const toDoForm = document.querySelector(".js-toDoForm")
    ,toDoInput = toDoForm.querySelector("input")
    ,toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    //html, 화면상에서 지우는 부분..
    toDoList.removeChild(li);

    //Local Storage에서 지우는 부분
    //filter : return값에 해당하는 요소만 반환(true)
    // return true인 요소들만 모아서 새 array를 생성한다.
    // cleanToDos에서 요소가 지워지게 되고..
    
    const cleanToDos = toDos.filter(function(toDo){
        // !! li.id는 string이라 int로 형변환 해줌
        return toDo.id !== parseInt(li.id);
        
    });
    // toDos = cleanToDos를 통해 재정의 하면 삭제가 완료된다
    toDos = cleanToDos;
    saveToDos();

    //해당 list의 id가 이부분!
    console.log(event.target.parentNode);
}

function saveToDos(){
    //localStorage에는 js의 object를 저장할 수 없고 string만 저장할 수 있음
    //stringify : object -> string 변경
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
   
function paintToDO(text){
    //create li tag
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1; // id값의 초기값 : 0 + 1 = 1
    delBtn.innerHTML = "X";
    //delBtn에 mouseEvent 추가
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); // delBtn을 li에 넣음
    li.appendChild(span); //span을 li안에 넣고
    li.id = newId; // li에 id값을 부여
    toDoList.appendChild(li); // 최종적으로 toDoList에 li를 넣음
    const toDoObj = {
        text: text,
        id: newId
    };
    //array에 push
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDO(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //string으로 저장된 data를 불러와야 하니 다시 object로 변환해준다
        const parseToDos = JSON.parse(loadedToDos);
        parseToDos.forEach(function(toDo){
           paintToDO(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();