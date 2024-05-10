import ReactPlayer from 'react-player';
import {  UserIcon } from '../icons';
import styles from './index.module.css';

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
        <div className='flex justify-end'>
            {url && playing ? 
                <ReactPlayer
                    url={url}
                    muted={muted}
                    playing={playing}
                    width="100%"
                    height="100%"
                    className={`lg:m-0 ${isActive ? styles.marginLeft20 : ''}`}
                    style={{ maxHeight: "500px"}}
                />
                :
                <div className={` inline-block dark:bg-slate-700 ${isActive ? ' p-10 rounded-lg  ' : 'flex items-center justify-center p-10 lg:p-32 rounded-lg'}`}>
                    <UserIcon w={ isActive ? 40:60} h={ isActive ? 40:60} />
                </div>
            }
        </div>
        </>
    )
}

export default Player