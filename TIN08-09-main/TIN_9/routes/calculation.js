const express = require("express");
const router = express.Router();

function getResult(input) {
    let result = 0;
    let n1 = input[0];
    let op = input[1];
    let n2 = input[2];
    if (op === 'add')
        result = (n1 + n2).toString();
    else if (op === "sub")
        result = (n1 - n2).toString();
    else if (op === "div")
        result = (n1 / n2).toString();
    else if (op === "mul")
        result = (n1 * n2).toString();
    return result;
}


router.post('/calculation', (req,res)=>{
    let jsonData = req.body;
    console.log(jsonData);
    let input = [parseInt(jsonData.number1),jsonData.operation, parseInt(jsonData.number2)];
    let result = {"result":getResult(input)};
    console.log(result);
    res.json(result);

});

module.exports = router;