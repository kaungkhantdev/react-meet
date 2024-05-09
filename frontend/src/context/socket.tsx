import { createContext, useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'

const SocketContext = createContext<Socket | undefined>(undefined);

const socketUrl = import.meta.env.VITE_SOCKET_URL;

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
}

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {

    const [socket, setSocket] = useState<Socket | undefined>();

    useEffect(() => {
        console.log('url', socketUrl)
        const connection = io(socketUrl,  {
            path: '/socket.io',
            transports: ['websocket'],
            secure: true,
        });
        console.log('socket connection', connection )

        setSocket(connection);

        return () => {
            connection.disconnect();
        }

    }, [])

    socket?.on('connect_error', async (err) => {
        console.log("Error establishing socket", err)
    })

    return (
        <SocketContext.Provider value={socket}>{ children }</SocketContext.Provider>
    )

}