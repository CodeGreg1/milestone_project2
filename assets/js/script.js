const numbers = document.getElementById('numbers')
const finalScore = document.getElementById('score')
const perfectScore = document.getElementById('perfectScore')
const scoreScreen = document.getElementById('scorescreen')
const prestart = document.getElementById('prestart')
const gameScore = document.getElementById('gameScore')
//More specific to the countdown timer variables
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const replay = document.querySelector('#replay')
const target1 = document.getElementById('targetone')
const target2 = document.getElementById('targettwo')
const target3 = document.getElementById('targetthree')
const centers = document.querySelectorAll('.centertarget')
const perfect = document.querySelector('.perfect')
const shotTallyId = document.querySelector('#shotTally')
const perfectTallyId = document.querySelector('#perfectTally')
const targetTallyId = document.querySelector('#targetTally')
var positionNum = 5;
let perfectTally = 0
let shotTally = 0
let targetTally = 0

prestart.addEventListener('click',runGame)

target1.addEventListener('click',()=> {
    positionNum = 268})
target2.addEventListener('click',()=> {
    positionNum = 288
    incrementScore()})
target3.addEventListener('click',()=> {
    positionNum = 308
    incrementScore()
    incrementScore()})

var sound = "https://codegreg1.github.io/milestone_project2/gunshort.mp3"
var howl = new Howl({
    src: [sound],
    autoplay: true
})  

//These are my target event listeners for each row they will all create a gun sound, increment the total score and reset the position of the target that has dropped
const targets = document.querySelectorAll('.target')

targets.forEach((target)=>{
    target.addEventListener('click',()=> {
        target.classList.toggle('active')
        howl.play()
        incrementScore()
        targetTally++
    	setTimeout(newPosition, 100)})
    })

// Perfect score increase
centers.forEach((center)=>{
    center.addEventListener('click',()=> {
        incrementScore()
        perfectTally++
        incrementPerfectScore()})
    })

// Function creates a new position for the targets dependant on which one is chosen dictates the distance from the left border it will be using the positionNum variable
function newPosition(){
    const activeTarget = document.querySelector('.target.active')
        activeTarget.style.left = `${(Math.floor(Math.random() * positionNum) + 1)}px`;
        activeTarget.classList.toggle('active')}

// Function increments the score which is linked with the event listeners for the clicking of targets.
function incrementPerfectScore(){
    let oldScore = parseInt(document.getElementById("perfectScore").innerText);
    document.getElementById("perfectScore").innerText = ++oldScore;}

// Function for Perfect score tally throughout the current game 
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;}

// Function runs the game by initiating the count down sequence 
function runGame() {
    perfectTally = 0
    shotTally = 0
    targetTally = 0
    resetDOM()
    startScore()
    const h4 = document.querySelector('h4')
    finalScore.style.fontSize = '65px'
    runAnimation()
    h4.innerText = 'SHOOT!!!'
    numbers.classList.add('in')
    numbers.classList.remove('in')
    numbers.classList.add('out')
    }

//This function puts the end score in the h2 identifying a top score however I believe it runs beyond required so need to understand this bug
function stopScore () {
    finalScore.innerText = `${parseInt(finalScore.innerText)} Top Score!`
    scoreScreen.classList.remove('hiddenscore')
    scoreScreen.classList.add('visible')
    perfectScore.classList.add('hiddenscore')
    perfect.classList.add('hiddenscore')
    gameScore.innerText = finalScore.innerText
    finalScore.style.fontSize = '35px'
    numbers.classList.remove('out')
    allScores()
}

// Function will reset the DOM so that the game can be replayed 
function resetDOM () {
    counter.classList.remove('hide')
    counter.classList.add('show')
    nums.forEach((num) => {
        num.classList.value = ''})
    nums[0].classList.add('in')
}

// Function runs the animations for the count down from 20 to zero.
function runAnimation() {
    nums.forEach((num,idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')}})})}

replay.addEventListener('click', () => {
    finalScore.innerText = '0'
    perfectScore.innerText = '0'
    scoreScreen.classList.add('hiddenscore')
    scoreScreen.classList.remove('visible')
    perfectScore.classList.remove('hiddenscore')
    perfect.classList.remove('hiddenscore')
    runGame()  
})

// The Event listener is operated from the score screen 
const instructionStart = document.getElementById('instructionStart')
instructionStart.addEventListener('click', () => {
    finalScore.innerText = '0'
    perfectScore.innerText = '0'
    scoreScreen.classList.add('hiddenscore')
    scoreScreen.classList.remove('visible')
    perfectScore.classList.remove('hiddenscore')
    perfect.classList.remove('hiddenscore')
    prestart.classList.remove('hiddenscore')
    prestart.classList.add('visible')
})

// Function will start the timer for the game to then stop the game after the setTimeOut
function startScore (){
    prestart.classList.add('hiddenscore')
    prestart.classList.remove('visible')
    setTimeout(stopScore, 20000)
}
const buttons = document.querySelectorAll('.ripple')
buttons.forEach(button => {
    button.addEventListener('click', function (e) {
    const targetOffset = parseInt(4)
    const x = e.clientX - targetOffset
    const y = e.clientY - targetOffset
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = y + 'px'
    circle.style.left = x + 'px'
    this.appendChild(circle)
    console.log(x,y)
    shotTally++
    setTimeout(() => circle.remove(), 200)
})})
shotTallyId.textContent = shotTally

function allScores (){ 
        shotTallyId.innerHTML = `${shotTally} Shots Taken`
        targetTallyId.innerHTML = `${targetTally} Targets Hit`
        perfectTallyId.innerHTML = `${Math.floor(perfectTally/shotTally*100)}% Perfect Shots`
}