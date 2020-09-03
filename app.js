const container = document.querySelector('#container');

// generate an x by x <div> grid, one row at a time

function createGrid (x, y) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('id', `${i}-${j}`);
      newDiv.setAttribute('class', 'flex');
      newDiv.style.cssText = `width: ${(1 / x) * 100}%; height: ${(1 / y) * 100}%`
      container.appendChild(newDiv);
    }
  }
}

createGrid(8, 8);