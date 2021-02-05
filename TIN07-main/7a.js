let http = require("http");
let url = require("url");
let port = "8888";

const requestHandler = (req, res) => {
  let errorlog = "<html><title>Example</title>" + '<body text="red">';
  let urlParts = url.parse(req.url, true);
  let query = urlParts.pathname;

  try {
    let values = query.split("&");
    let action = values[0].replace("/", "").split("=")[1];
    console.log(action);
    let number1 = values[1].split("=")[1] || "0";
    let number2 = values[2].split("=")[1] || "0";
    console.log(number1 + " " + number2);

    if (!Number(number1) || !Number(number2) || Number(action)) {
      console.log("ERROR");
      res.write(errorlog);
      res.end("<h2>Illegal format exception</h2>");
    } else {
      let result = getResult(
        action.toLowerCase(),
        Number(number1),
        Number(number2)
      );
      console.log(result);
      let html =
        "<html><b>" +
        action +
        "(" +
        number1 +
        "," +
        number2 +
        ") = <b>" +
        result +
        "</b></html>";
      res.end(html);
    }
  } catch (e) {
    res.write(errorlog);
    res.end();
  }
};

function getResult(op, n1, n2) {
  let result = 0;

  if (op === "add") result = n1 + n2;
  else if (op === "sub") result = n1 - n2;
  else if (op === "div") result = n1 / n2;
  else if (op === "mul") result = n1 * n2;
  return result;
}

http.createServer(requestHandler).listen(port, (err) => {
  if (err) {
    console.log("Error starting http server");
  } else {
    console.log(
      ">Server running at http://127.0.0.1:" +
        port + 
        " \n>To access see the desired output use the following pattern http://127.0.0.1:" + port + "/aciton=youroperation&number1=yournumber1&number2=yournumber2" +
        "\n>Possible operations: add, sub, mul, div." 
    );
  }
});
