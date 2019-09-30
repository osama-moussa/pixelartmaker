// Select color input

let canvas = document.getElementById('pixelCanvas');
let size_picker = document.getElementById('sizePicker');
let color =document.getElementById('colorPicker');
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Your code goes here!
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
// Select size input
  for (let i = 1; i <= height; i++) {
    let grid_row = document.createElement('tr');
    canvas.appendChild(grid_row);
    for (let x = 1; x <= width; x++) {
      let cells = document.createElement('td');
      grid_row.appendChild(cells);

      cells.addEventListener('click', function(event) {
        this.style.backgroundColor = color.value;
      })
    }
   }
 }

size_picker.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
})








