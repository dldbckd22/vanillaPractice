const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greeting");
const USER_NM="currentUserName";

function saveName(text){
    localStorage.setItem(USER_NM,text);
}

function paintGreeting(text){
    form.classList.remove("showing");
    greeting.classList.add("showing");
    greeting.innerText = `Hello ${text}`;
} 
            
function submitHandller(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add("showing");
    form.addEventListener("submit",submitHandller);
}

function loadName(){
    const currentUserName = localStorage.getItem(USER_NM);
    if (currentUserName == null){
        askForName();
    } else {
        paintGreeting(currentUserName);
    }
}

function init(){
    loadName();
}

init();