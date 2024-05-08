import app from './app';
import { Server } from 'socket.io';
import http from 'http';
import 'dotenv/config';

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    /** Replace with your allowed origin */ 
    origin:[ 'http://localhost:5173', 'http://localhost:4173'], 
    methods: ['GET', 'POST']
  }
})


io.on('connection', (socket) => {
    console.log("server is connected")
    console.log("client id", socket.id)

    socket.on('join-room', (roomId, userId) => {
        console.log(`a new user ${userId} joined room ${roomId}`)
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-connected', userId)
    })

    socket.on('user-toggle-audio', (userId, roomId) => {
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-toggle-audio', userId)
    })

    socket.on('user-toggle-video', (userId, roomId) => {
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-toggle-video', userId)
    })

    socket.on('user-leave', (userId, roomId) => {
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-leave', userId)
    })
})

export { server, io };