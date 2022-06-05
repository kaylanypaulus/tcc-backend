/* Middleware */
const express = require("express");
const bodyparser = require("body-parser");
const handlebars = require("express-handlebars");
/* Rotas */
const cliente = require("./routes/Cliente");

/*Arquivos estáticos */
//app.use(express.static('public'));

const app = express();

app.set('port', process.env.PORT || 1111);
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser(config.secretCookie));

app.use(cliente)

app.route('/cadastrarcliente')
  .get(function(req, res) {
    res.json({ answer: 42 , message: "Hello world"});
  })
  .post(function(req, res) {
    res.send('Add a book');
  })
  .put(function(req, res) {
    res.send('Update the book');
  });
/* Porta */
app.listen(9999, function() {
    console.log("Servidor funcionando na porta 9999")
})