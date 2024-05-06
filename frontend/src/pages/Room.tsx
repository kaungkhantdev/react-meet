import { useParams } from "react-router-dom";
import MainLayout from '../layouts/MainLayout';
import Player from "../components/player";
import useMediaStream from "../hooks/useMediaStream";
import usePlayer from '../hooks/usePlayer';
import { useSocket } from "../context/socket";
import { useEffect } from "react";

const Room = () => {
    const { id } = useParams();
    const socket = useSocket();
    const { stream } = useMediaStream();
    const { players, setPlayers } = usePlayer();

    /** HANDLE USER CONNECT */
    const handleUserConnect = (newUser: string) => {
        console.log(`user connected in room with userId ${newUser}`);

    }

    /** STREAM */
    useEffect(() => {
        if(!socket) return;

        socket.on('user-connected', handleUserConnect);

        return () => {
            socket.off('user-connected', handleUserConnect);
        }

    }, [socket, setPlayers])

    return (
        <>
        <MainLayout>
            
            <Player url={stream} playing={true} />

        </MainLayout>
        </>
    )
}

export default Room