/*var time = 0;

var timer = setInterval(function(){

  time += 2;

console.log(time+ "  has passed");
if(time>5){
  clearInterval(timer);
}

}, 3000);
first prog
------------------------------------------------------------------------
use of require
----------------------------------------------------------*/

/* var count = require('./count');

console.log(count.counter(['dsdd', 'dsd', 'dsd']));
console.log(count.adder(3,2));
console.log(count.adder(count.pi, 4));

----------------------------------------------------------
use of event and event emitter
------------------------------------------------------*/

/*

simple example

var events = require('events');
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(mssg){
  console.log(mssg);
});

myEmitter.emit('someEvent', "the event was emitted");
*/

//something more complicated

/*
var events = require('events');
var util = require('util');

var person = function(name){
  this.name = name;
};

util.inherits(person, events.EventEmitter);

var amnah = new person('amnah');
var khatun = new person('khatun');
var sana = new person('sana');

var people = [amnah, khatun, sana];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(person.name+ ' said '+ mssg);
  });

});

amnah.emit('speak', 'hey there');
------------------------------------------------
use of fs read and write file
-------------------------------------------------- */

//var fs = require('fs');
// fs.readFile('readMe.txt', 'utf8', function(err, data){
// fs.writeFile('writeMe.txt', data)
//fs.unlink('writeMe.txt'); **for deleting a readFile
/*-----------------------------------------------------
creating a server
----------------------------------------

var http = require('http');

var server = http.createServer(function(req, res){
console.log('the request was made' + req.url); //read the url you have typed

  res.writeHead(200, {'Content-Type' : 'text/plain'});
  res.end('hello world');
});

server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000'); */
/*-----------------------------------------------------
readable and writable streams
-----------------------------------------------------------
var http = require('http');
var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
myReadStream.on('data', function (chunk) {
  console.log('new chunk received');
  //console.log(chunk);
  myWriteStream.write(chunk);
});

/*-----------------------------------------------------
use of pipes, pipe can only be used for readable streams and sending html file to server
-----------------------------------------------------------

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('the request was made' + req.url); //read the url you have typed
  res.writeHead(200, {'Content-Type' : 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
  myReadStream.pipe(res);//by this data will received quicker bit by bit

});

server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000');

-----------------------------------------------------
sending json file to server
-----------------------------------------------------------

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('the request was made' + req.url); //read the url you have typed
  res.writeHead(200, {'Content-Type' : 'application.json'});

  var myObj = {
    name: 'amnah',
    job: 'coder',
    age: '22'
  };

  res.end(JSON.stringify(myObj));// using .end we send back data to the client


});

server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000');

-----------------------------------------------------
ROUTING
-----------------------------------------------------------
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('the request was made' + req.url); //read the url you have typed
if(req.url === '/home' || req.url === '/'){
res.writeHead(200, {'Content-Type' : 'text/html'});
fs.createReadStream(__dirname + '/index.html').pipe(res);

}
else if (req.url === '/contact' || req.url === '/'){
  res.writeHead(200, {'Content-Type' : 'text/html'});
  fs.createReadStream(__dirname + '/contact.html').pipe(res);

}

else if(req.url === '/app/ninjas'){
var ninjas = [{name: 'amnah', job: 'coding'}, {name: 'khatun', job: 'marketing'}];

res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(ninjas));
}
else{

  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.createReadStream(__dirname + '/404.html').pipe(res);

}
});

server.listen(3000, '127.0.0.1');
console.log('you are listning to port 3000');
---------------------------------------------
express example
----------------------------------------------*/

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){

  res.send('home page');
});

app.get('/contact', function(req, res){

  res.send('contact page');
});

app.get('/profile/:name', function(req, res) {

  var data = {age: 23, job: 'coder', hobbies: ['sds', 'dsds', 'sdsd']};
//params is used to get the dynamic property
  res.render('profile', { person: req.params.name, data: data}); //render is used for templates we dont have to write path name it will automatically take it



});

app.listen(3000);// listning to port 3000
