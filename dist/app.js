"use strict";
let sendTest = document.getElementById("submit");
let clearInput = document.getElementById("clear");
sendTest.addEventListener("click", function () {
    let nameP = document.getElementById("name")
        .value;
    let heightP = parseFloat(document.getElementById("height").value);
    let weightP = parseInt(document.getElementById("weight").value);
    let test = document.getElementById("test");
    let bmi = weightP / heightP ** 2;
    bmi
        ? (test.innerHTML = `Hi ${nameP} your IBM, based on the data entered is: ${bmi.toFixed(2)}`)
        : (test.innerHTML = "DATA  NOT  FOUND");
});
clearInput.addEventListener("click", function () {
    let test = document.getElementById("test");
    test.innerHTML = " ";
});
