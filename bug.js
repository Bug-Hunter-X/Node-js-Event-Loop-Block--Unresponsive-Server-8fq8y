const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  console.log('Request received!');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Event loop blocked
//This code will block the event loop if there is a long running synchronous operation in the request handler
//Example:

const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long running synchronous operation
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
  console.log('Request received!');
  res.end();
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});