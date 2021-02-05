const express = require('express');
const router = express.Router();

router.post('/formdata', (req, res) => {
    let name = req.body.name;
    let surname = req.body.surname;
    let phone = req.body.phone;

    res.render('formdata' , {name:name, surname:surname, phone:phone});
});

module.exports = router;