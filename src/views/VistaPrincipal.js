const { app, BrowserWindow } = require('electron')

class VistaPrincipal{
    mostrarVistaPrincipal(){
        var vistaPrincipalObject = this;

        app.whenReady().then(function(){
            let win = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                nodeIntegration: true
                }
            });
        });
    }

    crearVentanaPrincipal(){

    }
}

module.exports = VistaPrincipal;