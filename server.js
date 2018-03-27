const express = require('express');
const app = express();
const server = app.listen(8080);
var io = require('socket.io').listen(server);

const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'build')));

app.use(
  bodyParser.urlencoded({
    type: "image/*",
    extended: false,
    limit: "50mb"
  })
);

app.use(
  bodyParser.json({
    type: "application/*",
    limit: "50mb"
  })
);

app.use(
  bodyParser.text({
    type: "text/plain"
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

/***** Socket ******/

io.on('connection', function (socket) {
  console.log("連線建立，SOCKET ID: " + socket.id);

  socket.emit

  socket.on("IAmAt", function (location, room) {
    console.log('安安');
    socket.emit("joinRoom");
  });

  //連線到指定房間後，加入
  socket.on('joinRoom', function (data) {

    socket.join(data.roomName);
  });


  /** Send & Received StickyNotes **/
  // Basic Data : RoomID, NoteID ,Content

  //1. Send Event (from Frond-End)
  //接受某人便條紙內容->廣播給該房間其他人->存入資料庫
  socket.on('SendStickyNote'), function (date) {
    //之後要有檢查機制
    socket.to(data.roomID).emit('ReceivedStickyNote', date);
    //存入資料庫
  }

});