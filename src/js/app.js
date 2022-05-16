const holes = document.querySelector('.holes')
const hit = document.querySelector('#hit')
const missed = document.querySelector("#missed")
let hitTimes = 0
let missedTimes = 0
let goblinImgCell 

for (let i = 1; i < 10; i += 1) {
  const hole = document.createElement('div');
  hole.classList.add('cell');
  holes.appendChild(hole);
}

const cells = Array.from(document.querySelectorAll('.cell'));

function goblinImg(index, number) {
  if (index !== -1) {
    cells[index].classList.remove('mole');
  }
  goblinImgCell = cells[number];
  goblinImgCell.classList.add('mole');

}

holes.forEach(hole => {
  hole.addEventListener('mousedown', () => {
    if (hole.id == goblinImgCell) {
      result++
      hitTimes.textContent = result
      goblinImgCell = null
    }
  })
    if(hole.id !== goblinImgCell) {
      result++
      missedTimes.textContent = result
      goblinImgCell = null
    }
  })


