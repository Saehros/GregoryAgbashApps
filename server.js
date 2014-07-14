var express = require('express');

var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.use(bodyParser.json())

app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use(function (req, res, next) {
  console.log(req.body)
  next()
})

app.get('/', function(req, res){

  var html = '<form action="/" method="post">' +
               '<body style="background-color:HoneyDew;text-align:center;font-family:Comic Sans MS;color:SkyBlue;font-size:20px">Enter your name:' +'<br>' +
               '<input type="text" name="userName" placeholder=" " />' +
               '<br>' +
               '<button type="submit">Go!</button>' +'</body>'+
            '</form>';
               
  res.send(html);
});

app.post('/', function(req, res){
  var userName = req.body.userName;
  var html =  '<body style="background-color:Ivory;text-align:center;font-family:Comic Sans MS;color:SkyBlue;font-size:20px"> Hello, ' + userName +'<br>' +
  'This app was created by Gregory Agbash.' + '<br>' +
  'Thank you for your attention!' + '<br>'  +
  '<small>Write me an email at <a href="mailto:gregoryagbash@gmail.com?Subject=Hello%20there" target="_top">GregoryAgbash@gmail.com</a> </small>' + '<br>' +
  '<small>Also, you can visit my WebGL project at  <a href="http://www.totalkit.tk/">TotalKit.tk</a>  </small>' + '<br>' +
  '<a href="/">Return to the main page</a>';+'</body>'
  res.send(html);
});

app.listen(5000);
