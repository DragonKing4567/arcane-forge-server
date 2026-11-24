// Matchmaking only: it passes the connection handshake between two players.
// Game data goes directly between the players' browsers, never through here.
const { PeerServer } = require('peer');
const port = process.env.PORT || 9000;
PeerServer({ port, path: '/', key: 'peerjs', proxied: true, alive_timeout: 60000 });
console.log('Matchmaker listening on port ' + port);
