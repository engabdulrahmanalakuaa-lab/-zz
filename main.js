function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
        // تم حذف سطر icon: path.join(__dirname, 'icon.ico')
    });
    mainWindow.loadFile('index.html');
    mainWindow.setMenu(null);
}
