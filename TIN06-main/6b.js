let time = setInterval(function () {
  addPar();
}, 5000);

function addPar() {
  let par = "My new paragraph in 5 sec";
  document.getElementById("5sec_par").innerHTML = par;
}
