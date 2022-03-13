const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

buttons.forEach((button) => {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clickedButtonValue = event.target.value;
  try {
    if (clickedButtonValue === "C") return (display.value = "");

    if (clickedButtonValue === "=" && display.value !== "")
      return (display.value = eval(display.value));

    display.value = `${display.value} ${clickedButtonValue}`;
  } catch (error) {
    display.value = "invalid syntax";
  }
}

display.addEventListener("keydown", (event) => {
  try {
    if (event.key === "Escape") return (display.value = "");

    if (event.key === "Enter" && display.value !== "") {
      return (display.value = eval(display.value));
    }
  } catch (error) {
    display.value = "invalid syntax";
  }
});
