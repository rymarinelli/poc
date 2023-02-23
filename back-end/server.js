const WebSocket = require('ws');
const pty = require('node-pty');

const shell = process.env[process.platform === 'win32' ? 'COMSPEC' : 'SHELL'];

const wss = new WebSocket.Server({ port: process.env.PORT || 3000 }, () => {
  console.log(`Terminal server is running on port ${process.env.PORT || 3000}`);
});

wss.on('connection', (ws) => {
  console.log('Terminal client connected');

  const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });

  ptyProcess.on('data', (data) => {
    ws.send(data);
  });

  ws.on('message', (message) => {
    ptyProcess.write(message);
  });

  ws.on('close', () => {
    ptyProcess.kill();
    console.log('Terminal client disconnected');
  });
});