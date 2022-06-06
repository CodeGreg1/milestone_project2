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
        // if (target1.classList = 'target active'){
        //     console.log('Back Row target')
        // } else if (target2.classList = 'target active'){
        //     console.log('Middle Row target')
        // }
        gunSound()
        incrementScore()
    	setTimeout(newPosition, 300)})
    })
