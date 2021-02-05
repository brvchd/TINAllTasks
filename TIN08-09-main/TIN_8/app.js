let express = require('express');
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended: true});
let port = 3000;
let app = express();


app.get('/hello', (req, res) => {
    res.send("Hello world!");
});

app.get('/form', (req, res) => {
    var html = '';
    html = "<body>\n" +
        "<form name=\"form1\" method=\"post\" action=\"/formdata\">\n" +
        "    Name: <input type=\"text\" name=\"name\"><br>\n" +
        "    Surname: <input type=\"text\" name=\"surname\"><br>\n" +
        "    Phone num.: <input type=\"text\" name=\"number\"><br>\n" +
        "    <input type=\"submit\" name=\"submit\" value=\"submit\">\n" +
        "</form>\n" +
        "</body>";
    res.send(html);
});


app.post('/formdata', urlencodedParser, (req, res) => {
    let html = "Your name is " + req.body.name + "<br>";
    html += "Your surname is " + req.body.surname + "<br>";
    html += "Your phone number is " + req.body.number + "<br>";
    res.send(html);
});

app.get('/jsondata', urlencodedParser, (req, res) => {
    var html = '';
    html = "<body>\n" +
        "<h1>JSON data</h1>\n" +
        "<form name=\"form1\" method=\"post\" action=\"/jsondata\">\n" +
        "    Name: <input type=\"text\" name=\"name\"><br>\n" +
        "    Surname: <input type=\"text\" name=\"surname\"><br>\n" +
        "    Phone num.: <input type=\"text\" name=\"number\"><br>\n" +
        "    <input type=\"submit\" name=\"submit\" value=\"submit\">\n" +
        "</form>\n" +
        "</body>";
    res.send(html);
});

app.post('/jsondata', urlencodedParser, (req, res) => {
    let json = req.body;
    let html = "Your name is " + json.name + "<br>";
    html += "Your surname is " + json.surname + "<br>";
    html += "Your phone number is " + json.number + "<br>";
    res.send(html);
});

app.listen(port, () => {
    console.log("hello on port " + port + ", whole address is http://127.0.0.1:" + port);
});