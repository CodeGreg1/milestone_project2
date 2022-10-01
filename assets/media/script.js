//Elements related to the basic visual setup and interaction
const NUMBERS = document.getElementById('numbers')
const FINAL_SCORE = document.getElementById('score')
const PERFECT_SCORE = document.getElementById('perfectScore')
const SCORE_SCREEN = document.getElementById('scorescreen')
const PRESTART = document.getElementById('prestart')
const GAME_SCORE = document.getElementById('gameScore')
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
//Active variables throughout game
let positionNum = 5
let perfectTally = 0
let shotTally = 0
let targetTally = 0

/* These are the sound effects that I'm using in conjuction with Howler js which enables
me to have 2 different types of sound effect 1 for firing and hitting a target and the 
other for missing the target */
// var sfx = {
//     shot: new Howl({
//     src: ["https://codegreg1.github.io/milestone_project2/gunshort.mp3"],
//     autoplay: true
// }),
//     miss: new Howl({
//     src: ["https://codegreg1.github.io/milestone_project2/ricochet.mp3"],
//     autoplay:true
// })}

/* The event listeners listed here are used for the starting, replaying of the main game
and also the different effects on targets: 
    Target1 being hit
    Target2 being hit
    Target3 being hit
    Target missed
    Center/Perfect hit is achieved on any level
    and finally the bullet hole effect on missed targets
*/
PRESTART.addEventListener('click',runGame)

REPLAY.addEventListener('click', replay)

INSTRUCTION_START.addEventListener('click', instructionStart)

MISSED.addEventListener('click', missedShot)

TARGET_1.addEventListener('click',()=> {
    positionNum = 268
    incrementScore(1)
    shotUpdate()}
)
TARGET_2.addEventListener('click',()=> {
    positionNum = 288
    incrementScore(2)
    shotUpdate()}
)
TARGET_3.addEventListener('click',()=> {
    positionNum = 308
    shotUpdate()
    incrementScore(3)
}
)
/* These for loops are for when targets get tapped/clicked and a 
firing sound is to be initiated. The stopPropagation makes sure it
doesn't start the missed shot event listener. 
The second is a for loop for the detection of a perfect shot being made.
The third is the visualisation of a shot being made on the container.*/

TARGETS.forEach((target)=>{
    target.addEventListener('click', function(e) {
        target.classList.toggle('active')
        console.log("Target HIT")
        targetTally++
        e.stopPropagation()
        console.log('Target clicked')
    	setTimeout(newPosition, 100)})
}
)

CENTERS.forEach((center)=>{
    center.addEventListener('click',()=> {
        incrementScore(1)
        perfectTally++
        incrementPerfectScore()})
}
)

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
})}
)

//This plays a ricochet sound everytime a shot is not hitting a target
function missedShot(){
    console.log('Missed Shot!')
}

//This works in conjunction with the target being hit and then reset into a new 
//position along its horizontal axis depending on which level target has been struck 
function newPosition(){
    let activeTarget = document.querySelector('.target.active')
    activeTarget.style.left = `${(Math.floor(Math.random() * positionNum) + 1)}px`;
    activeTarget.classList.toggle('active')
}

/* Below are the two different incrementation of scores. The perfect score is very basic
but the general incrementScore incorporates numbers being passed into it from whichever 
level the targets are hit. */
function incrementPerfectScore(){
    let oldScore = parseInt(document.getElementById("perfectScore").innerText);
    document.getElementById("perfectScore").innerText = ++oldScore;
}

function incrementScore(x){
    if (x === 1) {x = 1;
    } else if (x === 2) {x = 2;
    } else {x = 3;
    }
    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = oldScore + x
}

/* Below are the main game starting and restarting functions. 
runGame() is the initial function ready to be started at the start of the page load 
and runs other functions for the game to be active.
resetDOM() is used to reset the DOM and also the countdown timer.
replay() is used after the game has been run so that the scores can go back to zero 
and also the DOM being reset upon the next game load.
instructionStart() is an alternative option to replay() incase anyone playing needs to 
review the instructions again however things still need to be reset.
*/
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

function resetDOM () {
    COUNTER.classList.remove('hide')
    COUNTER.classList.add('show')
    NUMS.forEach((num) => {
        num.classList.value = ''})
    NUMS[0].classList.add('in')
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

/* shotUpdate() updates the shot tally in the game and runAnimation() allows
for the score to be animated using the CSS transformations and classes smoothly
once the game has begun.
*/
function shotUpdate(){
    shotTally++
    SHOT_TALLY_CURRENT.innerText = shotTally
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

/* The functions below relate to the scoring of the game one starts the score (startScore)
and also countdown timer.
stopScore() obviously stops the game by revealing the results.
allScores() visually displays the scores achieved in the game.
*/
function startScore (){
    PRESTART.classList.add('hiddenscore')
    PRESTART.classList.remove('visible')
    setTimeout(stopScore, 20000)
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

function allScores (){ 
    SHOT_TALLY_ID.innerHTML = `${shotTally} Shots Taken`
    if(shotTally === 0){
        shotTally++}
    let perfectPercentage = Math.floor(perfectTally/shotTally*100)
    TARGET_TALLY_ID.innerHTML = `${targetTally} Targets Hit`
    PERFECT_TALLY_ID.innerHTML = `${perfectPercentage}% Perfect Shots`
}

module.exports = { incrementScore }