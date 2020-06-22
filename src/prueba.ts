/*import Juego from "./Juego";

var path = require('path')
var http = require('http');
var express = require('express'),
app = module.exports.app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);  //pass a http.Server instance
//var io = require('socket.io').listen(app);
var es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');
var body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended:true}));
var j = new Juego();
//var port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,'../particles')));

app.use(express.static(path.join(__dirname,'../img')));

app.use(express.static(path.join(__dirname,'../views')));

//io.configure(function () { 
//  io.set("transports", ["xhr-polling"]); 
//  io.set("polling duration", 10); 
//});

app.get('/', function(req, res){
    res.render('login');
  });

app.post('/',function(req,res){
    var entrada = req.body.textbox;
    if(j.buscarJugadorPorNombre(entrada)==null){
      j.nuevoJugador(entrada)
      console.log(j.tablapuntaje)
    }
    else{
      console.log(j.tablapuntaje)
    }
    res.render('menu',{locals:{salida: entrada}});
});

  app.post('/Invitado',function(req,res){
    res.render('menu',{locals:{salida: j.añadirInvitado()}});
    console.log(j.tablapuntaje)
});

  app.post('/tabla', function(req, res){
    var entrada = req.body.textbox;
    res.render('tabla',{locals:{salida: entrada}});
  });

  app.get('/inst', function(req, res){
    res.render('inst');
  });
  
  app.post('/salir', function(req, res){
    var entrada = req.body.textbox;
    j.quitarInvitado(entrada)
    console.log(j.tablapuntaje)
    io.emit('ranking', j.ranking())
    res.render('login');
  });

  app.post('/game', function(req, res){
    var entrada = req.body.textbox;
    res.render('game',{locals:{salida: entrada}});
  });

io.on('connection', function(socket){
  socket.on('ranking', (data) => {
    io.emit('ranking', j.ranking())
  })
  socket.on('nuevoPunto', (data) => {
    j.sumarPuntaje(data.nombre)
    console.log(j.ranking())
    io.emit('nuevoPunto', j.ranking())
  })
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode");
});
*/