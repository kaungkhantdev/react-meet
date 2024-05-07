import { useState } from 'react'
import { cloneDeep } from 'lodash'
import { useSocket } from '../context/socket'
import Peer from 'peerjs';
import { useNavigate } from 'react-router-dom';

interface Player {
    url: MediaStream,
    muted: boolean,
    playing: boolean,
}

const usePlayer = (myId: string | null , roomId: string | undefined, peer: Peer | null ) => {

    const socket = useSocket();
    const navigate = useNavigate();
    const [players, setPlayers] = useState<Record<string, Player>>({})
    const playersCopy = cloneDeep(players)

    const playerHighlighted = myId && playersCopy[myId]
    myId && delete playersCopy[myId]

    const nonHighlightedPlayers = playersCopy

    const leaveRoom = () => {
        socket?.emit('user-leave', myId, roomId)
        console.log("leaving room", roomId)
        peer?.disconnect();
        navigate("/")
    }

    const toggleVideo = () => {
        console.log("I toggled my video")
        setPlayers((prev) => {
            const copy = cloneDeep(prev)
            if(myId) copy[myId].playing = !copy[myId].playing
            return {...copy}
        })
        socket?.emit('user-toggle-video', myId, roomId)
    }

    const toggleAudio = () => {
        console.log("I toggled my audio")
        setPlayers((prev) => {
            const copy = cloneDeep(prev)
            if(myId) copy[myId].muted = !copy[myId].muted
            return {...copy}
        })
        socket?.emit('user-toggle-audio', myId, roomId)
    }

    return { 
        leaveRoom,
        toggleVideo,
        toggleAudio,
        players, 
        setPlayers, 
        playersCopy, 
        playerHighlighted,
        nonHighlightedPlayers
    }
   
}

export default usePlayer