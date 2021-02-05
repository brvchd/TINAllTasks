let x;
function cTof() {
  x = (document.getElementById("c").value * 9) / 5 + 32;
  document.getElementById("f").value = Math.round(x);
}

function fToC() {
  x = ((document.getElementById("f").value - 32) * 5) / 9;
  document.getElementById("c").value = Math.round(x);
}
