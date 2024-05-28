const {app, BrowserWindow} = require('electron');
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 512,
    height: 350,
    icon: path.join(__dirname, 'icon.png'),
    resizable: false
  });
  win.setMenuBarVisibility(false);
  win.setTitle('Калькулятор');
  win.loadFile('src/index.html');
}

app.whenReady().then(() => createWindow());
app.on('window-all-closed', () => app.quit());