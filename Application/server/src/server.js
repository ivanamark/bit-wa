const http = require('http');
const { createPosts } = require("./data");

const hostname = '127.0.0.1';
const port = 3000;
const {
  Post
} = require('./post')
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500'); //klijentska aplikacija
  const posts = JSON.stringify(createPosts(20));

  res.end(posts);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});