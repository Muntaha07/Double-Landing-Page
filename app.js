var containerEL = document.querySelector("#container")
var leftEL = document.querySelector(".left")
var rightEL = document.querySelector(".right")

leftEL.addEventListener("mouseenter",function(){
    containerEL.classList.add("active-left")
})
leftEL.addEventListener("mouseleave",function(){
    containerEL.classList.remove("active-left")
})
rightEL.addEventListener("mouseenter",function(){
    containerEL.classList.add("active-right")
})
rightEL.addEventListener("mouseleave",function(){
    containerEL.classList.remove("active-right")
})