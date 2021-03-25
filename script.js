
let numSquares = 6;
let colors = generateRandomColors(numSquares);
let pickedColor = pickColor();
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easybt");
let modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(let i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
            //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "You are truly a champion!";
                resetButton.textContent = "Play Again!";
                changeColors(pickedColor);
                h1.style.backgroundColor = clickedColor;
            }   else    {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }       
        });
    }
}

function setUpModeButtons(){
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Baby Level" ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}


function reset(){
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change text on button
    resetButton.textContent = "New Colors"
    //clearing the message display
    messageDisplay.textContent = "";
    //change colors of squares
    for(let i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    //reset display color
    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
    reset();
});

for(let i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        //compare color to picked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "You are truly a champion!";
            resetButton.textContent = "Play Again!";
            changeColors(pickedColor);
            h1.style.backgroundColor = clickedColor;
        }   else    {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(let i = 0; i < squares.length; i++){
    //change each color to match given color
    squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    let arr = [];
    //repeat num times
    for(let i = 0; i < num; i++){
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor(){
    //pick a "red" from 0 to 255
    let r = Math.floor(Math.random() * 256)
    //pick a "green" from 0 to 255
    let g = Math.floor(Math.random() * 256)
    //pick a "blue" from 0 to 255
    let b = Math.floor(Math.random() * 256)
    //"rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

