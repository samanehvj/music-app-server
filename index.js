/**
 * Required External Modules
 */
const express = require("express");
var cors = require('cors');
const path = require("path");
var mysql = require('mysql')
const info = require('./info.json');
const { query } = require("express");
let songsQueue = [];

/**
 * App Variables
 */

const app = express();
app.use(cors());
const port = info.server.port;

/**
 *  App Configuration
 */

var con = mysql.createPool({
  host: info.db.host,
  user: info.db.user,
  password: info.db.password,
  database: info.db.database
  // port: info.db.port
})
// con.connect();

/**
 * Routes Definitions
 */

app.use(express.static('public')); 

app.get("/", (req, res) => {
  const queryString = `SELECT * FROM songs`;
  con.query(queryString, (err, rows, fiels) => res.status(200).send({songs: rows}));
});

// app.get("/music/:id", (req, res) => {
//   const queryString = `SELECT * FROM songs WHERE id=${req.params.id}`;
//   con.query(queryString, (err, rows, fields) => res.status(200).json(rows[0]));
// });

/**
 * Server Activation
 */

const http = require('http').Server(app);
const io = require('socket.io')(http,{
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

io.on("connection", function(socket){
  socket.on('songLiked', async (id) => {
    
   await songsQueue.map(song=>{
      if(song.songId == id){
        song.likeCount = song.likeCount+1;
      }
      return song;
    });
    io.emit("likeCount", songsQueue);

  });
});



loadSongIdsInSongsQueue = ()=>{
  //write this function quickly
  const queryString = `SELECT id FROM songs`; 
  con.query(queryString, (err, rows, fiels) => {
    rows.forEach(row=>{
      songsQueue.push({songId:row.id, likeCount:0});
    }); 

  });
 

  // songsQueue
}
 const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  loadSongIdsInSongsQueue();

    console.log(`Listening to requests on http://localhost:${PORT}`);
  });
