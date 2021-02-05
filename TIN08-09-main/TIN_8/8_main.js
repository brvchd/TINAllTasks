const express = require('express');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: true });
const app = express();
const port = 4000;

let helloRouter = require('./routes/hello');
let formRouter = require('./routes/form');
let formDataRouter = require('./routes/formdata');
let jsonDataRouter = require('./routes/jsondata');



app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(urlencodedParser);

app.use('/',helloRouter);
app.use('/',formRouter);
app.use('/',formDataRouter);
app.use('/',jsonDataRouter);



app.listen(port, () => {
    console.log("hello on port " + port + ", whole address is http://127.0.0.1:" + port);
});