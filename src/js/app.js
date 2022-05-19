const cells = Array.from(document.querySelectorAll('.cell'));
let hitPosition;
const hit = document.querySelector('#hit');
const missed = document.querySelector('#missed');
let resultPlus = 0;
let resultMinus = 0;

function goblinImg(index, number) {
  if (index !== -1) {
    cells[index].classList.remove('mole');
  }
  const goblinImgCell = cells[number];
  goblinImgCell.classList.add('mole');
  hitPosition = goblinImgCell.id;
}

setInterval(() => {
  const index = cells.findIndex((item) => item.className.includes('mole'));
  let number = Math.floor(Math.random() * cells.length);
  if (number === index) {
    number = Math.floor(Math.random() * cells.length);
  } else {
    goblinImg(index, number);
  }
}, 1000);

cells.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id === hitPosition) {
      resultPlus += 1;
      hit.textContent = resultPlus;
      hitPosition = null;
      if (Number(hit.textContent) === 5) {
        window.location.reload();
      }
    }
  });
});

cells.forEach((square) => {
  square.addEventListener('mousedown', () => {
    if (square.id !== hitPosition) {
      resultMinus += 1;
      missed.textContent = resultMinus;
      hitPosition = null;
      if (Number(missed.textContent) === 5) {
        hitPosition = null;
        window.location.reload();
      }
    }
  });
});
