let fs = require('fs');
let path = require('path');
let dir = "C:\\Users\\dmitr\\Documents\\TIN07";

fs.watch(dir, (eventType, filename) => {
    console.log(filename+" "+eventType);
    let file = path.join(dir, filename);
    console.log(file);
    fs.readFile(file, {encoding: 'utf-8'}, (err,data) => {
        if(err)
            console.log(err);
        else
            console.log('recieved data: ' + data);
    });
});