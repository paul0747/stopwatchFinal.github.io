let timerSec = 00;
let timerMSec = 00;
let index = 0;

let btnStart = document.getElementById("btn-start");
let btnStop = document.getElementById("btn-stop");
let btnReset = document.getElementById("btn-reset");

let secunde = document.getElementById("secunda");
let mSecunde = document.getElementById("m-secunda");
let interval;

btnStop.disabled = true;

let startTimer = () => {
  btnStop.disabled = false;
  timerMSec++;

  if (timerMSec < 9) {
    mSecunde.innerHTML = "0" + timerMSec;
  }
  if (timerMSec > 9) {
    mSecunde.innerHTML = timerMSec;
  }
  if (timerMSec > 99) {
    timerSec++;
    secunde.innerHTML = "0" + timerSec;
    timerMSec = 0;
    mSecunde.innerHTML = "0" + 0;
  }
  if (timerSec > 9) {
    secunde.innerHTML = timerSec;
  }
};

btnStart.onclick = function () {
  interval = setInterval(startTimer);
};

btnStop.onclick = function () {
  index++;
  btnStop.disabled = true;
  clearInterval(interval);
  const para = document.createElement("p");
  const node = document.createTextNode(
    `Time ${index}: ${secunde.innerHTML}:${mSecunde.innerHTML}`
  );
  para.appendChild(node);

  const element = document.getElementById("new-element");
  element.appendChild(para);
  if (index > 5) {
    console.log("Am intrat");
    element.firstElementChild.remove();
  }
};

btnReset.onclick = function () {
  location.reload();
  //   window.close();
};
