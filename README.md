# Node.js Event Loop Blocking Bug
This repository demonstrates a common, yet easily missed, bug in Node.js applications: blocking the event loop.  The example shows how a long-running synchronous operation within a request handler can prevent the server from responding to subsequent requests.

## Bug Description
Node.js is single-threaded, relying on an event loop to handle asynchronous operations efficiently.  When a long-running synchronous task is performed within a request handler, the event loop becomes blocked.  This means other requests are queued up, but none are processed until the blocking operation completes, resulting in an unresponsive server and severely degraded performance.

## Solution
The solution is to offload long-running tasks to other threads, utilizing asynchronous operations or worker threads. This prevents blocking the main thread and maintains the responsiveness of the application.

## How to reproduce:
1. Clone this repository.
2. Run `node bug.js`.
3. Open several browser windows or tabs and try to access `http://localhost:3000`. You will notice a significant delay or unresponsiveness.
4. To compare, run `node bugSolution.js` which demonstrates the solution.