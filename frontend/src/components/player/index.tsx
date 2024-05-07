import ReactPlayer from 'react-player';
import {  UserIcon } from '../icons';


const Player = (
    props : 
    { 
        url?: MediaStream | null, 
        muted?: boolean | undefined, 
        playing?: boolean | undefined
    }
) => {
    const { url, muted, playing } = props;

    return (
        <>
        <div>
            {url && playing ? 
                <ReactPlayer
                    url={url}
                    muted={muted}
                    playing={playing}
                    width="100%"
                    height="100%"
                />
                :
                <div className=' px-36 '>
                    <UserIcon w={120} h={120} />
                </div>
            }
        </div>
        </>
    )
}

export default Player