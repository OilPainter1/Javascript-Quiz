var startBtn = document.getElementById("start")



startBtn.addEventListener("click",(event)=>{
    event.preventDefault
    startBtn.remove()
    renderTimer()
    renderQuestions(0,0)
    setTimeout(timeRanOut,20000)
  
})


function increaseNumCorrect() {
    var numCorrect = document.getElementById("correct")
    numCorrect.textContent++
}


function renderTimer(){
    var timer = document.createElement("div")
    timer.setAttribute("id","time")
    var header = document.getElementById("header")
    header.appendChild(timer)
    timer.textContent=20
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

function renderQuestions(index,correctAnswer){
    var timer = document.getElementById("time")
    var question = document.createElement("h2")
    var section = document.getElementById("questionSection")
    section.appendChild(question)
    question.setAttribute("id", "question")
    question.textContent=questions[index]
    question.addEventListener("click", (event)=>{
        event.preventDefault
        event.stopPropagation
        if(event.target.id == correctAnswer){
            increaseNumCorrect()
            section.removeChild(question)
            renderQuestions(++index,2)
            return
        }else{
            section.removeChild(question)
            timer.textContent = timer.textContent - 5

        }
        
    })
    renderButtons(index)   
    return
}

function renderButtons(index){
    for (var i =0; i < 4; i++){
        var button = document.createElement('button')
        button.textContent= answers[index][i]
        button.setAttribute("id", i)
        document.getElementById("question").appendChild(button)
    }
}




var questions=["What does DOM stand for?", "Which of the following is not a javascript type?", "Which of the following is javascript for the logical 'AND' operator?", "Which of the following is a boolean?","Which of the following does not evaluate to true?"]

var answers=[["Document Object Model","Document Object Manuscript","Deletable Object Manipulation","Document Object Manipulation"],["test1","test2","test3","test4"]]