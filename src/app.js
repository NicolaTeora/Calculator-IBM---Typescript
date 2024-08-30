var sendTest = document.getElementById("submit");
var clearInput = document.getElementById("clear");
sendTest.addEventListener("click", function () {
    var nameP = document.getElementById("name")
        .value;
    var heightP = parseFloat(document.getElementById("height").value);
    var weightP = parseInt(document.getElementById("weight").value);
    var test = document.getElementById("test");
    var bmi = weightP / Math.pow(heightP, 2);
    bmi
        ? (test.innerHTML = "Hi ".concat(nameP, " your IBM, based on the data entered is: ").concat(bmi.toFixed(2)))
        : (test.innerHTML = "DATA  NOT  FOUND");
});
clearInput.addEventListener("click", function () {
    var test = document.getElementById("test");
    test.innerHTML = " ";
});
