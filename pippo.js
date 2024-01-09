let http= require("http");
http.createServer(function (request, response){
    response.writeHead(200, {'Content-type': 'tex/plain' });
    response.end( 'Hello World!\n');
}).listen(8081);

console.log('Server running at port 8081');