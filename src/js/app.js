const holes = document.querySelector('.holes');

for (let i = 1; i < 10; i+=) {
  const hole = document.createElement('div');
  hole.classList.add('cell');
  holes.appendChild(hole);
}

const cells = Array.from(document.querySelectorAll('.cell'));

function goblinImg(index, number) {
  if (index !== -1) {
    cells[index].classList.remove('mole');
  }
  const goblinImgCell = cells[number];
  goblinImgCell.classList.add('mole');
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
