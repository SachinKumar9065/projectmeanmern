//console.log()
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('Hello World');
 /* res.end('<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>review</title>
      <a href="imag.html" style="color:darkred;" ><h1>HOME</h1></a>
      <a href="new.html"><h2>NEXT MOVIE</h2></a>
      <a href="sachin.html"><h1 b="download">DOWNLOAD</h1></a>
      <style>
          body{
              background-image: url('im98.jpg');
              background-size: cover;
          }
          #l{
              color: brown;
          }
          .nav{
  
          }
      </style>
  </head>
  <body>
      <nav>
      <ul>
          <li id="po">HOME</li>
          <li id="g">NEXT MOVIE</li>
          <li>DOWNLOAD</li>
          <li>HELP</li>
      </ul>
  </nav>
      <h1 id="l">New Movie</h1>
      <div>first movie</div>
      <img src="k.jpg">
      <h2><strong>REVIEW</strong></h3>
      <h3>Brahmastra</h3>
      <p>There's light, there's fire, there are some superheroes who wield unique astras which were born from the Brahm-Shakti that possesses energies found in elements of nature like Jal (water) Āstra, Pawan (wind) Āstra, Agney (fire) Āstra, and animal and plants. Above all, there's the most powerful astra, Brahmastra, a supernatural celestial weapon that's said to be able to destroy the universe, which was broken into three pieces to save it from the dark forces. And then there's Ranbir Kapoor and Alia Bhatt creating sparks on screen with their real-to-reel chemistry. (Also read: Brahmastra release live updates: Review, premiere pics from Ranbir Kapoor, Alia Bhatt film)</p>
      
  </body>
  </html>');
});*/

server.listen(port, hostname, () => {
  console.log(`Server running at http://${n hostname}:${port}/`);
});