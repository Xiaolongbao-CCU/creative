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

  //連線到指定房間後，加入，並廣播給其他人
  //data: roomName,userID
  socket.on('joinRoom', function (data) {
    console.log("有人要加入" + data.roomName + "房間，SocketID是:" + socket.id);
    socket.join(data.roomName);
    let data = {
      socketID: socket.id
    }
    socket.to(data.roomName).emit('newPlayerComing', data);
  });

  /** Send & Received StickyNotes **/
  // Basic Data : RoomName, NoteID ,Content

  //0. 房間名稱設定
  socket.on('roomOwenerSetTopic', function (data) {
    console.log("遊戲開始，設定主題囉:" + data.topic);
    let room = Object.keys(socket.rooms)[1];
    socket.to(room).emit('showTopic', data.topic);
  })

  //0. Add Event (from Frond-End)
  // socket.on('AddStickyNote', function (data) {
  //   //之後要有檢查機制
  //   let NoteID = '001';
  //   socket.emit('GiveYouStickyNoteID', NoteID);
  //   //存入資料庫
  // });

  //1. Send Event (from Frond-End)
  //接受某人便條紙內容->廣播給該房間其他人->存入資料庫
  /*
  data= { 
    noteList : []
  }
  */
  socket.on('sendStickyNote', function (data) {
    //之後要有檢查機制
    console.log("接受到便條紙資料，傳給其他人囉：" + data.NoteDetail);
    let room = Object.keys(socket.rooms)[1];
    let NoteDetail = {
      socketID: socket.id,
      noteList: data.noteList
    }
    socket.to(room).emit('receivedOtherStickyNote', NoteDetail);
    //存入資料庫
  });

});