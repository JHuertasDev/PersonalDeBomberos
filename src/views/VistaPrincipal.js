const { app, BrowserWindow } = require('electron')

class VistaPrincipal{
    mostrarVistaPrincipal(){
        var vistaPrincipalObject = this;
        console.log("1");

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
                // Create the browser window.
        

        // and load the index.html of the app.
        //win.loadFile('index.html');
        
    }
}

module.exports = VistaPrincipal;