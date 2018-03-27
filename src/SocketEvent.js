import socketIO from "socket.io-client";
let io = socketIO();
let socket = io.connect('http://' + window.location.hostname);

export default socket;