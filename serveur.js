var url = require('url');
var express = require('express');
var app = express();
var path = require('path');
var http = require('http').Server(app);

app.set('views', path.join(__dirname, './views')); // on indique �  NodeJS où sont situées nos vues
app.set('view engine', 'ejs'); // on indique que l'on utilise le moteur de templates EJS

app.use('/static', express.static('public')); // on indique que le code "client" est dans le dossier "public"

// pour toutes les URLs de notre serveur on affiche la vue index.ejs
app.get('/', function (req, res) {
  res.render('carte');
});


// démarrage du serveur HTTP sur le port 3000
var server = http.listen(3000, function () {
  console.log('Example app listening on port' + server.address().port);
});
