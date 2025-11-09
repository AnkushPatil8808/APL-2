const http = require('http');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end("<h3>Node.js Web Module Example</h3>");
}).listen(4000);
console.log("Server started at http://localhost:4000");
