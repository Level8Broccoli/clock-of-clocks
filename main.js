import './style.scss'

const drawClocks = () => {

  const template = document.querySelector("#clock-template");
  const grid = document.querySelector(".grid");

  for (let row = 0; row < 6; row++) {
    for (let column = 0; column < 22; column++) {
      const clone = template.content.cloneNode(true);
      clone.querySelector("*").dataset.id = `${row}-${column}`;
      grid.appendChild(clone);
    }
  }
}

drawClocks();

const currentTime = () => {
  const date = new Date();
  const hour = date.getHours();
  const min = date.getMinutes();
  return { hour, min };
}

const displayTime = () => {
  const { hour, min } = currentTime();

  document.querySelector(".time").innerText = `${(hour < 10 ? "0" : "") + hour
    } : ${(min < 10 ? "0" : "") + min}`;
  [...document.querySelectorAll(".clock")].forEach(elem => {
    elem.style.setProperty("--hand1", (hour % 12) * 30);
    elem.style.setProperty("--hand2", min * 6);
  })
};

setTimeout(displayTime, 0);
setInterval(displayTime, (1000 * 60));
