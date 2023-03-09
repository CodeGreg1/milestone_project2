const scripts = require('./script2.js');

const incrementScore = scripts.incrementScore;
const shotUpdate = scripts.shotUpdate;

beforeAll(() => {
  const score = document.createElement('div');
  score.setAttribute('id', 'score');
  score.innerText = '0';
  document.body.appendChild(score);
});

describe('All tests of Increment score', () => {
  test('should increase value of 1 in the score element', () => {
    const scoreElement = document.getElementById('score');
    expect(scoreElement.innerText).toBe('0');
    incrementScore(1);
    expect(scoreElement.innerText).toBe(1);
  }),
    test('should increase value by 2 in the score element from previous score of 1', () => {
      const scoreElement = document.getElementById('score');
      expect(scoreElement.innerText).toBe(1);
      incrementScore(2);
      expect(scoreElement.innerText).toBe(3);
    }),
    test('should increase value by 3 in the score element from previous score of 3', () => {
      const scoreElement = document.getElementById('score');
      expect(scoreElement.innerText).toBe(3);
      incrementScore(3);
      expect(scoreElement.innerText).toBe(6);
    });
});

describe('Shot Tally should increase by 1 each time it is called', () => {
  let shotTally = 0;
  test('should show the value of shot tally to be 0', () => {
    expect(shotTally).toBe(0);
  })
  test('should show the value of shot tally to be 1', () => {
    shotTally++
    expect(shotTally).toBe(1);
  })
});
