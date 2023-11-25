// console.log("Hello");
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World this is jack here');
     res.end(`<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>CSS Grid</title>
         <style>
             .container{
                 display:grid ;
                 /* grid-template-columns: 300px 200px 150px; */
                 /* grid-template-columns: 300px auto 150px; */
                 /* grid-template-columns: 1fr 4fr 1fr; */
                 /* grid-template-columns: repeat(3,200px); */
                 grid-template-columns: repeat(3,auto);
                 grid-gap: 2rem;
             }
             .item{
                 /* height: 100px;
                 width: 100px; */
                 background-color: red;
                 border: 3px solid black;
                 /* margin: 3px; */
                 padding: 15px  5px;
             }
         </style>
     </head>
     <body>
         <div class="container">
             <div class="item">This is item-1</div>
             <div class="item">This is item-2</div>
             <div class="item">This is item-3</div>
             <div class="item">This is item-4</div>
             <div class="item">This is item-5</div>
             <div class="item">This is item-6</div>
             <div class="item">This is item-7</div>
             <div class="item">This is item-8</div>
             <div class="item">This is item-9</div>
         </div>
     </body>
     </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});