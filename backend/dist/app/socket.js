"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = exports.server = void 0;
const app_1 = __importDefault(require("./app"));
const socket_io_1 = require("socket.io");
const http_1 = __importDefault(require("http"));
require("dotenv/config");
const server = http_1.default.createServer(app_1.default);
exports.server = server;
const io = new socket_io_1.Server(server, {
    cors: {
        /** Replace with your allowed origin */
        origin: ['http://localhost:5173', 'http://localhost:4173'],
        methods: ['GET', 'POST']
    }
});
exports.io = io;
io.on('connection', (socket) => {
    console.log("server is connected");
    console.log("client id", socket.id);
    socket.on('join-room', (roomId, userId) => {
        console.log(`a new user ${userId} joined room ${roomId}`);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', userId);
    });
    socket.on('user-toggle-audio', (userId, roomId) => {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-toggle-audio', userId);
    });
    socket.on('user-toggle-video', (userId, roomId) => {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-toggle-video', userId);
    });
    socket.on('user-leave', (userId, roomId) => {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-leave', userId);
    });
});
//# sourceMappingURL=socket.js.map