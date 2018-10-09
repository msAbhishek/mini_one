const { spawn } = require('child_process');
let myBatFilePath = 'D:\\mini_one\\myTestBatfile.bat';
const bat = spawn('cmd.exe',['/c',myBatFilePath]);
bat.stdout.on('data', (data) => {
    console.log(unescape(data));
});