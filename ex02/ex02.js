const resultElement = document.querySelector("#result");
const btnElement = document.querySelector("#btn-check");

btnElement.addEventListener("click", function () {
  const textareaValue = document.querySelector("#textarea").value.length;
  resultElement.textContent = textareaValue + " ký tự";
});
