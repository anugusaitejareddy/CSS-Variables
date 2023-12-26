const controls = document.querySelectorAll(".controls input");
const image = document.querySelector("img");
function updateControls() {
  const suffix = this.dataset.sizing || "";
  image.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);
}

controls.forEach((control) => {
  control.addEventListener("change", updateControls);
  control.addEventListener("mousemove", updateControls);
});

/*
- Add event listeners on each control
- Get the value of the control -- using this.value
- update the CSS variable on image element using element.style.setProperty() to the value of the control
*/
// const spacing = document.querySelector("#spacing");
// const blur = document.querySelector("#blur");
// const baseColor = document.querySelector("#baseColor");
// const image = document.querySelector("img");

// console.log(window.getComputedStyle(image).getPropertyValue("--blur"));

// function updateSpacing() {
//   image.style.setProperty("--spacing", `${spacing.value}px`);
// }

// function updateBlur() {
//   image.style.setProperty("--blur", `${blur.value}px`);
// }

// function updateBaseColor() {
//   image.style.setProperty("--background-color", `${baseColor.value}`);
// }

// spacing.addEventListener("change", updateSpacing);
// blur.addEventListener("change", updateBlur);
// baseColor.addEventListener("change", updateBaseColor);
