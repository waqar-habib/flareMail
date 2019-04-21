const generatedCode = document.getElementById("generatedCode");
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function(text) {
  generatedCode.select();
  document.execCommand("Copy");
};
