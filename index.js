const express = require("express");
const path = require("path");
const cors = require("cors");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");
const { config } = require("./config/"); 
const serverRoutes = require("./routes");
const socketConnection = require("./components/services/socketServices.js");

// inicializations
const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.set("view engine", "ejs");                         
app.set("views", path.join(__dirname, "views"));         
app.use(express.static(path.join(__dirname, "./public"))); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use(cors(`${config.cors}`)); 
const PORT = config.port;

// Routes
serverRoutes(app);
socketConnection(io);

httpServer.listen(PORT, () => {
  console.log("Normalizr Running");
});
