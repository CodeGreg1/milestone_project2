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
const TARGETS = document.querySelectorAll('.target')
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

let positionNum = 5
let perfectTally = 0
let shotTally = 0
let targetTally = 0

var sfx = {
    shot: new Howl({
    src: ["https://codegreg1.github.io/milestone_project2/gunshort.mp3"],
    autoplay: true
}),
    miss: new Howl({
    src: ["https://codegreg1.github.io/milestone_project2/ricochet.mp3"],
    autoplay:true
})}

PRESTART.addEventListener('click',runGame)

REPLAY.addEventListener('click', replay)

INSTRUCTION_START.addEventListener('click', instructionStart)

MISSED.addEventListener('click', missedShot)

TARGET_1.addEventListener('click',()=> {
    positionNum = 268
    shotUpdate(1)})
TARGET_2.addEventListener('click',()=> {
    positionNum = 288
    incrementScore()
    shotUpdate(2)})
TARGET_3.addEventListener('click',()=> {
    positionNum = 308
    shotUpdate(3)
    incrementScore()
    incrementScore()
})

TARGETS.forEach((target)=>{
    target.addEventListener('click', function(e) {
        target.classList.toggle('active')
        sfx.shot.play()
        incrementScore()
        targetTally++
        e.stopPropagation()
        console.log('Target clicked')
    	setTimeout(newPosition, 100)})
})

CENTERS.forEach((center)=>{
    center.addEventListener('click',()=> {
        incrementScore()
        perfectTally++
        incrementPerfectScore()})
})

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
    shotUpdate()
    setTimeout(() => circle.remove(), 200)
})})
    
function missedShot(){
    sfx.miss.play()
    sfx.miss.volume(0.6)
}

function newPosition(){
    let activeTarget = document.querySelector('.target.active')
    activeTarget.style.left = `${(Math.floor(Math.random() * positionNum) + 1)}px`;
    activeTarget.classList.toggle('active')
}

function incrementPerfectScore(){
    let oldScore = parseInt(document.getElementById("perfectScore").innerText);
    document.getElementById("perfectScore").innerText = ++oldScore;
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore
    
}

function runGame() {
    perfectTally = 0
    shotTally = 0
    SHOT_TALLY_CURRENT.innerText = shotTally
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

function resetDOM () {
    COUNTER.classList.remove('hide')
    COUNTER.classList.add('show')
    NUMS.forEach((num) => {
        num.classList.value = ''})
    NUMS[0].classList.add('in')
}

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
                COUNTER.classList.add('hide')}})})
}

function replay(){
    FINAL_SCORE.innerText = '0'
    PERFECT_SCORE.innerText = '0'
    SHOT_TALLY_CURRENT.innerText = '0'
    SCORE_SCREEN.classList.add('hiddenscore')
    SCORE_SCREEN.classList.remove('visible')
    PERFECT_SCORE.classList.remove('hiddenscore')
    PERFECT.classList.remove('hiddenscore')
    runGame() 
}

function instructionStart(){
    FINAL_SCORE.innerText = '0'
    PERFECT_SCORE.innerText = '0'
    SCORE_SCREEN.classList.add('hiddenscore')
    SCORE_SCREEN.classList.remove('visible')
    PERFECT_SCORE.classList.remove('hiddenscore')
    PERFECT.classList.remove('hiddenscore')
    PRESTART.classList.remove('hiddenscore')
    PRESTART.classList.add('visible')
}

function startScore (){
    PRESTART.classList.add('hiddenscore')
    PRESTART.classList.remove('visible')
    setTimeout(stopScore, 20000)
}

function shotUpdate(){
    shotTally++
    SHOT_TALLY_CURRENT.innerText = shotTally
}

function allScores (){ 
    SHOT_TALLY_ID.innerHTML = `${shotTally} Shots Taken`
    if(shotTally === 0){
        shotTally++}
    let perfectPercentage = Math.floor(perfectTally/shotTally*100)
    TARGET_TALLY_ID.innerHTML = `${targetTally} Targets Hit`
    PERFECT_TALLY_ID.innerHTML = `${perfectPercentage}% Perfect Shots`
}