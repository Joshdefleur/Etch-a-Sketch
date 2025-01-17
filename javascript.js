
//grid creator

const container = document.querySelector(".grid");
const slider = document.getElementById("sliderSize");
const sliderOutput = document.getElementById("sizeValue");
const reset = document.getElementById("reset");


slider.addEventListener("change", () => { // This is the slider event listener
  let squares = slider.value;
  
  container.innerHTML ="";

  container.style.gridTemplateRows = `repeat(${squares}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${squares}, 1fr)`;

  for (let i = 0; i < (squares * squares); i++) {
      let square = document.createElement('div');
      square.classList.add("square");
      container.appendChild(square);
  }

  const gridCells = document.querySelectorAll(".square");

  gridCells.forEach(cell => { // This is how the new property is added to grey-out a square after a square is hovered over
      cell.addEventListener("mouseover", () => {
          cell.classList.add("hov-square");
      });
  });

  reset.addEventListener("click", () => { // This was the reset button I used previously, kept it here to let you see what I did to make it
      gridCells.forEach(cell => {
          cell.classList.remove("hov-square");
          container.removeChild(cell);
      });
  });

});

//text changing for slider value



sliderOutput.value = slider.value;

slider.oninput = function(){
    sliderOutput.value = `${this.value} x ${this.value} `;
}



