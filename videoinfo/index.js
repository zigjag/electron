const electron = require('electron');
const { app, BrowserWindow, ipcMain } = electron;
const path = require('path');
const ffmpeg = require('fluent-ffmpeg');


app.on('ready', () => {
	const mainWindow = new BrowserWindow({});
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('video:submit', (event, path) => {
	ffmpeg.ffprobe(path, (err, metadata) => {
		console.log('Video duration is:', metadata.format.duration)
	})
});