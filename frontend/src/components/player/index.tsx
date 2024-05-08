import ReactPlayer from 'react-player';
import {  UserIcon } from '../icons';


const Player = (
    props : 
    { 
        url?: MediaStream | null, 
        muted?: boolean | undefined, 
        playing?: boolean | undefined,
        isActive: boolean,
    }
) => {
    const { url, muted, playing, isActive } = props;

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
                <div className={`flex items-center justify-center dark:bg-slate-700 ${isActive ? ' p-10 rounded-lg  ' : 'lg:p-32 rounded-lg'}`}>
                    <UserIcon w={ isActive ? 40:60} h={ isActive ? 40:60} />
                </div>
            }
        </div>
        </>
    )
}

export default Player