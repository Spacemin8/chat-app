const io = require('socket.io')(3001, {
  cors: {
    origin: '*' // Be sure to restrict this in production
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('message', (message) => {
    io.emit('message', message); // Broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});
