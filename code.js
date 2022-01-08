let bars = document.querySelector(".bars")
let side = document.getElementById("sidebar")
let arrowenter = document.querySelector(".arrowEntrar")

arrowenter.addEventListener("click",()=>{
    side.classList.remove("active")
})

bars.addEventListener("click",()=>{
    side.classList.toggle("active")
})