// declared Dom elements variables 

let canvas = document.getElementById('pixelCanvas');
let size_picker = document.getElementById('sizePicker');
let color =document.getElementById('colorPicker');

function makeGrid() {
  // declare the height and width values as a variables
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
// looping to creat table dynamicly
  for (let i = 1; i <= height; i++) {
    let grid_row = document.createElement('tr');
    canvas.appendChild(grid_row);
    for (let x = 1; x <= width; x++) {
      let cells = document.createElement('td');
      grid_row.appendChild(cells);
    // eventlistener to colour the cells with the selected colour
      cells.addEventListener('click', function() {
        this.style.backgroundColor = color.value;
      })
      // eventlistener to clear the cell colour 
      cells.addEventListener('dblclick', function() {
        this.style.backgroundColor = 'transparent';
      })
    }
    }
   }
 }

size_picker.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
})








