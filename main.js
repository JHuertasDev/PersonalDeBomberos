require('module-alias/register');

var MainController = require('@controllers/main-controller');


var controladorPrincipal= new MainController();

controladorPrincipal.mostrarVistaPrincipal();