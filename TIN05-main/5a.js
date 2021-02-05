var frog = {
  name: "Cool Frog",
  age: 5,
  color: "green",
  croak: function () {
    return "kwak-kwak";
  },
  jump: function () {
    return "The frog jumped";
  },
};

function getObjectProperties(frog){
    let res = '';
    for (let prop in frog){
        res+= `${prop} - ${typeof frog[prop]}; `;
    }
    return res;
}
 console.log(getObjectProperties(frog));
 console.log(frog.jump());
 console.log(frog.croak());