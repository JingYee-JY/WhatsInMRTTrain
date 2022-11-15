const start = document.querySelector(".start");
const startButton = document.querySelector(".startButton");
const game = document.querySelector(".game");
const number = document.querySelector(".number");
const questionImage = document.querySelector(".questionImage")
const popUp = document.querySelector(".popUp")
const background = document.querySelector(".background")
const image = document.querySelector(".image")
const text = document.querySelector(".text")
const final = document.querySelector(".final")
const againButton = document.querySelector(".againButton");
const homeButton = document.querySelector(".homeButton");

const clickSound = document.getElementById("click")
const clap = document.getElementById("clap")
const correct = document.getElementById("correct")
const wrong = document.getElementById("wrong")

let total;
let current;

let answer;

let tempoArray = [];


let questions = [
    {picture:"MertoMap", data:"Y"}, 
    {picture:"Chair", data:"N"}, 
    {picture:"Handler", data:"Y"}, 
    {picture:"WallPhone", data:"N"}, 
    {picture:"Seats", data:"Y"}, 
    {picture:"FareGate", data:"N"}, 
    {picture:"ReservedSeating", data:"Y"},
    {picture:"InformationSystem", data:"N"}, 
    {picture:"Indicator", data:"Y"},
    {picture:"Display", data:"Y"} 
]

startButton.addEventListener("click", () => {
    playClickSound()
    let delay = setTimeout(() => {
        start.classList.add("hide")
        game.classList.remove("hide")
        
        tempoArray = []

        total = 5;
        current = 0;

        Question()
    }, 200);
})

function Question(){
    current += 1;

    if(current > total){
        clap.currentTime = 0
        clap.play()
        game.classList.add("hide")
        final.classList.remove("hide")
        return
    }

    if(tempoArray.length == 0){
        tempoArray = []
        for(let i = 0; i < questions.length; i++){
            tempoArray.push(questions[i])
        }
    }

    console.log(tempoArray)

    number.innerHTML = `${current} / ${total}`
    let randomQuestion = Math.floor(Math.random() * tempoArray.length)

    console.log(randomQuestion)

    questionImage.src = "./img/" + tempoArray[randomQuestion].picture + ".png"
    answer = tempoArray[randomQuestion].data

    tempoArray.splice(randomQuestion, 1)
}

for(let b = 1; b < 3; b++){
    let btnClass = "btn" + b

    let btn = document.querySelector(`.${btnClass}`)

    btn.addEventListener("click", ()=>{
        let data = btn.getAttribute("data")
        console.log(answer)
        popUp.classList.remove("hide")
        if(data == answer){
            correct.currentTime = 0
            correct.play()
            background.style.backgroundColor = "#28AD4D"
            image.src = "./img/correct.png"
            text.innerHTML="Correct!"
            let delay = setTimeout(()=>{
                popUp.classList.add("hide")
                Question()
            },1500)
        }
        if(data != answer){
            wrong.currentTime = 0
            wrong.play()
            background.style.backgroundColor = "#DE4949"
            image.src = "./img/wrong.png"
            text.innerHTML="Wrong!"
            let delay = setTimeout(()=>{
                popUp.classList.add("hide")
            },1500)
        }
    })
    
}

againButton.addEventListener("click", () =>{
    playClickSound()
    let daley = setTimeout(() =>{
        final.classList.add("hide")
        start.classList.remove("hide")
    }, 200)
})

homeButton.addEventListener("click", ()=>{
    playClickSound()
    let daley = setTimeout(() =>{
        location.assign('https://gimme.sg/activations/dementia/');
    }, 200)
})

function playClickSound(){
    console.log(clickSound)
    clickSound.currentTime = 0
    clickSound.play()
}

/*prevent double tag zoom*/
document.addEventListener('dblclick', function(event) {
    event.preventDefault();
    }, { passive: false });