const container = document.querySelector('#container');

// generate 8X8 <div> grid, one row at a time

for (let i = 1; i <= 8; i++) {
  for (let j = 1; j <= 8; j++) {
    let newDiv = document.createElement('div');
    newDiv.setAttribute('id', `${i}-${j}`);
    newDiv.setAttribute('class', 'flex');
    newDiv.textContent = 'placeholder';
    container.appendChild(newDiv);
  }
}