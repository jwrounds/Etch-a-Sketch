const container = document.querySelector('#container');
const eraseButton = document.querySelector('#erase');
const pixelResize = document.querySelector('#pixel-size');
const pixelResizeButton = document.querySelector('#resize-button'); 

// generate an x by x <div> grid, one row at a time

function createGrid (x, y) {
  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      let newDiv = document.createElement('div');
      newDiv.setAttribute('id', `${i}-${j}`);
      newDiv.setAttribute('class', 'flex');
      newDiv.style.cssText = `width: ${(1 / x) * 100}%; height: ${(1 / y) * 100}%`

      // calls helper funtion to render <div> black on mouse over, mimicking large pen

      newDiv.addEventListener('mouseover', e => {
        drawOn(e.target);
      });

      container.appendChild(newDiv);
    }
  }
}

// helper funtion to render <div> background black

function drawOn (element) {
  element.style.backgroundColor = 'black';
}

// helper function to erase all <div> background colors

function eraseAll (elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'white';
  }
}

// grid removal helper function

function removeGrid (parentNode, node) {
  let nextNode = node.nextSibling;
  parentNode.removeChild(node);
  if (nextNode !== null) {
    removeGrid(parentNode, nextNode);
  }
}

// grid resize helper function

function resizeGrid (size) {
  removeGrid(container, container.firstChild);
  createGrid(size, size);
}

pixelResizeButton.addEventListener('click', e => {
  resizeGrid(pixelResize.value);
  
});

eraseButton.addEventListener('click', e => {
  eraseAll(document.querySelectorAll('.flex'));
});


createGrid(16, 16);