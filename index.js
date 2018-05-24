// Checking the version of the Node.js
// content of index.js
const http = require('http')   // import http module
var net = require('net');   // networking interface modules
var Promise = require('bluebird');
const os = require('os');

const port = 4333;            // port of our server
const NodVersion = process.version;
const dateTime = new Date();
//console.log(os.networkInterfaces());
var tmfileDir = os.tmpdir();
var  osRelease = os.release();
var productPlatform = os.platform();
var userInfo = os.homedir();
// handle the case where we don't detect the browser
// request, response handler
  const paramshandler = (request, response) => {
    //  response.setHeader('Content-Type', 'application/json');
    //response.setHeader('X-Powered-By', 'bacon');
      console.log(request.url);
      // sending information on browser here
      response.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8',
        'X-Powered-By': 'bacon'
      });
      response.write('<html>');
      response.write('<title>Backend Utilities | backendUtils.js</title>');
      response.write('<body>');
      response.write('<h1 style="left : 100px">Backend Utilities Programs </h1>');
      response.write("<h3>Node Version Running : " + NodVersion + " On OS : "+ productPlatform +"</h3>");
      response.write("<h4>Server Time:           "   + dateTime +  "</h4>");
      response.write("<h4>Temp Dir:           "   + tmfileDir +  "</h4>");
      response.write("<h6>Operating System release:           "   + osRelease +  "</h6>");
    //  response.write("information  :"               +os.cpus().tojson());
      response.write('</body>');
      response.write('</html>');
      response.end('<html><body><h5>Program Developed by <span>Wembo Mulumba</span></h5></body></html>');
  }
// creatting the server
const server = http.createServer(paramshandler);
  server.listen(port, (err) => {
      if (err) {
        return console.log('something bad happened', err)
      } else {
        console.log(`Utilities Server is running on on port :  ${port}` +"\n");
        console.log("This Server is running on Version : " + NodVersion +"\n");
        console.log("Server Time:           "   + dateTime +"\n");
        console.log("Tem File are Located at : "+tmfileDir);
        console.log("Operating System release " + osRelease);
        console.log("The Server is Running on OS Platform : " +productPlatform);
        console.log("The User Info: "+ userInfo);
      //  console.log(os.constants.signals);
      }
        // Checking if the application(app.js or server.js) hostname(ip) and port is available and running
        var httpCheck = require('http'),
          options = {method: 'HEAD', host: '127.0.0.1', port: 3000, path: '/'},
          req = httpCheck.request(options, function(r) {
              console.log((r.headers));

          });
         req.end();
  });
