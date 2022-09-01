// clear message area upon mouse click
const textArea = document.getElementById("message");
textArea.addEventListener("click", () => {
  textArea.textContent = "";
});
