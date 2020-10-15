const toDoForm = document.querySelector(".js-toDoForm");
const inputToDo = toDoForm.querySelector("input");
const ul = document.querySelector("ul");
const TODO_NM = "TODO";
let toDoList=[];

function delBtn(event){
    const delBTN = event.target;
    const delLi = delBTN.parentNode;
    ul.removeChild(delLi);
    const cleanToDo = toDoList.filter(function(todoss){
        return todoss.id!=parseInt(delLi.id);
    })
    toDoList=cleanToDo;
    saveToDo();
}

// function delToDo(event){
//     const btn = event.target;
//     const li = btn.parentNode;
//     toDoList.removeChild(li);
//     const cleanToDos = toDos.filter(function(ToDos){
//         return ToDos.id != parseInt(li.id);
//     })
//     toDos = cleanToDos;
//     saveToDos()
// }





function saveToDo(){
    localStorage.setItem(TODO_NM,JSON.stringify(toDoList));
}

function makeList(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.addEventListener("click",delBtn);
    const Newid = toDoList.length + 1
    span.innerText=text;
    btn.innerText="X";
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    li.id = Newid;
    const toDoObj = {
        text : text,
        id: Newid
    };
    toDoList.push(toDoObj);
    saveToDo();
}

function submitHanddler(event){
    event.preventDefault();
    const currentValue = inputToDo.value;
    makeList(currentValue);
    inputToDo.value="";

}

function loadToDo(){
    const currentToDo = localStorage.getItem(TODO_NM);
    if (currentToDo!=null){
        const parsedToDo = JSON.parse(currentToDo);
        parsedToDo.forEach(function(todos){
            makeList(todos.text)
        });
    }
}

function init(){
    loadToDo();
    toDoForm.addEventListener("submit",submitHanddler);
}

init();