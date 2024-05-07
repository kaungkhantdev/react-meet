import Peer from "peerjs"
import { useEffect, useState } from "react"
import { useSocket } from "../context/socket"
import { useParams } from "react-router-dom"

const usePeer = () => {
    const socket = useSocket()
    const [loading, setLoading] = useState<boolean>(false)
    const { roomId } = useParams();
    const [peer, setPeer] = useState<Peer | null>(null)
    const [myId, setMyId] = useState<string | null >(null)

    useEffect(() => {
        if(!roomId || !socket ) return;

        let myPeer: Peer;
        (
            async function initPeer() {
                myPeer = new Peer();
                setPeer(myPeer)

                myPeer.on('open', (id) => {
                    console.log('My peer ID is: ' + id);
                    setMyId(id);

                    socket?.emit('join-room', roomId, id);
                });
            }
        )()

    }, [roomId, socket])

    return { peer, myId, loading, setLoading }
}

export default usePeer