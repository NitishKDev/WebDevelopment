//1.using inquirer package to get user input
import fs from "fs";
import inquirer from 'inquirer';
import qr from "qr-image";

inquirer
.prompt([
    {
    message:"Enter your url here :",
    name:"url"
}
])
.then((answers) => {
    const yoururl=answers.url;
    var qr_svg = qr.image(yoururl);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('urlfile.txt', yoururl, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
}); 
})
.catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
});


//2. use qr-image npm package to turn url into qr code image.
//3. create text file to save the user input using native fs module.