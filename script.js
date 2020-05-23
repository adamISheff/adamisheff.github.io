var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomizeButton = document.getElementById("randomize");

function updateGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value + "," + color2.value + ")";

    console.log(body.style.background);
    css.textContent = "background: " + body.style.background + ";";
}

function randomColors() {
    var newcolor1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    var newcolor2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    color1.value = newcolor1;
    color2.value = newcolor2;
    
    updateGradient();
}

color1.addEventListener("input", updateGradient);
color2.addEventListener("input", updateGradient);
randomizeButton.addEventListener("click", randomColors);