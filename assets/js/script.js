const NUMBERS = document.getElementById('numbers')
const FINAL_SCORE = document.getElementById('score')
const PERFECT_SCORE = document.getElementById('perfectScore')
const SCORE_SCREEN = document.getElementById('scorescreen')
const PRESTART = document.getElementById('prestart')
const GAME_SCORE = document.getElementById('gameScore')
//More specific to the countdown timer variables
const NUMS = document.querySelectorAll('.nums span')
const COUNTER = document.querySelector('.counter')
const REPLAY = document.querySelector('#replay')
const TARGET_1 = document.getElementById('targetone')
const TARGET_2 = document.getElementById('targettwo')
const TARGET_3 = document.getElementById('targetthree')
const MISSED = document.querySelector('.container')
const CENTERS = document.querySelectorAll('.centertarget')
const PERFECT = document.querySelector('.perfect')
const SHOT_TALLY_ID = document.querySelector('#shotTallyID')
const SHOT_TALLY_CURRENT = document.querySelector('#shotTallyCurrent')
const PERFECT_TALLY_ID = document.querySelector('#perfectTally')
const TARGET_TALLY_ID = document.querySelector('#targetTally')
const BULLET_HOLES = document.querySelectorAll('.ripple')
const INSTRUCTION_START = document.getElementById('instructionStart')

var positionNum = 5;
let perfectTally = 0
let shotTally = 0
let targetTally = 0

PRESTART.addEventListener('click',runGame)

TARGET_1.addEventListener('click',()=> {
    positionNum = 268})
TARGET_2.addEventListener('click',()=> {
    positionNum = 288
    incrementScore()})
TARGET_3.addEventListener('click',()=> {
    positionNum = 308
    incrementScore()
    incrementScore()})

var sfx = {
    shot: new Howl({
    src: ["https://codegreg1.github.io/milestone_project2/gunshort.mp3"],
    autoplay: true
}),
    miss: new Howl({
    src: ["https://codegreg1.github.io/milestone_project2/ricochet.mp3"],
    autoplay:true
})
}



//These are my target event listeners for each row they will all create a gun sound, increment the total score and reset the position of the target that has dropped
const TARGETS = document.querySelectorAll('.target')

TARGETS.forEach((target)=>{
    target.addEventListener('click',()=> {
        target.classList.toggle('active')
        sfx.shot.play()
        incrementScore()
        targetTally++
    	setTimeout(newPosition, 100)})
    })

// Perfect score increase
CENTERS.forEach((center)=>{
    center.addEventListener('click',()=> {
        incrementScore()
        perfectTally++
        incrementPerfectScore()})
    })

// MISSED.addEventListener('click', ()=> {
//     if (TARGET_1.classList = 'active'){
//         sfx.miss.play()
//     }
// })

// Function creates a new position for the targets dependant on which one is chosen dictates the distance from the left border it will be using the positionNum variable
function newPosition(){
    let activeTarget = document.querySelector('.target.active')
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
    const H4 = document.querySelector('h4')
    FINAL_SCORE.style.fontSize = '65px'
    runAnimation()
    H4.innerText = 'SHOOT!!!'
    NUMBERS.classList.add('in')
    NUMBERS.classList.remove('in')
    NUMBERS.classList.add('out')
    }

//This function puts the end score in the h2 identifying a top score however I believe it runs beyond required so need to understand this bug
function stopScore () {
    FINAL_SCORE.innerText = `${parseInt(FINAL_SCORE.innerText)} Top Score!`
    SCORE_SCREEN.classList.remove('hiddenscore')
    SCORE_SCREEN.classList.add('visible')
    PERFECT_SCORE.classList.add('hiddenscore')
    PERFECT.classList.add('hiddenscore')
    GAME_SCORE.innerText = FINAL_SCORE.innerText
    FINAL_SCORE.style.fontSize = '35px'
    NUMBERS.classList.remove('out')
    allScores()
}

// Function will reset the DOM so that the game can be replayed 
function resetDOM () {
    COUNTER.classList.remove('hide')
    COUNTER.classList.add('show')
    NUMS.forEach((num) => {
        num.classList.value = ''})
    NUMS[0].classList.add('in')
}

// Function runs the animations for the count down from 20 to zero.
function runAnimation() {
    NUMS.forEach((num,idx) => {
        let nextToLast = NUMS.length - 1
        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                COUNTER.classList.add('hide')}})})}

REPLAY.addEventListener('click', () => {
    FINAL_SCORE.innerText = '0'
    PERFECT_SCORE.innerText = '0'
    SHOT_TALLY_CURRENT.innerText = '0'
    SCORE_SCREEN.classList.add('hiddenscore')
    SCORE_SCREEN.classList.remove('visible')
    PERFECT_SCORE.classList.remove('hiddenscore')
    PERFECT.classList.remove('hiddenscore')
    runGame()  
})

// The Event listener is operated from the score screen 
INSTRUCTION_START.addEventListener('click', () => {
    FINAL_SCORE.innerText = '0'
    PERFECT_SCORE.innerText = '0'
    SCORE_SCREEN.classList.add('hiddenscore')
    SCORE_SCREEN.classList.remove('visible')
    PERFECT_SCORE.classList.remove('hiddenscore')
    PERFECT.classList.remove('hiddenscore')
    PRESTART.classList.remove('hiddenscore')
    PRESTART.classList.add('visible')
})

// Function will start the timer for the game to then stop the game after the setTimeOut
function startScore (){
    PRESTART.classList.add('hiddenscore')
    PRESTART.classList.remove('visible')
    setTimeout(stopScore, 20000)
}
BULLET_HOLES.forEach(hole => {
    hole.addEventListener('click', function (e) {
    const TARGET_OFFSET = parseInt(4)
    const X = e.clientX - TARGET_OFFSET
    const Y = e.clientY - TARGET_OFFSET
    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = Y + 'px'
    circle.style.left = X + 'px'
    this.appendChild(circle)
    console.log(X,Y)
    shotTally++
    SHOT_TALLY_CURRENT.innerText = shotTally
    setTimeout(() => circle.remove(), 200)
})})

function allScores (){ 
        console.log('finalscore code run start')
        SHOT_TALLY_ID.innerHTML = `${shotTally} Shots Taken`
        console.log('finalscore code run shots taken')
        TARGET_TALLY_ID.innerHTML = `${targetTally} Targets Hit`
        console.log('finalscore code run targettally')
        let perfectPercentage = Math.floor(perfectTally/shotTally*100)
        if(perfectPercentage === NaN){perfectPercentage = '0'}
        PERFECT_TALLY_ID.innerHTML = `${perfectPercentage}% Perfect Shots`
        console.log('finalscore code run perfect shots')
}