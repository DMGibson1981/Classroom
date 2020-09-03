const slideList = ["assets/images/Slide1.jpg", "assets/images/Slide2.jpg", "assets/images/Slide3.jpg"];
let slideOne = document.querySelector("#s1");
let pageNo = 0;
let currentPage = slideList[pageNo];
let back = document.querySelector("#backward");
let forward = document.querySelector("#forward");
slideOne.setAttribute("src", currentPage);

let resetLow = function(){
    if(pageNo < 0){
        pageNo = slideList.length-1;
    }
}

let resetHigh = function(){
    if(pageNo > slideList.length-1){
        pageNo = 0;
    }
}

forward.addEventListener("click", function() {
    pageNo++;
    resetHigh();
    currentPage = slideList[pageNo];
    slideOne.setAttribute("src", currentPage);
});

back.addEventListener("click", function() {
    pageNo--;
    resetLow();
    currentPage = slideList[pageNo];
    slideOne.setAttribute("src", currentPage);
});