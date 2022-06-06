const numbers = document.getElementById('numbers')
const finalScore = document.getElementById('score')
const scoreScreen = document.getElementById('scorescreen')
const prestart = document.getElementById('prestart')
const gameScore = document.getElementById('gameScore')
//More specific to the countdown timer variables
const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const replay = document.querySelector('#replay')
var positionNum = 5;
const target2 = document.getElementById('targettwo')
const target1 = document.getElementById('targetone')
const target3 = document.getElementById('targetthree')

target1.addEventListener('click',()=> {
    positionNum = 298
    console.log('t1')})
target2.addEventListener('click',()=> {
    positionNum = 318})
target3.addEventListener('click',()=> {
    positionNum = 338})

//These are my target event listeners for each row they will all create a gun sound, increment the total score and reset the position of the target that has dropped
//
const targets = document.querySelectorAll('.target')

targets.forEach((target)=>{
    target.addEventListener('click',()=> {
        target.classList.toggle('active')
        gunSound()
        incrementScore()
    	setTimeout(newPosition, 300)})
    })

function newPosition(){
    const activeTarget = document.querySelector('.target.active')
        activeTarget.style.left = `${(Math.floor(Math.random() * positionNum) + 1)}px`;
        activeTarget.classList.toggle('active')
    }

//This function creates the gunshot sound and plays even if another shot has been made as it pauses then restarts each time
function gunSound() {
	const gunShot = document.getElementById('gun')
	gunShot.pause()
	gunShot.currentTime=0;
	gunShot.play()
    console.log('gun shot ran')
    }

//This function increments the score which is linked with the event listeners for the clicking of targets.
function incrementScore(){
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;}

//This function runs the game by initiating the count down sequence 
function runGame() {
    console.log('start rungame')
    startScore()
    const h4 = document.querySelector('h4')
    runAnimation()
    h4.innerText = 'SHOOT!!!'
    numbers.classList.add('in')
    numbers.classList.remove('in')
    numbers.classList.add('out')
    console.log('finished rungame')
    }

//This function puts the end score in the h2 identifying a top score however I believe it runs beyond required so need to understand this bug
function stopScore () {
    console.log('started stopscore')
    finalScore.innerText = `${parseInt(finalScore.innerText)} Top Score!`
    scoreScreen.classList.remove('hiddenscore')
    scoreScreen.classList.add('visible')
    gameScore.innerText = finalScore.innerText
    numbers.classList.remove('out')
    console.log('finished stopscore')
    }

function startGame(){
    prestart.addEventListener('click',runGame)
    }

//Count down functions

function resetDOM () {
    console.log('started resetdom')
    counter.classList.remove('hide')
    counter.classList.add('show')
    nums.forEach((num) => {
        num.classList.value = ''})
    nums[0].classList.add('in')
    console.log('finished resetDom')
}

function runAnimation() {
    console.log('started runanimation')
    nums.forEach((num,idx) => {
        const nextToLast = nums.length - 1
        num.addEventListener('animationend', (e) => {
            if(e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if (e.animationName === 'goOut' && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                counter.classList.add('hide')}})})
                console.log('finished runanimation')}

replay.addEventListener('click', () => {
    finalScore.innerText = '0'
    scoreScreen.classList.add('hiddenscore')
    scoreScreen.classList.remove('visible')
    resetDOM()
    runGame()  
})

function startScore (){
    console.log('started startscore')
    prestart.classList.add('hiddenscore')
    prestart.classList.remove('visible')
    setTimeout(stopScore, 20000)
    console.log('finished startscore')
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
            setTimeout(() => circle.remove(), 200)
        })
 })


//Running functions at the beginning of the page load
startGame()