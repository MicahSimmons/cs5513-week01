console.log("Hello World!");

/* Include the basic http server package */
const HTTP = require('http');

/* Create a server, and attach a default handler function */
var server = HTTP.createServer( (req, rsp) => {
  /* req.url gives the path used to contact the server.  An If or Switch on the URL
   * would be useful for handling multiple API's.
   */
  console.log(req.url);
  
  /* Create a valid HTTP OK (200) response */1
  rsp.writeHead(200, {'Content-Type': 'text/plain'});
  rsp.write('Hello from HTTP Server (' + req.url + ')');
  rsp.end();  
  
});

/* Attach the server to a listening port.  REPL seems to redirect this to the default https port? */
server.listen(8000);

console.log("Server Started");