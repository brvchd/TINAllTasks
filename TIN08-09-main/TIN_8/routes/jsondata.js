const express = require('express');
const router = express.Router();

router.get('/jsondata', (req, res) => {
    res.render('jsonView');
});

router.post('/jsondata', (req,res)=>{
    let jsonInput = req.body;
    console.log(jsonInput);
    res.render('jsondata', {name:jsonInput.name, surname:jsonInput.surname, phone:jsonInput.phone});
});

module.exports = router;