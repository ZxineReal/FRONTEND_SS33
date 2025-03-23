const iconElement = document.querySelector("#icon");
const inputElement = document.querySelector("#input");

iconElement.addEventListener("click", function () {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    iconElement.name = "eye-off-outline";
  } else {
    inputElement.type = "password";
    iconElement.name = "eye-outline";
  }
});
