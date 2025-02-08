
const colorPicker = document.getElementById("color");
const getcolor = document.getElementById("colorCode");


colorPicker.addEventListener("input", (event) => {
  const selectedColor = event.target.value;
  document.body.style.backgroundColor = selectedColor;
  getcolor.textContent = selectedColor;
});