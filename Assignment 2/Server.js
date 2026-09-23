const http = require("http");
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

eventEmitter.on("login", () => {
    console.log("Student logged successfully");
});

eventEmitter.on("assignment", () => {
    console.log("Assignment submitted");
});

eventEmitter.on("logout", () => {
    console.log("Student logged out");
});

eventEmitter.on("exit", () => {
    console.log("Exiting application");
});

// Login
eventEmitter.emit("login");

// process.nextTick()
process.nextTick(() => {
    eventEmitter.emit("assignment");
});

// setImmediate()
setImmediate(() => {
    eventEmitter.emit("logout");
});

// setTimeout()
setTimeout(() => {
    eventEmitter.emit("exit");
}, 2000);


// Simple server
const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end(`
        <html>
        <head>
            <title>Student Application</title>
        </head>

        <body>
            <h1>Student Application</h1>
            <p>Check the terminal for the event execution.</p>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});