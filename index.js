var startBtn = document.getElementById("start")
var recentScores = document.getElementById("recentScores")
recentScores.addEventListener("click",(event)=>{
    event.preventDefault()
    var header = document.getElementById("header")
    var userScore = document.createElement("div")
    userScore.textContent= localStorage.getItem("Score")
    header.appendChild(userScore)
})

startBtn.addEventListener("click",(event)=>{
    event.preventDefault
    startBtn.remove()
    renderTimer()
    renderQuestions(0)
    return
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
    timer.textContent= 100
    var intervalID = setInterval(function(){
        if(timer.textContent==0 || timer.textContent<0){
            var section = document.getElementById("questionSection")
            var question = document.getElementById("question")
            question.textContent=""
            timer.remove()
            clearInterval(intervalID)

            renderInput()
        }
        else{timer.textContent--}
    },1000)
    return
}



function renderQuestions(index,intervalID){

    if(index == 19){
        console.log('reached end of questions')
        clearTimeout()
        var timer = document.getElementById("time")
        timer.remove()
        renderInput()

        return
    }

    var timer = document.getElementById("time")
    var question = document.createElement("div")
    var section = document.getElementById("questionSection")
    section.appendChild(question)
    question.setAttribute("id", "question")
    question.textContent=questions[index]
    var NotAnswerArray = [0,1,2,3].filter((number)=>number!=answerArray[index])
    question.addEventListener("click", (event)=>{
        event.preventDefault
        event.stopPropagation
        console.log(NotAnswerArray)
        if(event.target.id == answerArray[index]){
            increaseNumCorrect()
            section.removeChild(question)
            renderQuestions(++index)
            return
        }else if(NotAnswerArray.includes(parseInt(event.target.id))){
            section.removeChild(question)
            timer.textContent = timer.textContent - 5
            renderQuestions(++index)
            return
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

function renderInput() {
    var heading = document.createElement('h3')
    heading.textContent="Enter your name and save your score!"
    var input = document.createElement("input")
    var saveBtn = document.createElement("button")
    var numCorrect = document.getElementById("correct")
    var header = document.getElementById("header")
    saveBtn.textContent= "Save"
    saveBtn.addEventListener("click",(event)=>{
        event.preventDefault()
        localStorage.setItem("Score",input.value + ": " + numCorrect.textContent)
        input.remove()
        saveBtn.remove()
        heading.remove()
        return
    })
    input.id="nameInput"
    input.type= "text"
    header.appendChild(heading)
    header.appendChild(input)
    header.appendChild(saveBtn)
    return
}



var questions=[
    "What does DOM stand for?",
    "Which of the following is not a javascript type?",
    "Which of the following is javascript for the logical \"AND\" operator?",
    "Which of the following is a boolean?",
    "Which of the following does not evaluate to true?",
    "Which of the following is not a web API?",
    "How many times will this for loop run: for(var i = 0; i <3, i++)?",
    "What will console.log(\"4+4\") output?",
    "What will console.log(\"4\" + \"4\") output?",
    "Which Array method returns and removes the last element of the array?",
    "Which Array method returns and removes the first element of the array?",
    "Which of the following is a String?",
    "What is the symbol for \"not\" in javascrit?",
    "What will console.log(typeof true) output?",
    "What index is \"2\" at in the array [1,2,3,4]",
    "Which web API allows you to make http requests?",
    "What does CSS stand for?",
    "Which of the following is not an http request?",
    "Which of the following is an escape character?",
    "What type of code block follows a try block?",


]

var answers=[
    ["Document Object Model","Document Object Manuscript","Deletable Object Manipulation","Document Object Manipulation"],
    ["Boolean","Number","String","Exponent"],
    ["||","!","$$","&&"],
    ["\"True\"","true","\"true\"","\"false\""],
    ["!false","!!true","true","!!false"],
    ["fetch","DOM","React.js","IndexedDB"],
    ["4", "3", "2", "1"],
    ["8","44","4+4","4"],
    ["8","44","4+4","4"],
    ["map","filter","push","pop"],
    ["shift","reduce","slice","join"],
    ["4","String","\"4\"","four"],
    ["||","!","?!","??"],
    ["array","number","string","boolean"],
    ["1","2","3","0"],
    ["fetch","DOM","indexedDB","keyboard API"],
    ["certified style sheet","correct server status","cascading style sheet","certified server status"],
    ["put","postpone","post","get"],
    ["?","\\","-","+"],
    ["while","if","else","catch"],

]

var answerArray = [0,3,3,1,3,2,0,2,1,3,0,2,1,3,0,0,2,1,1,3]