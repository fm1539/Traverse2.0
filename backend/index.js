const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const { v4: uuidv4 } = require('uuid');
const URI = "mongodb+srv://farhan:73gPwvYhIHpL4H9b@traversecluster.8ayzs.mongodb.net/traverse?retryWrites=true&w=majority";
const mongoose = require('mongoose')
const connectDB = async()=>{
  await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});
  console.log('db connected!');
};
const bodyParser = require('body-parser')

connectDB();

// const MongoClient = require('mongodb').MongoClient;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {

//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object  
  
//   client.close();
// });


const port = 4001;
const socketRoutes = require("./routes/socket");
const lRroutes = require("./routes/loginRegister")
const userRoutes = require("./routes/users")

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  
    next();
  });

app.use('/socket', socketRoutes);
app.use('/loginRegister', lRroutes)
app.use('/users', userRoutes)

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
        
    }
}); 

let interval;

io.on("connection", socket => {
    console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
})

const getApiAndEmit = socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit("FromAPI", response);
  };

server.listen(8000, () => {
    console.log('port 8000');
})