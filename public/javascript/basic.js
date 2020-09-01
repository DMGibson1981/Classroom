const content = document.getElementsByClassName("lesson-content");
const back = document.getElementById("backwards");
const forward = document.getElementById("forwards");
let count = 1;

const ban = function(){
    alert("Listening!");
}

const take = function(){
    count-1;
}

const give = function(){
    count+1;
}



back.addEventListener("click", take);

forward.addEventListener("click", give);