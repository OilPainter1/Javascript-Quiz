var startBtn = document.getElementById("start")



startBtn.addEventListener("click",(event)=>{
    event.preventDefault
    startBtn.remove()
    renderTimer()
    renderQuestions(0)
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

function renderQuestions(index){
    document.getElementById('question').textContent=questions[index]
    document.getElementById('btn1').textContent= answers[index][0]
    document.getElementById('btn2').textContent= answers[index][1]
    document.getElementById('btn3').textContent= answers[index][2]
    document.getElementById('btn4').textContent= answers[index][3]
    document.getElementById('btn1').addEventListener("click",(event)=>{
        document.getElementById("correct").textContent=document.getElementById("correct").textContent++
    })    
    return
}





var questions=["What does DOM stand for?", "Which of the following is not a javascript type?", "Which of the following is javascript for the logical 'AND' operator?", "Which of the following is a boolean?","Which of the following does not evaluate to true?"]

var answers=[["Document Object Model","Document Object Manuscript","Deletable Object Manipulation","Document Object Manipulation"]]