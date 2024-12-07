
//grid creator

const container = document.querySelector(".grid");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(4, 4);

//text changing


const slider = document.getElementById("sliderSize");
const sliderOutput = document.getElementById("sizeValue");

sliderOutput.value = slider.value;

slider.oninput = function(){
    sliderOutput.value = `${this.value} x ${this.value} `;
}