let n = Math.random();
n = n * 6;
let ran1 = Math.floor(n) + 1;

let m = Math.random();
m = m * 6;
let ran2 = Math.floor(m) + 1;

var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var heading = document.querySelector("h1");

let randomImgSrc1 = "images/dice" + ran1 + ".png";
let randomImgSrc2 = "images/dice" + ran2 + ".png";

img1.setAttribute("src", randomImgSrc1);
img2.setAttribute("src", randomImgSrc2);

if(ran1 > ran2)
{
    heading.innerHTML = "Player 1 Wins !";
}

else if(ran2 > ran1)
{
    heading.innerHTML = "Player 2 Wins !";
}

else{
    heading.innerHTML = "Draw !";
}
