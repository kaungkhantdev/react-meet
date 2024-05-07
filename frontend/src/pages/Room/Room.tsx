import MainLayout from '../../layouts/MainLayout';
import useMediaStream from '../../hooks/useMediaStream';
import usePlayer from '../../hooks/usePlayer';
import { useSocket } from '../../context/socket';
import { useEffect, useState } from "react";
import usePeer from "../../hooks/usePeer";
import { useParams } from 'react-router-dom';
import { cloneDeep } from 'lodash';
import { MediaConnection } from 'peerjs';
import ToggleBtn from '../../components/ToggleBtn';
import { CopyId, ERRMsg, Loading ,NoOneMsg } from '../../components/common';
import Player from '../../components/player';

type UserConnections = {
    [key: string]: MediaConnection;
};

const Room = () => {
    const socket = useSocket();
    const { roomId } = useParams();
    const { stream, error } = useMediaStream();
    const { peer, myId, loading, setLoading } = usePeer();
    const [ users, setUsers] = useState<UserConnections>({})
    const { 
        players, 
        setPlayers, 
        leaveRoom, 
        toggleVideo,
        toggleAudio,
        playerHighlighted,
        nonHighlightedPlayers
    } = usePlayer(myId, roomId, peer);

    /** CONNECT USER */
    useEffect(() => {
        
        if(!socket || !stream || !peer) return;

         /** HANDLE USER CONNECT */
        const handleUserConnect = (newUser: string) => {
            // console.log(`user connected in room with userId ${newUser}`);

            const call = peer?.call(newUser, stream);
            
            call?.on('stream', (incomingStream) => {
                // console.log(`incoming stream from ${newUser}`);
                    setPlayers((prev) => ({
                    ...prev,
                    [newUser]: {
                        url: incomingStream,
                        muted: true,
                        playing: true,
                    },
                }));
            } )

            setUsers((prev) => ({
                ...prev,
                [newUser]: call
            }))
            
        }

        socket.on('user-connected', handleUserConnect);

        return () => {
            socket.off('user-connected', handleUserConnect);
        }
    }, [socket, setPlayers, stream, peer])

    /** ANSWER */
    useEffect(() => {
        if (!peer || !stream) return;
        peer.on("call", (call) => {
          const { peer: callerId } = call;
          call.answer(stream);
    
          call.on("stream", (incomingStream) => {
            // console.log(`incoming stream from ${callerId}`);
            setPlayers((prev) => ({
              ...prev,
              [callerId]: {
                url: incomingStream,
                muted: true,
                playing: true,
              },
            }));
    
            setUsers((prev) => ({
              ...prev,
              [callerId]: call
            }))
          });
        });
    }, [peer, setPlayers, stream]);

    /** STREAM */
    useEffect(() => {
        setLoading(pev => !pev)

        if (!stream || !myId) return;
        // console.log(`setting my stream ${myId}`);
        setPlayers((prev) => ({
          ...prev,
          [myId]: {
            url: stream,
            muted: true,
            playing: true,
          },
        }));
        setLoading(pev => !pev)

    }, [setPlayers, myId, stream, setLoading]);


    /** HANDLE CONTROL */
    useEffect(() => {
        if(!socket) return;
        const handleUserLeave = (userId: number) => {
            // console.log(`user ${userId} is leaving the room`,  users[userId]);
            users[userId]?.close()
            const playersCopy = cloneDeep(players);
            delete playersCopy[userId];
            setPlayers(playersCopy);
        }

        const handleToggleVideo = (userId: number) => {
            // console.log(`user with id ${userId} toggled video`);
            setPlayers((prev) => {
                const copy = cloneDeep(prev);
                copy[userId].playing = !copy[userId].playing;
                return { ...copy };
            });
        };

        const handleToggleAudio = (userId: number) => {
            // console.log(`user with id ${userId} toggled audio`);
            setPlayers((prev) => {
              const copy = cloneDeep(prev);
              copy[userId].muted = !copy[userId].muted;
              return { ...copy };
            });
          };

        socket.on('user-leave', handleUserLeave);
        socket.on('user-toggle-video', handleToggleVideo)
        socket.on('user-toggle-audio', handleToggleAudio)
        

        return () => {
            socket.off('user-leave', handleUserLeave)
            socket.off('user-toggle-video', handleToggleVideo)
            socket.off('user-toggle-audio', handleToggleAudio)
        }

    }, [socket, setPlayers, players, users])

    return (
        <>
        <MainLayout>
            
        {!loading && error &&  ( <ERRMsg msg={error.message} />)}
        { loading && <Loading />}
        { !loading && !error && 

        <div className='container mx-auto py-10'>
            <div className=' fixed top-10 right-10 w-2/5 lg:w-1/5'>
                { playerHighlighted && (
                    <Player
                        url={playerHighlighted.url}
                        muted={playerHighlighted.muted}
                        playing={playerHighlighted.playing}
                        // isActive
                    />

                )}
            </div>
            <div className=' flex items-center justify-center space-x-2 space-y-2'>
            
                {   Object.keys(nonHighlightedPlayers).map((playerId) => {
                        const { url, muted, playing } = nonHighlightedPlayers[playerId];
                        return (
                            <Player
                                key={playerId}
                                url={url}
                                muted={muted}
                                playing={playing}
                                // isActive={false}
                            />
                        );
                    })
                }
            </div>
            {
              playerHighlighted && Object.keys(nonHighlightedPlayers).length == 0 && <NoOneMsg />
            }
            {
                playerHighlighted && 
                <ToggleBtn mute={playerHighlighted?.muted} 
                    playing={playerHighlighted.playing} 
                    toggleVideo={toggleVideo}
                    leaveRoom={leaveRoom}
                    toggleAudio={toggleAudio} />
            }
            <div className=' fixed top-10 left-10'>
                <CopyId id={roomId} />
            </div>
        </div>
        }
        </MainLayout>
        </>
    )
}

export default Room