var numSquares = 6;
var colors = [];
var correctColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode')

init();

function init() {
  setupModeListeners();
  setupSquareListeners();
  reset();
}

function setupModeListeners() {
  //mode btns event listeners
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function () {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      this.classList.add('selected');
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      reset();
    });
  }
}

function setupSquareListeners() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener('click', function () {
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare it to pickedColor
      if (clickedColor === correctColor) {
        messageDisplay.textContent = 'Correct!';
        resetButton.textContent = 'Play Again?';
        changeColors(correctColor);
        h1.style.backgroundColor = correctColor;
      } else {
        this.style.backgroundColor = 'rgb(27, 30, 43)';
        messageDisplay.textContent = 'Try Again';
      }
    });
  }
}

resetButton.addEventListener('click', function () {
  reset();
});

function reset() {
  colors = generateRandomColors(numSquares);
  //choose a correct color
  correctColor = pickColor();
  //change color of display to match correct color
  colorDisplay.textContent = correctColor;
  //reset message to none
  messageDisplay.textContent = "";
  //reset reset button text to New Colors
  resetButton.textContent = "New Colors";
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  //h1 background back to initial color
  h1.style.backgroundColor = 'rgb(106, 90, 205)';
}

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change their background to color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to array
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pick a red, green and blue values
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// var easyBtn = document.querySelector('#easyBtn');
// var hardBtn = document.querySelector('#hardBtn');

// easyBtn.addEventListener('click', function () {
//   easyBtn.classList.add('selected');
//   hardBtn.classList.remove('selected');
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   correctColor = pickColor();
//   colorDisplay.textContent = correctColor;
//   messageDisplay.textContent = "";
//   resetButton.textContent = "New Colors";
//   for (var i = 0; i < squares.length; i++) {
//     // If colors[i] exists, change the square[i] to color[i] -- but colors.length = 3
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i]
//     } else { // If colors[i] does not exist, hide square[i] -- so since colors.length = 3, squares 4-6 are hidden
//       squares[i].style.display = 'none';
//     }
//   }
// });

// hardBtn.addEventListener('click', function () {
//   hardBtn.classList.add('selected');
//   easyBtn.classList.remove('selected');
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   correctColor = pickColor();
//   colorDisplay.textContent = correctColor;
//   messageDisplay.textContent = "";
//   resetButton.textContent = "New Colors";
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i]
//     squares[i].style.display = 'block';
//   }
// });

// resetButton.addEventListener('click', function () {
//   //generate new random colors & assign to squares
//   colors = generateRandomColors(numSquares);
//   //choose a correct color
//   correctColor = pickColor();
//   //change color of display to match correct color
//   colorDisplay.textContent = correctColor;
//   //reset message to none
//   messageDisplay.textContent = "";
//   //reset reset button text to New Colors
//   this.textContent = "New Colors";
//   //change colors of squares
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//   }
//   //h1 background back to initial color
//   h1.style.backgroundColor = 'rgb(106, 90, 205)';
// });