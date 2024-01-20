## How does Node.js work?

Node.js utilizes the V8 JavaScript engine, employing a single-threaded event loop for asynchronous, non-blocking I/O. Its event-driven architecture and callback functions enable efficient concurrency. Asynchronous operations, such as file reads or network requests, don't block the main thread, allowing Node.js to handle multiple tasks concurrently. The module system and npm facilitate code organization and package management, making it a popular choice for server-side JavaScript development.

Here's a simple example of a Node.js server:

         const http = require('http');

         const server = http.createServer((req, res) => {
         res.writeHead(200, {'Content-Type': 'text/plain'});
         res.end('Hello, World!\n');
         });

         server.listen(3000, '127.0.0.1', () => {
         console.log('Server listening on port 3000');
         });

in this example, a basic HTTP server is created using the http module, and it listens on port 3000. When a request is received, it responds with "Hello, World!".

## Why is Node.js Single-threaded?

Node.js is designed to be single-threaded to achieve a high level of concurrency and efficiency in handling I/O-bound tasks. The decision to use a single-threaded event loop model is rooted in the following reasons:

1. **Asynchronous, Non-blocking I/O:**

   - Node.js is optimized for asynchronous, non-blocking I/O operations. In a single-threaded event loop, when an asynchronous operation, such as reading from a file or making a network request, is initiated, Node.js can continue processing other tasks instead of waiting for the I/O operation to complete.

2. **Scalability:**

   - The single-threaded event loop model allows Node.js to handle a large number of concurrent connections efficiently. Instead of using a separate thread for each connection, which can be resource-intensive, Node.js uses a single thread to manage multiple connections concurrently.

3. **Simplicity and Predictability:**

   - The single-threaded model simplifies the programming model for developers. They don't have to deal with complex multithreading issues, such as locks and race conditions, which can be error-prone and challenging to debug.

4. **Event-driven Architecture:**

   - Node.js embraces an event-driven architecture, where asynchronous events trigger the execution of callback functions. This model aligns well with the nature of I/O-bound tasks, where waiting for external resources (like databases or file systems) is a common scenario.

5. **Memory Efficiency:**
   - Operating multiple threads can consume more memory due to the overhead associated with thread creation and maintenance. With a single-threaded model, Node.js can operate with lower memory overhead, making it more efficient for certain types of applications.

It's important to note that while the main event loop is single-threaded, Node.js can still take advantage of multiple cores by using the `cluster` module or by deploying multiple Node.js instances and load balancing between them. This allows Node.js applications to scale horizontally across multiple processes while maintaining the benefits of the single-threaded event loop for each individual process.

## If Node.js is single-threaded, then how does it handle concurrency?

The Multi-Threaded Request/Response Stateless Model is not followed by the Node JS Platform, and it adheres to the Single-Threaded Event Loop Model.
The Node JS Processing paradigm is heavily influenced by the JavaScript Event-based model and the JavaScript callback system.
As a result, Node.js can easily manage more concurrent client requests. The event loop is the processing model's beating heart in Node.js.

## Explain callback in Node.js.

A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.
Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.

## What are the advantages of using promises instead of callbacks?

- The control flow of asynchronous logic is more specified and structured.
- The coupling is low.
- We've built-in error handling.
- Improved readability.

## How would you define the term I/O?

The term I/O is used to describe any program, operation, or device that transfers data to or from a medium and to or from another medium
Every transfer is an output from one medium and an input into another. The medium can be a physical device, network, or files within a system

## How is Node.js most frequently used?

Node.js is widely used in the following applications:

- Real-time chats
- Internet of Things
- Complex SPAs (Single-Page Applications)
- Real-time collaboration tools
- Streaming applications
- Microservices architecture

## What is NPM?

NPM (Node Package Manager) is a command-line tool for managing Node.js packages, facilitating dependency management and package installation. It is the default package manager for Node.js and provides a vast registry of reusable JavaScript code modules for developers. NPM is integral to the Node.js ecosystem for building, sharing, and maintaining projects.

## What is the difference between setImmediate() and setTimeout()?

The setTimeout() method schedules code execution after a specified delay, measured in milliseconds. On the other hand, the setImmediate()
method schedules code execution to occur immediately after the current event loop iteration completes. T
his means that setImmediate() has a higher priority than setTimeout().

## What is NestJS, and why is it popular for building Node.js applications?

NestJS is a TypeScript-based Node.js framework that embraces an Angular-like modular architecture with decorators and dependency injection. It provides a scalable and maintainable approach for building server-side applications, offering a familiar environment for Angular developers. NestJS supports Express.js, offers middleware and interceptors, and has a robust ecosystem with active community support. Its use of TypeScript enhances code quality, early error detection, and collaboration in larger teams, making it popular for building scalable and well-structured Node.js applications.
