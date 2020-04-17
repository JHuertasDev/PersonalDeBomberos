const { app, BrowserWindow } = require('electron')
const path = require('path');

const url = require('url');

class VistaPrincipal{

    getRutaSinglePageApplicationFile(file){
        return path.resolve('./src/views/SinglePageApplication/'+file);
    }
    mostrarVistaPrincipal(){
        var VistaPrincipalSelf = this;

        app.whenReady().then(function(){
            let win = new BrowserWindow({
                width: 800,
                height: 600,
                webPreferences: {
                    nodeIntegration: true
                },
            });

            var urlIndex = VistaPrincipalSelf.obtenerURLIndexHTML();
            win.loadURL(urlIndex);

            win.setMenuBarVisibility(false); //Ocultamos con las barras de navegacion

            win.toggleDevTools();
        });
        
    }
    obtenerURLIndexHTML(){
        return this.obtenerURLDeLaVista(this.getRutaSinglePageApplicationFile('index.html'));
    }
    obtenerURLDeLaVista(ruta){
        let urlArchivoHTML = url.format({
            pathname: ruta,
            protocol: 'file',
            slashes: true
        });
        return urlArchivoHTML;
    }

}

module.exports = VistaPrincipal;