var startBtn = document.getElementById("start")



startBtn.addEventListener("click",(event)=>{
    event.preventDefault
    startBtn.remove()
    renderTimer()
    setTimeout(timeRanOut,6000)
  
})




function renderTimer(){
    var timer = document.createElement("div")
    var header = document.getElementById("header")
    header.appendChild(timer)
    timer.textContent=6
    setInterval(function(){
        if(timer.textContent==0){
            return
        }
        else{timer.textContent--}
    },1000)
}

function timeRanOut(){
    console.log("out of time")
}