const EXP = document.querySelector("#experiment");
const CR = document.querySelector("#current-result");
const RL = document.querySelector("#result-list");

EXP.addEventListener("click", (event) => {
  CR.innerText = event.type;

  RL.innerHTML += '<p>' + event.type + '</p>'
});

EXP.addEventListener("dblclick", (event) => {
  CR.innerText = event.type;

  RL.innerHTML += '<p>' + event.type + '</p>'
});

EXP.removeEventListener("click", (event) => {
  CR.innerText = event.type;

  RL.innerHTML += '<p>' + event.type + '</p>'
});