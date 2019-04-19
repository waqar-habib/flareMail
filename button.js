const generateCode = document.getElementById("generateCode");
const btnCopy = document.getElementById("btnCopy");

btnCopy.onclick = function() {
  generateCode.select();
  document.execCommand("Copy");
};
