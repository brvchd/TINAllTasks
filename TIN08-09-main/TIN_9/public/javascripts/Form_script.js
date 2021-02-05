function calculate() {
    let xmlHttpRequest = new XMLHttpRequest();
    let URL = "/calculation";


    xmlHttpRequest.open("GET",URL);
    xmlHttpRequest.setRequestHeader("Content-Type", "application/json");

    let number1 = document.getElementById("number1").value;
    let operation = document.getElementById("operation").value;
    let number2 = document.getElementById("number2").value;

    xmlHttpRequest.send(JSON.stringify({number1: number1, "operation":operation, "number2":number2}));

    xmlHttpRequest.onreadystatechange = ()=>{
        if(this.readyState == 4 && this.status == 200){
            let JSON = JSON.parse(this.responseText);
            f(JSON);
        }
    }

    function f(object) {
        console.log(object);
        document.querySelector("#result span").innerHTML = object.result;
    }
}
