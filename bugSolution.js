const http = require('http');
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
  // Create a worker thread to handle the long-running task
  const worker = new Worker('./longRunningTask.js');

  worker.on('message', (result) => {
    console.log('Result from worker:', result);
    res.end();
  });

  worker.on('error', (error) => {
    console.error('Worker error:', error);
    res.end();
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//longRunningTask.js
const { parentPort } = require('worker_threads');

let i = 0;
while (i < 1000000000) {
  i++;
}

parentPort.postMessage('Task completed!');