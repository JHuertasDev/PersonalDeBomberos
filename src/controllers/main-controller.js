const  VistaPrincipal  = require('../views/VistaPrincipal');

class MainController{
    constructor(){

    }

    mostrarVistaPrincipal(){
        this.vistaPrincipal = new VistaPrincipal();
        this.vistaPrincipal.mostrarVistaPrincipal();
    }
}

module.exports = MainController;