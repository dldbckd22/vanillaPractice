const body = document.querySelector("body")

function setImage(img){
    const image = new Image();
    image.src = `image/${img+1}.jpg`
    body.appendChild(image);
    image.classList.add("bg")
}


function randomImage(){
    const number = Math.floor(Math.random()*3);
    return number
}

function init(){
    const img  = randomImage();
    setImage(img);
}

init();


