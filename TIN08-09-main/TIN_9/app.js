const express = require("express");
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();
const port = 9090;

let calculation = require("./routes/calculation");
let calc_form = require("./routes/calc_form");

app.set("views", "./views");

app.use(urlencodedParser);
app.use(express.json());
app.use("/",calculation);
app.use("/",calc_form);






app.listen(port, () => {
  console.log("hello on port " + port + ", whole address is http://127.0.0.1:" + port);
});