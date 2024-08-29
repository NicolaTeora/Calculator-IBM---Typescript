let sendTest = document.getElementById("submit") as HTMLButtonElement;
let clearInput = document.getElementById("clear") as HTMLButtonElement;

sendTest.addEventListener("click", function () {
  let nameP: string = (document.getElementById("name") as HTMLInputElement)
    .value;
  let heightP: number = parseFloat(
    (document.getElementById("height") as HTMLInputElement).value
  );

  let weightP: number = parseInt(
    (document.getElementById("weight") as HTMLInputElement).value
  );

  let test = document.getElementById("test") as HTMLElement;

  let bmi = weightP / heightP ** 2;

  bmi
    ? (test.innerHTML = `Hi ${nameP} your IBM, based on the data entered is: ${bmi.toFixed(
        2
      )}`)
    : (test.innerHTML = "DATA  NOT  FOUND");
});

clearInput.addEventListener("click", function () {
  let test = document.getElementById("test") as HTMLElement;
  test.innerHTML = " ";
});
