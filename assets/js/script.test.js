const scripts = require('./script2.js')

const incrementScore = scripts.incrementScore

beforeAll(()=>{
  const score = document.createElement('div');
  score.setAttribute('id','score');
  score.innerText = '0'

  document.body.appendChild(score)
})

describe('All tests of Increment score', () => {
  test('should increase value of 1 in the score element', () => {
    const scoreElement = document.getElementById('score')

    expect(scoreElement.innerText).toBe('0');
    
    incrementScore(1)

    expect(scoreElement.innerText).toBe(1)

  }),
  test('should increase value of 2 in the score element plus the previous score of 1', () => {
    const scoreElement = document.getElementById('score')

    expect(scoreElement.innerText).toBe(1);
    incrementScore(2)

    expect(scoreElement.innerText).toBe(3)

  }),
  test('should increase value of 3 in the score element plus the previous score of 3', () => {
    const scoreElement = document.getElementById('score')

    expect(scoreElement.innerText).toBe(3);
    incrementScore(3)

    expect(scoreElement.innerText).toBe(6)

  })
})
