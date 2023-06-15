//Program Title
document.getElementById("search-btn").addEventListener("click", btnClicked);
outputEl = document.getElementById("number-info");

function btnClicked() {
  let num1 = +document.getElementById("num1-in").value;
  let num2 = +document.getElementById("num2-in").value;
  let num3 = +document.getElementById("num3-in").value;

  if (num1 > num2 && num1 > num3) {
    outputEl.innerHTML = `<h2 class= "maxNum" >Maximun Number is: ${num1} </h2>`;
  } else if (num2 > num1 && num2 > num3) {
    outputEl.innerHTML = `<h2 class= "maxNum" >Maximum Number is: ${num2}</h2>`;
  } else {
    outputEl.innerHTML = `<h2 class= "maxNum"> Maximum Number is: ${num3}</h2>`;
  }
}
