function myFunction() {
  var copyText = document.getElementById(generatedCode);
  copyText.select();
  document.execCommand("copy");
}
