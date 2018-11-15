//console.log("Hello World!")

const { app, BrowserWindow } = require('electron')

let mainWindow

app.on('ready', () => {
  console.log('Application ready!')
  
  mainWindow = new BrowserWindow({
    show: false,
    width: 1000,
    height: 800
  })

  mainWindow.webContents.on('dom-ready', () => {
    mainWindow.show()
  })

  mainWindow.loadURL(`file://${__dirname}/../renderer/index.html`)
})
        