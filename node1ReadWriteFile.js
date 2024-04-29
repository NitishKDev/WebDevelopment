const fs = require('fs');
//creating file and writing text.
fs.writeFile('message.txt', "Hello from node space!", (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

//reading the contents from the file and printing on the console.
fs.readFile('./message.txt','utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});