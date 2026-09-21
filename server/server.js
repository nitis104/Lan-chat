const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-message", (message) => {
    console.log("Message:", message);

    io.emit("receive-message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});