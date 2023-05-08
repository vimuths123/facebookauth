const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');

const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '937478587574-jet18jb9l7thi95lthvlmvklolf9vk1t.apps.googleusercontent.com'; // Replace with your own client ID
const client = new OAuth2Client(CLIENT_ID);

const server = http.createServer(async (req, res) => {
  if (req.url === '/login' && req.method === 'GET') {
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write('<h1>404 Not Found</h1>');
        res.end();
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else if ((req.url === '/login' && req.method === 'POST')) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Logged in');
  } else if ((req.url === '/google-auth' && req.method === 'POST')) {

    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', async () => {
      
      // const { tokens } = await client.verifyIdToken({
      //   idToken: JSON.parse(body).id_token,
      //   audience: '937478587574-jet18jb9l7thi95lthvlmvklolf9vk1t.apps.googleusercontent.com',  // replace with your own client ID
      // });
      // const { sub, name, email } = tokens.payload;
      // // console.log(tokens.payload)

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Logged in google');
    });
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, world!');
  }
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

