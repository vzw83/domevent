const EXP = document.querySelector("#experiment");
const CR = document.querySelector("#current-result");
const RL = document.querySelector("#result-list");




const createAction = (event) => {
  const newRow = document.createElement('p')
    newRow.innerText = event.type  


  CR.innerText = event.type;
  RL.prepend(newRow);
};
//перечень событий мышки
EXP.addEventListener("click", createAction); //клик
EXP.addEventListener("dblclick", createAction); //дабл клик
EXP.addEventListener("contextmenu", createAction); //клик правой кнопкой мыши

EXP.addEventListener("mousover", createAction); //наведение мышью на элемент
EXP.addEventListener("mouseenter", createAction); // событие когда только навели мышью
EXP.addEventListener("mouseleave", createAction);//событие убираем наведение мышью


EXP.addEventListener("focus", createAction);//событие убираем наведение мышью
EXP.addEventListener("blur", createAction);//событие убираем наведение мышью


